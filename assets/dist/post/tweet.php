<?php

require ('twitteroauth/autoload.php');
use Abraham\TwitterOAuth\TwitterOAuth;

function uploadImagesToTwitter($connection){
    global $_FILES;
    $images=array();
    $total = count($_FILES['itemphoto']['tmp_name']);
    for($i=0; $i<$total; $i++){
        switch($_FILES['itemphoto']['error'][$i]){
            case UPLOAD_ERR_OK:
                $images[] = $connection->upload('media/upload',['media'=>'../photos/'.$_FILES['itemphoto']['name'][$i]])->media_id_string;
                break;
            case UPLOAD_ERR_NO_FILE:
                //that's ok, we are allowed to send no file
                break;
            default:
                http_response_code(400);
                throw new RuntimeException('Unknown errors.');
        }
    }
    return implode(',',$images);
}


function tweet($tweet){
    global $twitter_consumer_key, $twitter_consumer_secret, $twitter_access_token, $twitter_access_token_secret;

    $connection = new TwitterOAuth(
        $twitter_consumer_key,
        $twitter_consumer_secret,
        $twitter_access_token,
        $twitter_access_token_secret
    );
    $posted = $connection->post("statuses/update",["status"=>$tweet, "media_ids"=>uploadImagesToTwitter($connection)]);
    return $posted;
}

function getTCOLength(){
    global $twitter_consumer_key, $twitter_consumer_secret, $twitter_access_token, $twitter_access_token_secret;    
    $connection = new TwitterOAuth(
        $twitter_consumer_key,
        $twitter_consumer_secret,
        $twitter_access_token,
        $twitter_access_token_secret
    );
    $l = $connection->get('help/configuration')->short_url_length;
    return $l;
}
?>