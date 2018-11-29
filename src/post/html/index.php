<!DOCTYPE html>
<!-- <?php

require ('secrets.php');
require ('tweet.php');
require ('peach.php');
// configuration
$url = 'http://delek.org/post/index.php';
$file = '../feed.json';
$postResult='';
$tweetResult='';
$peachResult='';

$TCOLength = getTCOLength();

try {
    //if the form was submitted...
    if (isset($_POST['feedtext']))
    {
        // save the text contents
        if(!file_put_contents($file, $_POST['feedtext'])) {
            throw new RuntimeException('Failed to save feed.');
        }
        if(isset($_POST['photos']) && isset($_POST['photonames'])){
            $total = count($_POST['photos']);
            $type = 'image/jpeg';
            for($i=0; $i<$total; $i++){
                $data = $_POST['photos'][$i];
                $name = "../photos/".$_POST['photonames'][$i];
        
                list($type, $data) = explode(';', $data);
                list(, $data)      = explode(',', $data);
                $data = base64_decode($data);
        
                file_put_contents($name, $data);
            }
        }
        $postResult='POST SUCCESS';
    }
} catch (RuntimeException $e) {
    $postResult="POSTING FAILED ".$e->getMessage();
}

try {
    if (isset($_POST['tweet']) && isset($_POST['do-tweet']) && $_POST['do-tweet']=='YES'){
        $tweetResult = "TWEETED ".tweet($_POST['tweet'])->id;
    }
} catch (RuntimeException $e){
    $tweetResult="TWEETING FAILED ".$e->getMessage();
}

try {
    if (isset($_POST['peach']) && isset($_POST['do-peach']) && $_POST['do-peach']=='YES'){
        $peachResult = "PEACHED ".peach($_POST['peach'])->data->id;
    }
} catch (RuntimeException $e){
    $peachResult="PEACHING FAILED ".$e->getMessage();
}
?>
-->
<html>
    <head>
        <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
        <meta content="utf-8" http-equiv="encoding">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./index.css"/>
        <link rel="stylesheet" href="./croppie.css"/>
    </head>
    <body>
        <?php echo $postResult ?>
        <?php echo $tweetResult ?>
        <?php echo $peachResult ?>
        <edit-app tcolength="<?php echo $TCOLength?>"></edit-app>

        <script src="./bluebird.core.min.js"></script>
        <script src="./settings.js"></script>
        <script src="./post.js"></script>
    </body>
</html>