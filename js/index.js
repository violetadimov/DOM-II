// Your code goes here
// `mouseover` on "let's go"

let mouseOver = document.querySelector('.content-section .text-content h2');
console.log(mouseOver);

function over(event) {
    event.target.style.color = 'orange';
    setTimeout(function() {
        event.target.style.color = '';
    }, 500)
}

mouseOver.addEventListener('mouseover', over, false);

// `keydown
// const bodyColor = document.querySelector('body');
let keydown =  document.querySelector('body')
function onKeydown(event) {
    // event.target.style.background = "antiquewhite"
    // setTimeout(function() {
    //     document.body.style.background = "";
    // }, 200)
    if (event.keyCode == 40) {
        document.body.style.background = "antiquewhite";
        setTimeout(function() {
            document.body.style.background = "";
        }, 200)
    }
}
keydown.addEventListener('keydown', onKeydown, false)
function onKeyup(event) {
    if (event.keyCode == 38) {
        document.body.style.background = "whitesmoke";
        setTimeout(function() {
            document.body.style.background = "";
        }, 200)
    }
}
keydown.addEventListener('keydown', onKeyup, false)
