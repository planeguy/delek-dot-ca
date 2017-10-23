<?php

require 'twitteroauth/autoload.php';
use Abraham\TwitterOAuth\TwitterOAuth;
require 'tweetsecrets.php';

function tweet($tweet){
    $connection = new TwitterOAuth(
        $twitter_consumer_key,
        $twitter_consumer_secret,
        $twitter_access_token,
        $twitter_access_token_secret
    );
    return $connection->get('account/verify_credentials');
}
?>