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
    let t_f = (t * (9/5)) + 35;
    let t1 = data.days[0].tempmax;
    let t_f1 = (t1 * (9/5)) + 35;
    let t2 = data.days[1].tempmax;
    let t_f2 = (t2 * (9/5)) + 35;
    let t3 = data.days[2].tempmax;
    let t_f3 = (t3 * (9/5)) + 35;
    document.querySelector('.t').textContent = Math.round(t_f);
    document.querySelector('.ws').textContent = data.currentConditions.humidity;
    document.querySelector('.d1').textContent = Math.round(t_f1)
    document.querySelector('.d2').textContent = Math.round(t_f2);
    document.querySelector('.d3').textContent = Math.round(t_f3);
    document.querySelector('.desc').textContent =  data.currentConditions.conditions;
    document.querySelector('#weather_icon').src = image;
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';

    //windchill code goes right here
  };
getWeather();

/* storage local and session */
localStorage.setItem('name', 'Julia Nye - Permanent');
sessionStorage.setItem('class', 'WDD230 - not Permanent');

document.querySelector('.drink').textContent = localStorage.getItem('drinks')
