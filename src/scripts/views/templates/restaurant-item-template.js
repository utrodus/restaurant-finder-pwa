import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantItemTemplate = (restaurant) => `
        <a href="#/detail/${restaurant.id}" tabindex="0" aria-label="restaurant item">
            <div class="restaurant__item">
                <img class="thumbnail"
                    src="${API_ENDPOINT.PICTURE(restaurant.pictureId, 'small')}"
                    alt="${restaurant.name}">
                <div class="content">
                    <h1 class="title" tabindex="0" aria-label="Nama Restaurant ${
  restaurant.name
}" >${restaurant.name}
                    </h1>
                    <p class="description" tabindex="0" aria-label="Tentang Restaurant ${
  restaurant.description
}" >${restaurant.description}</p>
                    <div class="restaurant__address">
                    <div class="marker">
                        <i class="lni lni-map-marker " aria-hidden="true"></i>
                        </div>
                        <p class="address" tabindex="0" aria-label="Kota ${
  restaurant.city
}">${restaurant.city}</p>
                    </div>
                    <div class="restaurant__rating">
                        <i class="lni lni-star-filled star" aria-hidden="true"></i>
                        <p class="address" tabindex="0" aria-label="Rating Restaurant ${
  restaurant.rating
}">
                        ${restaurant.rating}
                        </p>
                    </div>
                </div>
                </div>
        </a>
`;

export default createRestaurantItemTemplate;
