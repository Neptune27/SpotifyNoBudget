import 'https://cdn.interactjs.io/v1.9.20/actions/resize/index.js';
// @ts-ignore
import interact from 'https://cdn.interactjs.io/v1.9.20/interactjs/index.js';
import {getRecentlyAdded} from "./Home.js";
interact('#sidebar').resizable({
    // resize from all edges and corners
    edges: { left: false, right: true, bottom: false, top: false },
    listeners: {
        move(event) {
            const target = event.target;
            let x = (parseFloat(target.getAttribute('data-x')) || 0);
            let y = (parseFloat(target.getAttribute('data-y')) || 0);
            // update the element's style
            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';
            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += event.deltaRect.top;
        }
    },
});

const handleSearch = async () => {
    const paneElem = document.getElementById("otherPane")
    const fetchPage = await fetch("/Play/Search")
    const cont = await fetchPage.text()
    paneElem.innerHTML = cont

}

const mainElem = document.querySelector("main");
document.querySelectorAll("#sidebar li").forEach(element => {
    console.log(element)
    element.addEventListener('click', e => {
        e.stopPropagation();
        // Turn clicked li to not-clicked
        mainElem.setAttribute("data-sidebar", element.id)

        switch (element.id) {
            case "Home":
                getRecentlyAdded();
                break;
        }

        if (element.classList.contains('not-clicked')) {
            let clicked = element.closest("ul").querySelector('.clicked');
            clicked.classList.remove('clicked');
            clicked.classList.add('not-clicked');
            element.classList.remove('not-clicked');
            element.classList.add('clicked');
        }
    });
});



//# sourceMappingURL=Sidebar.js.map