 const CLIENT_id = '370afb5dc69a74fa3603f2583da7b776'




const form1 = document.querySelector('#test_data')

console.log(form1)

form1.addEventListener('submit', (e)=>{
    e.preventDefault();
    const cityName = e.path[0][0].value
    loadData(cityName)
});


const getInfo = async (cityName) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},us&appid=${CLIENT_id}&units=imperial`);
    const data = await res.json();
    console.log(data)
    return data
};


const loadData = async(cityName) => {
    const data = await getInfo(cityName)
    const city = [data]
    console.log(city)
    city.map(cityWeather)
};


const cityWeather = async (city) => {
    const div = document.createElement('div')

    div.innerHTML = `
    <div class="card position-absolute top-50 start-50 translate-middle" style="width: 18rem; bg: #fff0;1" >
    <h5 class="card-title">${city.name}, US</h5>
  <img src="images/${city.weather[0].main}.jpg"  alt="">
  <div class="card-body">
    <h5 class="card-title">Current Temp: ${city.main.temp} F</h5>
    <h5 class="card-title">Current Highs: ${city.main.temp_max} F</h5>
    <h5 class="card-title">Current Lows: ${city.main.temp_min} F</h5>
    <h5 class="card-title">Current Humidity: ${city.main.humidity} %</h5>
    <h5 class="card-title">Currently: ${city.weather[0].main}</h5>

    </div>
    </div>
    
    `
    if (city.weather.main == 'clouds'){}

    document.body.append(div)

}