
function saludoBienvenida(){
    var fecha = new Date();
    document.getElementById('saludo').innerHTML = "Bienvenidos hoy es " + fecha;
    var tiempo = setTimeout(function() {saludoBienvenida()}, 1000);
};
