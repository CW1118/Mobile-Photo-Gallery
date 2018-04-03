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
            // Prevent Body Scrolling
            document.body.setAttribute("style", "overflow:hidden");
            document.body.addEventListener("touchmove", touchStop, false);
            // hide the footer
            document.getElementById("footer").classList.add("slideDown");
            document.getElementById("showFooterIcon").classList.add("slideRight");
            
            setTimeout(function() {
                //animate the controls sliding out
            document.getElementById("viewerOptions").classList.remove("slideRight");
            document.getElementsByClassName("swiper-pagination")[0].classList.remove("slideDown");
            }, 500)
        }
        function viewerUIToggle() {
            console.log("viewerUIToggle()");
            var viewerOptions = document.getElementById("viewerOptions");
            var paginationUI = document.getElementsByClassName("swiper-pagination")[0];
            
            viewerOptions.classList.toggle('slideRight');
            paginationUI.classList.toggle('slideDown');
        }
        function touchStop() {
                event.preventDefault();
                event.stopPropagation();
        }
        function closeViewer() {
            //while (swiperImages.hasChildNodes()) {   
                //swiperImages.removeChild(swiperImages.firstChild);
            //}
            overlay.classList.remove("show");
            overlay.removeAttribute("style");
            document.body.removeAttribute("style");
            document.body.removeEventListener("touchmove", touchStop);
            document.getElementById("showFooterIcon").classList.remove("slideRight");
        }