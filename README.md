<h1 align="center">Blog API</h1>

<h2 align="center">Português</h2>


**Nome**: Blog API

**Conhecimentos Usados**: JavaScript e Sequelize.

**Ferramentas usadas**: Node.js, JWT, Express e MySQL.

**Número de Pessoas**: 1 (sozinho).

-----------------------

<h3 align="center">Descrição</h3>

<p align="justify">Criado com o propósito de documentar meu trabalho e meus projetos, a intenção era de criar algo simples e direto, onde eu apenas mostrasse
o que sei fazer e então fornecesse projetos para demonstrar isso de forma documentada o que fiz e pretendo fazer. Para esse propósito, criei apenas duas páginas; uma na qual eu me apresentaria e diria informações sobre mim, minhas experiências e objetivos, e a outra onde eu mostraria os projetos com textos em aspecto de registro do que foi feito.</p>
<p align="justify">Toda a página deve funcionar em duas línguas: português e inglês, as quais são as duas que domino. Entretanto o código é capaz de comportar
um número ilimitado de linguagens, desde que a informação necessária seja fornecida. Para tal, todo o site não possui texto em seu documento HTML, e, ao invés disso
toda a informação é alimentada através de JavaScript através de um gerenciador de informações para cada página. A informação é passada como um objeto composto por
dois arrays em cada chave, e a posição do array determina qual língua é selecionada e visualizada, sendo 0 português e 1 inglês; a partir disso, é apenas necessário
intercalar o valor da variável de linguagenm para a mudar.</p>
<p align="justify">Este sistema de gerenciamento de informações é muito mais pesadamente aplicado na página de projetos. Através de código, a página é gerada de
acordo com qual projeto foi selecionado pelo usuário, criando assim uma biblioteca que pode ser ampliada sem a necessidade de se estender a página em si, como numa interface. Apesar de limitar a edição da página e da documentação da criação do projeto a seções pré-estabelecidas, atinge completamente a meta de criar algo simples mas capaz de registrar corretamente o meu trabalho.</p>
<p align="justify">A estrutura html acabou por possuir uma grande quantidade de div's. O motivo disso é a criação de elementos com mero propósito estético, os quais
são div's posicionadas de forma a gerar formas específicas através de intermediárias com uma mistura de posicionamento absoluto e relativo. Através disso foi possível
gerar formas, como as da seção de conhecimentos ou o enquadramento da foto.</p>
<p align="justify">A página foi projetada para ser completamente responsiva, podendo ser usada em todos os tamanhos de tela. Para atingir isso entretanto houve um
desafio a ser superado: a barra de menu. Por possuir uma animação a partir de intervalo, a mudança no tamanho da página causava problemas em seus limites de movimento.
Para solucionar isso, foi usado um observador, o qual iria informar o código a respeito de mudanças nas especificações da tela.</p>
<p align="justify">Com a estrutura da página pronta, objetivos futuros incluem adicionar mais dos projetos que fiz ao longo do último ano, e tornar os ícones da seção de conhecimento na página principal selecionáveis, levando a um projeto aleatório na página de projetos no qual aquele conhecimento selecionado tenha sido usado.</p>

----------------------

<h2 align="center">English</h2>


**Name**: Blog API

**Used Knowledges**: JavaScript and Sequelize.

**Used Tools**: Node.js, JWT, Express and MySQL.

**Number of People**: 1 (solo).

-----------------------

<h3 align="center">Description</h3>

<p align="justify">Created for documenting my work and projects, the intention was to create something simple and straightforward, with wich I just show
what I know and how I know what to, do and then provide projects to demonstrate, in a documented manner, what I have done and intend to do in the future. For this purpose, I created only two pages; one in which I would introduce myself and tell information about myself, like my experiences and goals, and the other where I would show the projects with texts, as a record of what had been done.</p>
<p align="justify">The entire page works with two languages: Portuguese and English, which are the ones I know. However, the code itself is capable of
an unlimited number of languages, as long as the necessary data is provided. To do this, the entire site does not have text in its HTML document, instead
all the information is fed via JavaScript using an information manager for each page. The information is passed as an object composed of
two arrays in each key, and the position of the array determines which language is selected and displayed, 0 being Portuguese and 1 English; from it, it is only necessary to swap the value of the language variable for it to change.</p>
<p align="justify">This data management system is more heavily applied on the projects page. Using code, the page is generated according to which project was selected by the user, thus creating a library that can be expanded without the need to extend the page itself, like an interface. Despite limiting page editing and project creation documentation to pre-established sections, it completely achieves the goal of creating something simple but capable of correctly registering my work.</p>
<p align="justify">The html structure ended up having a lot of div's. The reason behind it is the creation of elements with a mere aesthetic purpose, which
are div's positioned to generate specific shapes through intermediates with a mix of absolute and relative positioning. Through this it was possible to generate shapes, such as those in the knowledge section or the framing of the photo.</p>
<p align="justify">The page is designed to be fully responsive and can be used on all screen sizes. To achieve this, however, there was a
challenge to be overcome: the menu bar. Because it has an interval animation, changing the size of the page caused problems in its limits of movement.
To solve this, an observer was created, which would give data to the code about changes in the screen specifications.</p>
<p align="justify">With the page structure already done, future goals include adding more of the projects I've done over the last year, and making the icons of the knowledge section on the main page selectable, which will lead to a random project on the projects page in which that specific knowledge has been used in.</p>

----------------------
