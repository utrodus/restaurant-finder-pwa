import FavButtonInitiator from '../../src/scripts/utils/fav-btn-initiator';
import FavoriteRestoIdb from '../../src/scripts/data/restaurants-idb-source';

const createFavButtonPresenterWithRestaurant = async (restaurantId) => {
  await FavButtonInitiator.init({
    favoriteRestaurant: FavoriteRestoIdb,
    favButtonContainer: document.querySelector('#favoriteButtonContainer'),
    restaurant: restaurantId,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavButtonPresenterWithRestaurant };
