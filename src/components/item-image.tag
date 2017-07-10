//import './item-image.css';
<item-image>
    <style>
        .item-image {
            margin:0;
            padding:0;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-position: top center;
            position: relative;
            overflow: hidden;
        }
        .item-image .image {
            visibility:hidden;
            margin:0;
        }
    </style>
    <div class="item-image" style="background-image:url({opts.url});background-color:transparent;">
        <img class="image" src="{opts.url}" />
    </div>
</item-image>