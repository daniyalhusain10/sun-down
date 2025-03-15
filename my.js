const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function b(){
    var b = document.querySelector("#elem-container")
var abc = document.querySelector("#fixed-image")
var b = b.addEventListener("mouseenter",function(){
    abc.style.display= 'block'
})

var b = document.querySelector("#elem-container")
var abc = document.querySelector("#fixed-image")
var b = b.addEventListener("mouseleave",function(){
    abc.style.display= 'none'
})
}
function c(){
    var ale=document.querySelectorAll(".elem")
ale.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        abc.style.backgroundImage = `url(${image})`
    })
})
}
function d(){
    var load = document.querySelector("#loader");
setTimeout(function(){
    load.style.top = "-100%"
}, 4500)
}
b();
c();
d();
