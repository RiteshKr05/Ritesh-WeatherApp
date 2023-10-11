const apiKey = "392139beeabc8f51023931dc71d4b37a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");//  it sh
const searchBtn = document.querySelector(".search button");//when people click search btn it should send details in search input section
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    
        const response = await fetch(apiUrl + city + `&appid=${apiKey} `);

        
        let data = await response.json();   //this data have all the information weather in banglore
        // console.log(data);
        //now we have to update temp,humidity,wind and city in our app
        //can't use document.getby class will show error because we have not assigned variables tem,humidity.,city

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15 ) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed +"km/H";
//UPDATE IMAGE

if(data.weather[0].main == "Clouds"){
     weatherIcon.src = "images/clouds.png";
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png"

}
else if(data.weather[0].main == "Humidity"){
    weatherIcon.src = "images/humidity.png"
}

else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png"
}
else if(data.weather[0].main == "Drizzel"){
    weatherIcon.src = "images/drizzel.png"
}

document.querySelector(".weather").style.display = "block";

}
    searchBtn.addEventListener("click", ()=>{
        checkWeather (searchBox.value);//this checkweather will havve the city information written in input field
        //this serch box will have city name and it passs the information to checkweather function and pass the api field and will update
    })
    
