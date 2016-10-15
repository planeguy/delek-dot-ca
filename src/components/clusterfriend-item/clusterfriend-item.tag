import '../brutal-image/brutal-image.tag!';
import RColor from 'src/vendor/rcolor-esm';
<clusterfriend-item class="clusterfriend-item">
    <article>
        <div class="title" if="{opts.item.title}">{opts.item.title}</div>
        <div class="desc" if="{opts.item.description}">{opts.item.description}</div>
        <div if="{opts.item.image}">
            <brutal-image imagesrc="{opts.item.image}" backgroundcolor="{imagecolor}"></brutal-image>
        </div>
        <div class="date"><small>{opts.item.pubDate}</small></div>
    </article>
    <script>
        this.imagecolor = (new RColor()).get(true);
    </script>
</clusterfriend-item>