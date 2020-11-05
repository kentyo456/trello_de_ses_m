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

    let colonne = document.createElement('div');
    colonne.classList.add('col-sm');

    let card = document.createElement('div');
    card.classList.add('cardclass');
    card.id = "colonneid" + colonneid;
    colonneid++;
    colonne.appendChild(card);

    let titre = document.createElement("input");
    titre.classList.add('titrecard');
    titre.onkeydown = enterPressed;
    titre.placeholder = "Entrez un titre...";
    card.appendChild(titre);

    let deletebtn = document.createElement('button');
    deletebtn.classList.add('deletebutton');
    deletebtn.onclick = deletecard;
    let t1 = document.createTextNode('X');
    deletebtn.appendChild(t1);
    card.appendChild(deletebtn);

    let containertodobtn = document.createElement("div");
    containertodobtn.classList.add('containertodobtn');
    card.appendChild(containertodobtn);

    let todobtn = document.createElement('button');
    todobtn.classList.add('todobtn');
    todobtn.onclick = createtodo;
    let t2 = document.createTextNode('Ajouter une tâche')
    todobtn.appendChild(t2);
    containertodobtn.appendChild(todobtn);

    let canva = document.createElement("div");
    canva.classList.add('canva');
    canva.ondrop = drop;
    canva.ondragover = allowDrop;
    card.appendChild(canva);

    let container = document.getElementById("row1");
    let child = document.getElementById("firstcol");
    container.insertBefore(colonne, child)


    //créer une tâche
    function createtodo(event) {
        console.log(event)
        let todo = document.createElement('div');
        todo.draggable = "true";
        todo.ondragstart = drag;
        todo.classList.add('todo');
        todo.id = "todoid" + todoid;
        todoid++;

        //let card = event.target.parentElement;
        canva.appendChild(todo);
        //card.insertBefore(todo, todobtn);

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
        //titretodo.onkeydown = enterPressed;
        titretodo.oninput = auto_grow;
        titretodo.classList.add('titretodo');
        titretodo.id = "titretodoid";
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
}

//enlever carte
function deletecard(event) {
    event.target.parentElement.parentElement.remove();
}

//enlever tache
function removetodo(event) {
    event.target.parentElement.parentElement.remove();
}

//couleur carte
function jaune(event) {
    event.target.parentElement.parentElement.style.backgroundColor = "rgb(255, 135, 37)";
}

//couleur carte
function rouge(event) {
    event.target.parentElement.parentElement.style.backgroundColor = "rgb(175, 37, 37)";
}

//couleur carte
function vert(event) {
    event.target.parentElement.parentElement.style.backgroundColor = " rgb(23, 177, 23)";
}

//drag an drop
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}
//fin drag an drop

//Appuyer sur entrée enleve le focus 
function enterPressed(event) {
    var x = event.keyCode;
    if (x == 13) { //13 = touche entrée
        event.target.blur();
    }
}

function auto_grow(event) {
    event.target.style.height = (event.target.scrollHeight) + "px";
}

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