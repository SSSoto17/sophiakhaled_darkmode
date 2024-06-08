const cursor = document.querySelector(".cursor");
const links = Array.from(document.querySelectorAll("a"));
const filter = Array.from(document.querySelectorAll(".container.option"));
const gallery = Array.from(document.querySelectorAll("ul.gallery li"));

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px;"
  );
});

links.forEach((link) => {
  link.addEventListener("mousemove", (e) => {
    cursor.classList.add("cursor_hover");
  });

  link.addEventListener("mouseleave", (e) => {
    cursor.classList.remove("cursor_hover");
  });
});

filter.forEach((option) => {
  option.addEventListener("mousemove", (e) => {
    cursor.classList.add("cursor_hover");
  });

  option.addEventListener("mouseleave", (e) => {
    cursor.classList.remove("cursor_hover");
  });
});

gallery.forEach((image) => {
  image.addEventListener("mousemove", (e) => {
    cursor.classList.add("cursor_hover");
  });

  image.addEventListener("mouseleave", (e) => {
    cursor.classList.remove("cursor_hover");
  });
});
