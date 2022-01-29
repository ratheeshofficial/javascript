'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

console.log(btnShowModal) // It is in array

let i;
for(i = 0; i < btnShowModal.length; i++){
    // console.log(`${btnShowModal[i].textContent}`)
    btnShowModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

btnCloseModal.addEventListener('click',closeModal)

overlay.addEventListener('click',closeModal)

document.addEventListener('keydown',function(e){
    // console.log(e)
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        console.log(`Escape Key pressed`)
        closeModal()
    }
})