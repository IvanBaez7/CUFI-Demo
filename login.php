<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Manually set the password
    $password = "h//24537ISRAEL";
    
    // Hash the password using a strong encryption algorithm
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    // Output the hashed password
    echo "Encrypted Password: " . $hashedPassword;
} else {
    // If accessed via a method other than POST, return an error message
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Method Not Allowed";
}
?>
