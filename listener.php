<?php
    $logFile = fopen("log_data.txt", "a");


    foreach($_POST as $key => $value)
    {
        fwrite($logFile, "==============================================");
        fwrite($logFile, "\n");
        fwrite($logFile, $key);
        fwrite($logFile, "=");
        fwrite($logFile, $value);
        fwrite($logFile, "\n");
    }


    fclose($logFile);
    exit;

?>