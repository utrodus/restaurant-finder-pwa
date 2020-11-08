import API_ENDPOINT from '../../globals/api-endpoint';
const createRestaurantItemTemplate = (restaurant) => `
        <a href="${`/#/detail/${restaurant.id}`}">
            <div class="restaurant__item">
                <button aria-label="add to favorite" id="favoriteButton" class="favorite__btn">
                    <i class="lni lni-heart" aria-hidden="true"></i>
                </button>
                <img class="thumbnail"
                    src="${API_ENDPOINT.PICTURE(restaurant.pictureId, "small")}"
                    alt="${restaurant.name}">
                <div class="content">
                    <h1 class="title">${restaurant.name}
                    </h1>
                    <p class="description">${restaurant.description}</p>
                    <div class="restaurant__address">
                    <div class="marker">
                        <i class="lni lni-map-marker " aria-hidden="true"></i>
                        </div>
                        <p class="address">${restaurant.city}</p>
                    </div>
                    <div class="restaurant__rating">
                        <i class="lni lni-star-filled star" aria-hidden="true"></i>
                        <p class="address">${restaurant.rating}</p>
                    </div>
                </div>
                </div>
        </a>
`;

export default createRestaurantItemTemplate;
