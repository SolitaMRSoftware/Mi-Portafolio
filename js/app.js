function typeEffect(element, speed) {
var text = element.innerHTML;
element.innerHTML = "";

var i = 0;
var timer = setInterval(function() {
if (i < text.length) {
    element.append(text.charAt(i));
    i++;
} else {
    clearInterval(timer);
}
}, speed);
}

// velocidad de escritura
var speed = 90;
var h2 = document.querySelector('h2');
var delay = h2.innerHTML.length * speed + speed;

// tipo de efecto
typeEffect(h2, speed);


const btnMenu=document.querySelector('#menu');
    menuContent=document.querySelector('.menu-content');

btnMenu.addEventListener('click',()=>{
    menuContent.classList.toggle('menu-active');

});

