"use stric"

const addZeros = n => {
    if(n.toString().lenght < 2) return "0".concat(n);//sino see cumple esto abjo
    return n;
}
//para saber a que hora cargo usuario la pagina o algo acerca de las horas podemos utilizar
const actualizarHora = ()=>{
    const time = new Date();
    let hora = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds());
    //console.log(segundos)
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
}

actualizarHora();
setInterval(actualizarHora,1000)