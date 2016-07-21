$(document).ready(function () {
    initMap();
    detectBrowser();
});

var map;
function initMap() {
    myLatLng = { lat: 50.085277, lng: 19.140868 };

    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 10,
        mapTypeControl: false,
        draggable: false,
        fullscreenControl: false,
        streetViewControl: false,
        disableDoubleClickZoom: true,
        scrollwheel: false
    });

    marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Bierun, Skalna 7'
    });
}

//function detectBrowser() {
//    var useragent = navigator.userAgent;
//    var mapdiv = document.getElementById("map");

//    if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1) {
//        mapdiv.style.width = '100%';
//        mapdiv.style.height = '100%';
//    } else {
//        mapdiv.style.width = '600px';
//        mapdiv.style.height = '800px';
//    }
//}