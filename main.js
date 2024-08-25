const ope = document.querySelector('.modalBtn');
const clos = document.querySelector('.scaleBtn');
const scale = document.querySelector('.scale');
let nima = true;
let nimadir = true;
ope.addEventListener('click', ()=>{
      if(nima){
            scale.classList.toggle('active')
      }
})
clos.addEventListener('click', ()=>{
      scale.classList.toggle('active')
})