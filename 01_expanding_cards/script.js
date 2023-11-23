// getting all classes called '.card'
const cards = document.querySelectorAll('.card');

// loop through them and listen if an event occured in any of them
// then add a class 'is-active'

cards.forEach(card => {
    card.addEventListener(('click'), ()=> {
        // but before making it active remove the class that was active before.
        // call the function -> removeIfActive
        removeIfActive();
        card.classList.add('is-active');
    });
});


function removeIfActive() {
    cards.forEach(card => {
        card.classList.remove('is-active');
    });
}