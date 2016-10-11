import Channel from 'src/model/channel';
import Item from 'src/model/item';

const rssNS='';
const cfNS='http://delek.org/schemas/clusterfriend/';

function getElementNodeValue(e){
    if(!!e && !!e.childNodes && !!e.childNodes[0]) return e.childNodes[0].nodeValue;
}

function getEnclosure(enclosureElement){
    if(!!enclosureElement) return {
        url: enclosureElement.getAttribute('url'),
        length: enclosureElement.getAttribute('length'),
        type: enclosureElement.getAttribute('type')
    };
}

function getImage(imageElement){
    if(!!imageElement) return {
        url: imageElement.getAttribute('url'),
        title: imageElement.getAttribute('title'),
        link: imageElement.getAttribute('link')
    };
}

//because it isn't an array for some reason
function mapItems(itemElems){
    let items = [];
    for(let i=0;i<itemElems.length;i++){
        let ie = itemElems[i];
        items.push(new Item(
            {
                pubDate:getElementNodeValue(ie.getElementsByTagNameNS(rssNS,'pubDate')[0]),
                description:getElementNodeValue(ie.getElementsByTagNameNS(rssNS,'description')[0]),
                link:getElementNodeValue(ie.getElementsByTagNameNS(rssNS,'link')[0]),
                guid:getElementNodeValue(ie.getElementsByTagNameNS(rssNS,'guid')[0]),
                enclosure:getEnclosure(ie.getElementsByTagNameNS(rssNS,'enclosure')[0]),
                re:getElementNodeValue(ie.getElementsByTagNameNS(cfNS,'re')[0]),
                feel:getElementNodeValue(ie.getElementsByTagNameNS(cfNS,'feel')[0])
            })
        );
    }
    return items;
}

export function cfFrom(rss, url){
    let parser = new DOMParser();
    let xml = parser.parseFromString(rss,'text/xml');
    
    let channelElement = xml.getElementsByTagNameNS(rssNS,'channel')[0];
    let itemElements = xml.getElementsByTagNameNS(rssNS,'item');
    
    getElementNodeValue(channelElement.getElementsByTagNameNS(cfNS,'id')[0]); 
    getElementNodeValue(channelElement.getElementsByTagNameNS(cfNS,'id')[0]) || url;
    getElementNodeValue(channelElement.getElementsByTagNameNS(cfNS,'id')[0]) || url || getElementNodeValue(channelElement.getElementsByTagNameNS(rssNS,'link')[0]);
    
    let channelSpec = {
        title: getElementNodeValue(channelElement.getElementsByTagNameNS(rssNS,'title')[0]),
        description: getElementNodeValue(channelElement.getElementsByTagNameNS(rssNS,'description')[0]),
        link: getElementNodeValue(channelElement.getElementsByTagNameNS(rssNS,'link')[0]),
        image: getImage(channelElement.getElementsByTagNameNS(rssNS,'image')[0]),
        items: mapItems(itemElements),
        id: getElementNodeValue(channelElement.getElementsByTagNameNS(cfNS,'id')[0]) || url || getElementNodeValue(channelElement.getElementsByTagNameNS(rssNS,'link')[0]), 
        profile: getElementNodeValue(channelElement.getElementsByTagNameNS(cfNS,'profile')[0]),
        isFull: getElementNodeValue(channelElement.getElementsByTagNameNS(cfNS,'isFull')[0]),
    }
    
    return new Channel(channelSpec);
}

function elementFromJSProp(xml, obj, prop, ns){
    let e;
    if (!ns) e = xml.createElement(prop);
    else e = xml.createElementNS(ns,prop);
    let cd = xml.createTextNode(obj[prop]||'');
    e.appendChild(cd);
    return e;
}

export function rssFrom(channel){
    let xml = document.implementation.createDocument(rssNS, 'rss');
    let ch = xml.createElement('channel');

    ch.appendChild(elementFromJSProp(xml,channel,'title'));
    ch.appendChild(elementFromJSProp(xml,channel,'description'));
    ch.appendChild(elementFromJSProp(xml,channel,'link'));
    ch.appendChild(elementFromJSProp(xml,channel,'image'));
    ch.appendChild(elementFromJSProp(xml,channel,'id', cfNS));
    ch.appendChild(elementFromJSProp(xml,channel,'profile', cfNS));
    ch.appendChild(elementFromJSProp(xml,channel,'isFull', cfNS));

    channel.items.forEach((item)=>{
        let i = xml.createElement('item');
        i.appendChild(elementFromJSProp(xml,item,'pubDate'));
        i.appendChild(elementFromJSProp(xml,item,'description'));
        i.appendChild(elementFromJSProp(xml,item,'link'));
        i.appendChild(elementFromJSProp(xml,item,'guid'));
        i.appendChild(elementFromJSProp(xml,item,'enclosure'));
        i.appendChild(elementFromJSProp(xml,item,'re', cfNS));
        i.appendChild(elementFromJSProp(xml,item,'feel', cfNS));
        ch.appendChild(i);
    });
    xml.firstChild.appendChild(ch); //firstChild is an "rss" tag
    var serializer = new XMLSerializer();
    var rss = serializer.serializeToString(xml);
    return rss;
}