function actualizarCarrito (){
    document.querySelector('.item').innerHTML = arreglo.length;
}

var arreglo = JSON.parse(localStorage.getItem('arreglo'));
if(arreglo == null) arreglo = [];

actualizarCarrito();