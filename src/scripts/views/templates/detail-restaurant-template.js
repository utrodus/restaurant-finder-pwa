import API_ENDPOINT from '../../globals/api-endpoint';

const createCategoryItemTemplate = (category) => `
<p class="category" tabindex="0">${category.name}</p>
`;

const createMenuItemTemplate = (menu) => `
<li tabindex="0">${menu.name}</li>
`;

const createReviewItemTemplate = (review) => `
<div class="review_item" tabindex="0" >
<p class="reviewer_name" tabindex="0">${review.name === undefined ? '' : review.name
}</p>
<p class="review_date" tabindex="0">${review.date === undefined ? '' : review.date
}</p>
<p class="review_content" tabindex="0">
  ${review.review === undefined ? '' : review.review}
</p>
</div>
`;

const createRestaurantDetailTemplate = (detail) => `
          <section class="main__content">
          <div class="restaurant_img">
          <img
            src="${API_ENDPOINT.PICTURE(detail.pictureId, 'medium')}"
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
    .join('')}
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
    .join('')}
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
    .join('')}
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
    .join('')}

        </section>
`;

export default createRestaurantDetailTemplate;