/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== DOWNLOAD RESUME ====================*/
const downloadButton = document.querySelector(".download-buttton");
downloadButton.addEventListener("click", function () {
  const downloadlink = document.createElement("a");
  // window.open("assets/pdf/sibangee_mohanty_resume.pdf");
  downloadlink.href = "assets/pdf/sibangee_mohanty_resume.pdf";
  downloadlink.download = "resume.pdf";
  downloadlink.click();
});
/*==================== ACCORDION SKILLS ====================*/
const skillsContainer = document.querySelectorAll(".skills__content");
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");

tab1.addEventListener("click", function () {
  // Perform action for Tab 1
  if (tab1.classList.contains("skills__open")) {
    tab1.classList.remove("skills__open");
  } else {
    skillsContainer.forEach((skills) =>
      skills.classList.remove("skills__open")
    );
    tab1.classList.add("skills__open");
  }
});

tab2.addEventListener("click", function () {
  // Perform action for Tab 1
  if (tab2.classList.contains("skills__open")) {
    tab2.classList.remove("skills__open");
  } else {
    skillsContainer.forEach((skills) =>
      skills.classList.remove("skills__open")
    );
    tab2.classList.add("skills__open");
  }
});
tab3.addEventListener("click", function () {
  // Perform action for Tab 1
  if (tab3.classList.contains("skills__open")) {
    tab3.classList.remove("skills__open");
  } else {
    skillsContainer.forEach((skills) =>
      skills.classList.remove("skills__open")
    );
    tab3.classList.add("skills__open");
  }
});

/*==================== QUALIFICATION TABS ====================*/

const qualificationContent = document.querySelectorAll(
  ".qualification__content"
);

const educationTab = document.getElementById("education");
const workTab = document.getElementById("work");

educationTab.addEventListener("click", function () {
  educationTab.style.color = "var(--first-color)";
  workTab.style.color = "var(--text-color-light)";
  qualificationContent[1].classList.remove("qualification__active");
  qualificationContent[0].classList.add("qualification__active");
});
workTab.addEventListener("click", function () {
  workTab.style.color = "var(--first-color)";
  educationTab.style.color = "var(--text-color-light)";
  qualificationContent[0].classList.remove("qualification__active");
  qualificationContent[1].classList.add("qualification__active");
});

/*==================== SERVICES MODAL ====================*/
const servicesButton = document.querySelectorAll(".services__button");
const servicesModal = document.querySelectorAll(".services__modal");
const modalClose = document.querySelectorAll(".services__modal-close");
servicesButton.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", function () {
    servicesModal[i].classList.add("active-modal");
  });
});

modalClose.forEach((close, i) => {
  close.addEventListener("click", function () {
    servicesModal[i].classList.remove("active-modal");
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/
const testimonials = [
  {
    username: "Abinash Mohanty",
    photo: "assets/img/abinash.png",
    comment:
      "I highly recommend Sibangee for any software development role. She is a skilled and reliable developer who will be an asset to any team. She was a valuable member of our team during their time working with us as a freelancer.As a software developer. She consistently demonstrated a deep understanding of software development principles and a willingness to learn and adapt to new technologies. She worked collaboratively with our team and always delivered high-quality code that was well-documented and easy to maintain.",
    designation: "Research Scientist @ByteDance",
  },
  {
    username: "Ron Dagdag",
    photo: "assets/img/Ron.png",
    comment:
      "I had the pleasure of managing Sibangee as an intern at Spacee. She was dedicated to her work and always willing to ask for help when needed. She efficiently debugged any issues that arose. Sibangee's positive attitude and commitment to her tasks made her a valuable member of our team. I recommend her for any future opportunities.",
    designation: "Director of Software Engineering @Spacee",
  },

  {
    username: "Sony Mohanty",
    photo: "assets/img/sony.png",
    comment:
      "Sibangee worked with our team as a freelancer, and during that time, she consistently demonstrated a high level of technical expertise and professionalism. She is a talented software developer who consistently delivered high-quality code on time and within budget. She have a deep understanding of software development principles and a passion for staying up-to-date with the latest technologies and trends.",
    designation: "Senior Software Engineer @Microsoft",
  },
];

const testcontainer = document.querySelector(".testimonial-container");
const test = document.querySelector(".testimonial");
const userimage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

let curr = 1;

function handlenext() {
  const name = testimonials[curr].username;
  const pic = testimonials[curr].photo;
  const text = testimonials[curr].comment;
  const position = testimonials[curr].designation;

  test.innerHTML = text;
  userimage.src = pic;
  username.innerHTML = name;
  role.innerHTML = position;
  curr++;

  if (curr > testimonials.length - 1) {
    curr = 0;
  }
}

setInterval(handlenext, 10000);
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyP1syOyCG1ziV3RWIvG50B12bhXX08reQSF38sOz0EL5NTj168-IXtv6hUIPb6jzIO/exec";
const form = document.forms["submit-to-google-sheet"];
const messageEl = document.querySelector(".success_message");
const inputfield = document.querySelectorAll(".contact__input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(
      ((messageEl.style.visibility = "visible"),
      inputfield.forEach((input) => {
        input.value = "";
      }))
    )
    .catch((error) => console.error("Error!", error.message));
});
/*==================== PASSIONS ====================*/
const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
