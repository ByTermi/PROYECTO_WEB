let fondo = document.getElementById('fondoPdf').style;
let objeto = document.getElementById('objectPdf').style;
let documento = document.getElementsByTagName('body');
function abrirArchivo(){
    
    if(fondo.visibility=='visible'||objeto.visibility=='visible'){
        fondo.visibility='hidden';
        objeto.visibility='hidden';
        document.documentElement.style.overflow = 'auto';
    }else{
        fondo.visibility='visible';
        objeto.visibility='visible';
        window.scrollTo(0, 0);
        document.documentElement.style.overflow = 'hidden';
    }
}