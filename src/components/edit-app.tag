<edit-app>
    <post-item feed="{opts.feed.feed}" photosurl="{opts.photosurl}" permaurl="{opts.permaurl}" ></post-item>
    <script>
        this.opts.feed.subscribe('updated',this.update.bind(this));
    </script>
</edit-app>