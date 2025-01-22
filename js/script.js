document.addEventListener("DOMContentLoaded", function () {
    const citySelect = document.getElementById("city-select");
    const locationMessage = document.getElementById("location-message");
    const appCategories = {
        delhi: {
            cabs: [{name: "Uber", image: "uber.png"}, {name: "Ola", image: "ola.png"}, {name: "Meru", image: "meru.png"}],
            bikes: [{name: "Rapido", image: "rapido.png"}, {name: "Bounce", image: "bounce.png"}, {name: "rapido-bike", image: "rapido-bike.jpg"}],
            autos: [{name: "Ola Auto", image: "ola.png"}, {name: "rapido-bike", image: "rapido-bike.jpg"}],
            porters: [{name: "rapido", image: "rapido.png"}, {name: "meru", image: "meru.png"}]
        },
        mumbai: {
            cabs: [{name: "Uber", image: "uber.png"}, {name: "Ola", image: "ola.png"}, {name: "Meru", image: "meru.png"}],
            bikes: [{name: "Bounce", image: "bounce.png"}, {name: "rapido-bike", image: "rapido-bike.jpg"}],
            autos: [{name: "Ola Auto", image: "ola.png"}, {name: "Jugnoo", image: "jugnoo.png"}],
            porters: [{name: "Porter", image: "porter.png"}]
        },
        bangalore: {
            cabs: [{name: "Ola", image: "ola.png"}, {name: "Uber", image: "uber.png"}, {name: "Meru", image: "meru.png"}],
            bikes: [{name: "Rapido", image: "rapido.png"}, {name: "Bounce", image: "bounce.png"}],
            autos: [{name: "Ola Auto", image: "ola.png"}, {name: "Jugnoo", image: "jugnoo.png"}],
            porters: [{name: "Porter", image: "porter.png"}]
        },
        chennai: {
            cabs: [{name: "Ola", image: "ola.png"}, {name: "Uber", image: "uber.png"}],
            bikes: [{name: "Bounce", image: "bounce.png"}, {name: "Rapido", image: "rapido.png"}],
            autos: [{name: "Ola Auto", image: "ola.png"}],
            porters: [{name: "Porter", image: "porter.png"}, {name: "Blowhorn", image: "blowhorn.png"}]
        },
        kolkata: {
            cabs: [{name: "Ola", image: "ola.png"}, {name: "Uber", image: "uber.png"}, {name: "Meru", image: "meru.png"}],
            bikes: [{name: "Rapido-bike", image: "rapido-bike.jpg"}],
            autos: [{name: "Ola Auto", image: "ola.png"}],
            porters: [{name: "Blowhorn", image: "blowhorn.png"}]
        }
    };

    // Default city is Delhi
    let currentCity = "delhi";
    displayCityData(currentCity);

    citySelect.addEventListener("change", function () {
        currentCity = citySelect.value;
        displayCityData(currentCity);
    });

    function displayCityData(city) {
        locationMessage.textContent = `Showing data for ${city.charAt(0).toUpperCase() + city.slice(1)}`;

        // Clear previous data
        const categories = ["cabs", "bikes", "autos", "porter-services"];
        categories.forEach(category => {
            const categoryList = document.querySelector(`#${category} ul`);
            categoryList.innerHTML = '';
        });

        // Populate the app categories
        Object.keys(appCategories[city]).forEach(category => {
            const categoryList = document.querySelector(`#${category} ul`);
            appCategories[city][category].forEach(app => {
                const li = document.createElement("li");
                const appImage = document.createElement("img");
                appImage.src = `images/${app.image}`;
                appImage.alt = app.name;
                appImage.classList.add("app-icon");

                const appName = document.createElement("span");
                appName.textContent = app.name;

                li.appendChild(appImage);
                li.appendChild(appName);
                categoryList.appendChild(li);
            });
        });
    }
});
