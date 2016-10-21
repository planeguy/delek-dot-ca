import ajax from 'src/vendor/ajaxpoop';
import {cfFrom} from 'src/app/data/cf-rss';

export default function load(info={}){
    console.log(info);
    return ajax((info.base||'') + (info.feed||'feed.xml')).header('Cache-Control','NO-CACHE').errorOn((xhr)=>(xhr.status>399)).get()
    .then((xhr)=>{
        let cf = cfFrom(xhr.response, info.feed);
        return cf;
    });
};