const boton1 = document.getElementById("boton");
const boton2 = document.getElementById("mostrarOcultar")
const mensaje = document.getElementById("cambiarTexto");
const ventajas = document.querySelector('#ventajas');
const caracte = document.getElementById("caracte");
let num = 0;
const caracteristicas = [
    {nombre: "Multiplataforma", descripcion:"Disponible para sistemas operativos Windows, macOS y Linux"},
    {nombre: "IntelliSense", descripcion:"Ofrece autocompletado inteligente de código"},
    {nombre: "Debugger", descripcion:" Permite ejecutar, inspeccionar variables y detectar errores directamente desde la interfaz del editor"},
    {nombre: "Integración nativa con Git", descripcion:"Facilita el control de versiones, permitiendo hacer commits, gestionar ramas y conectar con repositorios de GitHub sin salir del programa"},
    {nombre: "Terminal integrado", descripcion:" Incluye una consola de comandos incorporada para ejecutar scripts o herramientas de compilación"},
    {nombre: "Marketplace de extensiones", descripcion:"Cuenta con miles de complementos comunitarios para añadir soporte a más lenguajes, temas visuales, herramientas de formato (Prettier, ESLint) y colaboración en tiempo real como Live Share"},
    {nombre: "Ligero y personalizable", descripcion:" Consume pocos recursos en comparación con un IDE completo y permite modificar atajos de teclado, temas y paneles a la medida del usuario."}
];

document.addEventListener("DOMContentLoaded", function(){
    caracteristicas.forEach((item) =>{
        const tarjeta = this.createElement("div");
        tarjeta.classList.add('tarjeta');

        const titulo = document.createElement("h3");
        titulo.textContent = item.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = item.descripcion;

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);

        caracte.appendChild(tarjeta);
    })
})

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