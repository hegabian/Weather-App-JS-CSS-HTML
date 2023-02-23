
var t = document.getElementById("cityy");
 async function temp(SearchedCity = 'Alexandria'){
    if(! SearchedCity ){
        SearchedCity = 'Alexandria'
    }
    var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f68af70c17f6411da91174004232202&q=${SearchedCity}&days=3`);
    var finalRes= await res.json(); 
    console.log(finalRes);

    var str = new Date(finalRes.current.last_updated_epoch*1000);
    var u = str.toDateString();
    var stringArray1 = u.split(/(\s+)/);
    console.log(stringArray1[0]);
    
    var str2 = new Date(finalRes.forecast.forecastday[1].date_epoch*1000);
    var w = str2.toDateString();
    var stringArray2 = w.split(/(\s+)/);
    console.log(stringArray2[1]);

    var str4 = new Date(finalRes.forecast.forecastday[2].date_epoch*1000);
    var o = str4.toDateString();
    var stringArray4 = o.split(/(\s+)/);
    console.log(stringArray4[2]);

    var str3   = finalRes.current.last_updated;
    var stringArray = str3.split(/(\s+)/);
    console.log(stringArray[0]);

    var cityy = `
    <div class="col-md-4 ">
    <div class="card bg-2 card1 rounded-start-3 rounded-0">
      <div class="dayDate p-2 d-flex justify-content-between py-2 bg-1 rounded-start-3">
        <div class="day">${stringArray1[0]}</div>
        <div class="date">${stringArray[0]}</div>
      </div>
      <div class="temp bg-2 p-3 rounded-start-3">
        <div class="town" >
          <div class="d-flex justify-content-between">
            <div class="city fs-4 d-flex">${finalRes.location.name}</div>
            <img class="w-25" src="https:${finalRes.current.condition.icon}">
            </div>
            <div class="degree temp-text">${finalRes.current.temp_c}</div>
            <div class="description mb-4 text-primary">${finalRes.current.condition.text}</div>
            
            <div class="more d-flex">
            <div class="humidity d-flex me-4">
              <i class="fa-solid fa-umbrella pe-1"></i>
              <h6>${finalRes.current.humidity}<span>%</span></h6>
            </div>
            <div class="windSpeed d-flex me-4">
              <i class="fa-solid fa-wind pe-1"></i>
              <h6>${finalRes.current.wind_kph}<span>Km/hr</span></h6>
            </div>
            <div class="WindDire d-flex me-4"">
              <i class="fa-solid fa-compass pe-1"></i>
              <h6>${finalRes.current.wind_dir}</h6>
    
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <div class="col-md-4 ">
    <div class="card bg-2 card1 rounded-0">
      <div class="dayDate p-2 d-flex justify-content-between py-2 bg-3 rounded-0">
        <div class="day text-center m-auto fs-6">${stringArray2[0]}</div>
      </div>
      <div class="temp text-center bg-4 p-3 py-5 rounded-0">
        <div class="city">
          <img src="" alt="">
        </div>
        <img class="w-25" src="https:${finalRes.forecast.forecastday[0].day.condition.icon}">
        <div class="degree temp-maj fs-4 my-0 fw-bold">${finalRes.forecast.forecastday[0].day.maxtemp_c}<span>°C</span></div>
        <div class="degree temp-min fs-6 my-0">${finalRes.forecast.forecastday[0].day.mintemp_c}<span>°C</span></div>
        <div class="description mb-4 mt-5 text-primary">${finalRes.forecast.forecastday[0].day.condition.text}</div>
      </div>
    </div>
  </div>
  <div class="col-md-4 ">
    <div class="card bg-2 card1 rounded-0">
      <div class="dayDate p-2 d-flex justify-content-between py-2 bg-1 rounded-0">
        <div class="day text-center m-auto fs-6">${stringArray4[0]}</div>
      </div>
      <div class="temp text-center bg-2 p-3 py-5 rounded-0">
        <div class="city">
          <img src="" alt="">
        </div>
        <img class="w-25" src="https:${finalRes.forecast.forecastday[1].day.condition.icon}">
        <div class="degree temp-maj fs-4 my-0 fw-bold">${finalRes.forecast.forecastday[1].day.maxtemp_c}<span>°C</span></div>
        <div class="degree temp-min fs-6 my-0">${finalRes.forecast.forecastday[1].day.mintemp_c}<span>°C</span></div>
        <div class="description mb-4 mt-5 text-primary">${finalRes.forecast.forecastday[1].day.condition.text}</div>
      </div>
    </div>
  </div>
        `
    t.innerHTML=cityy;
}   
var city = document.getElementById("form1");
var button = document.querySelector("button");
var button = document.addEventListener("keyup", function(){
    var SearchedCity= document.getElementById('form1').value 
    temp(SearchedCity);
});
