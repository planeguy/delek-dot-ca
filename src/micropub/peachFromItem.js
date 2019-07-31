/*
{
    id:itemid,
    url:this.opts.permaurl+'/#/'+itemid,
    content_text:'',
    external_url:'',
    attachments:[],
    tags:[]
}
*/
const request = require('request-promise');

function peachFromItem(item, posselinkback) {
    let peachmessage = [
        {
            type: 'text',
            text: `${item.content_text} ${item.external_url} ${posselinkback ? item.url : ''}`.replace(/\s+/g, ' ').trim()
        }
    ];
    if (item.attachments != undefined) {
        item.attachments.forEach(a => {
            peachmessage.push({
                type: "image",
                width: a.width,
                height: a.height,
                src: a.url
            });
        });
    }
    return JSON.stringify(peachmessage);
}

class PeachConnection {
    constructor(email, password) {
        this.email = email;
        this.pasword = password;
    }
    login() {
        return request({
            uri: 'https://v1.peachapi.com/login',
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: this.email,
                password: this.password
            }),
            json: true
        }).then(rj => {
            if (rj.success !== 1) throw new Error('Peach login failed');
            return rj.data.streams[0].token;
        });
    }
    async peach(message) {
        let bearer = await this.login();
        return request({
            uri: 'https://v1.peachapi.com/post',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${bearer}`
            },
            body: JSON.stringify(message),
            json: true
        });
    }
}

module.exports.peach = async function peach(item) {
    let pc = new PeachConnection(
        process.env.PEACH_EMAIL,
        process.env.PEACH_PASSWORD
    );
    return await pc.peach(peachFromItem(item));
}