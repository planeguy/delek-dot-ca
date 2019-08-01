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
    console.log(photos);
    if(photos!=undefined){
        if(!Array.isArray(photos))photos=[photos];
        for(i=0;i<photos.length;i++){
            let photopath = path.join(photospath, entry.photoname[i]);
            let p = photos[i];
            let reader = fs.createReadStream(p.path);
            let writer = fs.createWriteStream(path.join(photospath, entry.photoname[i]));
            reader.pipe(writer);
            if(!mfe.attachments) mfe.attachments=[];
            let d = imageSize(p.path);
            mfe.attachments.push({
                url: path.join(photosurlbase, entry.photoname[i]),
                mime_type: p.type,
                width: d.width,
                height: d.height
            });
        }
    }
    mfe.url = `${websitebase}${mfe.id}`;
    return mfe;
}