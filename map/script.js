let maps;

var markers = [];

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

    // markers of stones
    var locations = [
        [48.139188, 11.56098, 'Helene Simons', 'assets/1.jpg', '*1879 - 25.11.1941; DEPORTIERT 1941 KAUNAS'],
        [48.140536, 11.593462, 'Else Basch', 'assets/2.jpg', '*1878 - 18.6.1944; DEPORTIERT 1942 THERESIENSTADT'],
        [48.157657, 11.580811, 'Joseph Schuster', 'assets/3.png', '*1873 - 23.1.1943; DEPORTIERT 1942 THERESIENSTADT'],
        [48.122089, 11.543811, 'Emanuel Gutmann', 'assets/4.jpg', '*1873 – 1943; DEPORTIERT 1942 THERESIENSTADT'],
        [48.12004, 11.549581, 'Simon Berger', 'assets/5.jpg', '*1896 - 25.11.1941; DEPORTIERT KAUNAS'],
    ];


    for (var i = 0; i < locations.length; i++) {
        var location = locations[i];
        var lat = location[0];
        var lng = location[1];

        var marker = new google.maps.Marker({
            position: {lat: lat, lng: lng},
            map: map,
            title: name,
            icon: {
                size: new google.maps.Size(15, 30),
                scaledSize: new google.maps.Size(15, 30),
                url: 'assets/pin.png'
            },
        });

        markers.push(marker);
    }

    for (var i =0; i < markers.length; i++) {
        var lat = locations[i][0];
        var lng = locations[i][1];
        var name = locations[i][2];
        var image = locations[i][3];
        var info = locations[i][4];

        markers[i].addListener('click', function() {
            var card = document.querySelector(".card");

            if (card) {
                card.remove();
            }

            createCard(name, image, info, markers[i].url);
        });
    }
    
    function createCard(name, image, info, url) {
        var card = document.createElement("div");
        card.className = "card";
        card.style.display = "none";
      
        var img = document.createElement("img");
        img.src = image;
        img.alt = "Avatar";
      
        var container = document.createElement("div");
        var h4 = document.createElement("h4");
        var b = document.createElement("b");
        b.textContent = name;
        h4.appendChild(b);
      
        var p = document.createElement("p");
        p.textContent = info;

        container.appendChild(h4);
        container.appendChild(p);

        card.innerHTML = "";
        card.appendChild(img);
        card.appendChild(container);

        card.onclick = function() {
            window.open(url, '_blank');
        };
      }



    // for (i = 0; i < locations.length; i++) {
    //     var lat = locations[i][0];
    //     var lng = locations[i][1];

    //     var marker = new google.maps.Marker({
    //                 position: new google.maps.LatLng(lat, lng),
    //                 map: map,
    //                 icon: {
    //                     size: new google.maps.Size(15, 30),
    //                     scaledSize: new google.maps.Size(15, 30),
    //                     url: 'assets/pin.png'
    //                 },
    //             });

    //     markers.push(marker);

    //     google.maps.event.addListener(marker, 'click', (function(marker, i) {
    //         var lat = locations[i][0];
    //         var lng = locations[i][1];
    //         var name = locations[i][2];
    //         var imgSrc = locations[i][3];
    //         var desc = locations[i][4];

    //         var card = document.querySelector(".card");

    //         if (!card) {
    //             card = document.createElement("div");
    //             card.className = "card";
    //             card.onclick = function() {
    //                 var url = 'https://www.google.com/maps/search/' + lat + "," + lng;
    //                 window.open(url, '_blank');
    //             };
                
    //             document.body.appendChild(card);
    //         }

    //         var img = document.createElement("img");
    //         img.src = imgSrc;

    //         var container = document.createElement("div");
    //         var h4 = document.createElement("h4");
    //         var b = document.createElement("b");
    //         b.textContent = name;
    //         h4.appendChild(b);
            
    //         var p = document.createElement("p");
    //         p.textContent = desc;

    //         container.appendChild(h4);
    //         container.appendChild(p);

    //         card.innerHTML = "";
    //         card.appendChild(img);
    //         card.appendChild(container);
    //     })(marker, i));
    // }
}
