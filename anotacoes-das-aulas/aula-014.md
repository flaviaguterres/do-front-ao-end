# Aula 014 - 18/12/2018 
    
## 1. Pegando elemento na página

Resolução do desafio básico da aula 013: Pegar o elemento "Adiciona no carrinho" e colocar no console.   

- Arquivo `button-store.js`

  ```js
  /* As duas maneiras estão corretas. A segunda linha, sem 'window', se chama short code ou atalho */
  const $second = window.document.querySelector(".-second");
  const $second = document.querySelector(".-second");
  ```

### Objeto

- `window`: O objeto window representa uma janela que contém um elemento DOM.  

### Propriedade

- `window.document`: Propriedade que retorna uma referência ao documento que o window contém. 
    
## 2. Adicionando um ouvinte do evento click

Resolução do desafio intermediário da aula 013: Quando clicar no elemento "Adiciona no carrinho", deve aparecer uma mensagem de texto.

- Arquivo `button-store.js`

  ```js
  const $second = document.querySelector(".-second");

  /* Seleciona o elemento (second), adiciona o ouvinte do evento como parâmetro (click) e a função a ser executada (handleClick) */
  $second.addEventListener("click", handleClick); 

  /* Função que diz quando deve ser executada (no momento do click) */
  function handleClick() {     
    console.log("Produto adicionado!");
  }
  ``` 

## 3. Mudando o conteúdo de um elemento

Resolução do desafio avançado da aula 013: Quando clicar no elemento "Adiciona no carrinho", modificar o elemento "Carrinho (10)".

- Arquivo `button-store.js`

  ```js
  const $second = window.document.querySelector(".-second");

  $second.addEventListener("click", handleClick);

  function handleClick() {
    /* Seleciona o elemento (.-last) */
    const $carrinho = document.querySelector(".-last"); 
    /* Chama o conteúdo do carrinho e modifica o valor do texto */
    $carrinho.textContent = "Carrinho (11)"; 
  }
  ```

  `$carrinho.textContent` => É o conteúdo do carrinho.

## 4. Aprendendo a somar de forma feliz

- Arquivo `button-store.js`

  ```js
  let valorInicial = 10;
  const $second = document.querySelector(".-second");

  $second.addEventListener("click", handleClick);

  function handleClick() {
    const $carrinho = document.querySelector(".-last");
    /* Adicionando um contador no $carrinho  */
    $carrinho.textContent = ++valorInicial;
  }
  ```

- Tipos de declaração de variáveis:
  - `var`: declara uma variável, opcionalmente é possível atribuir à ela um valor em sua inicialização.
  - `let`: permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword var, que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.
  - `const`: cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

- **Incremento (++)**: Operador unário. Adiciona um ao seu operando. Se usado como operador prefixado (++x), retorna o valor de seu operando após a adição. Se usado como operador pósfixado (x++), retorna o valor de seu operando antes da adição.

  ```js
  /* Primeiro atribui o valor da variável e depois faz a soma */
  valorInicial = valorInicial + 1;
  valorInicial += 1;

  /* Opções mais utilizadas */
  valorInicial++  
  ++valorInicial /* Primeiro faz a soma e depois atribuir o valor da variável */
  ```

## 5. Template String salva vidas
    
- Arquivo `button-store.js`
  ```js
  /* Forma antiga */
  $carrinho.textContent = "Carrinho (" + ++valorInicial + ")";

  /* Forma atual */
  $carrinho.textContent = `Carrinho (${++valorInicial})`;
  ```
- `Template literals`: são `literais string` que permitem expressões embutidas. Você pode usar string multi-linhas e interpolação de string com elas. Elas eram chamadas `template strings` nas versões anteriores à especificação ES2015.

## 6. Mudando comportamento visual

A comunicação do javascript com o css é feita através de classes.
    
- Arquivo `index.html`

  ```html
  <dd class="item -heart -active">
      <img class="icon" src="img/heart.png" alt="Like">
  </dd>
  ```

- Arquivo `description-product.css`

  ```css
  .description-product > .item.-active {
      background-color: #fff;
  }
  ```

- Arquivo `description-product.js`

  ```js
  const $heart = window.document.querySelector(".-heart");

  $heart.addEventListener("click", handleClick);

  function handleClick() {
    /* Adiciona a classe -active na lista de classes no momento em que o usuário clicar */
    $heart.classList.add("-active");
  }
  ```

  `classList` => Lista das classes  
  `add` => adiciona

## 7. CSS cuida do visual e JS do comportamento

- Arquivo `description-product.js`

  ```js
  const $heart = window.document.querySelector(".-heart");

  $heart.addEventListener("click", handleClick);

  function handleClick() {
    if ($heart.classList.contains("-active")) {
      $heart.classList.remove("-active"); // Quando tem a class active
    } else {
      $heart.classList.add("-active"); // Quando não tem a class active
    }
  }
  ```

- `if...else`: a condicional `if` é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de `else`.

## 8. classList.toggle, magia boa demais

- Arquivo `description-product.js`

  ```js
  const $heart = window.document.querySelector(".-heart");

  $heart.addEventListener("click", handleClick);

  function handleClick() {
    /*
    if ($heart.classList.contains("-active")) {
      $heart.classList.remove("-active"); // Quando tem a class active
    } else {
      $heart.classList.add("-active"); // Quando não tem a class active
    }
    */
    /* Método que faz exatamente o que o if/else faz nas linhas anteriores */
    $heart.classList.toggle("-active");
  }
  ```

**Métodos mais utilizados do `classList`**:
- `contains`: verifica se o valor da classe especificado existe no atributo de classe do elemento.
- `add`: adiciona valores de classe especificadas. Se essas classes já existem no atributo do elemento, elas são ignoradas.
- `remove`: remove valores de classe específicas.
- `toggle` (veio do JQuery): quando apenas um argumento está presente: Toggle class value; Ou seja, se a classe existir, em seguida, removê-lo e retornar false, se não, então adicioná-lo e retornar true. Quando um segundo argumento está presente: Se o segundo argumento é avaliado como true, adicione o valor especificado da classe e, se ele for avaliado como false, remova-o.
    
## 9. Desafios

1. **Desafio básico**: Arrumar a cor de fundo do coração. Dica: O excesso tem que ficar vermelho. Pode utilizar o gimp, figma, adobe xd, photoshop.

2. **Desafio intermediário**: Alterar o preenchimento da estrela quando for clicada. Exemplo: preenchido ou não preenchido.

3. **Desafio avançado**: Alterar o comportamento das estrelas quando forem clicadas. Por exemplo: quando clicar na primeira estrela, somente ela fica preenchida; quando clicar na segunda estrela, a primeira e a segunda estrela ficam preenchidas e assim por diante.

## Leituras Sugeridas

- [Como funciona o var, let e const? - CollabCode](https://medium.com/collabcode/javascript-e-suas-vari%C3%A1veis-var-let-e-const-b035b44c2dab)

- [Template strings - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings)

- [Element.classList - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList)

- [if...else - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)