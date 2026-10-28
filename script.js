const boton1 = document.getElementById("boton");
const boton2 = document.getElementById("mostrarOcultar")
const mensaje = document.getElementById("cambiarTexto");
const ventajas = document.querySelector('#ventajas');
let num = 0;

boton1.addEventListener("click", function(){
    mensaje.textContent = "Haz clickado el boton";
})

boton1.addEventListener("click", function(){
    num++;
    console.log("Numero de clicks: ", num);
})

boton2.addEventListener("click", function(){
    if(ventajas.classList.contains('ocultar')){
        ventajas.classList.remove('ocultar');
        boton2.textContent = "Ocultar";
    }else{
        ventajas.classList.add('ocultar');
        boton2.textContent = "Mostrar";
    }
})