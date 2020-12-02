import FavoriteRestoIdb from '../../data/restaurants-idb-source';
import createRestaurantItemTemplate from '../templates/restaurant-item-template';
import { createEmptyFavoritePageTemplate } from '../templates/message-template';

const Favorites = {
  async render() {
    return `
     <div class="jumbotron">
        <div class="jumbotron__content">
          <h1 tabindex="0">Best Favorites Restaurant</h1>
          <h2 tabindex="0">
            Daftar restaurant terfavorit yang telah Anda tambahkan
          </h2>
        </div>
      </div>
      <section class="content">
        <article id="favoritesRestaurant" class="favorites_restaurant">
          <div class="container" id="favoritesContainer">
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
