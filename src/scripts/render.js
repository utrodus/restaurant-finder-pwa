import restaurantsData from "./restaurants-data.js";

const Render = () => {
    const restaurantList = document.getElementById("restaurants__list");

    let restaurants = '';

    restaurantsData.restaurants.forEach(item => {

        restaurants += `
        <a href="#">
        <div class="restaurant__item">
            <img class="thumbnail"
                src="${item.pictureId}"
                alt="${item.name}">
            <div class="content">
                <h1 class="title">${item.name}
                </h1>
                <p class="description">${item.description}</p>
                <div class="restaurant__address">
                    <img src="./images/map-marker.png" alt="Map Marker">
                    <p class="address">${item.city}</p>
                </div>
                <div class="restaurant__rating">
                    <img src="./images/star.png" alt="Rating Star">
                    <p class="address">${item.rating}</p>
                </div>
            </div>
            </div>
        </a>
    `;
    });
    restaurantList.innerHTML = restaurants;

}

export default Render;