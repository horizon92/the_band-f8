

const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

for (var buyBtn of buyBtns) {
    buyBtn.addEventListener('click', function showModalTickets(){
        modal.classList.add('open')
    });
}


modalClose.addEventListener('click', function hideModalTickets(){
    modal.classList.remove('open')
});

modal.addEventListener('click', function hideModalTickets(){
    modal.classList.remove('open')
});
modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
})