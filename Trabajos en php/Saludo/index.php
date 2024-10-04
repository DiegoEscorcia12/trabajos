<?php
include('Saludo/saludo.php');

$saludo = new saludo();

$saludo->$saludar(saludar:'Hola Mundo Poo');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saludo</title>
    <script src="saludo.php"></script>
 
</head>
<body>
    <?php 
    echo $saludo->getSaludar();
    ?>
    
</body>
</html>