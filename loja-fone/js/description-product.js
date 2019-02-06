/*
Alterando o comportamento do coração quando é clicado utilizando:
- if/else
- toggle
*/

const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
  // if ($heart.classList.contains("-active")) {
  //   $heart.classList.remove("-active"); // Quando tem a class active
  // } else {
  //   $heart.classList.add("-active"); // Quando não tem a class active
  // }

  $heart.classList.toggle("-active");
}
