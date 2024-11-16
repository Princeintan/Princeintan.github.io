const navBtns = document.querySelectorAll("li");

const allSections = {
  Education: document.querySelector(".educations"),
  Experience: document.querySelector(".experiences"),
  Skills: document.querySelector(".skills"),
  Achievements: document.querySelector(".achievements"),
  SelfMotivatedProjects: document.querySelector(".self-motivated-projects"),
};

function activeSection(btn) {
  Object.values(allSections).forEach((section) =>
    section.classList.remove("active")
  );
  navBtns.forEach((navBtn) => navBtn.classList.remove("active"));

  allSections[btn.dataset.section].classList.add("active");
  btn.classList.add("active");
}

for (let btn of navBtns) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    activeSection(btn);
  });
}

const projectsWrapper = document.querySelector(".projects-wrapper");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let isScrolling = false;

function scrollProjects(direction) {
  if (isScrolling) return;
  isScrolling = true;

  const projectWidth = document.querySelector(".project").offsetWidth; // Get the width of one project
  const projectHeight = document.querySelector(".project").offsetHeight;
  const scrollAmountWidth = direction === "left" ? -projectWidth : projectWidth;
  const scrollAmountHeight =
    direction === "left" ? -projectHeight : projectHeight;

  if (window.innerWidth > 1138) {
    projectsWrapper.scrollBy({
      left: scrollAmountWidth,
      behavior: "smooth",
    });
  } else {
    projectsWrapper.scrollBy({
      top: scrollAmountHeight,
      behavior: "smooth",
    });
  }

  setTimeout(() => {
    isScrolling = false;
  }, 500);
}

leftArrow.addEventListener("click", () => scrollProjects("left"));
rightArrow.addEventListener("click", () => scrollProjects("right"));
