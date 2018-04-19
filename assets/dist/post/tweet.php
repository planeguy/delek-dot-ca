<?php

require ('twitteroauth/autoload.php');
use Abraham\TwitterOAuth\TwitterOAuth;

function uploadImagesToTwitter($connection){
    global $_POST;
    $images=array();
    $total = count($_POST['photonames']);
    for($i=0; $i<$total; $i++){
        $images[] = $connection->upload('media/upload',['media'=>'../photos/'.$_POST['photonames'][$i]])->media_id_string;
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