import FavoriteRestaurantIDB from '../src/scripts/data/FavoriteRestaurantIDB';
import FavoriteHandler from '../src/scripts/utils/FavoriteHandler';
import '../src/scripts/views/components/detail/FavoriteButton';

describe('FavoritingRestaurant', () => {
  beforeEach(() => {
    const favoriteButton = document.createElement('favorite-button');
    favoriteButton.restaurant = { id: '1' };

    document.body.appendChild(favoriteButton);
  });

  it('Should show favorite button if restaurant has not been favorited before', () => {
    const clickableFavoriteButton = document.querySelector(
      '[aria-label="add to favorite"]',
    );
    expect(clickableFavoriteButton).not.toBeNull();
  });

  it('Should be able to favorite the restaurant', (done) => {
    const restaurants = [
      {
        id: '1',
        name: 'restaurant a',
        city: 'bronx',
        rating: 4.4,
        pictureId: 1,
      },
    ];
    FavoriteHandler.init(restaurants);

    const clickableFavoriteButton = document.querySelector(
      '[aria-label="add to favorite"]',
    );
    clickableFavoriteButton.click();

    window.addEventListener('DatabaseUpdated', async () => {
      const favoritedRestaurant =
        await FavoriteRestaurantIDB.getAllRestaurants();
      expect(favoritedRestaurant).toEqual([
        {
          id: '1',
          name: 'restaurant a',
          city: 'bronx',
          rating: 4.4,
          pictureId: 1,
        },
      ]);

      done();
    });
  });

  it('Should show unfavorite button if restaurant has been favorited', () => {
    const clickableFavoriteButton = document.querySelector(
      '[aria-label="add to favorite"]',
    );
    clickableFavoriteButton.click();

    const favoritedButton = document.querySelector('.favorited');
    expect(favoritedButton).not.toBeNull();
  });

  fit('Should not repeat favoriting process if the restaurant is already favorited', async () => {
    const restaurants = [
      {
        id: '1',
        name: 'restaurant a',
        city: 'bronx',
        rating: 4.4,
        pictureId: 1,
      },
    ];

    await FavoriteRestaurantIDB.updateRestaurant(restaurants, '1');
    FavoriteHandler.init(restaurants);

    const clickableFavoriteButton = document.querySelector(
      '[aria-label="add to favorite"]',
    );
    clickableFavoriteButton.click();

    window.addEventListener('DatabaseUpdated', async () => {
      console.log('OK');

      const favoritedRestaurant =
        await FavoriteRestaurantIDB.getAllRestaurants();
      expect(favoritedRestaurant).toEqual([{ id: 'a' }]);
    });
  });
});
