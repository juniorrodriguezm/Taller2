var estilos = document.getElementById("estilos");
var spanEstilos = document.getElementById("spanEstilos");
spanEstilos.innerHTML = estilos.value;
function filtroTres(){

    window.location.replace("http://localhost:5000/?estilos="+estilos.value);
    
    
}

estilos.oninput = function () {

    spanEstilos.innerHTML = estilos.value;

}
