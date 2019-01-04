## ANOTAÇÕES DAS AULAS 002, 003, 004, 005, 006, 007, 008

# Desafios da Aula 002

1. **Desafio básico**: Colocar o tamanho da fonte dos links de acordo com o layout;

2. **Desafio intermediário**: Modificar a família da fonte indicada no layout ou de sua preferência;

3. **Desafio avançado**: Alinhar a logo e o menu de navegação.

---

# Desafios da Aula 003

1. **Desafio básico**: Escolher a propriedade e fazer o espaçamento no menu de navegação;

2. **Desafio intermediário**: Criar o botão COMPRAR (fora da tag header);

3. **Desafio avançado**: Centralizar o elemento header verticalmente;

4. **Desafio extra**: Escolher um tema ou algum assunto que foi abordado na aula e escrever/explicar para alguém do grupo. Ou escrever um texto no medium sobre esse tema/assunto.

---

# Desafio da Aula 004

1. **Desafio**: aprofundar os estudos sobre posicionamento:
   - Recomendação de leitura: [Pare de chutar e aprenda as propriedades CSS de posicionamento](https://medium.com/collabcode/pare-de-chutar-e-aprenda-as-propriedades-css-de-posicionamento-603154655121);
   - Assistir aos vídeos do post;
   - Implementar os exemplos dos posts.

---

# Desafios da Aula 005

1. **Desafio básico**: Incluir as propriedades do CSS no conteúdo da descrição do fone (tag `<dl>`) de acordo com o layout. Ex: font-family, color, espaçamento, posicionamento (lado esquerdo), etc;

2. **Desafio intermediário**: Ajustar os botões "Adiciona no carrinho" e "Comprar" um do lado do outro com espaçamento;

3. **Desafio avançado**: Incluir a imagem do fone ao lado da descrição. Dica: posicionamento.

---

# Desafios da Aula 006

1. **Desafio básico**: Adicionar as estrelas na descrição do produto com espaçamento;

2. **Desafio intermediário**: Adicionar a busca no header e posicioná-la;

3. **Desafio avançado**: Alinhar os botões embaixo da descrição do produto.

---

# Desafios da Aula 007

1. **Desafio básico**: Modificar o cursor do mouse ao passar por cima de alguns elementos clicáveis (Botão "Adiciona no carrinho", LOGO e nas estrelinhas). Dica: pointer;

2. **Desafio intermediário**: Inverter as cores dos botões quando o mouse passa em cima:

   - No botão COMPRAR, a cor de fundo deve ficar branca e a cor da fonte, azul.
   - No botão ADICIONA NO CARRINHO, a cor de fundo deve ficar branca e a cor da fonte, vermelha.

3. **Desafio avançado**: Adicionar e posicionar o coração.

---

# Desafios da Aula 008

1. **Desafio básico**: Fazer com que os elementos "coração" e "estrelas" aumentem um pouquinho ao passar o mouse por cima;

2. **Desafio intermediário**: Fazer com que apareça uma linha (borda) de 1px embaixo dos elementos do `<nav>` ao passar o mouse por cima;

3. **Desafio avançado**: Fazer animação na linha (borda) embaixo dos elementos do `<nav>`. Deve crescer da esquerda para a direita ao passar o mouse por cima.

# Desafio da Aula 009

1. **Desafio**: Compartilhar o que foi aprendido nessa aula com algum amigo ou pessoa próxima, ou escrever um post no medium.

---

# Temas abordados nas aulas

## HTML5

É uma linguagem de **marcação** utilizada para dizer ao navegador como exibir as páginas que são visitadas e que tem as seguintes responsabilidades:

- Conteúdo (texto, imagem, vídeo);
- Semântica (tags);
- Estrutura do site

**OBS**: HTML não é uma linguagem de **programação**.

---

## Estrutura básica de uma página HTML

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <title>Document</title>
    </head>
    <body>
        <!-- Conteúdo -->
    </body>
</html>
```

- `<!DOCTYPE html>`: Tag que informa ao browser a última versão do html.
- `<html></html>`: Envolve todo o conteúdo html.
- `<head></head>`: Tag que envolve as configurações sobre o conteúdo e comportamento.
- `<meta charset="UTF-8">`: Conjunto de caracteres padronizado.
- `<title></title>`: Tag que define o título da página.
- `<body></body>`: Tag que envolve o conteúdo que é exibido para o usuário.

---

## Tags

- `<header></header>`: Tag que delimita o cabeçalho da página.

- `<nav></nav>`: Tag que indica um menu de navegação.

- `<h1> Título </h1>` : É utilizado para definir títulos e possui seis níveis de cabeçalho => `<h1>` até `<h6>`.

- `<a> Link </a>` : Implementa um link (a = anchor.)  
  É utilizada para definir a navegação do usuário.  
  Se no texto for necessário que o usuário clique em alguma informação para ele ser direcionado à outra página, deve ser utilizada a tag junto com o atributo `href`.

      Exemplo de um `<a>` em que o usuário é direcionado para o site da collabcode.training:

      ```
      <a href="http://www.collabcode.trainning">CollabCode.Training</a>
      ```

      - `href` é o atributo da tag `<a>` e

  "http://www.collabcode.trainning" é o valor do atributo `href`. - A tag `<a>` pode ser utilizada com a função de botão clicável.

      **OBS**: Todos os atributos ficam na tag de abertura, nunca na tag de fechamento.

- `<figure></figure>`: representa o conteúdo independente, frequentemente com uma legenda `<figcaption>`, e é normalmente referido como uma única unidade. Geralmente é uma imagem, uma ilustração, um diagrama, um trecho de código ou uma esquema que é referenciado no texto principal.

  Sintaxe:

  ```
  <figure>
      <img src="img/fone.png" alt="Fone de ouvido">
      <figcaption>Fone de ouvido disponível</figcaption>
  </figure>
  ```

- `<img>`: representa a inseração de imagem no documento, sendo implementado também pelo HTML5 para uma melhor experiência com o elemento `<figure>` e `<figcaption>`.

* `<input>`: é usado para criar controles interativos para formulários baseados na web para receber dados do usuário. A semântica de um `<input>` varia consideravelmente dependendo do valor de seu atributo type. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input))

  - Atributos:

  1.  `type`: O tipo de controle a ser exibido. O tipo padrão é text, se este atributo não for especificado. Exemplo: **text** (padrão), **email**, **search**, **date**, etc.
  2.  `placeholder`: Uma dica para o usuário do que ele pode inserir no controle. O texto do atributo não deve conter quebras de linha. Este atributo é aplicado quando o valor do atributo type é **text**, **search**, **tel**, **url** ou **email**; caso contrário, ele é ignorado.

  Sintaxe:

  ```
   <input type="text" name="input" value="Digite aqui">
  ```

---

## Elementos HTML

- `<button></button>`: representa um botão clicável.

- `<dl></dl>`: Definition List - engloba uma lista de pares de termos e descrições. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/dl))

  Sintaxe:

  ```
  <dl>
      <dt>Título</dt>
      <dd>Texto texto texto texto.</dd>
  </dl>
  ```

- `<dt></dt>`: Description Term - identifica um termo na lista de definição. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/dt))

- `<dd></dd>`: Description Details - fornece detalhes ou uma definição mais completa do termo precedente (definido por `<dt>`) numa lista de descrições (`<dl>`). ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/dd))

---

## CSS

É uma linguagem de estilo utilizada para descrever a apresentação de um documento escrito em HTML e que tem as seguintes responsabilidades:

```
// Faz o link com a folha de estilo da página.

<link rel="stylesheet" href="header.css">
```

---

## Seletores

Fonte: [MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Getting_Started/Seletores)

1.  **Seletor de tag**:

    Sintaxe:

    ```
    header {

    }
    ```

    No CSS, este código inteiro é uma regra. Esta regra inicia com `header`, que é um seletor. Ele seleciona os elementos do DOM aos quais a regra se aplica.

2.  **Seletores com** `id`  
    Atributo que deve ser utilizado apenas em **um elemento**. Recomenda-se que seja utilizado um id por página.  
    No CSS, o id é utilizado da seguinte forma:

        ```
        #id-name {

        }
        ```

3. **Seletores com** `class`  
    Atributo que pode ser utilizado em vários elementos.  
    No CSS, a classe é utilizada da seguinte forma:

    ````
    .class-name {

        }
        ```
    ````

