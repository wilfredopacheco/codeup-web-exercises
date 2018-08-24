var me = {
    name: "Daniel Fryar",
    hairColor: "brown",
    eyeColor: "brown",
    birthDay: {
        month: 8,
        day: 23
    },
    juggle: function() {
        console.log("Hey look at me I'm juggling");
    }
};

var students = [];
students.push(me);
var wil={};
students.push(wil);
wil.name = 'Wil';
wil.hairColor = "brown";
wil.eyeColor = "brown";
wil.birthDay = month = 2;
wil.birthDay = day = 24;

students[0].juggle();
console.log(students[1].name);
console.log(students);