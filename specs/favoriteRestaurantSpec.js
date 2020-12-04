// import FavoriteRestoIdb from '../src/scripts/data/restaurants-idb-source';
import * as TestFactories from './helpers/testFactories';

const addFavButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
};

describe('Favorite Restaurant', () => {
  beforeEach(() => {
    addFavButtonContainer();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="add to favorite"]'),
    ).toBeTruthy();
  });

  //   it('should not show the unlike button when the restaurant has not been liked before',
  //   async () => {
  //     await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

  //     expect(
  //       document.querySelector('[aria-label="remove from favorite restaurant"]'),
  //     ).toBeFalsy();
  //   });

  //   it('should be able to like the restaurant', async () => {
  //     await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

  //     document.querySelector('#likeButton').dispatchEvent(new Event('click'));
  //     const restaurant = await FavoriteRestoIdb.getRestaurant(1);

  //     expect(restaurant).toEqual({ id: 1 });
  //     FavoriteRestoIdb.deleteRestaurant(1);
  //   });

  //   it('should not add a restaurant again when its already liked', async () => {
  //     await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

  //     await FavoriteRestoIdb.putRestaurant({ id: 1 });
  //     document.querySelector('#likeButton').dispatchEvent(new Event('click'));
  //     expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

  //     FavoriteRestoIdb.deleteRestaurant(1);
  //   });

  //   // menggunakan metode xit, bukan it
  //   it('should not add a restaurant when it has no id', async () => {
  //     await TestFactories.createLikeButtonPresenterWithRestaurant({});

  //     document.querySelector('#likeButton').dispatchEvent(new Event('click'));

  //     expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
  //   });
});