- **Classes compostas**  
   Exemplo:

  ```
  .button-store
  .button-store-second

  /* Variação de um botão */
  .button-store
  .button-store-second
  .-second

  /* No CSS */
  .button-store.-second {

  }

  /* Pega o elemento que está diretamente abaixo (irmão) do item -star */
  .description-product > .item.-star + .item
  ```

4. **Seletor de atributo**  
   Dentro dos colchetes você insere o nome do atributo, opcionalmente seguido por um operador correspondente e um valor.

   Sintaxe:

   ```
   /* Seleciona os elementos do tipo "search" */
   .header-store [type="search"]
   ```

5. **Pseudo-classes**  
    É uma palavra-chave adicionada a seletores que especifica um estado especial do elemento selecionado. Por exemplo, `:hover` pode ser usado para alterar a cor de um botão quando o usuário passar o cursor sobre ele. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes)) 

    Sintaxe:

    ```
    .button-store:hover {
        background-color: #fff;
        color: #e24647;
    }

    .button-store:active {
        transform: scale(0.9);
    }
    ```

---

## Propriedades CSS

- `background-color`: cor de fundo.
- `color`: cor da fonte.
- `font-size`: tamanho da fonte.
- `text-decoration`: é usada para definir a formatação de `underline`, `overline`, `line-through` ou `blink`.
- `font-family`: lista de prioridades de familias de fontes e/ou nomes genéricos de famílias a serem especificados para um elemento.  
  Exemplo:
  `font-family: Arial, "Roboto", sans-serif;`

