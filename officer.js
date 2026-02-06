document.addEventListener('DOMContentLoaded',()=>{
  const cards = document.querySelectorAll('.officer-card');

  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
      if (entry.isIntersecting){
        entry.target.classList.add('is-show');
      }
    });
  }, {
    threshold:0.2
  });
  cards.forEach(card =>observer.observe(card));
});
