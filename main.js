const hamburger = document.getElementById("js-hamburger");
const nav = document.getElementById("js-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

const texts =document.querySelectorAll('.text')
texts.forEach(text =>text.classList.add('is-active'))
setInterval(() =>{
  texts.forEach(text =>{
    text.classList.toggle('is-active')
  });
},3000);
