import ajax from 'src/vendor/ajaxpoop';
import {cfFrom} from 'src/app/data/json-rss';

export default function load(base='',feed='feed.xml'){
    return ajax(base + feed).header('Cache-Control','NO-CACHE').errorOn((xhr)=>(xhr.status>399)).get()
    .then((xhr)=>{
        let cf = cfFrom(xhr.response, feed);
        return cf;
    });
};