import CONFIG from '../globals/config';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsDbSource {
  static async restaurantsList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async detailPicture(id, option) {
    const response = await fetch(API_ENDPOINT.PICTURE(id, option));
    return response.json();
  }

  static async postReview(data) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('X-Auth-Token', CONFIG.TOKEN);

    const raw = JSON.stringify(data);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    await fetch(API_ENDPOINT.POST_REVIEW, requestOptions)
      .then((response) => response.text())
      .then((result) => { console.log(result); return result; })
      .catch((error) => console.log('error', error));
  }
}

export default RestaurantsDbSource;
