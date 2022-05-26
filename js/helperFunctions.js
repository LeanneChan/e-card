/* LOAD DATA FUNCTIONS*/
var create_marker = function(row){
    var lat = row.geometry.coordinates[1];
    var lng = row.geometry.coordinates[0];
    var name = row.properties.Name;
    var msg = row.properties.Message;
    var meaning = row.properties.Meaning;
    var radius = 15;
    var pathOpts = {'radius': radius, 'fillColor': '#FFFFFF', 'fillOpacity':0, 'stroke': false, 
                    'pane': 'overlayPane'};
    var marker = L.circleMarker([lat, lng], pathOpts).bindPopup("<b>FP: </b>"+name+"</br> <b>Description: </b>"+msg+"</br> <b>Reporting Category: </b>"+meaning);
    return marker;
}

var makeMarkers = function(cleanedData) {
  var markers = _.map(cleanedData, create_marker);
  return(markers)
}

var removeMarkers = function(markers) {
  _.each(markers, function(m){map.removeLayer(m)})
};


// Plot markers

var plotMarkers = function(markers){
	for (var i = 0; i < markers.length; i++) {
		markers[i].addTo(map)
	}
}





