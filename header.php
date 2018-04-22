<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <?php
        $pageInfo = array_reverse(explode('/', $_SERVER['SCRIPT_FILENAME']));
        $page = $pageInfo['0'];
        ?>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous">        
        <link rel="stylesheet" href="css/general.css"/>
        <?php if ($page == 'index.php' || $page == 'esqueci-minha-senha.php') { ?>
            <link rel="stylesheet" href="css/index.css"/>
        <?php } if ($page == 'pergunta.php') { ?>
            <link rel="stylesheet" href="css/pergunta.css"/>
        <?php } if ($page == 'loja.php') { ?>
            <link rel="stylesheet" href="css/loja.css"/>
        <?php } if ($page == 'dashboard.php') { ?>
            <link href="css/sb-admin-2.css" rel="stylesheet">
            <link href="css/morris.css" rel="stylesheet">
            <link href="css/dashboard.css" rel="stylesheet">
        <?php } ?>
        <title>Projeto Cristian</title>
    </head>
    <body>