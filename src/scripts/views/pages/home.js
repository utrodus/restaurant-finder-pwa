import RestaurantsDbSource from "../../data/restaurantsdb-source";
import createRestaurantItemTemplate from "../templates/template-creator";

const Home = {
  async render() {
    return `
           <div class="jumbotron">
        <div class="jumbotron__content">
          <h1 tabindex="0">The Best Restaurants in Indonesia.</h1>
          <h2 tabindex="0">
            Kami menyediakan rekomendasi restaurant terbaik sebagai pilihan
            kuliner anda
          </h2>
          <a href="#restaurants" class="primary__button" tabindex="0">Explore</a>
        </div>
      </div>
      <section class="content">
        <article class="featured">
          <figure class="featured__img">
            <img src="./images/featured-img.png" alt="featured-img" tabindex="0"/>
          </figure>
          <div class="featured__content">
            <div class="container">
              <h1 tabindex="0">Catalog with more than 100 Restaurants</h1>
              <hr class="separator" />
              <p tabindex="0">
                CariResto App memiliki daftar rekomendasi restaurant terbaik
                lebih dari 100 pilihan di Indonesia
              </p>
            </div>
          </div>
        </article>
        <article id="restaurants" class="restaurants">
          <div class="container">
            <h1 tabindex="0">Restaurants</h1>
            <hr class="separator" />
            <p tabindex="0">
              Berikut daftar restaurant terbaik rekomendasi kuliner bersama
              keluarga, teman atau yang tersayang
            </p>
          </div>
          <div id="restaurants__list" class="restaurants__list"></div>
        </article>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantsDbSource.restaurantsList();
    const restaurantListContainer = document.getElementById(
      "restaurants__list"
    );
    restaurants.forEach((restaurant) => {
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(
        restaurant
      );
    });
  },
};

export default Home;
