# __Sejam bem-vindos!__
    O site Basketball, não é apenas mais um site qualquer apenas para falar sobre esse
    esporte que todos nós amamos, mas é o SEU site sobre Basket.
    
    Aqui você pode conferir os detalhes, história e informações sobre o seu time do
    coração, fique por dentro de todas as novidades e destaques sobre esse esporte que
    cada vez mais ganha o coração dos seus fãs e praticantes.

    O site é voltado para todas as idades, afinal não se tem parâmetros quando falamos
    sobre paixão pelo esporte.

## __Documentação Técnica__
### Estrutura de navegação
* Menu: Topo da página onde se encontra a logo a esquerda e menu de navegação
  a direita.
* Home: Parte inicial, onde pode ver o menu de navegação no topo e logo a baixo o
  banner de apresentação.
* Cards: Logo a baixo do banner de apresentação, se encontra alguns cards, cada
  um com um time.
* Sobre: Página onde conta quem somos e um pouco mais sobre nós.
* Times: Ao clicar em um card de algum time, você é redirecionado para uma página
  exclusiva com as informações do time.

### HTML
    Após a estrutura básica do HTML, pode se notar que temos uma div sem conteúdo,
    ela é responsável pela customização do cursor.

    Colocamos dentro da tag Header toda parte do menu e cabeçalho, utilizamos a tag
    ul de lista não ordenada pra dispor a parte de navegação do site.
  
    Seguindo em diante, utilizamos a tag Main para colocar a parte principal do site,
    logo a baixo do cabeçalho, dentro da tag Main separamos o conteúdo em duas sessões
    (com a tag Section), uma sessão se trata do banner de apresentação e a outra se
    trata dos cards, onde cada card representa um time.

    Todos os cards contam com a mesma estrutura HTML, apenas alterando as informações
    varáveis de time para time, como nome, logo, link da página de destino e algumas
    propriedades do CSS.

    Os cards seguem até o final do documento, finalizando o HTML com o link do Java Script.

### CSS
    No CSS utilizamos o modelo em cascata, onde seguimos com a estilização de cada item
    do site em ordem, utilizamos classes e id's para nomear cada tag necessária do HTML,
    assim estilizando através dessas classes e id's.

    Começamos adicionando a font usada, estilizações gerais da página, seguimos estilizando
    a scroll bar e personalizando a div do cursor do mouse, criando os efeitos e elementos.
    
    Em seguida personalizamos os elementos da página, na seguinte ordem: cabeçalho, banner
    de início e cards dos times.

    Por fim adicionei a sessão onde deixamos a página responsiva, funcionando em desktops,
    notebooks, tablets e celulares.

### Java Script
    Utilizamos o Java Script basicamente para a personalização do cursor, onde ele pega a
    posição X e Y do cursor e posiciona a div que criamos para isso anteriormente, de
    acordo com a posição do mouse.

    Também colocamos para toda vez que o mouse se encontra em um link, uma classe, na qual
    remove a cor de fundo do cursor, é adicionada ao cursor, dando um efeito a mais para ele.

### ✅ Como rodar o projeto
    Faça o download do repositório ou clone-o usando o Git:
    gh repo clone Kaue-Dias-Lipari/Basketball-HTML-CSS-JS


