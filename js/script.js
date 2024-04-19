
window.addEventListener('scroll', () => {
    document.querySelectorAll('.animate-slide').forEach(el => {
        const position = el.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
            el.classList.add('in-view');
        }
    });
});
