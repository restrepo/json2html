"use strict";

const output = document.querySelector(".output");
//console.log(output); // <div class="output"></div>

//output.textContent = "New Content";
//console.log(output); // <div class="output">New content</div>

// Storing json data in a variable
const localJsonFile = "local.json";

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.
window.addEventListener("DOMContentLoaded", () => {
  // console.log('DOM fully loaded and parsed');
  output.textContent = "Loading....";
  // Make fetch request to local.json file
  fetch(localJsonFile)
    .then((response) => response.json()) // and the response we get is in json format
    .then((data) => {
      // we call that data here
      // console.log(data); // check the data on the console
      output.innerHTML = ""; // Initial content is empty
      data.forEach((el) => {
        // loop through the json data using forEach method
        // console.log(el);
        jsonList(el); // calling jsonList function
      });
    });
});

// Create a function to display the json data dynamically on the webpage
function jsonList(item) {
  // Create a new div element dynamically
  const div = document.createElement("div");
  // get the required details from the local.json file to the div element using innerHTML
  div.innerHTML = `
        ${item.firstName} ${item.lastName} is a ${item.gender} of ${item.age},
        resides in ${item.address["streetAddress"]} ${item.address["city"]} ${item.address["postalCode"]}
        with a contact number ${item.phoneNumbers[0]["number"]}.`;
  // attach the newly created div element to the original div element, in this case to the class '.output'
  output.append(div);
  // Add styling to the displayed content
  div.classList.add("active");
}
