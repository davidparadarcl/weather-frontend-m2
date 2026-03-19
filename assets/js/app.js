// HOME
const container = document.getElementById("cities-container");

if (container) {
  cities.forEach(city => {
    container.innerHTML += `
      <article class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card shadow-sm p-3 h-100">
          <h5>${city.name}</h5>
          <p class="fs-4">${city.temp}°C</p>
          <span class="badge bg-primary">${city.condition}</span>

          <button 
            class="btn btn-outline-dark mt-3"
            aria-label="Ver detalle de ${city.name}"
            onclick="goDetail(${city.id})">
            Ver detalle
          </button>
        </div>
      </article>
    `;
  });
}

function goDetail(id) {
  localStorage.setItem("cityId", id);
  window.location.href = "detail.html";
}

// DETAIL
const detailContainer = document.getElementById("city-detail");

if (detailContainer) {
  const id = localStorage.getItem("cityId");
  const city = cities.find(c => c.id == id);

  detailContainer.innerHTML = `
    <article class="card p-4 shadow-sm">
      <h2>${city.name}</h2>

      <ul class="list-group list-group-flush mt-3">
        <li class="list-group-item">Temperatura: ${city.temp}°C</li>
        <li class="list-group-item">Humedad: ${city.humidity}%</li>
        <li class="list-group-item">Viento: ${city.wind} km/h</li>
      </ul>
    </article>
  `;

  const forecastContainer = document.getElementById("forecast");

  city.forecast.forEach((temp, i) => {
    forecastContainer.innerHTML += `
      <div class="col-6 col-md-3 col-lg-2 mb-3">
        <div class="card text-center p-2">
          <p>Día ${i + 1}</p>
          <p>${temp}°C</p>
        </div>
      </div>
    `;
  });
}