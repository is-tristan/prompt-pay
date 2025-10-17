export default function getScreenSize() {
    if (typeof window === 'undefined') {
        return { width: 1024, height: 768 }; // Default fallback for SSR
    }
    const width = window.innerWidth;
    const height = window.innerHeight;
    return { width, height };
}