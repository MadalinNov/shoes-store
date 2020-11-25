const burger = document.getElementById("burger");
const navLinks = document.getElementById("Links");
const carousel = document.querySelector(".Carousel");
const navBar = document.getElementById("Navbar");
const navLink = document.querySelectorAll("a");
const cardsContainer = document.querySelector(".cards--container");
///////////EVENTS
///Window resize
window.addEventListener("resize", () => {
  x = window.innerWidth;
  y = window.innerHeight;
  if (x < 768) {
    navLinks.classList.remove("Nav--links");
    navLinks.classList.add("sidebar");
    ///AutocloseSidebar on link click
    navLink.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("sidebar--active");
      });
    });
  } else {
    navLinks.classList.add("Nav--links");
    navLinks.classList.remove("sidebar");
  }
});
////Sidebar
burger.addEventListener("click", () => {
  navLinks.classList.toggle("sidebar--active");
});
document.addEventListener("mousemove", (e) => {
  if (e.pageY > 760 || e.pageY < 70) {
    document.querySelector(".Cursor--effect").style.visibility = "hidden";
  } else {
    document.querySelector(".Cursor--effect").style = `left: ${e.pageX - 12}px; 
    top: 
    ${e.pageY - 80}px`;
  }
});
///NAVBAR SCROLL ANIM
document.addEventListener("scroll", (e) => {
  const scrollY = document.documentElement.scrollTop;
  const navStyle = navLinks.style;
  const x = window.innerWidth;
  scrollY >= 100
    ? navLinks.classList.add("Nav--links--Scroll--anim")
    : navLinks.classList.remove("Nav--links--Scroll--anim");
});
window.addEventListener("scroll", () => {
  var position = cardsContainer.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom >= 0) {
    cardsContainer.classList.add("fade");
  }
});
