let convertidorf=function () {
    let value=document.getElementById('number').value;
    let calcular = ((value-32)*5/9).toFixed(1)
    // if (celsius>0){
    //     temperatura.style.heigth = "" + celsius
    // }
    let llenar = 300/100*calcular
    document.getElementById("grados").value= calcular
    document.getElementById('mercurio').style.height=llenar+'px'
    

}

let boton=document.getElementById('boton')
boton.addEventListener('click',convertidorf)

let reiniciar=function(){
    document.getElementById('number').value=``;
    document.getElementById('grados').value=``;
    document.getElementById('mercurio').style.height=0+'px'
    
}
 let reset = document.getElementById('reset')

 reset.addEventListener('click', reiniciar)
