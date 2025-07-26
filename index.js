const precioBase = 400000;

const spanPrecio = document.querySelector('.precio-inicial');
const spanCantidad = document.querySelector('.cantidad');
const spanTotal = document.querySelector('.valor-total');
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');

let cantidad = 0;

spanPrecio.innerText = precioBase;

function actualizarTotal() {
    spanCantidad.innerText = cantidad;
    spanTotal.innerText = precioBase * cantidad;
}

btnSumar.onclick = function () {
    cantidad++;
    actualizarTotal();
};

btnRestar.onclick = function () {
    if (cantidad > 0) {
        cantidad--;
        actualizarTotal();
    }
};
