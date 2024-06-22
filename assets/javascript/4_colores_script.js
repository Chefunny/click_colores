// assets/js/4_colores_script.js

// Función para cambiar el color del div clickeado a negro
function changeColorToBlack(event) {
    event.target.style.backgroundColor = 'black';
}

// Añadiendo eventos de click a los divs
const divs = ['div1', 'div2', 'div3', 'div4'];
divs.forEach(id => {
    const element = document.getElementById(id);
    element.addEventListener('click', changeColorToBlack);
});

// Variable global para almacenar el color
let color = '';

// Evento para cambiar el color del div "key" según la tecla presionada
document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');

    if (event.key === 'a') {
        color = 'pink';
    } else if (event.key === 's') {
        color = 'orange';
    } else if (event.key === 'd') {
        color = 'lightblue';
    } else if (event.key === 'q') {
        createNewDiv('purple');
    } else if (event.key === 'w') {
        createNewDiv('gray');
    } else if (event.key === 'e') {
        createNewDiv('brown');
    }

    // Cambia el color del div "key" si es una de las teclas a, s o d
    if (['a', 's', 'd'].includes(event.key)) {
        keyDiv.style.backgroundColor = color;
    }
});

// Función para crear un nuevo div con el color especificado
function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    document.body.appendChild(newDiv);
}

function pintar() {
    window.location.href = './pintar.html';
}
