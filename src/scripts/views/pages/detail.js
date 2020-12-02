/* eslint-disable no-alert */
import UrlParser from '../../routes/url-parser';
import RestaurantsDbSource from '../../data/restaurants-source';
import { createErrorMessageTemplate } from '../templates/message-template';
import FavButtonInitiator from '../../utils/fav-btn-initiator';
import { DetailRestaurantSkeleton } from '../templates/skeleton-ui-template';
import createRestaurantDetailTemplate from '../templates/detail-restaurant-template';
import AddReview from '../../utils/add-review';

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
         <section id="form__review">
              <form class="review_form" >
              <label for="name" >Name</label>
              <input
                id="name"
                aria-label="Your name"
                type="text"
                class="input_name"
                tabindex="0"
              />
              <label for="description" >Your Review</label>
              <textarea
                id="description"
                aria-label="Your Review"
                class="input_description"
                rows="5"
                tabindex="0"
              ></textarea>
              <button id='btnAddReview' class="review_btn" tabindex="0">Add Review</button>
           </form>
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
    const inputName = document.querySelector('#name');
    const inputDesc = document.querySelector('#description');
    const btnAddReview = document.querySelector('#btnAddReview');

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
    btnAddReview.addEventListener('click', (e) => {
      e.preventDefault();
      if (inputName.value === '') {
        alert('Nama Tidak Boleh Kosong');
        inputName.value = '';
        inputName.focus();
      } else if (inputDesc.value === '') {
        alert('Deskripsi Review Tidak Boleh Kosong');
        inputDesc.value = '';
        inputDesc.focus();
      } else {
        AddReview(url, inputName.value, inputDesc.value);
        inputName.value = '';
        inputDesc.value = '';
      }
    });
  },
};

export default Detail;
