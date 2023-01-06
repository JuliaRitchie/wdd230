let date = new Date();
let year = date.getFullYear();
document.querySelector('.year').innerHTML = `${year} + &copy`;


let currentdate = document.lastModified;
document.querySelector('.currentdate').textContent = currentdate;