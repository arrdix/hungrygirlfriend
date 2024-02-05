/* eslint-disable no-undef */
Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('Showing empty restaurant on favorite page', ({ I }) => {
  I.see("Um, you don't have any favorite restaurant yet.", '.empty-message');
});
