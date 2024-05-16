<%--
  Created by IntelliJ IDEA.
  User: programador
  Date: 15/05/2024
  Time: 17:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JavaScript🎉</title>
    <script src="views/script/actividad2_8.js"></script>
    <link rel="stylesheet" href="views/css/style.css">
    <link rel="stylesheet" href="views/css/responsive.css">
    <link rel="icon" href="views/img/js.png">
</head>
<body>
    <div class="contenedor col-6">
      <h2 class="centrado">Ingrese los siguientes datos:</h2>
    <div class="cajaFlex col-12">
        <div class="derecha col-6">
            <label for="nombre">Nombre: </label>
        </div>
        <div class="izquierda col-6">
            <input type="text" id="nombre" name="nombre" maxlength="100" class="col-8">
        </div>
    </div>
    <div class="cajaFlex col-12">
        <div class="col-6 derecha">
            <label for="edad">Edad:</label>
        </div>
        <div class="col-6 izquierda">
            <input type="number" id="edad" name="edad" min="0" max="110" class="col-2">
        </div>
    </div>
        <div class="centrado">
            <button class="boton">Enviar</button>
        </div>

        <div class="salida centrado">
        </div>
    </div>

</body>
</html>