const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them



// Hamburger Button JS

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})

datefield.innerHTML = `<em>${fulldate}</em>`;
let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;


let currentdate = new Date(document.lastModified);
document.querySelector('.currentdate').textContent = currentdate;

let weekday = date.getDay();
if (weekday == 1 || weekday == 2){
	document.querySelector('.dynamic').textContent = 'Come to the Wednesday Chamber of Commerce meeting!'
}