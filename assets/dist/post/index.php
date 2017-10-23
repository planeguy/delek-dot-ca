<?php
// configuration
$url = 'http://delek.org/post/index.php';
$file = '../feed.json';
$postResult='';
$tweetResult='';

try {
    //if the form was submitted...
    if (isset($_POST['feedtext']))
    {
        // save the text contents
        if(!file_put_contents($file, $_POST['feedtext'])) {
            throw new RuntimeException('Failed to save feed.');
        }
        //save the file if uploaded
        $total = count($_FILES['itemphoto']['tmp_name']);
        for($i=0; $i<$total; $i++){
            switch($_FILES['itemphoto']['error'][$i]){
                case UPLOAD_ERR_OK:
                    $tempFileName = $_FILES['itemphoto']['tmp_name'][$i];
                    $savedFileName = "../photos/".$_FILES['itemphoto']['name'][$i];
                    if(!move_uploaded_file (
                        $tempFileName,
                        $savedFileName                        
                    )){
                        http_response_code(500);
                        throw new RuntimeException('Failed to move uploaded file.');
                    }
                    break;
                case UPLOAD_ERR_NO_FILE:
                    //that's ok, we are allowed to send no file
                    break;
                case UPLOAD_ERR_INI_SIZE:
                case UPLOAD_ERR_FORM_SIZE:
                    http_response_code(400);
                    throw new RuntimeException('Exceeded filesize limit.');
                default:
                    http_response_code(400);
                    throw new RuntimeException('Unknown errors.');
            }
        }
        $postResult='POST SUCCESS';
    }
} catch (RuntimeException $e) {
    $postResult=$e->getMessage();
}

try {
    if (isset($_POST['tweet'])){
        $tweetResult=tweet($_POST['tweet']);
    }
} catch (RuntimeException $e){
    $tweetResult=$e->getMessage();
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
        <meta content="utf-8" http-equiv="encoding">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../index.css"/>
    </head>
    <body>
        <?php echo $postResult ?>
        <?php echo $tweetResult ?>
        <edit-app></edit-app>

        <script src="../bluebird.core.min.js"></script>
        <script src="../common.js"></script>
        <script src="../settings.js"></script>
        <script src="../post.js"></script>
    </body>
</html>