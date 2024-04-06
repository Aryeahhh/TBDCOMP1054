//Animation for the cards coming from the side
const cards = document.querySelectorAll('.card');
//Using the Intersection Observer API to animate the cards
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
cards.forEach((el)=> observer.observe(el));