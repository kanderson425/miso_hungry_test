// MOBILE LOGIC

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links')

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');

});


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})



// 