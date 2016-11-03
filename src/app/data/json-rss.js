import Channel from '../model/channel';
import Item from '../model/item';

export function cfFrom(response, url){
    let c = JSON.parse(response);
    c.items = c.items.map((i)=>(new Item(i)));
    return new Channel(c);
}