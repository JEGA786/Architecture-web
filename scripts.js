
  document.addEventListener('DOMContentLoaded', function () {
     // Swiper initialization for Clients swiper
     const clientsSwiper = new Swiper('.Clients-swiper-container', {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.Clients-swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1, // Default to 1 slide per view
        spaceBetween: 20, // 20px gap between slides
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });

     
      // Swiper initialization for another swiper (if needed)
      const otherSwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1, // Show 1 slide at once by default
        spaceBetween: 30, // 30px gap between slides
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });


    // Swiper initialization for Service swiper
    const serviceSwiper = new Swiper('.service-swiper-container', {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.service-swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1, // Show 1 slide at once by default
      spaceBetween: 30, // 30px gap between slides
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      on: {
        init: function ()  {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        },
      },
    });

    // Count up animation
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });

    // Navbar scroll effect
    const navbar = document.querySelector(".nav-bar");
    const menuItems = document.querySelectorAll(".nav-bar .menu li a");
    const menuIcon = document.querySelectorAll(".fa-bars");
    const scrollThreshold = 50; // Adjust this value as needed

    window.addEventListener("scroll", function () {
      if (window.scrollY > scrollThreshold) {
        navbar.style.backgroundColor = "var(--white-color)";
        menuItems.forEach((item) => {
          item.style.color = "var(--black-color)"; // Change menu item color
        });
        menuIcon.forEach((icon) => {
          icon.style.color = "var(--black-color)"; // Change menu icon color
        });
      } else {
        navbar.style.backgroundColor = "transparent";
        menuItems.forEach((item) => {
          item.style.color = "var(--white-color)"; // Default color or adjust as needed
        });
        menuIcon.forEach((icon) => {
          icon.style.color = "var(--white-color)"; // Default color or adjust as needed
        });
      }
    });
  });
