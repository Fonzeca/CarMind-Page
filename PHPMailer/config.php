<?php

/*
*
* Endeos, Working for You
* blog.endeos.com
*
*/

require_once('phpmailer/PHPMailerAutoload.php');


$mail = new PHPMailer;

//$mail->SMTPDebug    = 3;

$mail->IsSMTP();
$mail->Host = '';   /*Servidor SMTP*/																		
$mail->SMTPSecure = '';   /*Protocolo SSL o TLS*/
$mail->Port = 25;   /*Puerto de conexión al servidor SMTP*/
$mail->SMTPAuth = true;   /*Para habilitar o deshabilitar la autenticación*/
$mail->Username = '';   /*Usuario, normalmente el correo electrónico*/
$mail->Password = '';   /*Tu contraseña*/
$mail->From = '';   /*Correo electrónico que estamos autenticando*/
$mail->FromName = '';   /*Puedes poner tu nombre, el de tu empresa, nombre de tu web, etc.*/
$mail->CharSet = 'UTF-8';   /*Codificación del mensaje*/

?>