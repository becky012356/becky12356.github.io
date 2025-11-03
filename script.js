// Smooth tabs highlight + back-to-top
const tabs = document.querySelectorAll('.tab');
const toTop = document.querySelector('.to-top');
const sections = [...tabs].map(t => document.querySelector(t.getAttribute('href')));

function onScroll(){
  const y = window.scrollY + 120;
  let active = 0;
  sections.forEach((sec, i) => {
    if(sec && sec.offsetTop <= y) active = i;
  });
  tabs.forEach((t,i)=> t.classList.toggle('active', i===active));
  toTop.style.display = window.scrollY > 400 ? 'block' : 'none';
}
window.addEventListener('scroll', onScroll);
onScroll();

toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));