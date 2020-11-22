import UrlParser from '../../routes/url-parser';
import RestaurantsDbSource from '../../data/restaurants-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
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
    const detailRestaurant = await RestaurantsDbSource.detailRestaurants(
      url.id,
    );

    const detailPageContainer = document.querySelector('#detailContent');

    detailPageContainer.innerHTML = createRestaurantDetailTemplate(
      detailRestaurant,
    );

    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: detailRestaurant,
    });
  },
};

export default Detail;
