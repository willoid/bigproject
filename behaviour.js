//from https://github.com/daneden/animate.css

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

//the delay of the side elements is defined as class in the html?

document.getElementById("pg2whatdoido").onscroll = function() {
  animateCSS("#pg2whatdoido", "slideInLeft");
};

document.getElementById("pg2img").onscroll = function() {
  animateCSS("#pg2img", "slideInUp");
};

document.getElementById("pg2workwithme").onscroll = function() {
  animateCSS("#pg2workwithme", "slideInRight");
};

var waypoint = new Waypoint({
  element: document.getElementById("pg2container"),
  handler: function(direction) {
    animateCSS("#pg2whatdoido", "slideInLeft", "delay-3s");
    animateCSS("#pg2img", "slideInUp");
    animateCSS("#pg2workwithme", "slideInRight", "delay-3s");
  },
  offset: "100%"
});

document.getElementById("instagram").onmouseover = function() {
  animateCSS("#instagram", "pulse");
};

document.getElementById("facebook").onmouseover = function() {
  animateCSS("#facebook", "pulse");
};

document.getElementById("twitter").onmouseover = function() {
  animateCSS("#twitter", "pulse");
};

document.getElementById("linkedin").onmouseover = function() {
  animateCSS("#linkedin", "pulse");
};
document.getElementById("instagram2").onmouseover = function() {
  animateCSS("#instagram2", "pulse");
};

document.getElementById("facebook2").onmouseover = function() {
  animateCSS("#facebook2", "pulse");
};

document.getElementById("twitter2").onmouseover = function() {
  animateCSS("#twitter2", "pulse");
};

document.getElementById("linkedin2").onmouseover = function() {
  animateCSS("#linkedin2", "pulse");
};
