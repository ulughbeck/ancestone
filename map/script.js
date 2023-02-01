let map, infoWindow;

function initMap() {

    var mapStyle = [
        {
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#ebe3cd"
            }
        ]
        },
        {
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#523735"
            }
        ]
        },
        {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
            "color": "#f5f1e6"
            }
        ]
        },
        {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
            "color": "#c9b2a6"
            }
        ]
        },
        {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
            "color": "#dcd2be"
            }
        ]
        },
        {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#ae9e90"
            }
        ]
        },
        {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#dfd2ae"
            }
        ]
        },
        {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#dfd2ae"
            }
        ]
        },
        {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#93817c"
            }
        ]
        },
        {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [
            { 
            "visibility": "off" 
            }
        ]
        },
        {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
            "color": "#a5b076"
            }
        ]
        },
        {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#447530"
            }
        ]
        },
        {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#f5f1e6"
            }
        ]
        },
        {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#fdfcf8"
            }
        ]
        },
        {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#f8c967"
            }
        ]
        },
        {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
            "color": "#e9bc62"
            }
        ]
        },
        {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#e98d58"
            }
        ]
        },
        {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
            "color": "#db8555"
            }
        ]
        },
        {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#806b63"
            }
        ]
        },
        {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#dfd2ae"
            }
        ]
        },
        {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#8f7d77"
            }
        ]
        },
        {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
            "color": "#ebe3cd"
            }
        ]
        },
        {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#dfd2ae"
            }
        ]
        },
        {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
            "color": "#b9d3c2"
            }
        ]
        },
        {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#92998d"
            }
        ]
        }
    ];

    map = new google.maps.Map(document.getElementById("googleMap"), {
        center: { lat: 48.1423965, lng: 11.5757072 },
        zoom: 15,
        styles: mapStyle,
        disableDefaultUI: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.NONE
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    infoWindow = new google.maps.InfoWindow();

    // markers of stones
    var markers = [
        ['1', 48.1450513671584, 11.5803776369163],
        ['2', 48.1455099519885, 11.5785406029775],
        ['3', 48.1439584615596, 11.5783350607186],
    ];

    for (i = 0; i < markers.length; i++) {
        marker = new google.maps.Marker({
                    position: new google.maps.LatLng(markers[i][1], markers[i][2]),
                    map: map,
                    icon: {
                        size: new google.maps.Size(15, 30),
                        scaledSize: new google.maps.Size(15, 30),
                        url: 'assets/pin.png'
                    },
                });

        google.maps.event.addDomListener(marker, 'click', function() {
            var url = 'https://www.google.com/maps/search/' + markers[i[1]] + "," + markers[i][2];
            window.open(url, '_blank');
        });
    }


    // my location button
    // const locationButton = document.createElement("div");
    // const locationIcon = document.createElement("i");
    // locationIcon.classList.add("material-icons nav__icon");
    // locationButton.children.add(locationIcon);
    // locationButton.id.add("my-position-button");

    // map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(locationButton);
    
    // locationButton.addEventListener("click", () => {
    //     // Try HTML5 geolocation.
    //     if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //         const pos = {
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude,
    //         };

    //         infoWindow.setPosition(pos);
    //         infoWindow.setContent("Location found.");
    //         infoWindow.open(map);
    //         map.setCenter(pos);
    //         },
    //         () => {
    //         handleLocationError(true, infoWindow, map.getCenter());
    //         }
    //     );
    //     } else {
    //     // Browser doesn't support Geolocation
    //     handleLocationError(false, infoWindow, map.getCenter());
    //     }
    // });

}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}

window.initMap = initMap;