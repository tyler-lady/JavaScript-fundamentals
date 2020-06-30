let grades = ["A", "B", "C", "D"];
for (x in 'grades'){
    console.log(x);
}

//For-of-loops return to you the VALUE, and can only run on ITERABLES (ordered collection)

// for - in: Uses any collection (obj, array, string);
// for - in: Uses ITERABLE collections (array, sting, ect.);

let names = ['a', 'b', 'c'];

for (name of names) {
    console.log(name);
}
