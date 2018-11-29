import './new-item.tag';
import newid from '../../vendor/newid.js';
import tweetFromItem from '../tweetFromItem.js';
import peachFromItem from '../peachFromItem.js';
import './edit-app.scss';
<edit-app>
    <form action="" method="POST" enctype="multipart/form-data">
        <div class="item-editor">
            <new-item
                item="{item}"
                photosurl="{opts.photosurl}"
                permaurl="{opts.permaurl}"
                updatefeed="{updateFeed}"
            ></new-item>

            <input type="submit" value="POST" />
        </div>

        <div class="previews">
            <div class="hide">
                <textarea name="feedtext" id="feedtext" ref="feedtext" rows="10" cols="10" ></textarea>
            </div>

            <div>
                <div><input type="checkbox" id="do-tweet" name="do-tweet" value="YES">TWEET</div>
                <textarea name="tweet" id="tweet" ref="tweet" rows="5" cols="10" ></textarea>
            </div>

            <div>
                <div><input type="checkbox" id="do-peach" name="do-peach" value="YES">PEACH</div>
                <textarea name="peach" id="peach" ref="peach" rows="5" cols="10" ></textarea>
            </div>
        </div>
    </form>
    <script>
        this.opts.feed.subscribe('updated',this.update.bind(this));

        this.tcolength = (!!this.opts.tcolength?parseInt(this.opts.tcolength,10):0);

        this.feedInit=()=>{
            this.feed = this.opts.feed.feed;
            this.feed.items.unshift(this.item);

            let maxitems=32;
            if(this.feed['_ephemeral_items']!=undefined && this.feed['_ephemeral_items']['max_items']!=undefined) maxitems = this.feed['_ephemeral_items']['max_items'];
            if (this.feed.items.length>maxitems){
                this.feed.items = this.feed.items.slice(0,maxitems-1)
            }
            this.updateFeed();
        }

        let itemid = newid();
        this.item={
            id:itemid,
            url:this.opts.permaurl+'/#/'+itemid,
            content_text:'',
            external_url:'',
            attachments:[],
            tags:[]
        }

        //when stuff changes update the feed text
        this.updateFeed = ()=>{
            this.refs.feedtext.value=JSON.stringify(this.feed,null,'\t');
            this.refs.tweet.value=tweetFromItem(this.item, this.tcolength);
            this.refs.peach.value=peachFromItem(this.item);
        }

        this.on('update',this.feedInit);
    </script>
</edit-app>