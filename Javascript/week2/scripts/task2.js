/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myname = "Laurel Cerrato";


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
const insertName = document.querySelector('#name').innerText = myname;

// Step 3: declare and instantiate a variable to hold the current year
const year = document.querySelector("#year");


// Step 4: place the value of the current year variable into the HTML file
year.textContent = new Date().getFullYear();

// Step 5: declare and instantiate a variable to hold the name of your picture
let myPhoto = document.createElement('img');
myPhoto.setAttribute('alt', "This is me");


// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', 'images/laurel.jpg');




/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let food = [' Baleadas', ' Pizza', ' Fried chicken', ' Pupusas']


// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerText = food;


// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFood = 'Ice Cream';


// Step 4: add the variable holding another favorite food to the favorite food array
food.push(anotherFood)


// Step 5: repeat Step 2
document.querySelector('#food').innerText = food;


// Step 6: remove the first element in the favorite foods array
food.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerText = food;

// Step 8: remove the last element in the favorite foods array
food.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerText = food;



