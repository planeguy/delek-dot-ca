import './item-image.tag';
import './item-text.tag';
import Color from 'color'
import RColor from '../vendor/rcolor-esm.js';
<feed-item>
    <article class="feed-item h-entry" style="background-color:{backgroundColor};color:{textColor};">
        <div class="e-content">
            <item-text text="{opts.item.content_text}"></item-text>
            <item-image each="{image in images}" url="{image.url}"></item-image>
            <div if="{opts.item.external_url!=undefined}" class="ext-url"><a style="color:{textColor};" href="{opts.item.external_url}">{opts.item.external_url}</a></div>
        </div>
        <div class="metadata" style="border-color:{metadatabordercolor}">
            <time class="dt-published" datetime="{opts.item.date_published}">{opts.item.date_published}</time> || <a class="u-url" style="color:{textColor};" href="{permalink}">{permalink}</a>
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