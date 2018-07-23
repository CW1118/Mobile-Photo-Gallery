// Launch Swiper Viewer
function view(image) {
    console.log("view()");
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        initialSlide: parseInt(image.dataset.num),
    });
    // Show Viewer
    overlay.classList.add("show");
    overlay.classList.remove("hide");
    // Prevent Body Scrolling
    document.body.setAttribute("style", "overflow:hidden");
    overlay.addEventListener("touchmove", function(e) {
        e.preventDefault();
}, false);
    // hide the footer
    document.getElementById("footer").classList.add("slideDown");
    document.getElementById("showFooterIcon").classList.add("slideRight");

    setTimeout(function () {
        //animate the controls sliding out
        document.getElementById("viewerOptions").classList.remove("slideRight");
        document.getElementsByClassName("swiper-pagination")[0].classList.remove("slideDown");
        var imageTitles = document.getElementsByClassName("title");
        for (var i = 0; i < imageTitles.length; i++) {
            imageTitles[i].classList.remove('slideUp');
        }
    }, 500)
}

function viewerUIToggle() {
    console.log("viewerUIToggle()");
    var viewerOptions = document.getElementById("viewerOptions");
    var paginationUI = document.getElementsByClassName("swiper-pagination")[0];
    var imageTitles = document.getElementsByClassName("title");

    viewerOptions.classList.toggle('slideRight');
    paginationUI.classList.toggle('slideDown');

    for (var i = 0; i < imageTitles.length; i++) {
        imageTitles[i].classList.toggle('slideUp');
    }
}

function touchStop() {
    event.preventDefault();
    event.stopPropagation();
}

function closeViewer() {
    overlay.classList.remove("show");
    swiperImages.classList.add("hide");
    setTimeout(function () {
        //allow time for the overlay fade out to be seen
        overlay.classList.add("hide");
        swiperImages.classList.remove("hide");
    }, 500)
    overlay.removeAttribute("style");
    document.body.removeAttribute("style");
    document.body.removeEventListener("touchmove", touchStop);
    document.getElementById("showFooterIcon").classList.remove("slideRight");
    sessionStorage.setItem("lastImageNum", "null");
}

// reloads the page on screen rotate to prevent any issues
window.onorientationchange = function () {
    if (overlay.classList.contains("show")) {
        var lastImageNum = document.getElementsByClassName("swiper-pagination-current")[0].innerHTML;
        sessionStorage.setItem("lastImageNum", parseInt(lastImageNum));
        window.location.reload();
    } else {
        window.location.reload();
    }
};

// UNFINISHED IMAGE ZOOM FEATURE
// var image = document.getElementsByClassName('swiper-slide');
//var baseScale = 1;

//image.addEventListener('gesturechange',function(e){

    //if(e.scale>1){
        //zoom in 
        //increase the size of image according to the e.scale
       // var newScale = "transform: " + baseScale + 0.1;
       // image.setAttribute("style", newScale);
  //  }

  //  else if(e.scale<1){
        //zoom out 
        //decrease the size of image according to the e.scale
  //  }
//});
