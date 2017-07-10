import './post-item.tag';
<edit-app>
    <post-item if="{opts.feed.feed!=undefined}" feed="{opts.feed.feed}" photosurl="{opts.photosurl}" permaurl="{opts.permaurl}" ></post-item>
    <script>
        this.opts.feed.subscribe('updated',this.update.bind(this));
    </script>
</edit-app>