"use client";

import { useEffect, useRef } from 'react';

// Globe component auto-sizes itself to its parent container using ResizeObserver.
// Provide optional props to tweak behaviour.
export default function Globe({
    fit = 'parent', // 'parent' | 'viewport'
    maxPixelRatio = 2,
    className = '',
    style = {}
}) {
    const containerRef = useRef(null);
    const globeRef = useRef(null);

    useEffect(() => {
        let cleanup;
        let observer;
        let initialized = false;

        const init = async () => {
            if (!containerRef.current || globeRef.current || initialized) return;
            initialized = true;

            // Dynamically import to avoid SSR issues
            const Globe = (await import('globe.gl')).default;
            const FLIGHT_TIME = 8500;

            // Generate random arcs data with color property
            const N = 20;
            const arcsData = [...Array(N).keys()].map(() => ({
                startLat: (Math.random() - 0.5) * 180,
                startLng: (Math.random() - 0.5) * 360,
                endLat: (Math.random() - 0.5) * 180,
                endLng: (Math.random() - 0.5) * 360,
                color: [
                    "#D49F32",
                    "#ffc107",
                ]
            }));

            // Initialize globe using the factory function pattern
            const globe = Globe()
                .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
                .arcsData(arcsData)
                .arcColor('color')
                .arcDashLength(() => Math.random())
                .arcDashGap(() => Math.random())
                .arcDashAnimateTime(FLIGHT_TIME)
                .arcsTransitionDuration(0)


            globe(containerRef.current);
            globe.backgroundColor('rgba(0,0,0,0)');

            // Enable auto-rotation via OrbitControls
            const controls = globe.controls();
            if (controls) {
                controls.autoRotate = true;
                controls.autoRotateSpeed = 0.6;
                controls.enableZoom = false;
                controls.update && controls.update();
            }

            globeRef.current = globe;

            // Sizing logic using ResizeObserver
            const resize = () => {
                if (!globeRef.current || !containerRef.current) return;
                if (fit === 'viewport') {
                    globe.width(window.innerWidth);
                    globe.height(window.innerHeight);
                } else { // parent
                    const { width, height } = containerRef.current.getBoundingClientRect();
                    globe.width(Math.max(1, width));
                    globe.height(Math.max(1, height));
                }
            };

            resize();
            const ro = new ResizeObserver(resize);
            ro.observe(containerRef.current);
            window.addEventListener('resize', resize);

            cleanup = () => {
                try {
                    const controls = globeRef.current?.controls?.();
                    if (controls) controls.autoRotate = false;
                } catch { }
                window.removeEventListener('resize', resize);
                try { ro.disconnect(); } catch { }
                if (containerRef.current) containerRef.current.innerHTML = '';
                globeRef.current = null;
            };
        };

        // Set up IntersectionObserver to only initialize when in view
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    init();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.1 });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (observer) observer.disconnect();
            if (cleanup) cleanup();
        };
    }, []);

    const baseStyle = fit === 'viewport' ? {
        width: '100vw',
        height: '100vh',
        position: 'relative'
    } : {
        width: '100%',
        height: '100%',
        position: 'relative'
    };

    return (
        <div ref={containerRef} className={className} style={{ ...baseStyle, ...style }} />
    );
}