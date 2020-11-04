var clickControl = false;
var clickControl1 = false;
var colonneid = 1;
var todoid = 1;

//menu vertical déroulant
function subMenuAccueil() {
    if (clickControl) {
        var elem = document.getElementById('submenu');
        elem.style.display = "none";
        clickControl = !clickControl;
    } else {
        var elem = document.getElementById('submenu');
        elem.style.display = "block";
        clickControl = !clickControl;
    }
}
//menu vertical déroulant
function subMenuTablo1() {
    if (clickControl1) {
        var elem = document.getElementById('submenuTablo1');
        elem.style.display = "block";
        clickControl1 = !clickControl1;
    } else {
        var elem = document.getElementById('submenuTablo1');
        elem.style.display = "none";
        clickControl1 = !clickControl1;
    }
}

//créer carte
function createcard() {
    let card = document.createElement('div');
    card.classList.add('col-sm');
    card.id = "colonneid" + colonneid;
    colonneid++;

    let titre = document.createElement("input");
    titre.classList.add('titrecard');
    titre.placeholder = "Entrez un titre...";
    card.appendChild(titre);

    let deletebtn = document.createElement('button');
    deletebtn.classList.add('deletebutton');
    deletebtn.onclick = deletecard;
    let t1 = document.createTextNode('X');
    deletebtn.appendChild(t1);
    card.appendChild(deletebtn);

    let canva = document.createElement("div");
    canva.classList.add('canva');
    card.appendChild(canva);

    let todobtn = document.createElement('button');
    todobtn.classList.add('todobtn');
    todobtn.onclick = createtodo;
    let t2 = document.createTextNode('Ajouter une tâche à faire')
    todobtn.appendChild(t2);
    canva.appendChild(todobtn);

    let container = document.getElementById("row1");
    let child = document.getElementById("firstcol");
    container.insertBefore(card, child)

}


function createtodo(event) {
    console.log(event)
    let todo = document.createElement('div');
    todo.classList.add('todo');
    todo.id = "todoid" + todoid;
    todoid++;

    let card = event.target.parentElement;
    card.appendChild(todo);

    let containerbtnrmv = document.createElement('div');
    containerbtnrmv.classList.add('containerbtnrmv');
    todo.appendChild(containerbtnrmv);

    let removebtn = document.createElement('button');
    removebtn.classList.add('removebutton');
    removebtn.onclick = removetodo;
    let t1 = document.createTextNode('X');
    removebtn.appendChild(t1);
    containerbtnrmv.appendChild(removebtn);

    let titretodo = document.createElement("textarea");
    titretodo.name = 'post';
    titretodo.maxLength = 5000;
    titretodo.cols = 10;
    titretodo.rows = 1;
    titretodo.classList.add('titretodo');
    titretodo.placeholder = "À faire...";
    todo.appendChild(titretodo);

    let containerbtncolor = document.createElement('div');
    containerbtncolor.classList.add('containerbtncolor');
    todo.appendChild(containerbtncolor);

    let btnvert = document.createElement('button');
    btnvert.classList.add('btnvert');
    btnvert.onclick = vert;
    containerbtncolor.appendChild(btnvert);

    let btnjaune = document.createElement('button');
    btnjaune.classList.add('btnjaune');
    btnjaune.onclick = jaune;
    containerbtncolor.appendChild(btnjaune);

    let btnrouge = document.createElement('button');
    btnrouge.classList.add('btnrouge');
    btnrouge.onclick = rouge;
    containerbtncolor.appendChild(btnrouge);


}

function test() {
    document.getElementById('hello').innerHTML = 'Hello JavaScript!';
}

function deletecard(event) {
    event.target.parentElement.remove();
}

function removetodo(event) {
    event.target.parentElement.parentElement.remove();
}


function jaune(event) {
    event.target.parentElement.parentElement.style.backgroundColor = "rgb(255, 135, 37)";
}

function rouge(event) {
    event.target.parentElement.parentElement.style.backgroundColor = "rgb(175, 37, 37)";
}

function vert(event) {
    event.target.parentElement.parentElement.style.backgroundColor = " rgb(23, 177, 23)";
}



/*var myDiv = document.getElementById("row1");

//Create array of options to be added
var array = ["Volvo", "Saab", "Mercades", "Audi"];

//Create and append select list
var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
myDiv.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = new option("value", array[i]);
    option.text = array[i];
    selectList.appendChild(option);
}*/

















/*
(function() {
    let curYPos, curXPos, curDown;

    window.addEventListener('mousemove', function(e) {
        if (curDown) {
            window.scrollBy(curXPos - e.pageX, curYPos - e.pageY);
        }
    });

    window.addEventListener('mousedown', function(e) {
        curYPos = e.pageY;
        curXPos = e.pageX;
        curDown = true;
    });

    window.addEventListener('mouseup', function(e) {
        curDown = false;
    });
})()*/