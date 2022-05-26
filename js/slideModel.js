/* ================================
Slide Model --> cannot remove original image with markers
================================ */

$('#cardMap').click(function(e) {
	map.removeLayer(image2);
	map.removeLayer(image3);
	map.removeLayer(cover);
	myMarkers.forEach(function(marker){marker.setStyle({fillOpacity: 0})});
	map.setView([1000,600], -1.75, { animation: true });   
	document.getElementById('showMarkers').checked = false  // reset checkbox

	
});

$('#showMarkers').click(function(e) {
	const cb = document.getElementById('showMarkers');
	console.log(cb.checked);
	if(cb.checked){
		myMarkers.forEach(function(marker){marker.setStyle({fillOpacity: 0.5})});
	} else {
		myMarkers.forEach(function(marker){marker.setStyle({fillOpacity: 0})});

	}
});


$('#hiddenMeanings').click(function(e) {
 	map.removeLayer(image3);
 	cover.addTo(map);

 	image2.addTo(map);
	
	map.setView([440, 300], 0.2, { animation: true }); 
	document.getElementById('showMarkers').checked = false
});

$('#bookclub').click(function(e) {
 	map.removeLayer(image2);
 	cover.addTo(map);
 	image3.addTo(map);
	
	map.setView([1000,600], -1.5, { animation: true }); 
	document.getElementById('showMarkers').checked = false
});




