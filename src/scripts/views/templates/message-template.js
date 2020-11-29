const createEmptyFavoritePageTemplate = () => `
<p class="empty__favorite">
Anda Belum Menambahkan Restaurant Ke Halaman Favorites
<i class="lni lni-heart" aria-hidden="true"></i>
</p>
`;

const createErrorMessageTemplate = (err) => `
<div id="errMessageContainer">
            <i class="lni lni-emoji-sad" aria-hidden="true" class="err__icon"></i>
            <p class="err__message">${err}</p>
            </div>
`;

export { createEmptyFavoritePageTemplate, createErrorMessageTemplate };
