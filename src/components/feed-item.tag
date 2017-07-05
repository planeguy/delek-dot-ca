import './item-image.tag';
import './item-text.tag';
import Color from 'color'
import RColor from '../vendor/rcolor-esm.js';
<feed-item>
    <style>
        .feed-item{
            margin:0;
            padding:1em;
        }
        .feed-item .metadata{
            font-size:small;
        }
    </style>
    <article class="feed-item" style="background-color:{backgroundColor};color:{textColor};">
        <item-text text="{opts.item.content_text}"></item-text>
        <item-image each="{image in images}" url="{image.url}"></item-image>
        <div class="metadata">
            {opts.item.date_published} || <a style="color:{textColor};" href="{permalink}">{permalink}</a>
        </div>
    </article>
    <script>
        this.backgroundColor=Color((new RColor()).get(true)).saturate(0.5);
        this.textColor=Color(this.backgroundColor).darken(0.25).dark()?'#fff':'#292f33';

        this.init=()=>{
            //images
            this.images=(this.opts.item.attachments||[]).filter(a=>a.mime_type=='image'||a.mime_type.indexOf('image/')===0);
            if(this.opts.item.image!=undefined) this.images.unshift(this.opts.item.image);

            //permalink
            this.permalink=this.opts.item.url;
        }
        this.init();
        this.on('update',this.init);
    </script>
</feed-item>