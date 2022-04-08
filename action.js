const projectsArray = [
  {
    title: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    modaldesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: "images/Snapshoot.png",
    tags: ["HTML", "CSS", "Javascript"],
    role: "Back End Dev",
    company: "CANOPY",
    year: "2015",
    sourceLink: "",
    demoLink: "",
  },
  {
    title: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    modaldesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: "images/Snap2.png",
    tags: ["HTML", "CSS", "Javascript"],
    role: "Back End Dev",
    company: "CANOPY",
    year: "2015",
    sourceLink: "",
    demoLink: "",
  },
  {
    title: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    modaldesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: "images/Snap3.png",
    tags: ["HTML", "CSS", "Javascript"],
    role: "Back End Dev",
    company: "CANOPY",
    year: "2015",
    sourceLink: "",
    demoLink: "",
  },
  {
    title: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    modaldesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: "images/Snapshoot.png",
    tags: ["HTML", "CSS", "Javascript"],
    role: "Back End Dev",
    company: "CANOPY",
    year: "2015",
    sourceLink: "",
    demoLink: "",
  },
];

window.onload = function () {
  const div = document.querySelector(".close-page");
  const open = document.querySelector(".open");
  const close = document.querySelector(".close");
  const links = document.querySelectorAll(".menu-link");
  const main = document.querySelector("main");
  const portfolio = document.getElementById("portfolio");
  const modals = document.querySelector(".modals");
  const overlay = document.querySelector(".overlay");
  let active = "";

  function disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = function () {};
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
                <a href="${project.sourceLink}"><span>See live</span> 
                <img src="./images/live.png"/></a>
                <a href="${project.demoLink}"><span>See Source</span>
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
        <div class="desk-conta"
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
    let modal = e.target.closest(".project-item");
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
};
