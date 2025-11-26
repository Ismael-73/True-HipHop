<?php
    //DATOS DE CONEEXION
    $servidor="localhost";
    $usuario="root"; //Usuario por default en un servidor local
    $contrasena="";
    $basededatos="truehiphop";

    //PROCESO DE CONEXION
    $connect= mysqli_connect(
        $servidor, 
        $usuario, 
        $contrasena, 
        $basededatos
    );

    //VERIFICACION DE LA CONEXION
    if(mysqli_connect_errno()){
        //si hay un error en la conexión,muestra el mensaje de error
        die("conexión fallida: " . mysqli_connect_error());
    }
    //establecer el conjunto de la base de datos
    mysqli_set_charset($connect,'utf8');
?>