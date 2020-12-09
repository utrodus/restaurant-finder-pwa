const RestaurantItemSkeleton = () => `
<div class="skeleton-ui skeleton-ui-card" >
  <div class="restaurant__skeleton">

    <div class="flex align-center justify-center">
      <div class="w-100">
        <div class="skeleton-ui-square mb" style="height: 176px"></div>
        <div class="restaurant__skeleton_content">
            <div class="skeleton-ui-line w-90"></div>
            <div class="skeleton-ui-line"></div>
            <div class="skeleton-ui-line"></div>
            <div class="skeleton-ui-line w-20"></div>
            <div class="skeleton-ui-line w-20"></div
        </div>
      </div>
    </div>

  </div>
</div>
`;
const DetailRestaurantSkeleton = () => `
   <section class="main__content">
          <div class="restaurant_img">
            <div class="w-100">
              <div class="skeleton-ui-square" ></div>
            </div>
          </div>
          <div class="restaurant__info">
            <div class="skeleton-ui ">
              <div class="skeleton-ui-head-line mt mb"></div>
            </div>
            <div class="skeleton-ui-line"></div>

            <h3 class="restaurant__categories" tabindex="0">Categories</h3>
            <div class="category__wrapper">
                <div class="skeleton-ui-line w-30" style="height: 1.8rem"></div>
            </div>
            <p class="description" tabindex="0">
              <div class="skeleton-ui-line"></div>
              <div class="skeleton-ui-line"></div>
              <div class="skeleton-ui-line"></div>
              <div class="skeleton-ui-line"></div>
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
            <div class="skeleton-ui ">
                <div class="skeleton-ui-line w-40"></div>
                <div class="skeleton-ui-line w-40"></div>
                <div class="skeleton-ui-line w-40"></div>
                <div class="skeleton-ui-line w-40"></div>
            </div>
            </ul>
          </div>
          <div class="menu">
            <div class="detail__subtitle">
              <p tabindex="0">Drink Menu</p>
              <hr class="separator" />
            </div>
            <ul>
            <div class="skeleton-ui ">
                <div class="skeleton-ui-line w-40"></div>
                <div class="skeleton-ui-line w-40"></div>
                <div class="skeleton-ui-line w-40"></div>
                <div class="skeleton-ui-line w-40"></div>
            </div>
            </ul>
          </div>
          <div class="rating_overview">
            <div class="detail__subtitle">
              <p tabindex="0">Rating Overview</p>
              <hr class="separator" />
            </div>
            <div class="rating">
              <div class="skeleton-ui ">
                <div class="skeleton-ui-line w-40"></div>
              </div>

            </div>
            </div>
          </div>
          </section>

          <section class="customer__reviews" >
           <div class="detail__subtitle">
            <p tabindex="0">Customer Reviews</p>
            <hr class="separator" />
            </div>

            <div class="skeleton-ui ">
                <div class="skeleton-ui-line w-100" style="height:5rem"></div>
            </div>
              <form class="review_form" >
              <label for="name" >Name</label>
              <input
                id="name"
                type="text"
                class="input_name"
                tabindex="0"
              />
              <label for="description" >Your Review</label>
              <textarea
                id="description"
                class="input_description"
                rows="5"
                tabindex="0"
              ></textarea>
              <button class="review_btn" tabindex="0">Add Review</button>
           </form>
        </section>
`;

export { RestaurantItemSkeleton, DetailRestaurantSkeleton };
