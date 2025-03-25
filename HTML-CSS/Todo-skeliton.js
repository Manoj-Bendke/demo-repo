let inp = document.querySelector('#inp');
let elemtodo = document.querySelector('#todolist');
let arr = [];

function todoList(){
  arr.push(inp.value);
  inp.value = '';
  for(let i = 0 ; i < arr.length ; i++){
    elemtodo.innerHTML = `<p>${arr[i]}</p><button onclick = "arr.pop(${i},1)";>Delete</button>`;   
    console.log(arr); 
  }
}
