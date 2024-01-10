import '../components/AppBanner';

const Banner = {
  render({ title, subtitle, image, expandable }) {
    const appBanner = document.createElement('app-banner');
    appBanner.content = {
      title,
      subtitle,
      image,
      expandable,
    };

    const bannerWrapper = document.getElementById('banner');
    bannerWrapper.append(appBanner);

    this.bannerListener();
  },

  bannerListener() {
    document
      .getElementById('btn-expand')
      ?.addEventListener('click', this.bannerExpander);
  },

  bannerExpander() {
    const bannerWrapper = document.getElementById('banner');
    bannerWrapper.classList.toggle('expanded');

    const bannerImage = document.getElementById('banner-image');
    bannerImage.classList.toggle('off');
  },
};

export default Banner;
