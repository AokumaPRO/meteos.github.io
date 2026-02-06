const hamburger=document.getElementById('js-hamburger');
const nav =document.getElementById('js-nav')

hamburger.addEventListener('click', () =>{
  hamburger.classList.toggle('active')
  nav.classList.toggle('active')
});
