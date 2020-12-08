const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

const firstCondition = 'Anda Belum Menambahkan Restaurant Ke Halaman Favorites';

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.see(firstCondition, '.empty__favorite');
});

Scenario('favorite one restaurant', async ({ I }) => {
  I.see(firstCondition, '.empty__favorite');

  I.amOnPage('/');

  I.seeElement('.restaurant__link');
  const firstResto = locate('.title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant__link');
  const favoritedCardTitle = await I.grabTextFrom('.title');
  assert.strictEqual(firstRestoTitle, favoritedCardTitle);
});

Scenario('unfavorite one restaurant', async ({ I }) => {
  I.see(firstCondition, '.empty__favorite');

  I.amOnPage('/');

  I.seeElement('.restaurant__link');
  const firstResto = locate('.title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant__link');
  const favoritedCardTitle = await I.grabTextFrom('.title');
  assert.strictEqual(firstRestoTitle, favoritedCardTitle);

  I.click(favoritedCardTitle);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorites');
  I.seeElement('#restaurants__list');

  I.see(firstCondition, '.empty__favorite');
});

Scenario('Customer review', async ({ I }) => {
  I.see(firstCondition, '.empty__favorite');

  I.amOnPage('/');

  I.seeElement('.restaurant__link');
  const firstResto = locate('.title').first();
  I.click(firstResto);

  I.seeElement('#form__review form');

  const reviewText = 'Create Review from E2E testing';
  I.fillField('name', 'Utrodus Said');
  I.fillField('description', reviewText);

  I.click('#btnAddReview');

  const newestReviewText = locate('.review_content').last();
  const textNewestReview = await I.grabTextFrom(newestReviewText);

  assert.strictEqual(reviewText, textNewestReview);
});
