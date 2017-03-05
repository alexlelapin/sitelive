<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = 'alexandre.pigeon@usherbrooke.ca'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "SITE: nouveau message de: $name";
$email_body = "Vous avez recu un nouveau courriel.\n\nNom: $name\n\nEmail: $email_address\n\nMessage:\n$message";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
