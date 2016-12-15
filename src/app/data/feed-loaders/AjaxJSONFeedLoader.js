import ajax from '../../../vendor/ajaxpoop';
import {cfFrom} from '../../data/json-cf';

export default function load(feed='feed'){
    return ajax(feed).header('Cache-Control','NO-CACHE').errorOn((xhr)=>(xhr.status>399)).get()
    .then((xhr)=>{
        let cf = cfFrom(xhr.response, feed);
        return cf;
    });
};