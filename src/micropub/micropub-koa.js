const jsonfile = require('jsonfile');
const fs = require('fs');
const path = require('path');
const newid = require('uuid/v4');

const photospath = (process.env.PHOTOS_PATH || './photos');

function entry(entry, photos, db) {
    photos.forEach(p => {
        let file = p;
        let reader = fs.createReadStream(file.path);
        let writer = fs.createWriteStream(path.join(photospath, file.name));
        reader.pipe(writer);
    });
    let mfe = {
        id: newid(),
        content_text: entry.content,
        external_url: entry['bookmark-of'],
        date_published: new Date(),
        tags: entry.category
    }
    mfe.attachments = photos.map(p => ({
        url: path.join(photospath, p.name),
        mime_type: 'image/png'
    }));
    db.items.push(mfe);
}

export function micropubAddToJsonfeed(jsonfeedpath) {
    return async function micropubAdd(context, next) {
        //accept a micropub add request
        let db = await jsonfile.readFile(jsonfeedpath);
        entry(context.request.body, context.request.files.photo, db);
        try {
            await jsonfile.writeFile(jsonfeedpath, db, { spaces: 2 });
            await next();
        } catch (e) {
            context.status = 500;
        }
    }
}

export async function micropubDelete(context, next) {
    let mpr = context.request.body;
    //if action=='delete'
    //  get the post the url belongs to
    //  remove it
    //  re-save the microformats2 json
}

export async function micropubUpdate(context, next) {
    let mpr = context.request.body;
    //accept a JSON micropub request
    //if action=='update'
    //  get the post the url corresponds to
    switch (mpr.url) {
        case 'replace':
            break;
        case 'add':
            break;
        case 'delete':
            break;
        default:
            break;
    }
    //  re-save the microformats2 json
    await next();
}