import UrlParser from "../../routes/url-parser";
import RestaurantsDbSource from "../../data/restaurants-source";
import { createRestaurantDetailTemplate } from "../../views/templates/template-creator";

const Detail = {
  async render() {
    return `
       <article id="detail" class="detail">
      </article>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurant = await RestaurantsDbSource.detailRestaurants(
      url.id
    );
    let detailPageContainer = document.querySelector("#detail");
    detailPageContainer.innerHTML = createRestaurantDetailTemplate(
      detailRestaurant
    );
  },
};

export default Detail;
