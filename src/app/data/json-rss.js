import Channel from '../model/Channel';
import Item from '../model/Item';

export function cfFrom(response, url){
    let c = JSON.parse(response);
    c.items = c.items.map((i)=>(new Item(i)));
    return new Channel(c);
}