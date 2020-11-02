var clickControl = false;
var clickControl1 = false;

function subMenuAccueil(){
    if (clickControl){
        var elem = document.getElementById('submenu');
        elem.style.display = "none";
        clickControl = !clickControl;
    }
    else {
        var elem = document.getElementById('submenu');
        elem.style.display = "block";
        clickControl = !clickControl;
    }
}

function subMenuTablo1(){
    if (clickControl1){
        var elem = document.getElementById('submenuTablo1');
        elem.style.display = "block";
        clickControl1 = !clickControl1;
    }
    else {
        var elem = document.getElementById('submenuTablo1');
        elem.style.display = "none";
        clickControl1 = !clickControl1;
    }
}

function creatediv (){
let div = document.createElement('card');
div.classList.add('test');
let text = document.createTextNode('Test');
div.appendChild(text);
document.body.appendChild(div)
var currentDiv = document.getElementById('titre');
  document.body.insertBefore(card, currentDiv);
}