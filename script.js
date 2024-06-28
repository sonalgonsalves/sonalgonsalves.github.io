const leftPanelToggle = document.getElementById("left-panel-toggle");
const leftPanel = document.getElementById("left-panel");

let leftPanelOpen = false;

leftPanelToggle.addEventListener("click", () => {
  if (!leftPanelOpen) {
    leftPanel.style.width = "65%";
    leftPanel.style.display = "block";
    leftPanel.style.left = "0";
    leftPanel.style.zIndex = "1";
    leftPanelOpen = true;
  } else {
    leftPanel.style.width = "0px";
    leftPanel.style.left = "-100%";
    leftPanelOpen = false;
  }
});

// Collapse left panel when clicking outside of it
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    if (leftPanelOpen) {
      if (!leftPanel.contains(e.target) &&!leftPanelToggle.contains(e.target)) {
        leftPanel.style.width = "0px";
        leftPanel.style.left = "-100%";
        leftPanelOpen = false;
      }
    }
  }
});

// Reset left panel when window is resized
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    leftPanel.style.width = "20%";
    leftPanel.style.left = "10px";
    leftPanel.style.zIndex = "0";
  }
});

// Hide header and toggles when screen size is normal
const header = document.getElementById("header");
const mediaQuery = window.matchMedia("(max-width: 768px)");

if (mediaQuery.matches) {
  header.style.display = "flex";
} else {
  header.style.display = "none";
}

mediaQuery.addEventListener("change", (event) => {
  if (event.matches) {
    header.style.display = "flex";
  } else {
    header.style.display = "none";
  }
});


// Reset left panel when screen size is increased
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && leftPanel.style.width === "0px") {
    leftPanel.style.width = "30%";
    leftPanel.style.left = "0";
    leftPanel.style.zIndex = "0";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", function() {
    document.getElementById("checkbox").checked = false;
  });
});

const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetPage = link.getAttribute('href').replace(/^#/, '');
    window.location.assign(`${targetPage}`);
  });
});

const typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 40,
  backDelay: 1000,
  loop: true,
  loopCount: 3,
  cursorChar: '|'
});