const fs = require('fs');
const path = require('path');
const newid = require('ulid').ulid;
const imageSize = require('image-size');

const photospath = (process.env.PHOTOS_PATH || './photos');
const photosurlbase = (process.env.PHOTOS_URL_BASE || './photos');
const websitebase = (process.env.WEBSITE_BASE || 'https://delek.org/#/');

module.exports.itemFromEntry = function itemFromEntry(entry, photos) {
    let tags, syndicate_to;
    if(entry.category){
        if(Array.isArray(entry.category)){
            if(entry.category.length>0) tags = entry.category;
        } else tags=[entry.category];
    }
    if(entry['mp-syndicate-to']){
        if(Array.isArray(entry['mp-syndicate-to'])){
            if(entry['mp-syndicate-to'].length>0) syndicate_to = entry['mp-syndicate-to'];
        } else syndicate_to=[entry['mp-syndicate-to']];
    }
    let mfe = {
        id: newid(),
        content_text: entry.content,
        external_url: entry['bookmark-of'],
        date_published: new Date(),
        tags,
        syndicate_to
    }
    if(photos!=undefined){
        if(!Array.isArray(photos))photos=[photos];
        photos.forEach(p => {
            let file = p;
            let reader = fs.createReadStream(file.path);
            let writer = fs.createWriteStream(path.join(photospath, file.name));
            reader.pipe(writer);
        });
        mfe.attachments = photos.map(p => {
            let d = imageSize(p.path);
            return {
                url: path.join(photosurlbase, p.name),
                mime_type: p.type,
                width: d.width,
                height: d.height
            };
        });
    }
    mfe.url = `${websitebase}${mfe.id}`;
    return mfe;
}