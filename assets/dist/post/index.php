<!DOCTYPE html>
<?php
// configuration
$url = 'http://delek.org/post/index.php';
$file = '../feed.json';

try {
    //if the form was submitted...
    if (isset($_POST['feedtext']))
    {
        // save the text contents
        if(!file_put_contents($file, $_POST['feedtext'])) {
            throw new RuntimeException('Failed to save feed.');
        }

        //save the file if uploaded
        switch($_FILES['itemphoto']['error']){
            case UPLOAD_ERR_OK:
                $total = count($_FILES['itemphoto'] ['tmp_name']);
                for($i=0;$i<$total;$i++){
                    if(!move_uploaded_file (
                        $_FILES['itemphoto'] ['tmp_name'] [$i],
                        "../photos/{$_FILES['itemphoto'] ['name'] [$i]}"
                    )){
                        http_response_code(500);
                        throw new RuntimeException('Failed to move uploaded file.');
                    }
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
        

        // redirect to form again
        header(sprintf('Location: %s', $url));
        printf('<a href="%s">Moved</a>.', htmlspecialchars($url));
        exit();
    }
} catch (RuntimeException $e) {
    echo $e->getMessage();
}
?>
<html>
    <head>
        <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
        <meta content="utf-8" http-equiv="encoding">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--<link rel="stylesheet" href="../index.css"/>-->
    </head>
    <body>
        <edit-app></edit-app>

        <script src="../bluebird.core.min.js"></script>
        <script src="../common.js"></script>
        <script src="../settings.js"></script>
        <script src="../post.js"></script>
    </body>
</html>