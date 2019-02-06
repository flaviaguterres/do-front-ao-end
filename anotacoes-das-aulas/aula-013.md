# Aula 013 - 17/12/2018 
    
## 1. Arrumando bug

Arrumando a borda da imagem do fone no responsivo.

No arquivo `photo-product.css`, mover a propriedade `border-radius: 0;` do `@media (max-width: 1325px)` para `@media (max-width: 1310px)`.

## 2. HTML, CSS e JavaScript

- **HTML** => conteúdo, semântica (tags), estrutura (tags específicas para estruturar a página - HTML5).

- **CSS** => atrativo visual, animação (CSS3).

- **JavaScript** => comportamento da página, interação do usuário.

## 3. Nossa primeira linha de JavaScript

**Passo 1**:
- Criar a pasta "js" (pode ser nomeada também como: javascript ou script)
- Dentro da pasta js, criar o arquivo: `description-product.js`

**Passo 2**:  
- Escrever o processo lógico para programar em Javascript:

    ```js
    /*
    1 - Ter a janela (browser) na mão
    2 - Ter o HTML na mão
    3 - Pegar o coração
    4 - Pegar clique no coração
    5 - No momento que o usuário clicar, exibir o texto AE
    */
    ```

**Passo 3**:
- Escrever o código seguindo o processo lógico anotado anteriormente:

    ```js
    const $heart = window.document.querySelector(".-heart");

    console.log("$heart");
    ```

    `alert()` => exibe uma informação na tela.  
    `const $heart` => Cria uma variável chamada "heart" (pode usar com ou sem $).  
    `window` => janela (onde é exibida a página).  
    `document` => HTML.  
    `querySelector` => busca de seletor dentro do HTML.   
    `console.log` => Testa para ver se funciona.

**Passo 4:**
- Criar um link para o arquivo `description-product.js`:

    ```js
    /* Essa linha fica no fim do arquivo HTML, antes do fechamento do body */
    <script src="js/description-product.js"></script>
    ```

## 4. JavaScript e API do Browser

- **Javascript** => linguagem de programação

- **API do Browser** => "meio do caminho". Comunicação da linguagem de programação com o browser.

## 5. addEventListener é top top top

- Atualização do processo lógico:

    ```js
    /*
    1 - Ter a janela (browser) na mão => window => OK
    2 - Ter o HTML na mão => document => OK
    3 - Pegar o coração => window.document.querySelector(".-heart") => OK
    4 - Pegar clique no coração => $heart.addEventListener("click", handleClick); => OK
    5 - No momento que o usuário clicar, exibir o texto AE => console.log("AE"); => OK
    */
    ```

- Arquivo `description-product.js`:

    ```js
    const $heart = window.document.querySelector(".-heart");

    $heart.addEventListener("click", handleClick);

    function handleClick() {
        console.log("AE");
    }
    ```

    `$heart.addEventListener` => Adiciona o ouvinte de um evento dentro do "heart".  
    `("click")` => É o evento. Podem ser passados dois valores dentro do parêntese.  
    `function` =>  Função.  
    `handleClick` => Nome da função (lidar com o clique).  
    `handleClick();` => chama/executa a função.

    **OBS**: Quando é utilizado somente o nome da função (`handleClick`), significa que está sendo passada a função inteira para o browser e guarda dentro do evento de clique. Quando são utilizados os parênteses no nome da função (`handleclick()`), o browser executa a função no momento da leitura.

## 6. Desafios

1. **Desafio básico**: Pegar o elemento "Adiciona no carrinho" e colocar no console.

2. **Desafio intermediário**: Quando clicar no elemento "Adiciona no carrinho", deve aparecer uma mensagem de texto.

3. **Desafio avançado**: Quando clicar no elemento "Adiciona no carrinho", modificar o elemento "Carrinho (10)". Não precisa mudar a numeração, pode mudar somente o texto.

## Leituras sugeridas

- [O que é JavaScript? (MDN)](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/O_que_e_JavaScript)