// function weatherFromApi() {}
fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=4f214e4df0e70d25e1d756c8803190f5"
)
  .then((res) => res.json())
  .then((data) => {});
