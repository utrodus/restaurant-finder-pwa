import FavButtonInitiator from '../../src/scripts/utils/fav-btn-initiator';

const createFavButtonPresenterWithRestaurant = async (restaurant) => {
  await FavButtonInitiator.init({
    favButtonContainer: document.querySelector('#favoriteButtonContainer'),
    data: {
      restaurant,
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavButtonPresenterWithRestaurant };
