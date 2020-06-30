let student = {
    name: "Gloria",
    awesome: true,
    specialty: "Javascript",
    week: 1
};

console.log(student.name);
console.log(student['awesome']);

// Way to grab attributes from an object

for ( x in student ) {
    console.log(student[x]);
}

console.log (typeof student);

let grades = ["A", "B", "C", "D"];
for (x in grades){
    console.log(x);
}

//For-in-loop will return to you the KEYS of some collection