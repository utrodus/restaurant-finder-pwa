import Toastify from 'toastify-js';

import {
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
} from '../views/templates/button-template';

const FavButtonInitiator = {
  async init({ favoriteRestaurant, favButtonContainer, restaurant }) {
    this._favButtonContainer = favButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;
    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExits(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  async _isRestaurantExits(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._favButtonContainer.innerHTML = createFavoriteButtonTemplate();
    const favoriteButton = document.querySelector('#favoriteButton');

    favoriteButton.addEventListener('click', async () => {
      Toastify({
        text: 'Success Add Restaurant To Favorites',
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: 'bottom',
        position: 'center',
        backgroundColor: 'linear-gradient(to right, #EB3349, #F45C43)',
        stopOnFocus: true,
      }).showToast();
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      await this._renderButton();
    });
  },

  _renderLiked() {
    this._favButtonContainer.innerHTML = createFavoritedButtonTemplate();
    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      Toastify({
        text: 'Remove Restaurant From Favorites',
        duration: 3000,
        newWindow: true,
        className: 'toastFavorited',
        close: false,
        gravity: 'bottom',
        position: 'center',
        backgroundColor: '#ffffff',
        stopOnFocus: true,
      }).showToast();
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      await this._renderButton();
    });
  },
};
export default FavButtonInitiator;
