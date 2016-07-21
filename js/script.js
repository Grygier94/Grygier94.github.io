var map;
function initMap() {

    myLatLng = { lat: 50.085277, lng: 19.140868 };

    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 10,
        scrollwheel: false,
        fullscreenControl: true
    });

    marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Bierun, Skalna 7'
    });
}