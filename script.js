const boton = document.getElementById("boton");
const mensaje = document.getElementById("cambiarTexto");
let num = 0;

boton.addEventListener("click", function(){
    mensaje.textContent = "Haz clickado el boton";
})

boton.addEventListener("click", function(){
    num++;
    console.log("Numero de clicks: ", num);
})