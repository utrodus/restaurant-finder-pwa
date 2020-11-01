import RestaurantsDbSource from '../../data/restaurantsdb-source';
const Home = {
  async render() {
    return `
           <div class="jumbotron">
        <div class="jumbotron__content">
          <h1>The Best Restaurants in Indonesia.</h1>
          <h2>
            Kami menyediakan rekomendasi restaurant terbaik sebagai pilihan
            kuliner anda
          </h2>
          <a href="#restaurants" class="primary__button">Explore</a>
        </div>
      </div>
      <section class="content">
        <article class="featured">
          <figure class="featured__img">
            <img src="./images/featured-img.png" alt="featured-img" />
          </figure>
          <div class="featured__content">
            <div class="container">
              <h1>Catalog with more than 100 Restaurants</h1>
              <hr class="separator" />
              <p>
                CariResto App memiliki daftar rekomendasi restaurant terbaik
                lebih dari 100 pilihan di Indonesia
              </p>
            </div>
          </div>
        </article>
        <article id="restaurants" class="restaurants">
          <div class="container">
            <h1>Restaurants</h1>
            <hr class="separator" />
            <p>
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
    console.log(restaurants);
  },
};

export default Home;