[Google Fonts](https://fonts.google.com/) é uma biblioteca com mais de 800 fontes livres licenciadas, um diretório web interativo para navegar na biblioteca, e APIs para usar convenientemente as fontes através de CSS e Android. ([Wikipédia](https://pt.wikipedia.org/wiki/Google_Fonts))

- `float`: determina que um elemento deve ser retirado do seu fluxo normal e colocado ao longo do lado direito ou esquerdo do seu container, onde textos e elementos em linha irão se posicionar ao seu redor. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/float))

  **OBS**:  
   O tamanho do elemento é igual ao tamanho do conteúdo (width e height).  
   O que define o tamanho do elemento é o conteúdo.  
   Nunca esconde o conteúdo.  
   Novo contexto.

- `overflow`: especifica quando o conteúdo de um elemento de nível de bloco deve ser cortado, exibido com barras de rolagem ou se transborda do elemento.
  ```
  overflow: hidden; // o conteúdo é cortado e nenhuma barra de rolagem é exibida.
  ```
- `margin`: define a área de margem nos quatro lados do elemento.  
   Pode ser utilizado das seguintes formas:

  ```
  margin: top right botton left;

  margin: top/bottom right/left;

  margin: top right/left bottom;

  margin: top/right/bottom/left;  //valor único
  ```

- `padding`: define uma a distância entre o conteúdo de um elemento e suas bordas.  
   Pode ser utilizado das seguintes formas:

  ```
  padding: top right botton left;

  padding: top/bottom right/left;

  padding: top right/left bottom;

  padding: top/right/bottom/left;  //valor único
  ```

- `clear`: especifica se um elementopode ter elementos flutuantes ao seu lado ou se devem ser movidos para baixo dele (clear). Se aplica a elementos flutuantes e não flutuantes. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/clear))

  ```
  clear: none;
  clear: left;
  clear: right;
  clear: both;
  ```

