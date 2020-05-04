<?php
function clean($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);

    return $value;
}

function check_length($value = "", $min, $max) {
    $result = (mb_strlen($value) < $min || mb_strlen($value) > $max);
    return !$result;
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = 'kironiy@gmail.com';
	$name = $_POST['name'];
    $phone = $_POST['phone'];

    $name = clean($name);
	$phone = clean($phone);

	if(!empty($name) && !empty($phone)) {
	    if(check_length($name, 2, 25) && check_length($phone, 10, 50)) {

$sub="Сообщение с сайта: http://sixty.skarlat.tmweb.ru/";
$address = 'chernushov88@mail.ru,skarlatsup@mail.ru';
$mes = "
Тема: Обратный звонок \n
Имя:  $name \n
Телефон:  $phone \n
";
$verify = mail($address, $sub ,$mes, "Content-type:text/plain; charset = utf-8\r\nFrom:$email");

	        echo "<html><head><meta http-equiv='refresh' content='2; URL=http://sixty.skarlat.tmweb.ru/thank/'/></head><body><div class='success'>Ваше сообщение успешно отправлено</div></body></html>";
	    } else {
	        echo "<span class='error'>Введенные данные некорректные</span>";
	    }
	} else {
        echo "<span class='error'>Заполните пустые поля</span>";
	}
} else {
	header("Location: ../index.html");
}
?>




