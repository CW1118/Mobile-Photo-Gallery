// figures out which zoom to apply and triggers the animation function
function zoom(action) {
    // get current column-count
    var currentZoom = window.getComputedStyle(gallery).getPropertyValue("column-count");
    var zoomNumber = Number(currentZoom.substr(currentZoom.length - 1));
    var zoomOutButton = document.getElementById("zoomOut");
    var zoomOutText = document.getElementById("footerText").children[3];
    var zoomInButton = document.getElementById("zoomIn");
    var zoomInText = document.getElementById("footerText").children[2];

    // zoom out
    if (action == "out") {
        console.log("zoom out");
        if (zoomNumber == 4) {
            zoomNumber = 6;
            zoomOutButton.classList.add("disabled");
            zoomOutText.classList.add("disabled");
            zoomAnimation(zoomNumber);
        } else if (zoomNumber == 2) {
            zoomNumber = 4;
            zoomInButton.classList.remove("disabled");
            zoomInText.classList.remove("disabled");
            zoomAnimation(zoomNumber);
        }
    }
    // zoom in
    else {
        console.log("zoom in");
        if (zoomNumber == 4) {
            zoomNumber = 2;
            zoomInButton.classList.add("disabled");
            zoomInText.classList.add("disabled");
            zoomAnimation(zoomNumber);
        } else if (zoomNumber == 6) {
            zoomNumber = 4;
            zoomOutButton.classList.remove("disabled");
            zoomOutText.classList.remove("disabled");
            zoomAnimation(zoomNumber);
        }
    }
    // update the gallery variable with the new gallery element
    gallery = document.getElementById("gallery");
}

function zoomAnimation(zoomNumber) {

    var newGallery = gallery.cloneNode(true);
    var newTiles = newGallery.getElementsByClassName("tile");
    document.body.insertBefore(newGallery, overlay);
    // update the ID of the old gallery
    gallery.id = "oldGallery";
    // update the column-count for the new gallery
    newGallery.setAttribute("style", "column-count:" + zoomNumber + ";");

    for (var i = 0; i < tiles.length; i++) {
        tiles[i].setAttribute("style", "animation:zoomOut 0.4s;animation-fill-mode:forwards;");
    }

    setTimeout(function () {
        // TODO disable the zoom buttons during this time

        // deletes the old gallery
        document.body.removeChild(document.getElementById("oldGallery"));
    }, 400)

    for (var i = 0; i < newTiles.length; i++) {
        newTiles[i].setAttribute("style", "opacity:0;animation:zoomIn 0.5s;animation-delay:0.4s;animation-fill-mode:forwards;");
    }
}

function openPage() {
    var currentImage = document.getElementsByClassName("swiper-pagination-current")[0].innerHTML;
    var currentImageNum = parseInt(currentImage) - 1;
    hiddenAnchor.href = imageData[currentImageNum]["Product Jump Link"];
    hiddenAnchor.click();
}

function openNativeViewer() {
    var currentImage = document.getElementsByClassName("swiper-pagination-current")[0].innerHTML;
    var currentImageNum = parseInt(currentImage) - 1;
    hiddenAnchor.href = imageData[currentImageNum]["Media Jump Link"];
    hiddenAnchor.click();
}

function stackAdd() {
    var currentImage = document.getElementsByClassName("swiper-pagination-current")[0].innerHTML;
    var currentImageNum = parseInt(currentImage) - 1;
    hiddenAnchor.href = imageData[currentImageNum]["Product Jump Link"] + "/addToStack";
    hiddenAnchor.click();
}

function addAll() {
    var productList = [];
    for (i = 0; i < imageData.length; i++) {
        var jumpLink = imageData[i]["Product Jump Link"];
        var productId = jumpLink.replace("/product/", "");
        productList.push(productId);
    }
    var finalJumpLink = "/product/" + productList.join(",") + "/addToStack";
    hiddenAnchor.href = finalJumpLink;
    hiddenAnchor.click();
}

function toggleFooter(action) {
    if (action == "hide") {
        document.getElementById("footer").classList.add("slideDown");
        document.getElementById("showFooterIcon").classList.remove("slideRight");
    } else {
        document.getElementById("footer").classList.remove("slideDown");
        document.getElementById("showFooterIcon").classList.add("slideRight");
    }
}