- `display`: especifica o tipo de caixa de renderização usada por um elemento.

  ```
  `display: inline;` // Deixa os elementos na mesma linha. Não permite definir width e height. Ganha o comportamento de um conteúdo.

  display: block; // Não deixa os elementos na mesma linha. Permite definir width e height.

  display: inline-block; // Une os comportamentos das propriedades inline e block. Ou seja, deixa os elementos na mesma linha, ganha o comportamento de um conteúdo e permite definir width e height.
  ```

- `position`: define alternativas para posicionar elementos.  
  Valores do position:  
   `position: static; position: relative; position: absolute; //Cria um novo contexto. O que define o width e height é o conteúdo. position: fixed; position: sticky;`  
   As propriedades `top`, `right`, `bottom`, e `left` especificam a posição que os elementos dispostos terão em tela. São utilizadas juntamente com o `position:absolute`.

      - `top` e `bottom`  => mexe com o eixo X.
      - `left` e `right` => mexe com o eixo Y.

      Com essas propriedades, o elemento se move em relação à página.

      Exemplos:
      ```
      // O elemento fica posicionado no topo e do lado esquerdo do browser.
      position: absolute;
      top: 0;
      left: 0;
      ```

      ```
      // O elemento fica posicionado no topo e do lado direito do browser.
      position: absolute;
      top: 0;
      right: 0;
      ```

- `border`: propriedade que define a borda de um elemento. Normalmente, é utilizada com a seguinte sintaxe:

  ```
  border: 1px solid #fff;

  /* Cria uma borda sólida de 1px somente embaixo do elemento na cor branca */
  border-bottom: 1px solid #FFF;
  
  ```

  Mais detalhes sobre a propriedade `border`: ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border)).

- `vertical-align`: especifica o alinhamento vertical de um inline ou caixa table-cell. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/vertical-align))

  É utilizada juntamente com o `display: inline-block`.  
   Dica de lembrete: `vertical-align: inline-block`.

  Sintaxe:

  ```
  vertical-align: baseline; //valor padrão
  vertical-align: top;
  vertical-align: middle;
  vertical-align: bottom;
  ```

  **OBS**: O vertical-align não funciona para tudo, precisa ter dois elementos, um do lado do outro.

- `box-sizing`: é utilizada para alterar a propriedade padrão da box model, usada para calcular larguras (widths) e alturas (heights) dos elementos. É possível usar essa propriedade para emular o comportamento dos navegadores (browser) que não suportam corretamente a especificação da propriedade CSS box model. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/box-sizing))

  Sintaxe:

  ```
  box-sizing: content-box
  box-sizing: border-box
  box-sizing: inherit
  ```

- `text-transform`: especifica como capitalizar um texto de um elemento. Pode ser usado para que o texto apareça com todas as letras maiúsculas ou todas minúsculas, ou com cada palavra em maiúscula.

  Sintaxe:

  ```
  text-transform: uppercase; //Todas as letras maiúsculas
  text-transform: lowercase; // Todas as letras minúsculas
  ```

- `border-radius`: permite definir como bordas arredondadas são. A curva de cada esquina é definida usando um ou dois raios, definindo sua forma: círculo ou elipse. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/border-radius))

  Sintaxe:

  ```
  /* O raio é definido para todos os 4 lados */
  border-radius: 10px;

  /* O raio é definido para o lado superior direito */
  border-top-right-radius: 150px;

  /* O raio é definido para o lado inferior direito */
  border-bottom-right-radius: 150px;
  ```
- `cursor`: especifica o cursor do mouse mostrado quando o ponteiro do mouse está sobre um elemento. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/cursor))  

    Sintaxe:
    ```
    cursor: pointer;
    cursor: auto;
    ```  
- `transition`: é uma propriedade abreviada para `transition-property`, `transition-duration`, `transition-timing-function` e `transition-delay`. Ela permite definir a transição entre dois estados de um elemento. Estados diferentes podem ser definidos usando pseudo-classes tais como `:hover` ou `:active`; ou dinamicamente, usando javascript. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/transition))

    Sintaxe:  

    ```
    /* Aplica em todas as propriedades modificadas */
    transition: all 300ms linear;
    ```
