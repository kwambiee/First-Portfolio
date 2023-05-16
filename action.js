const projectsArray = [
  {
    title: "My Restaurant",
    description:
      "The restaurant application majorly displays different categories of meals. The homepage shows a list of meals you can like. The popup window shows more data on the selected meal and the user can comment on it too.",
    modaldesc:
      "The interface displays a set of meal categories all derived from Meals DB Api, number of likes for the meal which is derived from the Involvement Api and images of the selected meal category",
    imageLink: "images/popup.png",
    tags: ["HTML", "CSS", "Javascript"],
    role: "Front End Dev",
    company: "MICROVERSE",
    year: "2022",
    sourceLink: "https://ichala.github.io/Javascript-Capstone/",
    demoLink:
      "https://drive.google.com/file/d/1gdzn9vXAoL6oqAK1gyBKHHbU7T90774y/view?usp=sharing",
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
    title: "Yatch House",
    description:
      "This is an application to book houses for rent.The user can choose the preferrable house and reserve it for a specific period of time.",
    modaldesc:
      "An application to book houses for rent like airbnb. The particularity is that the guests will live with their host to discover the local culture and customs. The user will be able to choose a house according to his preferences and book a period during which he will live with his guest.",
    imageLink: "images/desktop-house.png",
    tags: ["Ruby", "Rails", "CSS"],
    role: "Back End Dev",
    company: "Microverse",
    year: "2022",
    sourceLink: "https://github.com/kwambiee/yatch-house-front-end",
    demoLink: "https://yatch-house.netlify.app/",
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
  const div = document.querySelector(".close-page");
  const open = document.querySelector(".open");
  const close = document.querySelector(".close");
  const links = document.querySelectorAll(".menu-link");
  const main = document.querySelector("main");
  const portfolio = document.getElementById("portfolio");
  const modals = document.querySelector(".modals");
  const overlay = document.querySelector(".overlay");
  const form = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const error = document.getElementById("error");
  const nameInput = document.getElementById("username");
  const messageInput = document.getElementById("message");
  const header = document.querySelector(".header");

  let active = "";
  let input = {
    username: "",
    email: "",
    message: "",
  };

  function checkLocalStorage() {
    const values = localStorage.getItem("input");

    if (values) {
      input = JSON.parse(values);
      nameInput.value = input.username;
      emailInput.value = input.email;
      messageInput.value = input.message;
    } else {
      localStorage.setItem("input", JSON.stringify(input));
    }
  }
  function updateLocalStorage(e) {
    input = { ...input, [e.target.name]: e.target.value };
    const serialized = JSON.stringify(input);
    localStorage.setItem("input", serialized);
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
    let modalitem = "";
    projectsArray.forEach((project, i) => {
      let tags = "";
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
    let proj = "";
    projectsArray.forEach((project, i) => {
      let tags = "";
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
    modal.classList.add("active");
    active = `#${modal.id}.active`;
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }

  // Function Call
  addModals();
  addProject();
  checkLocalStorage();

  // Event Listeners
  portfolio.addEventListener("click", (e) => {
    if (e.target.nodeName !== "BUTTON") {
      return;
    }
    const modal = document.querySelector(e.target.dataset.modalTarget);
    openModal(modal);
  });

  modals.addEventListener("click", (e) => {
    if (e.target.nodeName !== "BUTTON") {
      return;
    }
    const modal = e.target.closest(".project-item");
    closeModal(modal);
  });

  open.addEventListener("click", () => {
    div.style.display = "block";
    disableScroll();
    main.style.filter = "blur(4px)";
  });

  close.addEventListener("click", () => {
    div.style.display = "none";
    enableScroll();
    main.style.filter = "none";
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      enableScroll();
      div.style.display = "none";
      main.style.filter = "none";
    });
  });

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(active);
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  form.addEventListener("submit", (e) => {
    const caps = /[A-Z]/g;
    const values = emailInput.value;
    if (values.match(caps)) {
      e.preventDefault();
      error.innerText = "Please Enter Email in Lower Case";
    }
  });

  // Header to disappear on scrolldown and reappear on scrollup
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  emailInput.addEventListener("input", updateLocalStorage);

  nameInput.addEventListener("input", updateLocalStorage);

  messageInput.addEventListener("input", updateLocalStorage);
};
// action = "https://formspree.io/f/xjvlodwe";
