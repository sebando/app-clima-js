const urlBase = `https://api.openweathermap.org/data/2.5/weather`
let API_KEY = "f15f399caf4e2e1480ba881e11963d1f";
const diffKelvin = 273.15;

document.getElementById("searchButton").addEventListener("click", () =>{
    const city = document.getElementById("cityInput").value; 
    if(city){
        // Llamar a la API para que nos dé la info del clima
        fetchWeather(city);

    }else{
        alert ("Ingrese una ciudad válida")
    }
})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))

}

function showWeatherData(data){
    const divResponseData = document.getElementById("responseData");
    divResponseData.innerHTML = "";

    const cityName = data.name
    const country = data.sys.country;
    const temp = data.main.temp;
    const humedad = data.main. humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon

    const cityInfo = document.createElement("h2");
    cityInfo.textContent = `${cityName}, ${country}`;
    
    const tempDate = document.createElement("p");
    tempDate.textContent = `La temperatura es: ${Math.floor(temp-diffKelvin)}°C`;
    
    const humInfo = document.createElement("p");
    humInfo.textContent = `La humedad es del: ${humedad}%`;

    const iconInfo = document.createElement("img");
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const descriptionInfo = document.createElement("p");
    descriptionInfo.textContent = `La desdripción meteorológica es:  ${description}`;

    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempDate)
    divResponseData.appendChild(humInfo)
    divResponseData.appendChild(iconInfo)
    divResponseData.appendChild(descriptionInfo)


}