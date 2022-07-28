<?php
    require 'mailer/PHPMailerAutoload.php';
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    $datosEntrega = file_get_contents("php://input");
    $request = json_decode($datosEntrega);
    $fecha = date("Y-m-d");

    include('e.php');
    //Create a new PHPMailer instance
    $mail = new PHPMailer;
    //Set who the message is to be sent from
    $mail->setFrom('carmind@dominio.com.ar', 'Carmind - Carmind');
    // Set an alternative reply-to address
    // $mail->addReplyTo('replyto@example.com', 'First Last');
    //Set who the message is to be sent to
    $mail->addAddress($email, $nomape);
    //Set the subject line
    $mail->Subject = 'Asunto del Email';
    //Read an HTML message body from an external file, convert referenced images to embedded,
    //convert HTML into a basic plain-text alternative body
    $mail->MsgHTML( $request );
    //Y por si nos bloquean el contenido HTML (algunos correos lo hacen por seguridad) una versión alternativa en texto plano (también será válida para lectores de pantalla)
    $mail->AltBody = $request ;
    //Attach an image file
    $mail->addAttachment('$srec');
    //send the message, check for errors
    if (!$mail->send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
        echo "Message sent!";
    }
    echo "guardado";	
?>