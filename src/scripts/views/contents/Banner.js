import '../components/AppBanner';

const Banner = {
  render({ title, subtitle }) {
    const appBanner = document.createElement('app-banner');
    appBanner.content = {
      title,
      subtitle,
    };

    const bannerWrapper = document.getElementById('banner');
    bannerWrapper.append(appBanner);
  },
};

export default Banner;
