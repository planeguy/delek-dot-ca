import Channel from '../model/channel';
import Item from '../model/item';

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
function getEnclosedImage(enclosureElement){
    let enclosure = getEnclosure(enclosureElement);
    if(!!enclosure && !!enclosure.type && enclosure.type.indexOf('image/')==0) return enclosure.url;
}

//because it isn't an array for some reason
function mapItems(itemElems){
    let items = [];
    for(let i=0;i<itemElems.length;i++){
        let ie = itemElems[i];
        items.push(new Item(
            {
                pubDate:new Date(getElementNodeValue(ie.getElementsByTagNameNS(rssNS,'pubDate')[0])||new Date()),
                description:getElementNodeValue(ie.getElementsByTagNameNS(rssNS,'description')[0]),
                link:getElementNodeValue(ie.getElementsByTagNameNS(rssNS,'link')[0]),
                guid:getElementNodeValue(ie.getElementsByTagNameNS(rssNS,'guid')[0]),
                enclosure:getEnclosure(ie.getElementsByTagNameNS(rssNS,'enclosure')[0]),
                image: getEnclosedImage(ie.getElementsByTagNameNS(rssNS,'enclosure')[0]),
                about:getElementNodeValue(ie.getElementsByTagNameNS(cfNS,'about')[0]),
                re:getElementNodeValue(ie.getElementsByTagNameNS(cfNS,'re')[0]),
                feel:getElementNodeValue(ie.getElementsByTagNameNS(cfNS,'feel')[0])
            })
        );
    }
    items.sort((l,r)=>{
        return l.pubDate > r.pubdate;
    });
    return items;
}

function mapKeys(keysElement){
    if(!!keysElement){
        let keyElems = keysElement.getElementsByTagNameNS(cfNS,'key');
        let keys = [];
        for (let i=0;i<keyElems.length;i++){
            let ke = keyElems[i];
            keys.push({
                fingerprint:ke.getAttribute('fingerprint'),
                group:ke.getAttribute('group'),
                key:getElementNodeValue(ke)
            });
        }
        return keys;
    }
}

function getHome(homeElement){
    if(!!homeElement) return {
        ishome:homeElement.getAttribute('ishome'),
        keys: mapKeys(homeElement.getElementsByTagNameNS(cfNS,'keys')[0])
    }
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
        home: getHome(channelElement.getElementsByTagNameNS(cfNS,'home')[0])
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

function rssitemFrom(jsitem){
    let i = xml.createElement('item');
    i.appendChild(elementFromJSProp(xml,jsitem,'pubDate'));
    i.appendChild(elementFromJSProp(xml,jsitem,'description'));
    i.appendChild(elementFromJSProp(xml,jsitem,'link'));
    i.appendChild(elementFromJSProp(xml,jsitem,'guid'));
    i.appendChild(elementFromJSProp(xml,jsitem,'enclosure'));
    i.appendChild(elementFromJSProp(xml,jsitem,'about', cfNS));
    i.appendChild(elementFromJSProp(xml,jsitem,'re', cfNS));
    i.appendChild(elementFromJSProp(xml,jsitem,'image', cfNS));
    i.appendChild(elementFromJSProp(xml,jsitem,'feel', cfNS));
    return i;
}

export function rssItemFrom(jsItem) { return rssItemFrom(jsItem);};

export function rssFrom(channel){
    let xml = document.implementation.createDocument(rssNS, 'rss');
    let ch = xml.createElement('channel');

    ch.appendChild(elementFromJSProp(xml,channel,'title'));
    ch.appendChild(elementFromJSProp(xml,channel,'description'));
    ch.appendChild(elementFromJSProp(xml,channel,'link'));
    ch.appendChild(elementFromJSProp(xml,channel,'image'));
    ch.appendChild(elementFromJSProp(xml,channel,'id', cfNS));

    if(!!channel.home){
        ch.appendChild(((ho)=>{
            let h = xml.createElement('home');
            h.setAttribute('ishome',(!!ho.ishome));

            return h;
        })(channel.home));
    }

    channel.items.forEach((item)=>{
        ch.appendChild(rssitemFrom(item));
    });
    xml.firstChild.appendChild(ch); //firstChild is an "rss" tag
    var serializer = new XMLSerializer();
    var rss = serializer.serializeToString(xml);
    return rss;
}