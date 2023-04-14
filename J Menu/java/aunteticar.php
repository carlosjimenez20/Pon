<!-- Script de autenticación -->
<?php
// Conectar a la base de datos
$db = new mysqli('localhost', 'usuario', 'contraseña', 'basedatos');

// Obtener las credenciales de inicio de sesión del formulario
$username = $_POST['username'];
$password = $_POST['password'];

// Consultar la base de datos para ver si las credenciales son válidas
$query = "SELECT id FROM usuarios WHERE username = '$username' AND password = '$password'";
$result = $db->query($query);

// Si las credenciales son válidas, generar un token de sesión y almacenarlo en una cookie
if ($result->num_rows == 1) {
  $row = $result->fetch_assoc();
  $token = uniqid();
  setcookie('token', $token);
  $query = "UPDATE usuarios SET token = '$token' WHERE id = " . $row['id'];
  $db->query($query);
 
}