const menuIcon = document.querySelector('.menu-icon');

const offscreenMenu = document.querySelector('.off-screen-menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  offscreenMenu.classList.toggle('active');
})


document.querySelector(".contact form").addEventListener("submit", function(event) {
  event.preventDefault();   
  this.reset(); 
});
