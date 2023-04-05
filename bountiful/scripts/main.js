const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/carlsbad%20california?unitGroup=metric&key=CWNDZEEVESS3DLCGJAEU8KYP7&contentType=json";
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside");

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
    let t = data.currentConditions.temp;
    let t_f = (t * (9/5)) + 35
    document.querySelector('.t').textContent = t_f;
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

