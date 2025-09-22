"use client";

// React
import React, { useEffect, useRef } from 'react';

// Styles
import "@/styles/ui/reusables/stats.scss";

export default function Stats({ countFrom = 0, countTo = 100, duration = 1500, title, text, prefix, suffix }) {
    const wrapperRef = useRef(null);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
        if (!wrapperRef.current) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const counterEl = wrapperRef.current.querySelector('.counter');
        if (!counterEl) return;

        const animate = () => {
            if (hasAnimatedRef.current) return;
            hasAnimatedRef.current = true;

            if (prefersReduced) {
                counterEl.textContent = String(countTo);
                return;
            }

            const startTime = performance.now();
            const startVal = Number(countFrom);
            const endVal = Number(countTo);
            const totalChange = endVal - startVal;
            const dur = Number(duration) || 1000;

            // Determine decimal places from countTo
            const decimalPlaces = (String(countTo).split('.')[1] || '').length;

            // EaseOutCubic
            const ease = (t) => 1 - Math.pow(1 - t, 3);

            const step = (now) => {
                const elapsed = now - startTime;
                const t = Math.min(1, elapsed / dur);
                const eased = ease(t);
                let current = startVal + totalChange * eased;
                if (decimalPlaces > 0) {
                    current = Number(current).toFixed(decimalPlaces);
                } else {
                    current = Math.round(current);
                }
                counterEl.textContent = String(current);
                if (t < 1) {
                    requestAnimationFrame(step);
                } else {
                    counterEl.textContent = String(endVal);
                }
            };

            requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        observer.observe(wrapperRef.current);

        return () => observer.disconnect();
    }, [countFrom, countTo, duration]);

    return (

        <div className="statItem" ref={wrapperRef} data-from={countFrom} data-to={countTo} data-duration={duration}>

            <div className="statCounter" aria-live="polite" aria-atomic="true">

                {prefix && <span className="statPrefix" aria-hidden="true">{prefix}</span>}

                <span className="counter">{countFrom}</span>

                {suffix && <span className="statSuffix" aria-hidden="true">{suffix}</span>}

            </div>

            {title && (<h3 className="statTitle" dangerouslySetInnerHTML={{ __html: title }}></h3>)}

            {text && <p className="statText" dangerouslySetInnerHTML={{ __html: text }} />}

        </div>

    );

}