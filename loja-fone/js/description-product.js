/*
1 - Ter a janela (browser) na mão => window => OK
2 - Ter o HTML na mão => document => OK
3 - Pegar o coração => window.document.querySelector(".-heart") => OK
4 - Pegar clique no coração => $heart.addEventListener("click", handleClick); => OK
5 - No momento que o usuário clicar, exibir o texto AE => console.log("AE"); => OK
*/

const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
  console.log("AE");
}
