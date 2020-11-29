import FavoriteRestoIdb from '../../data/restaurants-idb-source';
import createRestaurantItemTemplate from '../templates/restaurant-item-template';
import { createEmptyFavoritePageTemplate } from '../templates/message-template';

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
    const favoritesPageContainer = document.getElementById(
      'favoritesContainer',
    );
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    const restaurantListContainer = document.getElementById(
      'restaurants__list',
    );
    if (restaurants === undefined || restaurants.length === 0) {
      favoritesPageContainer.innerHTML += createEmptyFavoritePageTemplate();
    }

    restaurants.forEach((restaurant) => {
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(
        restaurant,
      );
    });
  },
};

export default Favorites;
