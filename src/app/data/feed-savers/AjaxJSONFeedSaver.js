import ajax from 'src/vendor/ajaxpoop';
import {cfFrom} from 'src/app/data/json-cf';

function getToken(tokens,auth){
    return ajax(tokens)
    .header('Authorization', 'Basic '+auth)
    .header('Content-Type','application/x-www-form-urlencoded')
    .errorOn((xhr)=>(xhr.status>399))
    .post('grant_type=client_credentials')
    .then((xhr)=>(JSON.parse(xhr.response)));
}

export default class AjaxJSONFeedSaver{
    constructor(s){
        let spec = s||{};
        this.url=spec.url;
        getToken(spec.tokens, spec.auth).then((token)=>{this.token=token;});
    }
    save(name, feed){
        return ajax(this.url+'/'+name)
        .header('Authorization',this.token['token_type']+' '+this.token['access_token'])
        .errorOn((xhr)=>(xhr.status>399))
        .post(feed)
        .then((xhr)=>{
            return cfFrom(xhr.response, name);
        });
    }
}