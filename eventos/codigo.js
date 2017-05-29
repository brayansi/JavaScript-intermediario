//submit
var form= document.forms[0];
console.log(form);
form.addEventListener('submit', function cadastrado(event) {
    event.preventDefault();
    alert("event Submit");
})

//blur
var txt = document.getElementById("txt");
console.log(txt);
txt.addEventListener('blur', function blur(event) {
    event.preventDefault();
    alert("blur: Perca de foco");
})

//change: perca de foco apos o valor ser aterado
var txt = document.getElementById("txt");
console.log(txt);
txt.addEventListener('change', function change(event) {
    event.preventDefault();
    alert("change: Perca de foco apos aterar o valor");
})

//click //dbclick //mouseover //maouseout
var img= document.getElementById('img');
console.log(img);
img.addEventListener('click',function click(event) {
    alert("Github = brayansi");
    window.location.href ="https://github.com/brayansi";
})

/*
//focus
var txt = document.getElementById("txt");
console.log(txt);
txt.addEventListener('focus', function focus(event) {
    event.preventDefault();
    alert("focus");
})
*/


/*eventos de teclas do teclado
keydown = afundar das teclas
keypress = manter as teclas precionadoas 
keyup = saltar das teclas

*/
/*
window.addEventListener('keypress', function keypress(event) {
    alert(event.keyCode);
    alert(event.ctrlKey);
    alert(event.shiftKey);
})
*/





