import '../brutal-image/brutal-image.tag';
import RColor from '../../vendor/rcolor-esm';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

<clusterfriend-item class="clusterfriend-item">
    <article>
        <span if="{opts.item.text}">{opts.item.text} </span><a if="{opts.item.about}" href="{opts.item.about}" class="about">{opts.item.about}</a>
        <div if="{picture}">
            <brutal-image imagesrc="{picture}" backgroundcolor="{imagecolor}"></brutal-image>
        </div>
        <div><small class="date">{opts.item.published}</small> <small><a class="permalink" href="{here+'#'+opts.item.url}">link</a> <span class="even-smaller">technically expires {expires}</span></small></div>
    </article>
    <script>
        this.imagecolor = (new RColor()).get(true);
        if(this.opts.item && this.opts.item.enclosure && this.opts.item.enclosure.type && this.opts.item.enclosure.type.indexOf('image')===0) this.picture = this.opts.item.enclosure.url;
        this.here = window.location.protocol+'//'+window.location.host+window.location.pathname;
        this.expires = this.opts.item['ephemeral-expiry']?distanceInWordsToNow(this.opts.item['ephemeral-expiry'],{includeSeconds:true,addSuffix:true}):'9/11 never forget';
    </script>
</clusterfriend-item>