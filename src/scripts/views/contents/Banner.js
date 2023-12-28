import '../components/AppBanner';

const Banner = {
  render({ title, subtitle, image }) {
    const appBanner = document.createElement('app-banner');
    appBanner.content = {
      title,
      subtitle,
      image,
    };

    const bannerWrapper = document.getElementById('banner');
    bannerWrapper.append(appBanner);
  },
};

export default Banner;
