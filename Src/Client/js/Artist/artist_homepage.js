// add click listener for favorite icon
let fav_icons = document.querySelectorAll('.favorite-icon');

fav_icons.forEach(element => {
    element.addEventListener('click', (e) => {
        e.stopPropagation();

        // Traverse all element's children
        for (let i = 0; i < element.children.length; i++) {
            let child = element.children[i];
            if (child.classList.contains('clicked')) {
                child.classList.remove('clicked');
                child.classList.add('not-click');
                // if icon favorite is not clicked show that song id
                if (child.classList.contains("fa-solid")) {
                    console.log("Remove: " + child.closest("tr").getAttribute("id"));
                }
            }
            else if (child.classList.contains('not-click')) {
                child.classList.remove('not-click');
                child.classList.add('clicked');
                // if icon favorite is click show that song id
                if (child.classList.contains("fa-solid")) {
                    console.log("Add: " + child.closest("tr").getAttribute("id"));
                }
            }
        }
    });
});

// When click a song it will return a song id
let songRows = document.querySelectorAll("#popular-playlist tr");
songRows.forEach(element => {
   element.addEventListener('click', function (e) {
      e.stopPropagation();
      console.log(element.getAttribute('id'));
   });
});

let popularRows = document.querySelectorAll("#popular-releases .song-wrapper");
popularRows.forEach(element => {
    element.addEventListener('click', function (e) {
        e.stopPropagation();
        console.log(element.getAttribute('id'));
    });
});

let albumRows = document.querySelectorAll("#album .song-wrapper");
albumRows.forEach(element => {
    element.addEventListener('click', function (e) {
        e.stopPropagation();
        console.log(element.getAttribute('id'));
    });
});