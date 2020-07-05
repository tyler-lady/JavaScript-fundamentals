let unorderedList = document.querySelector("ul");

let submitButton = document.getElementById("submit");

let rocketForm = document.querySelector("form");

//A-Sync Prccessing: multi thread processing; parallel tasks running.
//JS runs single threaded: there is one thing happening at a time; it functions on the JS Event loop

const baseURL = "https://api.spacexdata.com/v2/rockets";

let fetchRockets = (event) => {
  event.preventDefault();

  fetch(baseURL)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json
        .forEach((rocket) => {
          //NEED: Name, COst, Mass, image
          //table row for each rocket
          //td name, cost, mass, image
          //drop the row into the body

          let row = document.createElement("tr");
          let name = document.createElement("td");
          let cost = document.createElement("td");
          let mass = document.createElement("td");
          let imageData = document.createElement("td");
          let img = document.createElement("img");

          name.innerText = rocket.name;
          cost.innerText = rocket.cost_per_launch;
          mass.innerText = rocket.mass.kg;
          img.src = rocket.flickr_images[0];

          imageData.appendChild(img);

          row.appendChild(name);
          row.appendChild(cost);
          row.appendChild(mass);
          row.appendChild(imageData);

          document.querySelector("tbody").appendChild(row);
        })
        .catch((error) => console.error(error));
    });
};
rocketForm.addEventListener("submit", fetchRockets);




// let myData = [
//     { title: "Downtown Is Loud", author: "Adam" },
//     { title: "My Room is Hot", author: "Nathaniel" },
//     { title: "My Neighbors Are Noisy", author: "Alec" },
//     { title: "BoatyMcBoatFace", author: "Sheena" },
//     { title: "I Wish I Could Type As Fast As Adam", author: "Sierra" },
//     {title: "Python's Better", author: "Yaboi and Swft" }
// ];

// // Loop over the dufferent statements (obj) inside of myData (array)
// for (let thing of myData) {

//     // Create the LI that is going to hold the statement (title, author)
//     let mySuperCoolListItem = document.createElement('li');

//     // Create the elements that will display the title and author
//     let myTitle = document. createElement('h3'); //TITLE
//     let myAuthor = document.createElement('p'); //AUTHOR

//     // Set the values in the element to display as text (title, author)
//     myTitle.innerText = thing.title; //Sets the TITLE
//     myAuthor.innerText = "- " thing.author; //Sets the AUTHOR

//     // Add the title and author elements in the li
//     mySuperCoolListItem.appendChild(myTitle);
//     mySuperCoolListItem.appendChild(myAuthor);
//     // Add the list item element into the unordered list
//     unorderedList.appendChild(mySuperCoolListItem); 
