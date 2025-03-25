let add = document.querySelector("#Add");
let b = document.querySelector("h2")
let remove = document.querySelector("#Remove");
add.addEventListener('click',function(){
  b.innerHTML = "Friends";
  b.style.color="green"
})
remove.addEventListener('click',function(){
  b.innerHTML = "Stranger";
  b.style.color = "red";
})