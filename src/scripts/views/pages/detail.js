import UrlParser from '../../routes/url-parser';
import RestaurantsDbSource from '../../data/restaurants-source';
import createRestaurantDetailTemplate from '../templates/detail-restaurant-template';
import { createErrorMessageTemplate } from '../templates/message-template';
import FavButtonInitiator from '../../utils/fav-btn-initiator';
import { DetailRestaurantSkeleton } from '../templates/skeleton-ui-template';

const Detail = {
  async render() {
    return `
    <section class="content">
       <article class="detail">
        <div id="favoriteButtonContainer"></div>
       <section class="container" id="loading_indicator">
        </section>
       <section class="container" id="detail">
        </section>
      </article>
    </section>
    `;
  },

  async afterRender() {
    window.scrollTo(0, 0);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailPageContainer = document.querySelector('#detail');
    const skeletonUiContainer = document.querySelector('#loading_indicator');
    detailPageContainer.style.display = 'none';
    skeletonUiContainer.innerHTML = DetailRestaurantSkeleton();
    try {
      const detailRestaurant = await RestaurantsDbSource.detailRestaurants(url.id);
      detailPageContainer.innerHTML = createRestaurantDetailTemplate(
        detailRestaurant,
      );
      skeletonUiContainer.style.display = 'none';
      detailPageContainer.style.display = 'block';
      await FavButtonInitiator.init({
        favButtonContainer: document.querySelector('#favoriteButtonContainer'),
        restaurant: detailRestaurant,
      });
    } catch (error) {
      skeletonUiContainer.style.display = 'none';
      detailPageContainer.innerHTML += createErrorMessageTemplate(
        'Gagal Memuat Detail Restaurant, Mohon Periksa Koneksi Internet Anda',
      );
    }
  },
};

export default Detail;
