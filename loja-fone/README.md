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
- `background-color`: cor de fundo
- `color`: cor da fonte
- `font-size`: tamanho da fonte
- `text-decoration`: é usada para definir a formatação de  `underline`, `overline`, `line-through` ou `blink`.

## Reset CSS

Padrão de estilos básico que remove a formatação original aplicada pelo browser.

- Reset CSS mais utilizado: [Reset do Eric Meyer](https://meyerweb.com/eric/tools/css/reset/).

**OBS**: O link do reset CSS deve estar **SEMPRE** antes do link do CSS da página.

## Como funcionam as cores?

- Sistema de cor **RGB** (Red, Green, blue)
- Sistema numérico **hexadecimal** (0 - 9 e A - F)

## Pixel no CSS

[Viewport Sizes](http://viewportsizes.com/)

