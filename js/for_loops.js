"use strict";
function showMultiplicationTable(number){
    for (var i = 1; i <= 10; i++) {
        var result = number * i;
        console.log(number +" x " + i + " = " + result);
    }
}
for (var i = 1; i <= 10; i++) {
    showMultiplicationTable(i);
}


// This expression will generate a random number between 1 and 200

var result;
for (var i = 0; i < 10; i++) {
    var number = Math.floor(Math.random() * 200) + 20;
    if (number%2 === 0){
        result = "even";
    } else {
        result = "odd";
    }
    console.log(number + " is " + result);
}

var j = "1";
for (var t = 1; t < 10; t++) {
   console.log(t * j.repeat(t));
}

for (var w = 100; w > 0; w-=5) {
    console.log(w);
}