const { useAnimationControls } = require("framer-motion");

treasureMap = [
    [34,21,32,41,25],
    [14,42,43,14,31],
    [54,45,52,42,23],
    [33,15,51,31,35],
    [21,52,33,13,23]
];

let currentLocation = treasureMap[0][0];
let newLocation = [];

function readDestination(currentLocation) {
    let coordinates = currentLocation.toString().split("");
    return coordinates;
}

function nextStop(coordinates) {
    let x = coordinates[0] -1;
    let y = coordinates[1] -1;
    console.log(`Current coordinates are: ${x+1}${y+1}`);
    return treasureMap[x][y];
}

while (true) {

    newLocation = nextStop(readDestination(currentLocation));
    if (currentLocation === newLocation) {
        break;
    };
    currentLocation = newLocation;
}

console.log(`The treasure is at ${newLocation}`);