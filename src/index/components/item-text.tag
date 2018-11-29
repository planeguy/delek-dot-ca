import './item-text.scss';
<item-text>
    <span class="item-text {size} p-name">{opts.text}</span>
    <script>
        function getSize(txt){
            if(txt===undefined) return 'no-text';
            if(txt.length>140) return 'plain';
            if(txt.length>75) return 'big';
            if(txt.length>30) return 'bigger';
            return 'uge';
        }
        this.size=getSize(this.opts.text);
    </script>
</item-text>