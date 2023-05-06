<?php

	$tmp_filename = $_FILES['file']['tmp_name'];
	$filename = $_FILES['file']['name'];

	if (move_uploaded_file($tmp_filename, "/var/www/files/" . $filename)) {
		echo 1;
	} else {
		echo 0;
	}

	exit();
?>