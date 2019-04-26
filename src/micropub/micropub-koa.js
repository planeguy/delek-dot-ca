const jsonfile = require('jsonfile');
const itemFromEntry = require('./ddo.js').itemFromEntry;
const peach = require('./peachFromItem.js').peach;
const tweet = require('./tweetFromItem.js').tweet;

const SYNDICATION_TARGETS = {
    'peach': {
        uid: 'peach', name: 'peach', fn: peach
    },
    'twitter': {
        uid: 'twitter', name: 'twitter', fn: tweet
    }
};

function syndicate(item) {
    let results = {};
    item.syndicate_to.forEach(posse => {
        let target = SYNDICATION_TARGETS[posse];
        if (!!target && target.fn) {
            try {
                console.log(item);
                results[posse] = target.fn(item);
            } catch (e) {
                console.log(e)
            }
        }
    });
}

module.exports.micropubAddToJsonfeed = function micropubAddToJsonfeed(jsonfeedpath) {
    return async function micropubAdd(context, next) {
        //accept a micropub add request
        try {
            let db = await jsonfile.readFile(jsonfeedpath);
            let item = itemFromEntry(context.request.body, context.request.files.photo);
            db.items.push(item);
            await jsonfile.writeFile(jsonfeedpath, db, { spaces: 2 });
            context.status = 200;

            let itemPlusPhotos = { ...item, photos: context.request.files.photo };
            syndicationResults = syndicate(itemPlusPhotos);
            context.body = syndicationResults;
            await next();
        } catch (e) {
            context.status = 500;
        }
    }
}

// export async function micropubDelete(context, next) {
//     let mpr = context.request.body;
//     //if action=='delete'
//     //  get the post the url belongs to
//     //  remove it
//     //  re-save the microformats2 json
// }

// export async function micropubUpdate(context, next) {
//     let mpr = context.request.body;
//     //accept a JSON micropub request
//     //if action=='update'
//     //  get the post the url corresponds to
//     switch (mpr.url) {
//         case 'replace':
//             break;
//         case 'add':
//             break;
//         case 'delete':
//             break;
//         default:
//             break;
//     }
//     //  re-save the microformats2 json
//     await next();
// }