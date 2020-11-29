import UrlParser from '../../routes/url-parser';
import RestaurantsDbSource from '../../data/restaurants-source';
import createRestaurantDetailTemplate from '../templates/detail-restaurant-template';
import { createErrorMessageTemplate } from '../templates/message-template';
import FavButtonInitiator from '../../utils/fav-btn-initiator';

const Detail = {
  async render() {
    return `
       <article  class="detail">
        <div id="favoriteButtonContainer"></div>
       <section class="container" id="detailContent">
        </section>
      </article>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailPageContainer = document.querySelector('#detailContent');
    let detailRestaurant = {};

    try {
      detailRestaurant = await RestaurantsDbSource.detailRestaurants(url.id);
      detailPageContainer.innerHTML = createRestaurantDetailTemplate(
        detailRestaurant,
      );
      await FavButtonInitiator.init({
        favButtonContainer: document.querySelector('#favoriteButtonContainer'),
        restaurant: detailRestaurant,
      });
    } catch (error) {
      detailPageContainer.innerHTML += createErrorMessageTemplate(
        'Gagal Memuat Detail Restaurant, Mohon Periksa Koneksi Internet Anda',
      );
    }
  },
};

export default Detail;
