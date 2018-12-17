////////////////////////////////////////////////////////////////////////////////////
//MOUSE EVENTS
//Oefening 1
var hoverMe = document.getElementsByClassName('hoverMe');
console.log(hoverMe);

let onMouseOver = function (event) {
    this.style.visibility = 'hidden';
}

for (variable of hoverMe) {
    variable.addEventListener('mouseover', onMouseOver)
}
//Oefening 2
let reset = document.getElementById('reset');
let onClick = function (event) {
    for (variable of hoverMe) {
        variable.style.visibility = 'visible';
    }
}
reset.addEventListener('click', onClick);

//Oefening 3
let divX = document.getElementById('xCoordinate');
let divY = document.getElementById('yCoordinate');

function getXCord(event) {
    let x = event.clientX;
    let p = document.createElement('p');
    let text = document.createTextNode("x-cord: "+x);
    p.appendChild(text);
    divX.appendChild(p);
}

function getYCord(event) {
    let y = event.clientY;
    let p = document.createElement('p');
    let text = document.createTextNode("y-cord: "+y);
    p.appendChild(text);
    divY.appendChild(p);
}

divX.addEventListener('mouseover', getXCord);
divY.addEventListener('mouseover', getYCord);