const items = document.querySelectorAll(".navbar ul li a");
const sections = document.querySelectorAll("section");
const navH = document.querySelector("nav").scrollHeight;

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + navH + 40 < sections[index].offsetTop) {}

  items.forEach((item) => item.classList.remove("active"));
  items[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);
