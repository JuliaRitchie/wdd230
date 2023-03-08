const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.
const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/hawaii?unitGroup=metric&key=CWNDZEEVESS3DLCGJAEU8KYP7&contentType=json";

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

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
	document.querySelector('.dynamic').textContent = 'Come to the Wednesday Chamber of Commerce meet and greet!'
}

// windchill calculation

const temp = document.querySelector('.t').textContent;

const windspeed = document.querySelector('.ws').textContent;
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

let windchill = document.querySelector('.wc');

if (temp <= 50 && windspeed >= 3){
	windchill.textContent = chill + ' mph';
}

// Weather API

const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('.t').textContent = Math.round(t * 5/9 +32 );
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('.ws').textContent = data.currentConditions.windspeed;
    document.querySelector('.desc').textContent =  data.currentConditions.conditions;
    document.querySelector('#weather_icon').src = image;
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';

    //windchill code goes right here
  };
getWeather();

/* storage local and session */
localStorage.setItem('name', 'Julia Nye - Permanent');
sessionStorage.setItem('class', 'WDD230 - not Permanent')