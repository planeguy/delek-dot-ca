//import './item-image.css';
<item-image>
    <style>
        .item-image {
            margin:0;
            width:auto;
            height:90vh;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-position: top center;
            position: relative;
            overflow: hidden;
            background-size: auto 100vh;
        }
        .item-image .image {
            visibility:hidden;
            width:auto;
            height:100vh;
            margin:0;
        }
    </style>
    <div class="item-image" style="background-image:url({opts.url});background-color:transparent;">
        <img class="image" src="{opts.url}" />
    </div>
</item-image>