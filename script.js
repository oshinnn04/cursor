var main = document.querySelector("#main")
var crsr = document.querySelector("#cursor")
var h1 = document.querySelector("#main h1")


main.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+30+"px"
  crsr.style.top = dets.y+30+"px"
})
h1.addEventListener("mouseenter",function(){
  crsr.style.scale = 2
})
h1.addEventListener("mouseleave",function(){
  crsr.style.scale = 1
})