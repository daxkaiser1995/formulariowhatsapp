const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre= document.getElementById('nombres').value;
        let dni= document.getElementById('dni').value;
        let destino= document.getElementById('destino').value;
        let numero= 51989505439;
var win= window.open(`https://wa.me/${numero}?text=Nombre:%20${nombre}
 Dni:%20${dni} Destino:%20${destino}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)