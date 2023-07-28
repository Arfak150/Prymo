// mobileNav.js
export function initializeMobileNav() {
  let hamburger = document.querySelector(".hamburger");
  let navlinks = document.querySelector(".mobile-links");
  let isClicked = false;

  hamburger.addEventListener('click', function () {
    if (isClicked) {
      hamburger.classList.remove("active");
      navlinks.classList.add("off");
    } else {
      hamburger.classList.add('active');
      navlinks.classList.remove('off');
    }
    isClicked = !isClicked;
  });

  let mobileLinks = document.querySelectorAll(".mobile-links a");
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navlinks.classList.add("off");
      hamburger.classList.remove("active");
    });
  });
}
