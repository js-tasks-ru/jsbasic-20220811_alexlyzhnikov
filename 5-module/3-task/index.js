function initCarousel() {
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  arrowLeft.style.display = 'none';
  let carousel = document.querySelector('.carousel__inner');
  let carouselSlide = document.querySelectorAll('.carousel__slide');
  let slideWidth = carousel.offsetWidth;
  let position = 0;

  function cheker () {
    switch (position) {
      case 0:
        arrowLeft.style.display = 'none';
        break;
      case (-slideWidth * (carouselSlide.length - 1)):
        arrowRight.style.display = 'none';
        break;
      default:
        arrowLeft.style.display = '';
        arrowRight.style.display = '';
    }
  }

  document.querySelector('.carousel__arrow_right').onclick = function() {
    position -= slideWidth;
    position = Math.max(position, -slideWidth * (carouselSlide.length - 1));
    carousel.style.transform = `translateX(${position}px)`;
    cheker();
  };

  document.querySelector('.carousel__arrow_left').onclick = function() {
    position += slideWidth;
    position = Math.min(position, 0);
    carousel.style.transform = `translateX(${position}px)`;
    cheker();
  };

}
