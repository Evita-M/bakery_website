let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 5
  ) {
    document.querySelector(".navbar").style.top = "0";
    document.querySelector(".navbar").style.opacity = "1";
  } else {
    document.querySelector(".navbar").style.top = "-100px";
  }
}

AOS.init({
  duration: 1800,
  })