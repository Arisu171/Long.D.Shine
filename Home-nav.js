let dragging = false;

function makeElementDraggable(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    el.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        dragging = false;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        dragging = true;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;

        const currentY = el.offsetTop;
        const windowHeight = window.innerHeight;
        let newY = currentY;

        if (currentY < 10) {
            newY = 10;
        } else if (currentY > (windowHeight - el.offsetHeight - 10)) {
            d
            newY = windowHeight - el.offsetHeight - 10;
        }

        const windowWidth = window.innerWidth;
        const currentX = el.offsetLeft;
        let newX;

        if (currentX < (windowWidth / 2)) {
            newX = 10;
        } else {
            newX = windowWidth - el.offsetWidth - 10;
        }

        setTimeout(() => {
            el.style.left = newX + "px";
            el.style.top = newY + "px";
            dragging = false;
        }, 100);
    }
}

//hiển thị list khi click
function shownav() {
    if (!dragging) {
        const elements = document.querySelectorAll('.navhide');
        elements.forEach(function (element) {
            if (element.classList.contains('show')) {
                element.classList.remove('show');
                element.classList.add('hide');
            } else {
                element.classList.add('show');
                element.classList.remove('hide');
            }
        });
    }
}

makeElementDraggable(document.getElementById("navbutt"));
