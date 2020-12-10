const createFavoriteButtonTemplate = () => `
<button
role="button"
          aria-label="add to favorite"
          id="favoriteButton"
          class="favorite__btn"
        >
          <i class="lni lni-heart" aria-hidden="true"></i>
        </button>
`;

const createFavoritedButtonTemplate = () => `
<button  role="button"
          aria-label="remove from favorite restaurant"
          id="favoriteButton"
          class="favorite__btn favorited__btn"
        >
          <i class="lni lni-heart" aria-hidden="true"></i>
        </button>
`;

export { createFavoriteButtonTemplate, createFavoritedButtonTemplate };
