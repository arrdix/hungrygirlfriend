import '../components/HomeHero';

const Hero = {
  render({ subtitle, title, tagline }) {
    const heroElement = document.createElement('home-hero');
    heroElement.content = {
      title,
      subtitle,
      tagline,
    };

    const heroWrapper = document.getElementById('hero');
    heroWrapper.append(heroElement);
  },
};

export default Hero;
