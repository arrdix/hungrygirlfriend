import { DataSource } from '../data/dataSource';

export const Restaurant = {
  init() {
    this.initialize();
  },

  async initialize() {
    try {
      const response = await DataSource.getData();
      this.renderBox(response.data.restaurants);
    } catch (error) {
      window.alert(error.message);
    }
  },

  renderBox(restaurants) {
    let boxId = 1;
    restaurants.forEach((restaurant) => {
      const roundedRating = Math.floor(restaurant.rating / 0.5) * 0.5;
      const box = document.createElement('button');
      box.setAttribute('type', 'button');
      box.setAttribute('aria-label', 'show restaurant detail');
      box.classList.add('box', `box-${boxId}`, `resId-${restaurant.id}`);

      if (boxId === 1 || boxId === 6) {
        box.innerHTML = `
          <div class="action-overlay big">
            <h3 class="box-title">${restaurant.name} | Rating: ${restaurant.rating} of 5</h3>
            <button type="button" aria-label="show ${restaurant.name} detail">
              <i class="fa-solid fa-expand"></i>
            </button>
          </div>
          <div class="box-overlay big">
            <div class="box-tag">
              <p>Recommended</p>
            </div>
            <h3 class="box-title">${restaurant.name}</h3>
            <h4 class="box-city">${restaurant.city}</h4>
            <div class="box-star-wrapper">
              ${renderStars(roundedRating)}
            </div>
          </div>
          <img src="${restaurant.pictureId}" class="restaurant-image" alt="${restaurant.name}">
        `;
      } else {
        box.innerHTML = `
          <div class="action-overlay">
            <h3 class="box-title">${restaurant.name} | Rating: ${restaurant.rating} of 5</h3>
            <button type="button">
              <i class="fa-solid fa-expand" aria-label="show ${restaurant.name} detail"></i>
            </button>
          </div>
          <div class="box-overlay">
            <h3 class="box-title">${restaurant.name}</h3>
            <h4 class="box-city">${restaurant.city}</h4>
            <div class="box-star-wrapper">
              ${renderStars(roundedRating)}
            </div>
          </div>
          <img src="${restaurant.pictureId}" class="restaurant-image" alt="${restaurant.name}"">
        `;
      }

      const boxWrapper = document.getElementById('box-wrapper');
      boxWrapper.appendChild(box);
      boxId++;

      function renderStars(roundedRating) {
        if (roundedRating === 3.5) {
          return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
          `;
        }

        if (roundedRating === 4) {
          return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          `;
        }

        if (roundedRating === 4.5) {
          return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          `;
        }

        if (roundedRating === 5) {
          return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          `;
        }
      }
    });
  },
};
