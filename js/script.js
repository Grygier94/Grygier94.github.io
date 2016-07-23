$(document).ready(function () {

    //variables
    mask = $('.mask');
    kongregateImg = $('.view .mask .kongregateImg');
    googlePlayImg = $('.view .mask .googlePlayImg');

    setMaskHeight();
    centerAndResizeMaskContent();

    window.setInterval(centerAndResizeMaskContent, 1000);

    initMap();
    detectBrowser();
});


//Set height of hover mask
$(window).resize(setMaskHeight);

function setMaskHeight() {
    mask.height(mask.width() / 2);
}

//Set font and padding of hover headers after resizing 
function centerAndResizeMaskContent() {

    $('.view h2').css('padding', mask.height() / 15)
        .css('font-size', mask.height() / 15);

    kongregateImg.css('height', mask.height() / 5)
        .css('top', mask.height() / 2 - kongregateImg.height() / 2)
        .css('left', mask.width() / 2 - kongregateImg.width() / 2);

    googlePlayImg.css('height', mask.height() / 5)
        .css('top', mask.height() / 2 - googlePlayImg.height() / 2)
        .css('left', mask.width() / 2 - googlePlayImg.width() / 2);
}

var doit;
window.onresize = function () {
    clearTimeout(doit);
    doit = setTimeout(centerAndResizeMaskContent, 300);
};
//Set font and padding of hover headers after resizing END

//Scrolling
$("ul.navScroll li a").click(function (e) {

    clickedElement = $(this);
    e.preventDefault();

    minimumScrollSpeed = 600;
    maximumScrollSpeed = 1600;
    scrollSpeed = (Math.abs($(window).scrollTop() - $(clickedElement.attr('href')).offset().top) - 200) < minimumScrollSpeed ? minimumScrollSpeed :
        ((Math.abs($(window).scrollTop() - $(clickedElement.attr('href')).offset().top) - 200) > maximumScrollSpeed) ? maximumScrollSpeed :
        (Math.abs($(window).scrollTop() - $(clickedElement.attr('href')).offset().top) - 200);


    $('html, body').animate({
        scrollTop: $(clickedElement.attr('href')).offset().top - 45
    }, scrollSpeed);
});

$(function () {
    $("ul.navScroll li").click(function () {
        $("ul.navScroll li").removeClass("active");
        $(this).addClass("active");
    });
});
//Scrolling END


function initMap() {

    var map;
    var myLatLng = { lat: 50.085277, lng: 19.140868 };

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