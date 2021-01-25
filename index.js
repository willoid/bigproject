//from https://github.com/daneden/animate.css

//Animating Navbar

const showNav = () => {
  document.getElementById("navList").classList.add("showNavList");
  document.getElementById("navBtn").classList.add("hideNavBtn");
};

const hideNav = () => {
  document.getElementById("navList").classList.remove("showNavList");
  document.getElementById("navBtn").classList.remove("hideNavBtn");
};

//handling Gallery

var slideIndex = 1;
showSlides(slideIndex);

function testClick() {
  console.log("it works");
}

function plusSlides(n) {
  showSlides((slideIndex += n));
  console.log(n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("galleryCard");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//animating the elements after animate css (https://animate.style/)

function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);
  node.classList.add("animated", animationName);

  function handleAnimationEnd() {
    node.classList.remove("animated", animationName);
    node.removeEventListener("animationend", handleAnimationEnd);

    if (typeof callback === "function") callback();
  }

  node.addEventListener("animationend", handleAnimationEnd);
}

//animating first bg immage for desktop only
const windowWidth = window.innerWidth;
windowWidth > 1200
  ? (window.onload = function () {
      animateCSS("#landingPage", "fadeInDownBig");
    })
  : null;
//the delay of the side elements is defined as class in the html?

/* document.getElementById("portfolioTrigger").onscroll = function() {
  animateCSS("#portfolio", "fadeIn");
}; */
//self-invoking function to trigger onscroll animations once
 (function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top * 1.1;

      if (positionFromTop - windowHeight < 0) {
        element.classList.add('animated', 'fadeIn');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();


