import RestaurantsDbSource from "../../data/restaurantsdb-source";
import createRestaurantItemTemplate from "../templates/template-creator";
const Favorites = {
  async render() {
    return `
      <section class="content">
        <article id="restaurants" class="restaurants">
          <div class="container">
            <h1>Favorites</h1>
            <hr class="separator" />
            <p>
             Daftar Restaurant Terfavorit
            </p>
          </div>
          <div id="restaurants__list" class="restaurants__list"></div>
        </article>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantsDbSource.restaurantsList();
    const restaurantListContainer = document.getElementById(
      "restaurants__list"
    );
    restaurants.forEach((restaurant) => {
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(
        restaurant
      );
    });
  },
};

export default Favorites;
