/*jslint browser : true, node : true*/
/*jslint devel : true*/
/*global google*/
'use strict';
var map, directionsDisplay,
    directionsService = new google.maps.DirectionsService();
function init() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOption = {
            zoom: 8,
            center: new google.maps.LatLng(48.856614, 2.352222),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(document.getElementById("maps"), mapOption);
    directionsDisplay.setMap(map);
    console.log(map);
}

/******     gerrer le fullcreen    *****/

var fullscreen = document.getElementById("fullscreen");
fullscreen.addEventListener("click", function () {
    var maps = document.getElementById("maps");
    if (maps.requestFullscreen) {
        maps.requestFullscreen();
        maps.style.width = '100%';
        maps.style.height = '100%';
    } else if (maps.msRequestFullscreen) {
        maps.msRequestFullscreen();
        maps.style.height = '100%';
        maps.style.width = "100%";
    } else if (maps.mozRequestFullScreen) {
        maps.mozRequestFullScreen();
        maps.style.height = '100%';
        maps.style.width = "100%";
    } else if (maps.webkitRequestFullscreen) {
        maps.webkitRequestFullscreen();
        maps.style.height = '100%';
        maps.style.width = "100%";
    }
});

document.addEventListener("keyup", function (e) {
    var maps = document.getElementById("maps");
    if (e.keyCode === 27) {
        maps.style.width = '800px';
        maps.style.height = '600px';
    }
});

/*recherche*/


function moveToRoma() {
    var start = document.getElementById('depart').value,
        end = "rome",
        request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING
        };
    init();
    directionsService.route(request, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}

var submit = document.getElementById("submit");
submit.addEventListener("click", moveToRoma);

