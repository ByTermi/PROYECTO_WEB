document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado de envío del formulario

    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var empresa = document.getElementById('empresa').value;
    var url = document.getElementById('url').value;
    var asunto = document.getElementById('asunto').value;
    var descripcion = document.getElementById('descripcion').value;

    var cuerpoCorreo = `Nombre: ${nombre}\nApellidos: ${apellidos}\nCorreo: ${correo}\nEmpresa: ${empresa}\nURL de la web: ${url}\nDescripción: ${descripcion}`;

    window.location.href = `mailto:pruebajesus@proton.me?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpoCorreo)}`;
});