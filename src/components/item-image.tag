//import './item-image.css';
<item-image>
    <style>
        .item-image {
            margin:0;
            padding:0;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-position: center center;
            position: relative;
            overflow: hidden;
            height:90vh;
            width:auto;
            background-size: auto 100vh;
        }
        .item-image .image {
            visibility:hidden;
            margin:0;
            height:90vh;
            width:auto;
        }
    </style>
    <div class="item-image" style="background-image:url({opts.url});background-color:transparent;">
        <img class="image" src="{opts.url}" />
    </div>
</item-image>