import {
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
} from '../views/templates/template-creator';
import FavoriteRestoIdb from '../data/restaurants-idb-source';

const FavButtonInitiator = {
  async init({ favButtonContainer, restaurant }) {
    this._favButtonContainer = favButtonContainer;
    this._restaurant = restaurant;
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
    const restaurant = await FavoriteRestoIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._favButtonContainer.innerHTML = createFavoriteButtonTemplate();
    const favoriteButton = document.querySelector('#favoriteButton');

    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putRestaurant(this._restaurant);
      await this._renderButton();
    });
  },

  _renderLiked() {
    this._favButtonContainer.innerHTML = createFavoritedButtonTemplate();
    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteRestaurant(this._restaurant.id);
      await this._renderButton();
    });
  },
};
export default FavButtonInitiator;
