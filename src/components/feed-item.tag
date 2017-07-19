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
            margin-top: 1em;
            padding-top:1em;
            font-size:small;
            text-align:right;
            border-top:dashed 0.5vmin;
        }
        .feed-item .ext-url{
            overflow:hidden;
            white-space:nowrap;
            text-overflow: ellipsis;
            font-size:large;
            width:90%;
        }
    </style>
    <article class="feed-item" style="background-color:{backgroundColor};color:{textColor};">
        <item-text text="{opts.item.content_text}"></item-text>
        <item-image each="{image in images}" url="{image.url}"></item-image>
        <div if="{opts.item.external_url!=undefined}" class="ext-url"><a style="color:{textColor};" href="{opts.item.external_url}">{opts.item.external_url}</a></div>
        <div class="metadata" style="border-color:{metadatabordercolor}">
            {opts.item.date_published} || <a style="color:{textColor};" href="{permalink}">{permalink}</a>
        </div>
    </article>
    <script>
        this.backgroundColor=Color((new RColor()).get(true)).saturate(0.5);
        this.textColor=Color(this.backgroundColor).darken(0.25).dark()?'#fff':'#292f33';
        this.metadatabordercolor=Color(this.backgroundColor).negate();

        this.init=()=>{
            //images
            this.images=(this.opts.item.attachments||[]).filter(a=>a.mime_type!=undefined &&(a.mime_type=='image'||a.mime_type.indexOf('image/')===0));
            if(this.opts.item.image!=undefined) this.images.unshift(this.opts.item.image);

            //permalink
            this.permalink=this.opts.item.url;
        }
        this.init();
        this.on('update',this.init);
    </script>
</feed-item>