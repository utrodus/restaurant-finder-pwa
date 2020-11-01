import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantsDbSource {
  static async restaurantsList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async detailPicture(id,option) {
    const response = await fetch(API_ENDPOINT.PICTURE(id,option));
    return response.json();
  }
}

export default RestaurantsDbSource;