- `transform-origin`: define a origem das transformações de um elemento. ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin))  

    Sintaxe:
    ```
    transform-origin: center;
    transform-origin: center left;
    transform-origin: 50px 50px;
    transform-origin: bottom right 60px;
    ```
- `max-width`: propriedade que estabelece a largura máxima de um elemento. Ele previne o valor usado da propriedade `width` de se tornar maior que o valor indicado pelo `max-width`. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/max-width))  

- `max-height`: propriedade que define a altura máxima de um elemento. Previne que o valor usado da propriedade `height` seja maior que o valor especificado pelo `max-height`. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/max-height)).

    Sintaxe:
    ```
    max-width: 1235px;

    max-width: 75%;

    max-height: 952px;

    max-height: 75%;
    ```

---

## Funções CSS

- `scale()`: define uma transformação que redimensiona um elemento no plano 2D. Como o redimensionamento é definido por um vetor, ele pode transformar as dimensões verticais e horizontais em escalas diferentes. Seu resultado é um dado do tipo `<transform-function>`. ([MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/transform-function/scale))  

    Sintaxe:   
    A função `scale()` é especificada com um ou dois valores, que representam a quantidade de redimensionamento a ser aplicada em cada direção.

    ```
    scale(sx)

    scale(sx, sy)

    /* Faz o elemento aumentar de tamanho */
    transform: scale(1.2);

    /* Faz o elemento diminuir de tamanho */
    transform: scale(0.9);

    ```

---

## Unidades de medidas CSS

- pixel
- porcentagem  
  No caso do `position: absolute`, a porcentagem leva em consideração a posição do elemento pai (browser).

      Exemplo:
      ```
      //Move em relação ao eixo do próprio elemento.

      // Centraliza o elemento no browser
      transform: translateX(-50%) translateY(-50%);
      ```

---

## Reset CSS

Padrão de estilos básico que remove a formatação original aplicada pelo browser.

