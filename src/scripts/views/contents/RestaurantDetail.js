import AnimationHelper from '../../utils/AnimationHelper';
import ElementHelper from '../../utils/ElementHelper';
import FormHelper from '../../utils/FormHelper';
import LoadingHelper from '../../utils/LoadingHelper';
import '../components/detail/RestaurantAbout';
import '../components/detail/RestaurantMenu';
import '../components/detail/RestaurantReview';
import '../components/detail/ReviewModal';
import '../components/detail/FavoriteButton';

const RestaurantDetail = {
  render(restaurant) {
    this.renderAbout(restaurant);
    this.renderMenu(restaurant);
    this.renderReview(restaurant);
    this.renderReviewModal(restaurant);
    this.renderFavoriteButton(restaurant);
    this.initialListener();

    LoadingHelper.deactivateLoading();
  },

  renderAbout(restaurant) {
    const restaurantAbout = ElementHelper.render({
      elementName: 'restaurant-about',
      setterName: 'restaurant',
      elementClasses: ['restaurant-about'],
      data: restaurant,
    });

    const aboutWrapper = document.getElementById('about');
    aboutWrapper.append(restaurantAbout);
  },

  renderMenu(restaurant) {
    const restaurantMenu = ElementHelper.render({
      elementName: 'restaurant-menu',
      setterName: 'restaurant',
      elementClasses: ['restaurant-menu'],
      data: restaurant,
    });

    const menuWrapper = document.getElementById('menu');
    menuWrapper.append(restaurantMenu);
  },

  renderReview(restaurant) {
    const restaurantReview = ElementHelper.render({
      elementName: 'restaurant-review',
      setterName: 'restaurant',
      elementClasses: ['restaurant-review'],
      data: restaurant,
    });

    const reviewWrapper = document.getElementById('review');
    reviewWrapper.append(restaurantReview);

    AnimationHelper.reviewAnimation(restaurant.customerReviews);
  },

  renderReviewModal(restaurant) {
    const reviewModal = ElementHelper.render({
      elementName: 'review-modal',
      setterName: 'restaurant',
      elementClasses: ['review-modal', 'd-none'],
      data: restaurant,
    });

    const mainContent = document.getElementById('main-content');
    mainContent.append(reviewModal);

    this.renderForm();
    this.closeModalListener();
  },

  renderForm() {
    const inputForm = FormHelper.renderInput({
      labelName: 'Name',
      inputType: 'text',
      inputName: 'name',
      inputClass: '',
      inputId: 'input-name',
      inputValue: 'Name',
      inputAriaLabel: 'input-name',
    });

    const submitForm = FormHelper.renderInput({
      inputType: 'submit',
      inputName: 'submit',
      inputClass: 'btn-post-review',
      inputValue: 'Post',
    });

    const textareaForm = FormHelper.renderTextarea({
      labelName: 'Review',
      textareaName: 'review',
      textareaClass: 'review',
      textareaId: 'input-review',
      textareaAriaLabel: 'input-review',
    });

    const inputs = [inputForm, textareaForm];

    inputs.forEach((input) => {
      const reviewForm = document.getElementById('form-body');
      reviewForm.append(input);
    });

    const formFoot = document.getElementById('form-foot');
    formFoot.append(submitForm);
  },

  renderFavoriteButton(restaurant) {
    const favoriteButton = ElementHelper.render({
      elementName: 'favorite-button',
      setterName: 'restaurant',
      elementClasses: [''],
      data: restaurant,
    });

    const mainContent = document.getElementById('main-content');
    mainContent.append(favoriteButton);
  },

  closeModalListener() {
    document.getElementById('btn-cancel').addEventListener('click', () => {
      const reviewModal = document.querySelector('.review-modal');
      reviewModal.classList.add('d-none');
    });
  },

  initialListener() {
    document.getElementById('btn-add-review').addEventListener('click', () => {
      const reviewModal = document.querySelector('.review-modal');
      reviewModal.classList.remove('d-none');
    });
  },
};

export default RestaurantDetail;
