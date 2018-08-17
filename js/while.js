var count = 2;
while(count <= 65536){
    console.log(count);
    count *= 2;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

do {
    // This expression will generate a random number between 1 and 5
    var bought = Math.floor(Math.random() * 5) + 1;

    allCones -= bought;
        console.log(bought + " cones sold");
}while (allCones > bought);
console.log("Cannnot sell you " + bought + " cones I only have " + allCones + " left...")
console.log("Yay! You sold them all!")