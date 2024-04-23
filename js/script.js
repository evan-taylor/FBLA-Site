
window.addEventListener('scroll', () => {
    document.querySelectorAll('.animate-slide').forEach(el => {
        const position = el.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
            el.classList.add('in-view');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var resumeInput = document.getElementById('resume');
    resumeInput.addEventListener('change', function () {
        var fileSize = this.files[0].size / 1024 / 1024; // Size in MB
        if (fileSize > 5) {
            alert('The file must be less than 5MB.');
            this.value = ''; // Clears the file input
        }
    });
});
