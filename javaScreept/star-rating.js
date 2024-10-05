const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', function() {
        stars.forEach(s => s.classList.remove('selected'));

        this.classList.add('selected');
        let previousSibling = this.previousElementSibling;
        while (previousSibling) {
            previousSibling.classList.add('selected');
            previousSibling = previousSibling.previousElementSibling;
        }
        const rating = this.getAttribute('data-value');
        console.log(`You rated: ${rating} stars`);
    });
});
