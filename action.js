window.onload = function meunWindow() {
  // const bars = document.querySelector('.bars');
  const div = document.querySelector('.close-page');
  const open = document.querySelector('.open');
  const close = document.querySelector('.close');
  const links = document.querySelectorAll('.menu-link');

  open.addEventListener('click', () => {
    div.style.display = 'block';
  });

  close.addEventListener('click', () => {
    div.style.display = 'block';
  });

  // function redirect() {
  // const { location } = window;
  // const initial = location.pathname;
  // console.log(location);
  //  }

  links.forEach((link) => {
    link.addEventListener('click', () => {
      // e.preventDefault();
      div.style.display = 'none';
    });
  });

  close.addEventListener('click', () => {
    div.style.display = 'none';
  });

//   document.querySelectorAll('.menu-link').forEach((n) => n.addEventListener('click', () => {
//     menu - list.classList.remove('menu-link');
//     // bars.classList.remove("close-page")
//   }));
};
