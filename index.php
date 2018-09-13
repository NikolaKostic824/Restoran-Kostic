<?php
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$name = $request-> name;
	$email = $request-> email;
	$message = $request-> message;

	$msg = "Mejl salje ". $name." sa adrese ".$email." i piše: ".$message;
	echo $msg;
	

?>