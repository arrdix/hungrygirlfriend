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
      const box = document.createElement('button');
      box.setAttribute('type', 'button');
      box.classList.add('box', `box-${boxId}`, `resId-${restaurant.id}`);

      if (boxId === 1 || boxId === 7) {
        box.innerHTML = `
          <div class="action-overlay big">
            <h3 class="box-title">${restaurant.name}</h3>
            <button type="button">
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
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
          <img src="${restaurant.pictureId}" class="restaurant-image" alt="">
        `;
      } else {
        box.innerHTML = `
          <div class="action-overlay">
            <h3 class="box-title">${restaurant.name}</h3>
            <button type="button">
              <i class="fa-solid fa-expand"></i>
            </button>
          </div>
          <div class="box-overlay">
            <h3 class="box-title">${restaurant.name}</h3>
            <h4 class="box-city">${restaurant.city}</h4>
            <div class="box-star-wrapper">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
          <img src="${restaurant.pictureId}" class="restaurant-image" alt="">
        `;
      }

      const boxWrapper = document.getElementById('box-wrapper');
      boxWrapper.appendChild(box);
      boxId++;
    });
  },
};
