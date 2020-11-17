import UrlParser from "../../routes/url-parser";
import RestaurantsDbSource from "../../data/restaurantsdb-source";

const Detail = {
  async render() {
    return `

       <article id="detail" class="detail">
        <div class="container">
          <section class="main__content">
          <div class="restaurant_img">
          <img
            src="https://restaurant-api.dicoding.dev/images/small/14"
            alt="Gambar Restaurant Melting Pot"  tabindex="0"
          />
          </div>
          <div class="restaurant__info">
            <h2 class="restaurant__title" tabindex="0">Melting Pot</h2>
            <p class="restaurant__address" tabindex="0">Jln. Pandeglang no 19, Medan</p>
            <h3 class="restaurant__categories" tabindex="0">Categories</h3>
            <div class="category__wrapper" >
                <p class="category" tabindex="0">Italia</p>
                <p class="category" tabindex="0">Modern</p>
            </div>
            <p class="description" tabindex="0">
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            </p>
          </div>
          </section>
           <button
            aria-label="add to favorite"
            id="favoriteButton"
            class="favorite__btn"
          >
            <i class="lni lni-heart" aria-hidden="true"></i>
          </button>
          <section class="secondary_content">
          <div class="menu">
            <div class="detail__subtitle">
              <p tabindex="0">Food Menu</p>
              <hr class="separator" />
            </div>
            <ul>
              <li tabindex="0">Paket rosemary</li>
              <li tabindex="0">Toastie salmon</li>
              <li tabindex="0">Bebek crepes</li>
              <li tabindex="0">Salad lengkeng</li>
            </ul>
          </div>
          <div class="menu">
            <div class="detail__subtitle">
              <p tabindex="0">Drink Menu</p>
              <hr class="separator" />
            </div>
            <ul>
              <li tabindex="0">Paket rosemary</li>
              <li tabindex="0">Toastie salmon</li>
              <li tabindex="0">Bebek crepes</li>
              <li tabindex="0">Salad lengkeng</li>
            </ul>
          </div>
          <div class="rating_overview">
            <div class="detail__subtitle">
              <p tabindex="0">Rating Overview</p>
              <hr class="separator" />
            </div>
            <div class="rating">
              <p class="total__rating" tabindex="0">5.0</p>
            </div>
            </div>
          </section>

          <div class="customer__reviews">
           <div class="detail__subtitle">
            <p tabindex="0">Customer Reviews</p>
            <hr class="separator" />
          </div>
            <div class="review_item" >
              <p class="reviewer_name" tabindex="0">Utrodus Said</p>
              <p class="review_date" tabindex="0">13 November 2019</p>
              <p class="review_content" tabindex="0">
                "Went on, still gaining velocity, the palpitation of night and
                day merged into one continuous
              </p>
            </div>
            <div class="review_item">
              <p class="reviewer_name" tabindex="0">Utrodus Said</p>
              <p class="review_date" tabindex="0">13 November 2019</p>
              <p class="review_content" tabindex="0">
                "Went on, still gaining velocity, the palpitation of night and
                day merged into one continuous
              </p>
            </div>
              <form class="review_form" tabindex="0">
              <label for="name" tabindex="0">Name</label>
              <input
                id="name"
                aria-label="Your name"
                type="text"
                class="input_name"
                tabindex="0"
              />
              <label for="description" tabindex="0">Your Review</label>
              <textarea
                id="description"
                aria-label="Your Review"
                class="input_description"
                rows="5"
                tabindex="0"
              ></textarea>
              <button class="review_btn" tabindex="0">Add Review</button>
           </form>
          </div>
        </div>
      </article>

    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsDbSource.detailRestaurants(url.id);
    console.log(restaurant);
  },
};

export default Detail;
