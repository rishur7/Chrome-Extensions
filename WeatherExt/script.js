fetch('http://api.openweathermap.org/data/2.5/weather?q=Ropar&exclude=hourly,daily&appid=e9b4f16bc735d0ec6a7bcf499f07f6d3')
.then(response=>response.json())
.then(data=>{
const pos=data.weather[0].description;
const celcius = Math.round(parseFloat(data.main.temp)-273.15);
document.getElementById('temp').innerHTML=celcius+'&deg';
document.getElementById("display").innerHTML=pos;
})       
