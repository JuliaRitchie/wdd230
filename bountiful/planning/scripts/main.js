let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;


let currentdate = new Date(document.lastModified);
document.querySelector('.currentdate').textContent = currentdate;