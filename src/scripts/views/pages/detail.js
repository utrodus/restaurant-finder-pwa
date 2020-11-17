import UrlParser from "../../routes/url-parser";
import RestaurantsDbSource from "../../data/restaurantsdb-source";

const Detail = {
  async render() {
    return `

       <article id="detail" class="detail">
        <div class="container">
          <div class="main__content">
          <div class="restaurant_img">
          <img
            src="https://restaurant-api.dicoding.dev/images/small/14"
            alt="restaurant img"
          />
          </div>
          <div class="restaurant__info">
            <h2 class="restaurant__title">Melting Pot</h2>
            <p class="restaurant__address">Jln. Pandeglang no 19, Medan</p>
            <h3 class="restaurant__categories">Categories</h3>
            <div class="category__wrapper">
              <div class="category">
                <p>Italia</p>
              </div>
              <div class="category">
                <p>Modern</p>
              </div>
            </div>
            <p class="description">
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            </p>
          </div>
          </div>
           <button
            aria-label="add to favorite"
            id="favoriteButton"
            class="favorite__btn"
          >
            <i class="lni lni-heart" aria-hidden="true"></i>
          </button>
          <div class="secondary_content">
          <div class="menu">
            <div class="detail__subtitle">
              <p>Food Menu</p>
              <hr class="separator" />
            </div>
            <ul>
              <li>Paket rosemary</li>
              <li>Toastie salmon</li>
              <li>Bebek crepes</li>
              <li>Salad lengkeng</li>
            </ul>
          </div>
          <div class="menu">
            <div class="detail__subtitle">
              <p>Drink Menu</p>
              <hr class="separator" />
            </div>
            <ul>
              <li>Paket rosemary</li>
              <li>Toastie salmon</li>
              <li>Bebek crepes</li>
              <li>Salad lengkeng</li>
            </ul>
          </div>
          <div class="rating_overview">
            <div class="detail__subtitle">
              <p>Rating Overview</p>
              <hr class="separator" />
            </div>
            <div class="rating">
              <p class="total__rating">5.0</p>
            </div>
            </div>
          </div>

          <div class="customer__reviews">
           <div class="detail__subtitle">
            <p>Customer Reviews</p>
            <hr class="separator" />
          </div>
            <div class="review_item">
              <p class="reviewer_name">Utrodus Said</p>
              <p class="review_date">13 November 2019</p>
              <p class="review_content">
                "Went on, still gaining velocity, the palpitation of night and
                day merged into one continuous
              </p>
            </div>
            <div class="review_item">
              <p class="reviewer_name">Utrodus Said</p>
              <p class="review_date">13 November 2019</p>
              <p class="review_content">
                "Went on, still gaining velocity, the palpitation of night and
                day merged into one continuous
              </p>
            </div>
              <form class="review_form">
              <label for="name">Name</label>
              <input
                id="name"
                aria-label="Your name"
                type="text"
                class="input_name"
              />
              <label for="description">Your Review</label>
              <textarea
                id="description"
                aria-label="Your Review"
                class="input_description"
                rows="5"
              ></textarea>
              <button class="review_btn">Add Review</button>
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
