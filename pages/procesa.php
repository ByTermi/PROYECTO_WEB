<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopila los datos del formulario
    $nombre = $_POST["nombre"];
    $apellidos = $_POST["apellidos"];
    $correo = $_POST["correo"];
    $empresa = $_POST["empresa"];
    $urlWeb = $_POST["urlWeb"];
    $asunto = $_POST["asunto"];
    $descripcion = $_POST["descripcion"];

    // Formatea los datos en una cadena
    $mensaje = "Nombre: $nombre\nApellidos: $apellidos\nCorreo: $correo\nEmpresa: $empresa\nURL de la web: $urlWeb\nAsunto: $asunto\nDescripción: $descripcion";

    // Envía el correo utilizando la función mail()
    $destinatario = "tucorreo@example.com"; // Cambia esto al correo deseado
    $asuntoCorreo = "Formulario de contacto";
    $cabeceras = "From: $correo";

    mail($destinatario, $asuntoCorreo, $mensaje, $cabeceras);

    // Redirige al usuario a una página de confirmación
    header("Location: confirmacion.html");
    exit;
}

