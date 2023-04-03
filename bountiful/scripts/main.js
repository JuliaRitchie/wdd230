const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/carlsbad%20california?unitGroup=metric&key=CWNDZEEVESS3DLCGJAEU8KYP7&contentType=json";

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})



const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('.t').textContent = Math.round(t * 5/9 +32 );
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
sessionStorage.setItem('class', 'WDD230 - not Permanent')