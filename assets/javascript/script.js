// assets/js/script.js

// Función modificar para recibir el elemento y el color como argumentos
function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
}

// Seleccionamos el elemento
const ele = document.getElementById("ele1");

// Añadimos el evento click con una función anónima para pasar el color amarillo
ele.addEventListener("click", () => pintar(ele, 'yellow'));
pintar(ele);


function colores_script() {
    window.location.href = './4_colores.html';
}