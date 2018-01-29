<?php

class PeachConnection {
    private $bearer ='';

    public function __construct($email,$password){
        //get the bearer token
        $ch = curl_init("https://v1.peachapi.com/login");
        $headers= array('Accept: application/json');
        $post = json_encode(array('email'=>$email, 'password'=>$password));
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");  
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); 
        $result = curl_exec($ch);
        curl_close($ch);  // Seems like good practice
        $result_obj = json_decode($result);
        if($result_obj->success!==1) { throw new RuntimeException("Peach Service Error ".json_encode($result_obj->data)); }
        $this->bearer =  $result_obj->data->streams[0]->token;
    }

    public function post($endpoint, $json){
        $ch = curl_init("https://v1.peachapi.com/".$endpoint);
        $headers= array('Accept: application/json','Authorization: Bearer '.$this->bearer);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); 
        $result = curl_exec($ch);
        curl_close($ch);  // Seems like good practice
        $result_obj = json_decode($result);
        if($result_obj->success!==1) { throw new RuntimeException("Peach Service Error ".json_encode($result_obj->data)); }
        return $result_obj;
    }
}

function peach($text){
    global $peach_email, $peach_password;
    $pc=new PeachConnection($peach_email, $peach_password);
    return $pc->post('post',json_encode(array('message'=>array(array('text'=>$text,'type'=>'text')))));
}

?>