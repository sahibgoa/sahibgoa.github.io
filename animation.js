function animateInfoBoxes() {
    let boxes = document.getElementsByClassName('image');
    for (let i = 0; i < boxes.length; ++i) {
        boxes[i].addEventListener("mouseover", blurBox, false);
        boxes[i].addEventListener("mouseout", removeBlurBox, false);
    }
}

function blurBox() {
    let boxes = document.getElementsByClassName('image');
    for (let i = 0; i < boxes.length; ++i) {
        if (boxes[i] != this) {
            boxes[i].setAttribute("style", "-webkit-filter: blur(10px)");
        }
    }
}

function removeBlurBox() {
    let boxes = document.getElementsByClassName('image');
    for (let i = 0; i < boxes.length; ++i) {
        boxes[i].setAttribute("style", "-webkit-filter: blur(0px)");
    }
}