const container = document.getElementById("citiesContainer");

cities.forEach((city) => {
    container.innerHTML += `

    <div class="col-12 col-md-6 col-lg-4">

        <article class="card h-100 shadow">

            <img
                src="${city.image}"
                class="card-img-top"
                alt="${city.name}">

            <div class="card-body text-center">

                <h3>${city.name}</h3>

                <div class="display-4">
                    ${city.icon}
                </div>

                <p class="fs-4 fw-bold">
                    ${city.temp}
                </p>

                <span class="badge bg-primary mb-3">
                    ${city.state}
                </span>

                <div>

                    <button
                        class="btn btn-dark detail-btn"
                        data-id="${city.id}">

                        Ver detalle

                    </button>

                </div>

            </div>

        </article>

    </div>
    `;
});

const buttons = document.querySelectorAll(".detail-btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const id = button.dataset.id;

        localStorage.setItem("selectedCity", id);

        window.location.href = "detail.html";
    });
});
