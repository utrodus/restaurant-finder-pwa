import 'toastify-js/src/toastify.css';

const createFavoriteButtonTemplate = () => `
<button
          aria-label="add to favorite"
          id="favoriteButton"
          class="favorite__btn"
        >
          <i class="lni lni-heart" aria-hidden="true"></i>
        </button>
`;

const createFavoritedButtonTemplate = () => `
<button
          aria-label="remove from favorite this restaurant"
          id="favoriteButton"
          class="favorite__btn favorited__btn"
        >
          <i class="lni lni-heart" aria-hidden="true"></i>
        </button>
`;

export { createFavoriteButtonTemplate, createFavoritedButtonTemplate };
