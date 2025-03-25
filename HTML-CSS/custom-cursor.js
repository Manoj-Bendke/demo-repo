let a = document.querySelector('#main');
let b = document.querySelector('#crsr');
a.addEventListener('mousemove',function(move){
 b.style.left = move.x + "px" //by using move.x and px we are allocating the exact pixels to the elment so it will shift itself according to the allocated x and y pixel position//
 b.style.top = move.y + "px"
})