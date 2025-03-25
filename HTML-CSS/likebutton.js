let a = document.querySelector('#container')
let b = document.querySelector("#hii")
a.addEventListener("dblclick",function(){
  b.style.opacity= '0.9'
  b.style.transition = 'ease 0.3s'
  b.style.transform = 'translate(-50%,-50%) scale(1)'
  setTimeout(function(){
     b.style.opacity= '0'
  },500)
  setTimeout(function(){
         b.style.transform = 'translate(-50%,-50%) scale(0)'
  },600)
})