<?php
    include 'db.php';

    if($_SERVER['REQUEST_METHOD']=='POST'){
        $nombre     = $_POST['nombre'];
        $correo     = $_POST['correo'];
        $telefono   = $_POST['telefono'];
        $fechanac   = $_POST['fechanac'];
        $estu       = $_POST['estu'];
        $univer     = $_POST['univer'];
        $opcion1    = isset($_POST['opcion1']) ? $_POST['opcion1'] : 0;
        $opcion2    = isset($_POST['opcion2']) ? $_POST['opcion2'] : 0;
        $opcion3    = isset($_POST['opcion3']) ? $_POST['opcion3'] : 0;
        $opcion4    = isset($_POST['opcion4']) ? $_POST['opcion4'] : 0;
        $opcion5    = isset($_POST['opcion5']) ? $_POST['opcion5'] : 0;
        $opcion6    = isset($_POST['opcion6']) ? $_POST['opcion6'] : 0;
        $epocarap   = $_POST['epocarap'];
        $comentarios= $_POST['comentarios'];
        $sql = "INSERT INTO contacto(nombre,
                correo,
                telefono,
                fechanac,
                estu,
                univer,
                opcion1,
                opcion2,
                opcion3,
                opcion4,
                opcion5,
                opcion6,
                epocarap,
                comentarios
            )
            VALUES (
                '$nombre',
                '$correo',
                '$telefono',
                '$fechanac',
                '$estu',
                '$univer',
                '$opcion1',
                '$opcion2',
                '$opcion3',
                '$opcion4',
                '$opcion5',
                '$opcion6',
                '$epocarap',
                '$comentarios'
            )
        ";
        if(mysqli_query($connect, $sql)){
            echo "Datos ingresados correctamente";
        }
        else{
            echo "Error al insertar los datos: " .mysqli_error($connect);
        }
    }
?>