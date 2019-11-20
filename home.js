
var tacoTruckLocations = [
    {
        Day: ["Monday", "Wednesday", "Thursday"],
        Location: "9915+Flower+St+Bellflower+CA+90706"
    },
    {
        Day: ["Saturday"],
        Location: "120+East+135th+St+Los+Angeles+CA+90061"
    },
    // {
    //     Day: ["Wednesday", "Saturday"],
    //     Location: "400 S Coorporate Rd, Culver City, CA"
    // }
];

var currentDate = new Date();
var currentDay = currentDate.getDay();


var currentDayString = "";
var currentLngLat;

// converts the data from javascript getDay from a number to a string so 
//that we can compare and retrieve the address that goes with a specific day of the week from our object

if (currentDay == 0) {
    currentDayString = "Sunday";
} else if (currentDay==1){
    currentDayString="Monday";
} else if (currentDay == 2){
    currentDayString = "Tuesday";
} else if (currentDay == 3){
    currentDayString = "Wednesday";
} else if (currentDay == 4) {
    currentDayString = "Thursday";
} else if (currentDay == 5){
    currentDayString = "Friday";
} else if (currentDay == 6){
    currentDayString = "Saturday";
}

// function to retrieve latitude and longitude from the addresses in our object
// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('success');
//     }, 600);
//   });
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('success');
    }, 600);
  });

// console.log(promise1);

async function getLatLng() {
    var address = "";

    for (var i = 0; i < tacoTruckLocations.length; i++) {
        var isValid = tacoTruckLocations[i].Day.includes(currentDayString);
        if (isValid) {
            address = tacoTruckLocations[i].Location;
        }
    }

    if (address == "") {
        getNoServiceImage();
    }

    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyAdimNx5xswXGbSSO6Y0mZ2bSOs8mk8UNo";
    try {
    const response = await axios.get(url);

    if(response.data.results.length > 0){
    currentLngLat = response.data.results[0].geometry.location;
    initMap();
    }
    else {
        console.log('looks like error occurred')
    }
    }
    catch(e){
    }
}

// Initialize and add the map
function initMap() {
    // The location 
    var location = currentLngLat;

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    
    
    // The map, centered at location
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: location });
    // The marker, positioned at location
    //var marker = new google.maps.Marker({ position: location, map: map });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image,
        title: "TikiSoul"
    });
};

function getNoServiceImage() {
    // create img tag, etc for when there is no taco truck on any given day of the week
    var noService = document.createElement("img");
    noService.setAttribute("src", "images/home/map-no-service.png");
    noService.setAttribute("alt", "no service today");
    noService.setAttribute("id", "no-service-img");

    var mapDisplay = document.getElementById("map");
    mapDisplay.append(noService);

}

getLatLng();