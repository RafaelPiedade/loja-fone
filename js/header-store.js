const $search = document.querySelector(".search");
const $icons = document.querySelectorAll(".header-store .icon");

$icons.forEach($icon => {
  $icon.addEventListener("click", () => {
    $search.classList.toggle("-active");
  });
});
