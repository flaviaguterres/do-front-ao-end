# Desafio da Aula 002

1. **Desafio básico**: Colocar o tamanho da fonte dos links de acordo com o layout;
2. **Desafio intermediário**: Modificar a família da fonte indicada no layout ou de sua preferência;
3. **Desafio avançado**: Alinhar a logo e o menu de navegação.

# Temas abordados nessa aula

## HTML5

É uma linguagem de **marcação** utilizada para dizer ao navegador como exibir as páginas que são visitadas e que tem as seguintes responsabilidades:
- Conteúdo (texto, imagem, vídeo);
- Semântica (tags);
- Estrutura do site

**OBS**: HTML não é uma linguagem de **programação**.

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

`href` é o atributo da tag `<a>` e 
"http://www.collabcode.trainning" é o valor do atributo `href`.

**OBS**: Todos os atributos ficam na tag de abertura, nunca na tag de fechamento.

## CSS

É uma linguagem de estilo utilizada para descrever a apresentação de um documento escrito em HTML e que tem as seguintes responsabilidades:

- `<link rel="stylesheet" href="header.css">`: Faz o link com a folha de estilo da página.

## Seletor de tag
Exemplo: 
```
header { 

}
```

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

## Reset CSS

Padrão de estilos básico que remove a formatação original aplicada pelo browser.

- Reset CSS mais utilizado: [Reset do Eric Meyer](https://meyerweb.com/eric/tools/css/reset/).

**OBS**: O link do reset CSS deve estar **SEMPRE** antes do link do CSS da página.

## Como funcionam as cores?

- Sistema de cor **RGB** (Red, Green, blue)
- Sistema numérico **hexadecimal** (0 - 9 e A - F)

## Pixel no CSS

[Viewport Sizes](http://viewportsizes.com/)

## Herança

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


