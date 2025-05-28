window.addEventListener('DOMContentLoaded', function() {
            document.body.classList.add('visible');
        });
window.addEventListener('beforeunload', function() {
            document.body.style.opacity = 0;
        });