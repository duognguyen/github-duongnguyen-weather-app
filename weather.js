const apiKey = "914a3293293e01cd95d0fb1e2cb8890c";
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Nhiệt độ: ${data.main.temp}°C</p>
        <p>Thời tiết: ${data.weather[0].description}</p>
        <p>Độ ẩm: ${data.main.humidity}%</p>
        <p>Tốc độ gió: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(() => {
      document.getElementById("weatherResult").innerHTML = "Không tìm thấy thành phố!";
    });
});
