import restaurantsData from "../DATA.json";

const Render = () => {
  const restaurantList = document.getElementById("restaurants__list");

  let restaurants = "";

  restaurantsData.restaurants.forEach((item) => {
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
                    <i class="lni lni-map-marker marker" aria-hidden="true"></i>
                    <p class="address">${item.city}</p>
                </div>
                <div class="restaurant__rating">
                    <i class="lni lni-star-filled star" aria-hidden="true"></i>
                    <p class="address">${item.rating}</p>
                </div>
            </div>
            </div>
        </a>
    `;
  });
  restaurantList.innerHTML = restaurants;
};

export default Render;
