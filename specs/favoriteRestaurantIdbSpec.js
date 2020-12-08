import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestoIdb from '../src/scripts/data/restaurants-idb-source';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestoIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestoIdb);
});
