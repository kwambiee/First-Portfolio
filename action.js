const projectsArray = [
  {
    title: "Awesome Books",
    description:
      "This is a basic website that allows users to add/remove books from a list. This project is built using Vanilla JavaScript, ES6 and Webpack.",
    modaldesc:
      "The App has the 'Add new' section that allows you enter your favorite books,the 'List' section that displays your favorite books and allows you to remove books and the contact section that displays address and telephone contact.",
    imageLink: "images/awesome_books.png",
    tags: ["HTML", "CSS", "Javascript"],
    role: "Front End Dev",
    company: "MICROVERSE",
    year: "2022",
    sourceLink: "https://github.com/kwambiee/ES6-AwesomeBooks",
    demoLink: "https://kwambiee.github.io/ES6-AwesomeBooks/",
  },
  {
    title: "Beauty Parlour",
    description:
      "This app extracts data Makeup API and displays a list of different brands, products contained in the brand and product details.",
    modaldesc:
      "This application displays all makeup brands, products contained in the brand and product details. It also allows you to view the price and ingredients of the product.",
    imageLink: "images/makeup.png",
    tags: ["React", "CSS", "Javascript"],
    role: "Front End Dev",
    company: "MICROVERSE",
    year: "2022",
    sourceLink: "https://github.com/kwambiee/beauty-parlour",
    demoLink: "https://www.loom.com/share/2c20791a4710438d92b4ba6e8e28711b",
  },
  {
    title: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    modaldesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: "images/Snap3.png",
    tags: ["HTML", "CSS", "Javascript"],
    role: "Back End Dev",
    company: "CANOPY",
    year: "2015",
    sourceLink: "",
    demoLink: "",
  },
  {
    title: "Budget App",
    description:
      "A Ruby project on building a budget application to track your expenditure.",
    modaldesc:
      "This is a Ruby on Rails capstone project is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
    imageLink: "images/desk-budget.png",
    tags: ["Ruby", "Rails", "CSS"],
    role: "Back End Dev",
    company: "MICROVERSE",
    year: "2022",
    sourceLink: "https://github.com/kwambiee/budget-app",
    demoLink: "https://kwambiee-budget.herokuapp.com/",
  },
];

window.onload = function loader() {
  const div = document.querySelector('.close-page');
  const open = document.querySelector('.open');
  const close = document.querySelector('.close');
  const links = document.querySelectorAll('.menu-link');
  const main = document.querySelector('main');
  const portfolio = document.getElementById('portfolio');
  const modals = document.querySelector('.modals');
  const overlay = document.querySelector('.overlay');
  const form = document.getElementById('form');
  const emailInput = document.getElementById('email');
  const error = document.getElementById('error');
  const nameInput = document.getElementById('username');
  const messageInput = document.getElementById('message');
  const hideFramework = document.getElementById('frameworks-hide');
  const showFramework = document.getElementById('frameworks-show');
  const hideSkills = document.getElementById('skills-hide');
  const showSkills = document.getElementById('skills-show');

  let active = '';
  let input = {
    username: '',
    email: '',
    message: '',
  };

  function checkLocalStorage() {
    const values = localStorage.getItem('input');

    if (values) {
      input = JSON.parse(values);
      nameInput.value = input.username;
      emailInput.value = input.email;
      messageInput.value = input.message;
    } else {
      localStorage.setItem('input', JSON.stringify(input));
    }
  }
  function updateLocalStorage(e) {
    input = { ...input, [e.target.name]: e.target.value };
    const serialized = JSON.stringify(input);
    localStorage.setItem('input', serialized);
  }

  function disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function scroller() {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = function ebnabler() {};
  }

  function addModals() {
    let modalitem = '';
    projectsArray.forEach((project, i) => {
      let tags = '';
      project.tags.forEach((tag) => {
        tags += `<span>${tag}</span>`;
      });
      modalitem += `
      <div class="project-item" id="project${i + 1}">
        <div class="item-header">
          <div class="title">${project.title}</div>
          <button data-close-button class="close-button">&times;</button>
        </div>
        <div class="item-body">
          <div class="item-details">
            <span>${project.company}</span>
            <span class="item-role">${project.role}</span>
            <span>${project.year}</span>
          </div>
          <div class="item-img img${i + 1}">
            <p>image point</p>
          </div>
          <div class="desktp-card">
            <div class="desk-card">
              <p>${project.modaldesc}</p>
            </div>
            <div class="desk-soc">
              <div class="tags">
                ${tags}
              </div>
              <div class="modal-links">
                <a href="${project.demoLink}"><span>See live</span>
                <img src="./images/live.png"/></a>
                <a href="${project.sourceLink}"><span>See Source</span>
                <img src="./images/giticon.png"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    });
    modals.innerHTML = modalitem;
  }

  function addProject() {
    let proj = '';
    projectsArray.forEach((project, i) => {
      let tags = '';
      project.tags.forEach((tag) => {
        tags += `<span>${tag}</span>`;
      });
      proj += `<div class="desk-cards">
      <div class="desk-object">
        <img class="card-image"src="${project.imageLink}" />
        <div class="desk-conta">
          <p class="card-tempm">${project.title}</p>
          <div class="item-details">
            <span>${project.company}</span>
            <span class="item-role">${project.role}</span>
            <span>${project.year}</span>
          </div>
          <p class="card-templ2">${project.description}</p>
          <div class="tags card-templ">
            ${tags}
          </div>
          <button     class="card-templ3"data-modal-target="#project${
            i + 1
          }">See Project</button>
        </div>
      </div>`;
    });
    portfolio.innerHTML = proj;
  }

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    active = `#${modal.id}.active`;
    overlay.classList.add('active');
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }

  // Function Call
  addModals();
  addProject();
  checkLocalStorage();

  // Event Listeners
  portfolio.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }
    const modal = document.querySelector(e.target.dataset.modalTarget);
    openModal(modal);
  });

  modals.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }
    const modal = e.target.closest('.project-item');
    closeModal(modal);
  });

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

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll(active);
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  form.addEventListener('submit', (e) => {
    const caps = /[A-Z]/g;
    const values = emailInput.value;
    if (values.match(caps)) {
      e.preventDefault();
      error.innerText = 'Please Enter Email in Lower Case';
    }
  });

  showFramework.addEventListener('click', () => {
    if (hideFramework.style.display === 'none') {
      hideFramework.style.display = 'block';
      showFramework.style.display = 'none';
    } else {
      hideFramework.style.display = 'none';
      showFramework.style.display = 'block';
    }
  });

  showSkills.addEventListener('click', () => {
    if (hideSkills.style.display === 'none') {
      hideSkills.style.display = 'block';
      showSkills.style.display = 'none';
    } else {
      hideSkills.style.display = 'none';
      showSkills.style.display = 'block';
    }
  });



  emailInput.addEventListener('input', updateLocalStorage);

  nameInput.addEventListener('input', updateLocalStorage);

  messageInput.addEventListener('input', updateLocalStorage);
};
// action = "https://formspree.io/f/xjvlodwe";
