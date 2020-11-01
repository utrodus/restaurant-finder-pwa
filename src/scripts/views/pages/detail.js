const Detail = {
  async render() {
    return `
    <main>
        <article id="restaurants" class="restaurants">
          <div class="container">
            <h1>Ini Detail Page</h1>
            <hr class="separator" />
            <p>
              Berikut daftar restaurant terbaik rekomendasi kuliner bersama
              keluarga, teman atau yang tersayang
            </p>
          </div>
        </article>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