- Reset CSS mais utilizado: [Reset do Eric Meyer](https://meyerweb.com/eric/tools/css/reset/).

**OBS**: O link do reset CSS deve estar **SEMPRE** antes do link do CSS da página.

**Dica**: Não mexa ou altere o reset para evitar problemas com a equipe de desenvolvimento.

---

## Como funcionam as cores?

- Sistema de cor **RGB** (Red, Green, blue)
- Sistema numérico **hexadecimal** (0 - 9 e A - F)

---

## Pixel no CSS

[Viewport Sizes](http://viewportsizes.com/)

---

## Herança no CSS

- `inherit`: palavra-chave do CSS que faz com que o elemento especificado **herde** a propriedade do seu elemento pai.

  Exemplo:

  ```
  header {
      color: #fff;
  }

  a {
      text-decoration: none;
      color: inherit;
  }
  ```

---

## Refatoração de código

Criando classes e organizando arquivos. Não serão mais utilizados seletores de tag no CSS, apenas seletores de classes.

---

## Metodolodias CSS

- **Metodologia BEM (Block, Element, Modifier)**: ​​é uma abordagem baseada em componentes para desenvolvimento web. A ideia por trás disso é dividir a interface do usuário em blocos independentes. Isso torna o desenvolvimento da interface fácil e rápido, mesmo com uma interface complexa, e permite a reutilização de código existente sem copiar e colar.  
  [Documentação da metodologia BEM](https://en.bem.info/methodology/quick-start/)  
  [Metodologia BEM para criar código legível - Maujor](https://www.maujor.com/tutorial/metodologia-bem-para-criar-codigo-legivel.php)

---

## Responsividade

- [Design Responsivo (MDN)](https://developer.mozilla.org/pt-BR/docs/Web_Development/Mobile/Design_responsivo).

- [Site único e responsivo ou sites dedicados? (Blog Alura)](http://blog.alura.com.br/site-unico-e-responsivo-ou-sites-dedicados/).

- [Como lidar com os limites de resolução em sites responsivos? (Blog Alura)](http://blog.alura.com.br/como-lidar-com-os-limites-de-resolucao-em-sites-responsivos/).

- [Entendendo as diferenças entre design responsivo, adaptativo e mobile-first (Fernanda)](https://medium.com/@fnandaleite/entendendo-as-diferen%C3%A7as-entre-design-responsivo-adaptativo-e-mobile-first-ea3c61fc9181).

- [A importância do design responsivo (Van Serradas)](https://brasil.uxdesign.cc/a-import%C3%A2ncia-do-design-responsivo-5f31966323d1).

- [Otimizando e Organizando as Media Queries (Felipe Fialho)](https://www.felipefialho.com/blog/2015/otimizando-e-organizando-as-media-queries).

- [Medindo o uso do breakpoint responsivo de um site (iMasters)](https://imasters.com.br/analytics/medindo-o-uso-do-breakpoint-responsivo-de-um-site).

- [Design responsivo: Quais e quantos breakpoints utilizar? (Front-end Brasil)](https://github.com/frontendbr/forum/issues/220).

- [Use sempre media queries baseadas no conteúdo da sua página (Sergio Lopes)](http://sergiolopes.org/media-queries-conteudo/).

- [Usando Media Queries (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/Guide/CSS/CSS_Media_queries).

---

## Emmet

Emmet é um plugin para vários editores de texto populares que melhora muito o fluxo de trabalho de HTML e CSS.  
[Documentação Emmet](https://docs.emmet.io/)

---

## Call to Action (CTA)

O Call to Action (CTA) é qualquer chamada — visual ou textual — que leve o leitor ou visitante de uma página a realizar alguma ação. Pode ser usado em sites, blogs, email e anúncios. ([Marketing de Conteúdo](https://marketingdeconteudo.com/o-que-e-cta/))

---

## SEO

SEO (Search Engine Optimization - Otimização dos Mecanismos de Pesquisa) é o processo de fazer com que um sítio fique mais visível nos resultados da procura, também denominado melhoramento na classificação da busca. ([MDN](https://developer.mozilla.org/pt-BR/docs/Glossario/SEO))  

---

## Affordance  

É a capacidade que um objeto (ou parte de uma interface) ser reconhecido e utilizado exatamente da maneira que foi projetado, mas sem a necessidade de uma explicação prévia. ([Entendendo affordance na prática](https://medium.com/trainingcenter/entendendo-affordance-na-pr%C3%A1tica-f41ec34dff2))  

---

## Usabilidade e UX

[10 heurísticas de Jakob Nielsen.](http://blog.caelum.com.br/10-heuristicas-de-nielsen-uma-formula-pra-evitar-erros-basicos-de-usabilidade/) (Atenção ao item 2).  

## HTTP e HTTPS

- [Uma visão geral do HTTP (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview).  

- [Desmistificando o protocolo HTTP – parte 1 (Blog Alura)](http://blog.alura.com.br/desmistificando-o-protocolo-http-parte-1/).

- [Desmistificando o protocolo HTTP – parte 2 (Blog Alura)](http://blog.alura.com.br/desmistificando-o-protocolo-http-parte-2/).

- [O que é e pra que serve o protocolo HTTP? Quando eu uso ele? (Gabs Ferreira)](http://gabsferreira.com/pra-que-serve-o-protocolo-http-quando-eu-uso-ele/).

- [Qual é a diferença entre HTTP e HTTPS? (Blog Alura)](http://blog.alura.com.br/qual-e-diferenca-entre-http-e-https/).

## SSH

- [SSH Keys (Adriano Rosa)](https://adrianorosa.com/blog/seguranca/ssh-keys.html).

- [Entendendo as diferenças entre Telnet e SSH (Blog Alura)](http://blog.alura.com.br/entendendo-as-diferencas-entre-telnet-e-ssh/).

- [Connecting to GitHub with SSH](https://help.github.com/articles/connecting-to-github-with-ssh/).




