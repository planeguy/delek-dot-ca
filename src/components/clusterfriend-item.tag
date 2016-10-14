<clusterfriend-item>
    <article>
        <div class="item_title" if="{opts.item.title}">{opts.item.title}</div>
        <div class="item_desc" if="{opts.item.description}">{opts.item.description}</div>
        <div if="{!!opts.item.image}" class="item_image" style="background-image:url({opts.item.image});">
            <img src="{opts.item.image}"/>
        </div>
        <div class="item_date"><small>{opts.item.pubDate}</small></div>
    </article>
    <script>
        console.log(this.opts.item);
    </script>
</clusterfriend-item>