//Pages
const homePage = document.querySelector('.home-page');

//Sliders
//Services slider
$(document).ready(function(){
  $('.services__slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-arrow.svg" alt="slide-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-arrow.svg" alt="slide-arrow"></button>',
    autoplay: true,
  });

  $('.our-works__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-arrow.svg" alt="slide-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-arrow.svg" alt="slide-arrow"></button>',
    autoplay: true,
  });

  $('.employees__block').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-arrow.svg" alt="slide-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-arrow.svg" alt="slide-arrow"></button>',
    slidesToShow: 4,
  });
});

//Home page
if (homePage) {
  initSwiperSlider();
}

//Functions
//Swiper slider
function initSwiperSlider() {
  var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    autoplay: {
      delay: 4000,
    },
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

//Fixed header when we start scrolling
function fixedHeader() {
  const header = document.querySelector('.header__navbar');

  document.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      header.classList.add('fixed-top');
    } else {
      header.classList.remove('fixed-top');
    }
  })
}

//Counter
function counter() {
  document.addEventListener("DOMContentLoaded", function() {
    // You can change this class to specify which elements are going to behave as counters.
    var elements = document.querySelectorAll(".scroll-counter")

    elements.forEach(function(item) {
      // Add new attributes to the elements with the '.scroll-counter' HTML class
      item.counterAlreadyFired = false
      item.counterSpeed = item.getAttribute("data-counter-time") / 45
      item.counterTarget = +item.innerText
      item.counterCount = 0
      item.counterStep = item.counterTarget / item.counterSpeed

      item.updateCounter = function() {
        item.counterCount = item.counterCount + item.counterStep
        item.innerText = Math.ceil(item.counterCount)

        if (item.counterCount < item.counterTarget) {
          setTimeout(item.updateCounter, item.counterSpeed)
        } else {
          item.innerText = item.counterTarget
        }
      }
    })

    // Function to determine if an element is visible in the web page
    var isElementVisible = function isElementVisible(el) {
      var scroll = window.scrollY || window.pageYOffset
      var boundsTop = el.getBoundingClientRect().top + scroll
      var viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
      }
      var bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
      }
      return (
        (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
        (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
      )
    }

    // Funciton that will get fired uppon scrolling
    var handleScroll = function handleScroll() {
      elements.forEach(function(item, id) {
        if (true === item.counterAlreadyFired) return
        if (!isElementVisible(item)) return
        item.updateCounter()
        item.counterAlreadyFired = true
      })
    }

    // Fire the function on scroll
    window.addEventListener("scroll", handleScroll)
  })
}

//Employees animation
let employeesInfoBtns = document.querySelectorAll('.employee__info-icon-block');
document.addEventListener('DOMContentLoaded', function(){
  setTimeout(() => {
    employeesInfoBtns = document.querySelectorAll('.employee__info-icon-block');
    animateCard();
    console.log(employeesInfoBtns);
  }, 1000);
});

function animateCard() {
  employeesInfoBtns.forEach((infoBtn) => {
    infoBtn.addEventListener("click", function () {
      infoBtn.style.pointerEvents = "none";
      this.parentElement.parentElement.classList.add('animate__flipInY');
      this.parentElement.parentElement.querySelector('.employee__photo').classList.toggle('blured');
      this.parentElement.parentElement.querySelector('.employee__info').classList.toggle('active');
      setTimeout(() => {
        this.parentElement.parentElement.classList.remove('animate__flipInY');
        infoBtn.style.pointerEvents = "auto";
      }, 1000);
    })
  })
}

//To animate services cards
window.addEventListener('scroll', function() {
  const servicesLeftCards = document.querySelectorAll('.services__item-left');
  const servicesRightCards = document.querySelectorAll('.services__item-right');
  servicesLeftCards.forEach((card) => {
    const elementPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1; // Порог в пикселях, когда элемент считается "видимым"

    if (elementPosition < screenPosition) {
      card.classList.add('animate__animated', 'animate__backInLeft', 'animate__fast', 'active');
    }
  });
  servicesRightCards.forEach((card) => {
    const elementPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1; // Порог в пикселях, когда элемент считается "видимым"

    if (elementPosition < screenPosition) {
      card.classList.add('animate__animated', 'animate__backInRight', 'animate__fast', 'active');
    }
  });
});

//Call functions
fixedHeader();
counter();