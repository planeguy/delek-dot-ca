import ajax from 'src/vendor/ajaxpoop';

export default function getOAuth2Token(tokenurl,auth){
    return ajax(tokenurl)
    .header('Authorization', 'Basic '+auth)
    .header('Content-Type','application/x-www-form-urlencoded')
    .errorOn((xhr)=>(xhr.status>399))
    .post('grant_type=client_credentials')
    .then((xhr)=>(JSON.parse(xhr.response)));
}