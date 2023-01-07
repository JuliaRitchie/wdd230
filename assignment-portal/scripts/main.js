let date = new Date();
let year = date.getFullYear();
console.log(date)
console.log(year)
document.querySelector('span').textContent = year;


let currentdate = document.lastModified();
document.querySelector('.year').textContent = currentdate;