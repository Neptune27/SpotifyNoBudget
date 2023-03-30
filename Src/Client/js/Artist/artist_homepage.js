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
            }
            else if (child.classList.contains('not-click')) {
                child.classList.remove('not-click');
                child.classList.add('clicked');
            }
        }
    });
});