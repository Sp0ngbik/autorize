<?php

require_once __DIR__.'/boot.php';

// Проверим, не занято ли имя пользователя
$stmt = pdo()->prepare("SELECT * FROM `users` WHERE `login` = :login");
$stmt->execute(['login' => $_POST['login']]);
if ($stmt->rowCount() > 0) {
    flash('Это имя пользователя уже занято.');
    header('Location: /'); // Возврат на форму регистрации
    die; // Остановка выполнения скрипта
}

$stmt = pdo()->prepare("SELECT * FROM `users` WHERE `email` = :email");
$stmt->execute(['email' => $_POST['email']]);
if ($stmt->rowCount() > 0) {
    flash('Эта почта уже занята.');
    header('Location: /'); // Возврат на форму регистрации
    die; // Остановка выполнения скрипта
}
$stmt = pdo()->prepare("SELECT * FROM `users` WHERE `age` = :age");
$stmt->execute(['age' => $_POST['age']]);

// Добавим пользователя в базу
$stmt = pdo()->prepare("INSERT INTO `users` (`login`, `email` ,`password`, 'age') VALUES (:login, :email, :password, :age)");
$stmt->execute([
    'login' => $_POST['login'],
    'email' => $_POST['email'],
    'password' => password_hash($_POST['password'], PASSWORD_DEFAULT),
    'age' => $_POST['age'], 
]);

header('Location: ../../autorize/src/components/register/Register.js');