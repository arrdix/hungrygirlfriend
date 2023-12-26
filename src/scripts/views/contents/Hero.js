import '../components/HomeHero';

const HomeHero = {
  render({ subTitle, title, tagline }) {
    const heroElement = document.createElement('home-hero');
    heroElement.heroContent = {
      title,
      subTitle,
      tagline,
    };

    const heroWrapper = document.getElementById('hero');
    heroWrapper.append(heroElement);
  },
};

export default HomeHero;
