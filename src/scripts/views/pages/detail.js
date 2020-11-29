import UrlParser from '../../routes/url-parser';
import RestaurantsDbSource from '../../data/restaurants-source';
import createRestaurantDetailTemplate from '../templates/detail-restaurant-template';
import { createErrorMessageTemplate } from '../templates/message-template';
import FavButtonInitiator from '../../utils/fav-btn-initiator';
import { DetailRestaurantSkeleton } from '../templates/skeleton-ui-template';

const Detail = {
  async render() {
    return `
       <article class="detail">
        <div id="favoriteButtonContainer"></div>
       <section class="container" id="loading_indicator">
        </section>
       <section class="container" id="detailContent">
        </section>
      </article>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailPageContainer = document.querySelector('#detailContent');
    const skeletonUiContainer = document.querySelector('#loading_indicator');
    detailPageContainer.style.display = 'none';
    skeletonUiContainer.innerHTML = DetailRestaurantSkeleton();
    try {
      const detailRestaurant = await RestaurantsDbSource.detailRestaurants(url.id);
      detailPageContainer.innerHTML = createRestaurantDetailTemplate(
        detailRestaurant,
      );
      detailPageContainer.style.display = 'block';
      skeletonUiContainer.style.display = 'none';
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
