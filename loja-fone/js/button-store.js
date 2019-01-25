/* 
1 - Pegar o elemento "Adiciona no carrinho" e colocar no console. => OK
2 - Quando clicar no elemento "Adiciona no carrinho", deve aparecer uma mensagem de texto. => OK
3 - Quando clicar no elemento "Adiciona no carrinho", modificar o elemento "Carrinho (10)". Não precisa mudar a numeração, pode mudar somente o texto. => OK
*/

const $second = window.document.querySelector(".-second");

$second.addEventListener("click", handleClick);

function handleClick() {
  const $carrinho = document.querySelector(".-last");

  $carrinho.textContent = "Carrinho (11)";
}
