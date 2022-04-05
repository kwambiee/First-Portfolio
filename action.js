window.onload = function meunWindow() {
  const div = document.querySelector('.close-page');
  const open = document.querySelector('.open');
  const close = document.querySelector('.close');
  const links = document.querySelectorAll('.menu-link');
  const main = document.querySelector('main');

  function disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = function () {};
  }

  open.addEventListener('click', () => {
    div.style.display = 'block';
    disableScroll();
    main.style.filter = 'blur(4px)';
  });

  close.addEventListener('click', () => {
    div.style.display = 'none';
    enableScroll();
    main.style.filter = 'none';
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      enableScroll();
      div.style.display = 'none';
      main.style.filter = 'none';
    });
  });
};
