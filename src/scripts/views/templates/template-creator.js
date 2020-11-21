import API_ENDPOINT from "../../globals/api-endpoint";

const createRestaurantItemTemplate = (restaurant) => `
        <div class="restaurant__item__wrapper"  aria-label="restaurant item">
        <a href="${`/#/detail/${restaurant.id}`}" tabindex="0">
            <div class="restaurant__item">
                <img class="thumbnail"
                    src="${API_ENDPOINT.PICTURE(restaurant.pictureId, "small")}"
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
        </div>
`;

const createCategoryItemTemplate = (category) => `
<p class="category" tabindex="0">${category.name}</p>
`;

const createMenuItemTemplate = (menu) => `
<li tabindex="0">${menu.name}</li>
`;

const createReviewItemTemplate = (review) => `
<div class="review_item" tabindex="0" >
<p class="reviewer_name" tabindex="0">${
  review.name == undefined ? "" : review.name
}</p>
<p class="review_date" tabindex="0">${
  review.date == undefined ? "" : review.date
}</p>
<p class="review_content" tabindex="0">
  ${review.review == undefined ? "" : review.review}
</p>
</div>
`;

const createEmptyFavoritePageTemplate = () => `
<p class="empty__favorite">
<i class="lni lni-heart" aria-hidden="true"></i>

Anda Belum Menambahkan Restaurant Ke Halaman Favorites</p>
`;

const createFavoriteButtonTemplate = () => `
  <button
            aria-label="add to favorite"
            id="favoriteButton"
            class="favorite__btn"
          >
            <i class="lni lni-heart" aria-hidden="true"></i>
          </button>
`;

const createFavoritedButtonTemplate = () => `
  <button
            aria-label="remove from favorite this restaurant"
            id="favoriteButton"
            class="favorite__btn favorited__btn"
          >
            <i class="lni lni-heart" aria-hidden="true"></i>
          </button>
`;

const createRestaurantDetailTemplate = (detail) => `
          <section class="main__content">
          <div class="restaurant_img">
          <img
            src="${API_ENDPOINT.PICTURE(detail.pictureId, "medium")}"
            alt="${detail.name}"
          />
          </div>
          <div class="restaurant__info">
            <h2 class="restaurant__title" tabindex="0">${detail.name}</h2>
            <p class="restaurant__address" tabindex="0">${detail.address}</p>
            <h3 class="restaurant__categories" tabindex="0">Categories</h3>
            <div class="category__wrapper">
            ${detail.categories
              .map((category) => createCategoryItemTemplate(category))
              .join("")}
            </div>
            <p class="description" tabindex="0">
             ${detail.description}
            </p>
          </div>
          </section>

          <section class="secondary_content">
          <div class="menu">
            <div class="detail__subtitle">
              <p tabindex="0">Food Menu</p>
              <hr class="separator" />
            </div>
            <ul>
            ${detail.menus.foods
              .map((menu) => createMenuItemTemplate(menu))
              .join("")}
            </ul>
          </div>
          <div class="menu">
            <div class="detail__subtitle">
              <p tabindex="0">Drink Menu</p>
              <hr class="separator" />
            </div>
            <ul>
            ${detail.menus.drinks
              .map((menu) => createMenuItemTemplate(menu))
              .join("")}
            </ul>
          </div>
          <div class="rating_overview">
            <div class="detail__subtitle">
              <p tabindex="0">Rating Overview</p>
              <hr class="separator" />
            </div>
            <div class="rating">
              <p class="total__rating" tabindex="0">${detail.rating}</p>
            </div>
            </div>
          </div>
          </section>

          <section class="customer__reviews" >
           <div class="detail__subtitle">
            <p tabindex="0">Customer Reviews</p>
            <hr class="separator" />
            </div>
            ${detail.customerReviews
              .map((review) => createReviewItemTemplate(review))
              .join("")}
            <div class="review_item">
              <p class="reviewer_name" tabindex="0">Utrodus Said</p>
              <p class="review_date" tabindex="0">13 November 2019</p>
              <p class="review_content" tabindex="0">
                "Went on, still gaining velocity, the palpitation of night and
                day merged into one continuous
              </p>
            </div>
              <form class="review_form" >
              <label for="name" >Name</label>
              <input
                id="name"
                aria-label="Your name"
                type="text"
                class="input_name"
                tabindex="0"
              />
              <label for="description" >Your Review</label>
              <textarea
                id="description"
                aria-label="Your Review"
                class="input_description"
                rows="5"
                tabindex="0"
              ></textarea>
              <button class="review_btn" tabindex="0">Add Review</button>
           </form>
        </section>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createEmptyFavoritePageTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
