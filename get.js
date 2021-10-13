var url_string = window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("c");
console.log(c);

const output = document.querySelector(".output");
 // Create a new div element dynamically
const div = document.createElement("div");
  // get the required details from the local.json file to the div element using innerHTML
div.innerHTML = `${c}`;
// attach the newly created div element to the original div element, in this case to the class '.output'
output.append(div);
// Add styling to the displayed content
div.classList.add("active");

