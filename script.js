const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});


ScrollReveal().reveal(" .section__hder", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});


//--------

ScrollReveal().reveal(
  ".about__row:nth-child(3) .about__i img, .about__row:nth-child(5) .about__i img",
  {
    ...scrollRevealOption,
    origin: "left",
  }
);
ScrollReveal().reveal(".about__row:nth-child(4) .about__i img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__ct span", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__ct h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__ct p", {
  ...scrollRevealOption,
  delay: 1500,
});


// contact container
ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".blog__content", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});



ScrollReveal().reveal(".why__container:nth-child(4) .why__image img ", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".why__grid span", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".why__grid h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".why__content p", {
  ...scrollRevealOption,
  delay: 1500,
});


