<item-text>
    <style>
        .item-text.plain{
            font-size:3vmin;
        }
        .item-text.big{
            font-size:5vmin;
        }
        .item-text.bigger{
            font-size:10vmin;
        }
        .item-text.uge{
            font-size:15vmin;
        }
    </style>
    <span class="item-text {size} e-content">{opts.text}</span>
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