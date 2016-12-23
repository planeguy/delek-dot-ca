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

        // save uploaded picture
        if(!move_uploaded_file (
            $_FILES['itemphoto'] ['tmp_name'],
            "../photos/{$_FILES['itemphoto'] ['name']}"
        )) {
            http_response_code(500);
            throw new RuntimeException('Failed to move uploaded file.');
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
        <link rel="stylesheet" href="../main.css"/>
    </head>
    <body>
        <post-item formaction=""></post-item>

        <script src="post-settings.js"></script>
        <script src="../bluebird.core.min.js"></script>
        <script src="../common.js"></script>
        <script src="../post.js"></script>
    </body>
</html>