## ANOTAÇÕES DAS AULAS 002, 003, 004

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
"http://www.collabcode.trainning" é o valor do atributo `href`.
    - A tag `<a>` pode ser utilizada com a função de botão clicável.

    **OBS**: Todos os atributos ficam na tag de abertura, nunca na tag de fechamento.

---

## Elementos HTML

- `<button></button>`: representa um botão clicável.

## CSS

É uma linguagem de estilo utilizada para descrever a apresentação de um documento escrito em HTML e que tem as seguintes responsabilidades:

- `<link rel="stylesheet" href="header.css">`: Faz o link com a folha de estilo da página.

---

## Seletor de tag

Exemplo: 
```
header { 

}
```

- Seletores com `id`: atributo que deve ser utilizado apenas em **um elemento**. Recomenda-se que seja utilizado um id por página.  
No CSS, o id é utilizado da seguinte forma:

    ```
    #id-name {

    }
    ```

- Seletores com `class`: atributo que pode ser utilizado em vários elementos.   
No CSS, a classe é utilizada da seguinte forma:
    ```
    .class-name {

    }
    ```

---

## Propriedades 

- `background-color`: cor de fundo.
- `color`: cor da fonte.
- `font-size`: tamanho da fonte.
- `text-decoration`: é usada para definir a formatação de  `underline`, `overline`, `line-through` ou `blink`.
- `font-family`: lista de prioridades de familias de fontes e/ou nomes genéricos de famílias a serem especificados para um elemento.  
Exemplo:
    ```
    font-family: Arial, "Roboto", sans-serif;
    ```

[Google Fonts](https://fonts.google.com/) é uma biblioteca com mais de 800 fontes livres licenciadas, um diretório web interativo para navegar na biblioteca, e APIs para usar convenientemente as fontes através de CSS e Android. ([Wikipédia]( https://pt.wikipedia.org/wiki/Google_Fonts))  

- `float`: determina que um elemento deve ser retirado do seu fluxo normal e colocado ao longo do lado direito ou esquerdo do seu container, onde textos e elementos em linha irão se posicionar ao seu redor. ([MDN]( https://developer.mozilla.org/pt-BR/docs/Web/CSS/float))     

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

- `clear`: especifica se um elementopode ter elementos flutuantes ao seu lado ou se devem ser movidos para baixo dele (clear). Se aplica a elementos flutuantes e não flutuantes. [MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/clear)

    ```
    clear: none;
    clear: left;
    clear: right;
    clear: both;
    ```

- `display`: especifica o tipo de caixa de renderização usada por um elemento.  
    ```
    `display: inline;` // Deixa os elementos na mesma linha. Não permite definir width e height.

    display: block; // Não deixa os elementos na mesma linha. Permite definir width e height.

    display: inline-block; // Une os comportamentos das propriedades inline e block. Ou seja, deixa os elementos na mesma linha e permite definir width e height.
    ```
- `position`: define alternativas para posicionar elementos.  
Valores do position:  
    ```
    position: static;
    position: relative;
    position: absolute; //Cria um novo contexto. O que define o width e height é o conteúdo.
    position: fixed;
    position: sticky;
    ```  
    As propriedades `top`, `right`, `bottom`, e `left` especificam a posição que os elementos dispostos terão em tela. São utilizadas juntamente com o `position:absolute`. 

    - `top` e `bottom`  => mexe com o eixo X.
    - `left` e `right` => mexe com o eixo Y.  

    Com essas propriedades, o elemento se move em relação à página.

    Exemplo:
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


