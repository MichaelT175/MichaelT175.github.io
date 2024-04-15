document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand-button');

    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const expandedContent = this.nextElementSibling;
            
            if (expandedContent.style.display === 'none' || expandedContent.style.display === '') {
                expandedContent.style.display = 'block';
                this.textContent = 'Hide';
            } else {
                expandedContent.style.display = 'none';
                this.textContent = 'See Image';
            }
        });
    });
});



