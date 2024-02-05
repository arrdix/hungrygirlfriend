/* eslint-disable no-undef */
Feature('Favoriting Restaurant');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('Showing empty restaurant on favorite page', ({ I }) => {
  I.see("Um, you don't have any favorite restaurant yet.", '.empty-message');
});

Scenario('Favoriting restaurant', async ({ I }) => {
  I.see("Um, you don't have any favorite restaurant yet.", '.empty-message');

  I.amOnPage('/');

  I.seeElement('.box-overlay');
  const firstRestaurant = locate('.box-overlay .box-title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.btn-fav');
  I.click('.btn-fav');

  I.amOnPage('#/favorite');

  I.seeElement('.box-overlay');
  const favoritedRestaurantName = await I.grabTextFrom(
    locate('.box-overlay .box-title'),
  );

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});

Scenario('Unfavoriting restaurant', ({ I }) => {
  I.see("Um, you don't have any favorite restaurant yet.", '.empty-message');

  I.amOnPage('/');

  I.seeElement('.box-overlay');
  I.click(locate('.box-overlay').first());

  I.seeElement('.btn-fav');
  I.click('.btn-fav');

  I.amOnPage('#/favorite');

  I.seeElement('.box-overlay');
  I.click('.box-overlay');

  I.seeElement('.btn-fav');
  I.click('.btn-fav');

  I.amOnPage('#/favorite');

  I.see("Um, you don't have any favorite restaurant yet.", '.empty-message');
});
