document.addEventListener('scroll', () => {
    document.querySelectorAll('.animate-slide').forEach(el => {
        const position = el.getBoundingClientRect();

        // Check if the element is within the viewport and has not been animated yet
        if (position.top < window.innerHeight && position.bottom >= 0 && !el.classList.contains('in-view')) {
            // Add a slight delay to ensure the element is animated when it's about to come into view
            setTimeout(() => {
                el.classList.add('in-view');
            }, 200);
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
