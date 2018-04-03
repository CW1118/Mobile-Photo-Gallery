// figures out which zoom to apply and triggers the animation function
        function zoom(action) {
            // get current column-count
            var currentZoom = window.getComputedStyle(gallery).getPropertyValue("column-count");
            var zoomNumber = Number(currentZoom.substr(currentZoom.length - 1));
            
            // zoom out
            if (action == "out") {
                console.log("zoom out");
                if (zoomNumber == 4) {
                    zoomNumber = 6;
                    zoomAnimation(zoomNumber);
                }
                else if (zoomNumber == 2) {
                    zoomNumber = 4;
                    zoomAnimation(zoomNumber);
                }
            }
            // zoom in
            else {
                console.log("zoom in");
                if (zoomNumber == 4) {
                    zoomNumber = 2;
                    zoomAnimation(zoomNumber);
                }
                else if (zoomNumber == 6) {
                    zoomNumber = 4;
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
            newGallery.setAttribute("style", "column-count:"+zoomNumber+";");
            
            for (var i=0; i<tiles.length; i++) {
                tiles[i].setAttribute("style", "animation:zoomOut 0.4s;animation-fill-mode:forwards;");
            }
            
            setTimeout(function() {
                // TODO disable the zoom buttons during this time
                
                // deletes the old gallery
                document.body.removeChild(document.getElementById("oldGallery"));
            },400)
 
            for (var i=0; i<newTiles.length; i++) {
                newTiles[i].setAttribute("style", "opacity:0;animation:zoomIn 0.5s;animation-delay:0.4s;animation-fill-mode:forwards;");
            }
    
                
                                 }