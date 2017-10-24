import './new-item.tag';
import newid from '../vendor/newid.js';
import tweetFromItem from '../tweetFromItem.js';
<edit-app>
    <style>
        .raw-json {
            display:flex;
            flex-flow:column;
            justify-content:center;
            align-items:stretch;
            border: dashed .01em black;
            margin: 1em;
            padding:0.25em;
        }
        .item-editor {
            border:double 2vmin black;
            margin: 1em;
            padding: 2em;
        }
    </style>
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

        <div class="raw-json">
            <textarea name="feedtext" id="feedtext" ref="feedtext" rows="10" cols="40" ></textarea>
            <textarea name="tweet" id="tweet" ref="tweet" rows="10" cols="40" ></textarea>
        </div>
    </form>
    <script>
        this.opts.feed.subscribe('updated',this.update.bind(this));

        this.feedInit=()=>{
            this.feed = this.opts.feed.feed;
            this.feed.items.unshift(this.item);

            let maxitems=25;
            if(this.feed['_ephemeral_items']!=undefined && this.feed['_ephemeral_items']['max_items']!=undefined) maxitems = this.feed['_ephemeral_items']['max_items'];
            if (this.feed.items.length>maxitems){
                this.feed.items.slice(0,maxitems-1)
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
            this.refs.feedtext.value=JSON.stringify(this.feed);
            this.refs.tweet.value=tweetFromItem(this.item);
        }

        this.on('update',this.feedInit);
    </script>
</edit-app>