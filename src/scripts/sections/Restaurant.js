import DataSource from '../data/DataSource';

const Restaurant = {
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
      const box = document.createElement('div');
      box.classList.add('box', `box-${boxId}`, `resId-${restaurant.id}`);

      box.innerHTML = `
        <div class="action-overlay ${boxId <= 3 ? 'big' : ''}">
          <h3 class="box-title">${restaurant.name} | ${
            restaurant.rating
          } <i class="star fa-solid fa-star"></i></h3>
          <button type="button" aria-label="show ${restaurant.name} detail">
            <i class="full-screen fa-solid fa-expand"></i>
          </button>
        </div>
        <button type="button" aria-label="show ${
          restaurant.name
        } detail" class="box-overlay ${boxId <= 3 ? 'big' : ''}">
          ${boxId <= 3 ? this.renderTag() : ''}
          <h3 class="box-title">${restaurant.name}</h3>
          <h4 class="box-city">${restaurant.city}</h4>
          <div class="box-star-wrapper">
            ${this.renderStars(roundedRating)}
          </div>
        </button>
        <img src="${restaurant.pictureId}" class="restaurant-image" alt="${
          restaurant.name
        }">
      `;

      const boxWrapper = document.getElementById('box-wrapper');
      boxWrapper.appendChild(box);
      boxId++;
    });
  },

  renderStars(roundedRating) {
    const stars = [];
    for (let i = 1; i <= roundedRating; i++) {
      stars.push('<i class="fa-solid fa-star"></i>');
    }

    if (!(roundedRating % 1 === 0))
      stars.push('<i class="fa-solid fa-star-half-stroke"></i>');

    return stars.join('');
  },

  renderTag() {
    return `
    <div class="box-tag">
      <p>Recommended</p>
    </div>
    `;
  },
};

export default Restaurant;
