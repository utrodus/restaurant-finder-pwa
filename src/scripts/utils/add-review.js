import RestaurantsDbSource from '../data/restaurants-source';

const AddReview = (url, name, review) => {
  const formData = {
    id: url.id,
    name,
    review,
  };
  RestaurantsDbSource.postReview(formData);
  const reviewListContainer = document.querySelector('#detail');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
   <div class="review_item" tabindex="0" ><p class="reviewer_name" tabindex="0">${name}</p>
    <p class="review_date" tabindex="0">${date}</p>
    <p class="review_content" tabindex="0">${review}</p>
  </div>
    `;
  reviewListContainer.lastElementChild.innerHTML += newReview;
};

export default AddReview;
