<?php

	function cmp_time($a, $b) {
		return $a['time'] < $b['time'];
	}
	function scan_dir($dir) {
		$ignored = array('.', '..', '.svn', '.htaccess');
		$files = array();
		foreach (scandir($dir) as $file) {
			if (in_array($file, $ignored)) continue;
			if (!in_array($file, $ignored)) {
				$files[] = [
					'name' => $file,
					'path' => str_replace('/var/www/files', '', $dir) . '/' . $file,
					'time' => filemtime($dir . '/' . $file),
					'size' => filesize($dir . '/' . $file),
					'isDir' => is_dir($dir . '/' . $file),
					'ext' => strtolower(pathinfo($dir . '/' . $file, PATHINFO_EXTENSION)),
				];
				if (is_dir($dir . '/' . $file)) {
					$i = count($files) - 1;
					$files[$i]['files'] = scan_dir($dir . '/' . $file);
				}
			}
		}	
		usort($files, 'cmp_time');
		return $files;
	}

	$files = scan_dir('/var/www/files');
	header("Content-Type: application/json");
	echo json_encode($files);

	exit();
?>