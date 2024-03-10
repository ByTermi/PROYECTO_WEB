let fondo = document.getElementById('fondoPdf').style;
let objeto = document.getElementById('objectPdf').style;
function abrirArchivo(){
    
    if(fondo.visibility=='visible'||objeto.visibility=='visible'){
        fondo.visibility='hidden';
        objeto.visibility='hidden';
    }else{
        fondo.visibility='visible';
        objeto.visibility='visible';
    }
}