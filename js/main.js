// Add the Map


// var map = L.map('map', {
//   center: [1.344896, 103.8],
//   zoom: 11
// });

var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2
});

var bounds = [[0,0], [2000,1200]]
var canvas = L.imageOverlay('js/images/blank canvas.png', [[-2000,-1200], [4000, 2400]]);
var image = L.imageOverlay('js/images/jj_card.png', bounds);

// cover the main map
var cover = L.imageOverlay('js/images/blank canvas.png', bounds);
// image 2: 577 x 715
var image2 = L.imageOverlay('js/images/Answer Key (Final).png', [[0,0], [715, 577]]);
// image 3: 1131 x 1600
var image3 = L.imageOverlay('js/images/bookclub.jpeg', [[200,34.5], [1800, 1165.5]]);

canvas.addTo(map)
image.addTo(map);
map.fitBounds(bounds);
map.setZoom(-1.75);


// messages 
var myMarkers=makeMarkers(messages);
console.log(myMarkers)
plotMarkers(myMarkers)




