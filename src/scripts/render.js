import restaurantsData from "../DATA.json";

const Render = () => {
  const restaurantList = document.getElementById("restaurants__list");

  let restaurants = "";

  restaurantsData.restaurants.forEach((item) => {
    restaurants += `
        <a href="#">
        <div class="restaurant__item">
            <button aria-label="add to favorite" id="favoriteButton" class="favorite__btn">
                 <i class="lni lni-heart" aria-hidden="true"></i>
            </button>
            <img class="thumbnail"
                src="${item.pictureId}"
                alt="${item.name}">
            <div class="content">
                <h1 class="title">${item.name}
                </h1>
                <p class="description">${item.description}</p>
                <div class="restaurant__address">
                <div class="marker">
                    <i class="lni lni-map-marker " aria-hidden="true"></i>
                    </div>
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
