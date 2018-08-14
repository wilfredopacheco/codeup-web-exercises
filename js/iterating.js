(function(){
    "use strict";
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var people = ["Jennifer", "Fiona", "Brooklyn", "Noah"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("Number of elements in the array is " + people.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(people[0]);
    console.log(people[1]);
    console.log(people[2]);
    console.log(people[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var j = 0; j < people.length; j++) {
        console.log(people[j]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    people.forEach(function (item){console.log(item)});
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(input) {
        if(Array.isArray(input)) {
            return input[0];
        }
    }
    function second(input) {
        if(Array.isArray(input)) {}
        return input[1];
    }
    function last() {
        console.log(people[people.length]);
    }

})();

// names.forEach(function (element, index, array));
// element === names[index]
// element is also the same value as array[index]
// Iterating: The process of moving across a list one item at a time.