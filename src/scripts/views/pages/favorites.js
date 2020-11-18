import RestaurantsDbSource from "../../data/restaurantsdb-source";
import {
  createRestaurantItemTemplate,
  createEmptyFavoritePageTemplate,
} from "../templates/template-creator";
const Favorites = {
  async render() {
    return `
      <section class="content">
        <article id="favoritesRestaurant" class="favorites_restaurant">
          <div class="container" id="favoritesContainer">
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
    const restaurants = await RestaurantsDbSource.restaurantsList();
    const restaurantListContainer = document.getElementById(
      "restaurants__list"
    );

    const favoritesPageContainer = document.getElementById(
      "favoritesContainer"
    );

    favoritesPageContainer.innerHTML += createEmptyFavoritePageTemplate();

    // restaurants.forEach((restaurant) => {
    //   restaurantListContainer.innerHTML += createRestaurantItemTemplate(
    //     restaurant
    //   );
    // });
  },
};

export default Favorites;
