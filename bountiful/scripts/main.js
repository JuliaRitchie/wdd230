const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/carlsbad%20california?unitGroup=metric&key=CWNDZEEVESS3DLCGJAEU8KYP7&contentType=json";
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside");
const url = "https://andejuli.github.io/wdd230/fruit.json";

let dropdown = document.getElementById('main-fruit');
let dropdown2 = document.getElementById('side-fruit1');
let dropdown3 = document.getElementById('side-fruit2');

fetch(url)  
  .then(  
    function(response) {  
      
  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].abbreviation;
      	  dropdown.append(option);
          
    	}    
      });  
    }  
  )  
  fetch(url)  
  .then(  
    function(response) {  
        
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].abbreviation;
      	  dropdown2.append(option);
          
    	}    
      });  
    }  
  ) 
  fetch(url)  
  .then(  
    function(response) {   
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].abbreviation;
      	  dropdown3.append(option);
          
    	}    
      });  
    }  
  ) 

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;
let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;


let currentdate = new Date(document.lastModified);
document.querySelector('.currentdate').textContent = currentdate;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})



const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('.ws').textContent = data.currentConditions.humidity;
    document.querySelector('.desc').textContent =  data.currentConditions.conditions;
    document.querySelector('#weather_icon').src = image;
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';

    //windchill code goes right here
  };
getWeather();

/* storage local and session */
localStorage.setItem('name', 'Julia Nye - Permanent');
sessionStorage.setItem('class', 'WDD230 - not Permanent');

var inputName= document.getElementById("fname");
localStorage.setItem("fname", inputName.value);

var inputEmail= document.getElementById("email");
localStorage.setItem("email", inputEmail.value);