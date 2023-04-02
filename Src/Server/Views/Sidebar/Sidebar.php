<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link rel="stylesheet" href="/Bootstrap/css/bootstrap.min.css">
    <style>
        :root {
            --font-color: white;
            --font-color-fade: #ffffffa3;
            --background-color: black;
            --background-search-color: #171717;
            --background-dark-color: #1d1d1d;
            --background-light-color: #282828;
            --spotify-green: #0eb367;
        }
        #sidebar {
            position: sticky;
            top: 0;
            left: 0;
        }
        #sidebar {
            width: 280px;
            background: var(--background-color);
            height: 100vh;
            padding: 20px;
        }
        #sidebar ul {
            list-style-type: none;
            padding-top: 40px;
        }
        #sidebar li {
            font-size: 16px;
            font-weight: bold;
            padding-bottom: 20px;
        }
        #sidebar li:hover {
            cursor: pointer;
            color: var(--font-color);
        }
        #sidebar .not-clicked {
            color: var(--font-color-fade);
        }
        #sidebar .clicked {
            color: var(--font-color);
        }
        #sidebar li span {
            padding-left: 20px;
        }

    </style>
</head>
<body>
<div id="sidebar">
    <div style="width: 65%">
        <img src="/Src/Client/img/Premium/spotify_logo.png" alt="spotify-logo" style="width: 100%">
    </div>
    <ul>
        <li class="clicked">
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
        </li>
        <li class="not-clicked">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Search</span>
        </li>
        <li class="not-clicked">
            <i class="fa-solid fa-bookmark"></i>
            <span>Your library</span>
        </li>
    </ul>
</div>

<div style="height: 1000px">

</div>
</body>
<script>
    document.querySelectorAll("#sidebar li").forEach(element => {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
            // Turn clicked li to not-clicked
            if (element.classList.contains('not-clicked')) {
                let clicked = element.closest("ul").querySelector('.clicked');
                clicked.classList.remove('clicked');
                clicked.classList.add('not-clicked');

                element.classList.remove('not-clicked');
                element.classList.add('clicked');
            }
        });
    });
</script>
</html>
