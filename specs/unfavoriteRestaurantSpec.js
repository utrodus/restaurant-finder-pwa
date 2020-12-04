import FavoriteRestoIdb from '../src/scripts/data/restaurants-idb-source';
import * as TestFactories from './helpers/testFactories';

const addFavButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
};

describe('Unfavorite a Restaurant', () => {
  beforeEach(async () => {
    addFavButtonContainer();
    await FavoriteRestoIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteRestaurant(1);
  });

  it('should display unfavorite widget when the restaurant has been favorited', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="remove from favorite restaurant"]')).toBeTruthy();
  });

  it('should not display unfavorite widget when the restaurant has been favorited', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="add to favorite"]')).toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="remove from favorite restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavorite restaurant is not in the list', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestoIdb.deleteRestaurant(1);
    document
      .querySelector('[aria-label="remove from favorite restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });
});
