const AnimationHelper = {
  reviewAnimation(reviews) {
    const boxWrapper = document.getElementById('box-wrapper');
    const boxImage = document.getElementById('box-image');
    const boxName = document.getElementById('box-name');
    const boxDate = document.getElementById('box-date');
    const boxContent = document.getElementById('box-content');
    const nameInitials = reviews.map((review) => review.name[0].toUpperCase());
    let currIndex = 0;

    setInterval(() => {
      // bring boxWrapper to position translateY(0) at 0 ms
      setTimeout(() => {
        boxWrapper.classList.add('show');
      }, 0);

      // bring boxWrapper to position translateY(-200%) at 3750 ms
      // and hide the element using opacity 0
      setTimeout(() => {
        boxWrapper.classList.add('hide');
      }, 3750);

      // bring boxWrapper to position translateY(200%) at 4000 ms
      // while the element is hidden
      setTimeout(() => {
        boxWrapper.classList.add('start');
      }, 4000);

      // show the element while waiting the content changed
      setTimeout(() => {
        boxWrapper.classList.remove('hide');
        boxWrapper.classList.remove('show');
      }, 4200);

      boxImage.setAttribute(
        'src',
        `https://placehold.co/50x50/FFF/000000?text=${nameInitials[currIndex]}`,
      );
      boxName.innerHTML = reviews[currIndex].name;
      boxDate.innerHTML = reviews[currIndex].date;
      boxContent.innerHTML = reviews[currIndex].review;

      if (currIndex === reviews.length - 1) {
        currIndex = 0;
      } else {
        currIndex++;
      }
    }, 5000);
  },
};

export default AnimationHelper;
