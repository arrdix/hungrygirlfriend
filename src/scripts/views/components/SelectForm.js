class SelectForm extends HTMLElement {
  set attributes(restaurants) {
    this.restaurants = restaurants;

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="input-header">
        <label for="restaurant">Restaurant</label>
        <p
          class="input-restaurant-validation form-validation good d-none"
        >
          Looks good!
        </p>
        <p
          class="input-restaurant-validation form-validation bad d-none"
        >
          Please select a valid restaurant.
        </p>
      </div>
      <select name="dropdown" class="dropdown" id="input-restaurant">
        <option value="default">Choose Restaurant</option>
        ${this.renderOption()}
      </select>
    `;
  }

  renderOption() {
    let toRender = '';

    this.restaurants.forEach((restaurant) => {
      toRender += `<option>${restaurant.name}</option>`;
    });

    return toRender;
  }
}

customElements.define('select-form', SelectForm);
