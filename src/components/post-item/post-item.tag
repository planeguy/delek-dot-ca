import Item from '../../app/model/Item';
import Feed from '../../app/model/Feed';
import {newid} from '../../app/clusterfriend-common';
import loadImage from '../../vendor/load-image';
import moment from 'moment';

<post-item>
    <style>
        .photo {
            border:solid blue 2px;
            min-width:10mm;
            min-height:10mm;
        }
        .wide-load>* {
            width:100%;
        }
    </style>
    <div class="editor">
        <form action="{opts.formaction}" method="POST" enctype="multipart/form-data">
            <div class="wide-load">
                <label for="text">TEXT</label><br/>
                <input name="text" id="text" type="text" oninput="{onInput}"/>
            </div>
            <div class="wide-load">
                <label for="text">ABOUT</label><br/>
                <input name="about" id="about" type="url" oninput="{onInput}"/>
            </div>
            <div class="wide-load">
                <label for="text">REPLY</label><br/>
                <input name="reply" id="reply" type="url" oninput="{onInput}"/>
            </div>
            <div class="wide-load">
                <label for="text">FEELS</label><br/>
                <input name="feels" id="feels" type="text" oninput="{onInput}"/>
            </div>
            <div onclick="{onSelectPhoto}" class="looks-clickable wide-load">
                <label for="text">PHOTO</label><br/>
                <img src="{photo}" class="photo"/>
            </div>
            <input type="file" accept="image/*" name="itemphoto" id="itemphoto" ref="itemphoto" style="display:none" />
            <div><input type="submit" value="POST" /></div>
            <textarea name="feedtext" id="feedtext" ref="feedtext" rows="10" cols="40" ></textarea>
            <div><input type="reset" value="RESET" /></div>
        </form>
    </div>
    <script>
        //set up new item at top of feed
        this.itemid = newid();
        this.feed = this.opts.feed || new Feed();
        this.item=new Item({
            url:this.opts.feedurl + '#' + this.itemid
        });
        this.feed.items.unshift(this.item);

        this.trims = {
            ephemeral: function trimEphemeralFeed(feed,exceptions=[],date){
                feed.items = feed.items.filter((i)=>exceptions.indexOf(i)>=0||new Date(i['ephemeral-expiry'])>=date);
            },
            rolling: function trimRollingFeed(feed,exceptions=[]){
                feed.items.sort((l,r)=>l.published<=r.published);
                feed.items = feed.items.slice(0,feed['items-management'].rolling['page-size']||25);
            }
        };

        //when stuff changes update the feed text
        this.updateItem = ()=>{
            let now = new Date();
            this.trims[Object.getOwnPropertyNames(this.feed['items-management'])[0]](this.feed,[this.item],now);
            this.item.published=now;
            this.item['ephemeral-expiry']=moment(now).add(moment.duration(this.feed['items-management'].ephemeral.ttl||'P90D')).toDate();
            this.refs.feedtext.value=JSON.stringify(this.feed);
        }

        //when a text field is changed, update
        this.onInput = (e)=>{
            let id=e.currentTarget.id;
            this.item[id]=e.currentTarget.value;
            this.updateItem();
        }

        this.onSelectPhoto = (e)=>this.refs.itemphoto.click();

        this.on('mount',()=>{
            this.updateItem();
            this.refs.itemphoto.addEventListener('change',(e)=>{
                let photofile = e.currentTarget.files[0];
                this.item.enclosure = {
                    url:this.opts.photosurl+'/'+photofile.name,
                    type:photofile.type
                };
                this.updateItem();
                loadImage(photofile).then((p)=>{
                    this.photo=p;
                    this.update()
                });
            });
        });
    </script>
</post-item>
