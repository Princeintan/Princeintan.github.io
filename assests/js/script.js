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
