<?php
if(isset($_POST['submit'])){
    $mailto = "Laura@zeilbeck-metallbau.de";



    $mail = $_POST['email'];
    $subject= $_POST['subject'];
    $msg= $_POST['message'];
    $headers = 'From: '.$mail . "\r\n";


    $body = "From : ".$mail. "\r\n" .
    		"Subject : ".$subject. "\r\n" .
    		"Message : " .$msg;
    if(mail($to, $subject, $body , $headers)){
        echo "Mail Sent!";
    }else{
         echo "Failed To Send Mail";
    }
}

?>