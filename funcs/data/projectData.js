const projectFields = {
  params: {
    name: ['nome:', 'name:'],
    knowledge: ['Conhecimentos usados:', 'Used Knowledges:'],
    tools: ['Ferramentas usadas:', 'Used tools:'],
    party: ['Numero de pessoas:', 'Number of people:'],
    github: ['Github:', 'Github:'],
  },
  descript: ['DESCRIÇÃO', 'DESCRIPTION'],
}

// Portfolio

const portfolio = {
  params: {
    name: ['Portfólio', 'Portfolio'],
    knowledge: ['JavaScript, HTML e CSS.', 'JavaScript, HTML and CSS.'],
    tools: ['ESLint.', 'ESLint.'],
    party: ['1 (sozinho).', '1 (solo).'],
    github: ['https://github.com/Victorpagotto/portfolio', 'https://github.com/Victorpagotto/portfolio'],
  },
  text: [[
    ['Criado com o propósito de documentar meu trabalho e meus projetos, a intenção era de criar algo simples e direto, onde eu apenas mostrasse o que sei fazer e então fornecesse projetos para demonstrar isso de forma documentada o que fiz e pretendo fazer. Para esse propósito, criei apenas duas páginas; uma na qual eu me apresentaria e diria informações sobre mim, minhas experiências e objetivos, e a outra onde eu mostraria os projetos com textos em aspecto de registro do que foi feito.'],
    ['Toda a página deve funcionar em duas línguas: português e inglês, as quais são as duas que domino. Entretanto o código é capaz de comportar um número ilimitado de linguagens, desde que a informação necessária seja fornecida. Para tal, todo o site não possui texto em seu documento HTML, e, ao invés disso toda a informação é alimentada através de JavaScript através de um gerenciador de informações para cada página. A informação é passada como um objeto composto por dois arrays em cada chave, e a posição do array determina qual língua é selecionada e visualizada, sendo 0 português e 1 inglês; a partir disso, é apenas necessário intercalar o valor da variável de linguagenm para a mudar.'],
    ['Este sistema de gerenciamento de informações é muito mais pesadamente aplicado na página de projetos. Através de código, a página é gerada de acordo com qual projeto foi selecionado pelo usuário, criando assim uma biblioteca que pode ser ampliada sem a necessidade de se estender a página em si, como numa interface. Apesar de limitar a edição da página e da documentação da criação do projeto a seções pré-estabelecidas, atinge completamente a meta de criar algo simples mas capaz de registrar corretamente o meu trabalho.'],
    ['A estrutura html acabou por possuir uma grande quantidade de div\'s. O motivo disso é a criação de elementos com mero propósito estético, os quais são div\'s posicionadas de forma a gerar formas específicas através de intermediárias com uma mistura de posicionamento absoluto e relativo. Através disso foi possível gerar formas, como as da seção de conhecimentos ou o enquadramento da foto.'],
    ['A página foi projetada para ser completamente responsiva, podendo ser usada em todos os tamanhos de tela. Para atingir isso entretanto houve um desafio a ser superado: a barra de menu. Por possuir uma animação a partir de intervalo, a mudança no tamanho da página causava problemas em seus limites de movimento. Para solucionar isso, foi usado um observador, o qual iria informar o código a respeito de mudanças nas especificações da tela.'],
    ['Com a estrutura da página pronta, objetivos futuros incluem adicionar mais dos projetos que fiz ao longo do último ano, e tornar os ícones da seção de conhecimentos na página principal selecionáveis, levando a um projeto aleatório na página de projetos no qual aquele conhecimento selecionado tenha sido usado.'],
  ],
  [
    ['Created for documenting my work and projects, the intention was to create something simple and straightforward, with wich I just show what I know and how I know what to, do and then provide projects to demonstrate, in a documented manner, what I have done and intend to do in the future. For this purpose, I created only two pages; one in which I would introduce myself and tell information about myself, like my experiences and goals, and the other where I would show the projects with texts, as a record of what had been done.'],
    ['The entire page works with two languages: Portuguese and English, which are the ones I know. However, the code itself is capable of an unlimited number of languages, as long as the necessary data is provided. To do this, the entire site does not have text in its HTML document, instead all the information is fed via JavaScript using an information manager for each page. The information is passed as an object composed of two arrays in each key, and the position of the array determines which language is selected and displayed, 0 being Portuguese and 1 English; from it, it is only necessary to swap the value of the language variable for it to change.'],
    ['This data management system is more heavily applied on the projects page. Using code, the page is generated according to which project was selected by the user, thus creating a library that can be expanded without the need to extend the page itself, like an interface. Despite limiting page editing and project creation documentation to pre-established sections, it completely achieves the goal of creating something simple but capable of correctly registering my work.'],
    ['The html structure ended up having a lot of div\'s. The reason behind it is the creation of elements with a mere aesthetic purpose, which are div\'s positioned to generate specific shapes through intermediates with a mix of absolute and relative positioning. Through this it was possible to generate shapes, such as those in the knowledge section or the framing of the photo.'],
    ['The page is designed to be fully responsive and can be used on all screen sizes. To achieve this, however, there was a challenge to be overcome: the menu bar. Because it has an interval animation, changing the size of the page caused problems in its limits of movement. To solve this, an observer was created, which would give data to the code about changes in the screen specifications.'],
    ['With the page structure already done, future goals include adding more of the projects I\'ve done over the last year, and making the icons of the knowledges section on the main page selectable, which will lead to a random project on the projects page in which that specific knowledge has been used in.'],
  ]],
  gifs: [],
}

// RECIPE APP

const recipeApp = {
  params: {
    name: ['Cook a Cookie', 'Cook a Cookie'],
    knowledge: ['React, CSS, HTML, Javascript, Jest e RTL.', 'React, CSS, HTML, Javascript, Jest and RTL.'],
    tools: ['ESLint, Google Fonts, TheCockTailDB e TheMealDB.', 'ESLint, Google Fonts, TheCockTailDB and TheMealDB.'],
    party: ['4 pessoas', '4 people'],
    github: ['https://github.com/Victorpagotto/app-receitas-cook-a-cookie', 'https://github.com/Victorpagotto/app-receitas-cook-a-cookie'],
  },
  text: [[
    ['Este é um projeto desenvolvido a partir de React utilizando-se de Hooks e Context API. Criado para mobile, o aplicativo foi projetado para que nele seja possível ver, filtrar, buscar receitas, além de favoritar e manter registro de receitas feitas juntamente do progresso de confecção das mesmas, sendo tudo isso possível tanto para bebidas quanto para comidas.'],
    ['Para que isso fosse possível, o aplicativo consome duas API\'s distintas, mas com estruturas semelhantes. Ao longo de 8 dias de projeto, eu e mais três pessoas nos encarregamos de sincronizar horários e compromissos para que pudéssemos, juntos, finalizar o projeto para que o mesmo fosse apresentado em bom estado e com todas as funcionalidades criadas e testadas.'],
    ['Eu, em específico, fui responsável pela criação de todo o CSS e preparação de dados consumidos da API no projeto, bem como a criação das páginas que listam favoritos, receitas feitas, além da página principal (home) - onde as receitas são exibidas. Todas essas eram testadas por um de meus companheiros de grupo conforme eu criava as funcionalidades, ao passo que os outros dois membros construíam as páginas de detalhes e progresso de receitas, exibidas ao se clicar em uma receita e depois a iniciando, as quais seriam refatoradas por mim posteriormente a partir do código base criado pelos mesmos.'],
    ['Com um de nossos companheiros incapacitado por problemas pessoais, um grupo originalmente de 5 se tornou 4, e tivemos que trabalhar sobrecarregados, o que se tornaria ainda mais pesado quando um dos dois que compunham a outra dupla também teria problemas para se reunir. Entretanto, apesar dos desafios, conseguimos não apenas finalizar a tempo, mas também com um dia restante, para que o CSS fosse refinado por mim e uma bela apresentação em slides fosse criada pela minha dupla - para que o projeto pudesse ser apresentado ao público da turma.'],
    ['A confecção do aplicativo foi não apenas desafiadora - mas também excitante. Com o desafio de se consumir duas API\'s para propósitos tão semelhantes mas ao mesmo tempo com elementos tão distintos, o método criado para tratar os dados e os distribuir pela aplicação foi realizar a criação de um mapa a partir de um objeto, evitando assim a criação de código duplicado. Aprender a utilizar a atualização automática do React para a criação do CSS foi um grande aprendizado, juntamente com o uso de contextAPI para diminuir o número de hooks na aplicação.'],
  ],
  [
    ['This is a project developed using React through Hooks and Context API. Created for mobile devices, the app was designed so that it\'s possible to see, filter and search for recipes, in addition keeping track and record of made recipes, along with the progress of their preparation; all of this being possible both for drinks and meals.'],
    ['For this to be possible, the app consumes two APIs with distinct elements, but similar structures. Throughout the 8 project days, three other people and I were in charge of synchronizing schedules and appointments so that we could, together, finish the project so that it was presented in good condition and with all the functionalities created and tested in time.'],
    ['I, in particular, was responsible for creating all the CSS and preparing the data consumed from the API to the project, as well as creating the pages that list favorite and made recipes, in addition to the main page (home) - where those are displayed. All of these were tested by one of my groupmates as I created the features, while the other two members built the recipes\' details and progress pages, displayed by clicking on one of them and then starting it, which I would later refactor from the base code they had created.'],
    ['With one of our teammates out of work because of personal problems, our group, originally composed by 5, became 4, and we had to work overloaded, which would become even harder when one of the other duo would also have problems getting together with us for working, making us 3. However, despite the challenges, we not only managed to finish on the schedule, but also before one day of its end, so that the CSS could be refined by me, and a beautiful slideshow, created by my duo - so that the project could be presented to the class, was created.'],
    ['Creating the app was not only challenging - but also exciting. With the challenge of consuming two API\'s in the same way but wit different elements, the method created to treat the data and distribute them throughout the application was to create a map from an object, thus avoiding the creation of duplicate code and pages. Learning to use React\'s auto-update to create the CSS was a great learning experience, along with using the contextAPI to decrease the number of hooks in the application.'],
  ]],
  gifs: [],
}
// Blog API
const blogAPI = {
  params: {
    name: ['Blog API', 'Blog API'],
    knowledge: ['JavaScript e Sequelize.', 'JavaScript and Sequelize.'],
    tools: ['Node.js, JWT, Express e MySQL.', 'Node.js, JWT, Express and MySQL.'],
    party: ['1 (sozinho).', '1 (solo).'],
    github: ['https://github.com/Victorpagotto/blog-api-project', 'https://github.com/Victorpagotto/blog-api-project'],
  },
  text: [[
    ['Desenvolvida como uma API capaz de suportar um blog, esta possui a capacidade de receber, devolver, pesquisar e manejar (CRUD) informações sobre usuários, posts e categorias em um banco de dados MySQL utilizando-se da abstração proveniente do Sequelize, uma ferramenta capaz de servir de interface entre o código da API e o banco de daods, com modelos de query prontos. Dito isso, a API é focada em desenvolver os serviços e controladores com base no Express e suas rotas.'],
    ['Todo o código é criado sobre os princípios do conceito de REST, possuindo então um manejo eficiente da integridade de dados - com validações, verificações e criptografia dos dados utilizando-se de JWT para a correlação usuário e funcionalidades/posts, buscando também respostas claras com os retornos.'],
    ['O principal desafio aqui era o manejo de informações utilizando-se do Sequelize, uma ferramenta com a qual não possuía total familiaridade. Entretanto o Sequelize mostra-se muito prático e eficiente, abstraindo o processo da criação de queries sem a perda de qualquer funcionalidade. Por ter sido feita a partir de Sequelize, a API pode ser facilmente adaptada a outros tipos de banco de dados, uma vez que a interface é capaz de se adaptar aos mesmos com a simples mudança de alguns parâmetros.'],
  ],
  [
    ['Developed as an API capable of supporting a blog, it can receive, return, search and handle (CRUD) information about users, posts and categories within a MySQL database using the abstraction from Sequelize, a tool capable of serving as an interface between the API code and the database, with already made query templates. That said, the API is focused on building services and controllers based on Express and its routes.'],
    ['All the code is created based in principles of the REST concept, thus having an efficient handling of data integrity - with validations, verifications and data encryption using JWT for correlation between users and functionalities/posts, also seeking clear answers with the routes\' returns.'],
    ['The main challenge was managing information using Sequelize, a tool with which I was not fully familiar. However, Sequelize proves to be very practical and efficient, abstracting the process of creating queries without losing any functionality. As it was made from Sequelize, the API can be easily adapted to other database types, since the interface is able to adapt to them with the simple change of some parameters.'],
  ]],
  gifs: [],
}

// Store Manager

const storeManager = {
  params: {
    name: ['Projeto Store Manager', 'Store Manager Project'],
    knowledge: ['JavaScript e MySQL.', 'JavaScript and MySQL.'],
    tools: ['Node.js, Express, chai, sinon e MySQL.', 'Node.js, Express, chai, sinon and MySQL.'],
    party: ['1 (sozinho).', '1 (solo).'],
    github: ['https://github.com/Victorpagotto/-store-manager-project', 'https://github.com/Victorpagotto/-store-manager-project'],
  },
  text: [[
    ['Esta é uma aplicação construída com base na estrutura MSC: model, service e controller. Construído sobre a ideia de dropshipping, é possível com ela realizar o CRUD: criar, ver, mudar e apagar produtos e vendas. A gestão de dados acontece através de um banco de dados MySQL, com as queries devidamente criadas dentro dos models. Além disso, tendo sido criada dentro dos princípios de arquitetura REST, a aplicação mantém a integridade de recebimento, manejo e resposta de dados.'],
    ['A separação dos elementos da aplicação em camadas garante uma maior facilidade de atualização em caso de necessidade, pois o código encarregado de cada categoria de tarefas é desacoplado. Por exemplo, mudar o banco de dados causaria mudanças apenas na camada de models, e uma mudança de regra de negócios apenas afetaria a de service.'],
    ['Este projeto conta também com testes unitários para cada camada e função dentro da estrutura MSC, garantindo uma maior integridade de código. Estes testes são feitos utilizando-se das ferramentas chai e sinon para se realizar o mock e a verificação da integridade.'],
    ['Tendo sido o primeiro projeto feito por mim na estrutura MSC, o maior desafio foi visualizar as nuâncias e precisões no que tange as diferenças entre as camadas e a exata função de cada uma delas, algo resolvido através do pensamento abstrato a respeito do que deveria ou não ser afetado de acordo a possível necessidade de uma mudança no código no futuro, e como isso deveria ou não afetar cada camada.'],
  ],
  [
    ['This is an application built on MSC: model, service and controller. Made with the idea of dropshipping, it is capable of CRUD: create, view, change and delete, of products and sales. Data is managed using a MySQL database, with queries properly created within the models. In addition, it has been created within the principles of REST architecture, thus the application maintains the integrity of receiving, handling and responding data.'],
    ['The separation of the application\'s elements into layers guarantees better updating if necessary, as the code in charge of each task category is decoupled. For example, changing the database would only change the models layer, and a change of business rules would only affect the service layer.'],
    ['This project also has unit testing for each layer and function within the MSC layers, ensuring greater code integrity. These tests are done using the chai and sinon tools for the mocking and integrity checking.'],
    ['Being this the first project made by me in the MSC, the biggest challenge was to visualize the nuances and precisions regarding the differences between the layers and the exact functionality of each one of them, something solved through abstract thinking about what should or shouldn\'t be affected according to the possible need for a code change in the future, and how each layer would be affected by it.'],
  ]],
  gifs: [],
};

const virtualSmith = {
  params: {
    name: ['Ferreiro Virtual', 'Virtual Smith'],
    knowledge: ['Typescript.', 'Typescript.'],
    tools: ['Node.js, JWT, Express e MySQL.', 'Node.js, JWT, Express and MySQL.'],
    party: ['1 (sozinho).', '1 (solo).'],
    github: ['https://github.com/Victorpagotto/virtual-smith', 'https://github.com/Victorpagotto/virtual-smith'],
  },
  text: [[
    ['Um projeto construído ao longo de 2 dias utilizando Typescript. Seu objetivo é a criação de uma API CRUD através de Express para acessar um banco de dados que seria correspondente ao controle de pedidos de um ferreiro, o qual realiza seus pedidos de forma artesanal, atribuindo pedidos a produtos, ao invés de produtos a pedidos. A API utiliza criptografia JWT para o controle de acesso, e o banco de dados MySQL para gerenciar as informações, tendo sido construída em cima de conceitos MSC (model, service e controller) para tornar o código o menos acoplado possível, e RESTFUL - para tornar o manejo de informações seguro e eficiente.'],
    ['O código foi construído com classes, sendo orientado a objetos, utilizando-se dos conceitos de encapsulamento e herança principalmente. O principal alvo de aprendizado era o uso de Typescript e sua tipagem, tendo eu particularmente decidido também tentar o uso de orientação a objetos. Como meu primeiro projeto em Typescript, percebo haver coisas a melhorar, principalmente no que tange a organização do código de interfaces; entretanto, a API é completamente funcional e muito aprendizado foi retirado de sua criação.'],
  ],
  [
    ['A project built over 2 days using Typescript. The aiming was to create a CRUD API using Express to access a database that would correspond to the order control of a blacksmith, who carries out his orders in a artisanal way, assigning orders to products, instead of products to orders. The API uses JWT encryption for access control, and the MySQL database to manage data, having been built on top of MSC (model, service and controller) concepts to make the code as little coupled as possible; and RESTFUL - for creating the handling of information safely and efficiently.'],
    ['The code made with classes, being object-oriented and using the concepts of encapsulation and inheritance mainly. The main learning target was the use of Typescript and its typing, and I particularly decided to also try the use of object orientation. As my first project using Typescript, I realize that there are many things to improve, especially when it comes to the organization of the interfaces\' code; however, the API is fully functional and a lot of learning has been taken from its making process.'],
  ]],
  gifs: [],
};

const footballSiteAPI = {
  params: {
    name: ['API de Site de Futebol', 'Football Site API'],
    knowledge: ['Typescript.', 'Typescript.'],
    tools: ['Node.js, JWT, Express, Sequelize, Docker e Bcrypt.', 'Node.js, JWT, Express, Sequelize, Docker and Bcrypt.'],
    party: ['1 (sozinho).', '1 (solo).'],
    github: ['https://github.com/Victorpagotto/football-site-API', 'https://github.com/Victorpagotto/football-site-API'],
  },
  text: [[
    ['Trybe Football Club é um site de informativo a respeito de partidas de football e seus impactos no campeonato, exibindo a tabela de classificação com todas as suas informações. O site possui um banco de dados MySQL, consultado por Sequelize; bem como o backend e o frontend feitos, sendo, portanto, funcional. Nele, além de ver as partidas e placares, o usuário pode realizar login, e, a depender de seu cargo, realizar mudanças no site, adicionando e modificando partidas de football, tendo o placar atualizado automaticamente de acordo com as alterações.'],
    ['O propósito deste projeto é a simulação de uma situação na qual eu fora responsável pela criação e teste do backend de um projeto, isso é, o banco de dados e sua utilização através de uma API node express. O projeto possui nele a aplicação de todos os conceitos aprendidos ao longo do módulo de aprendizado referente a backend na Trybe, tendo como tema central o uso correto do conceito de SOLID e orientação a objeto na criação do código.'],
    ['Toda a parte de frontend foi criada pela própria Trybe, bem como a infraestrutura básica para a conexão dele com o backend e o banco de dados. O papel do aluno, no caso eu, é criar a API e ajustar corretamente o uso do Docker para que tudo funcione corretamente, portanto, o código de backend do projeto foi criada por mim, incluindo os testes de cobertura.'],
    ['A aplicação correta do conceito de SOLID foi um dos maiores desafios ao longo do desenvolvimento, pois este era totalmente novo para mim; e não bastava apenas aplicar os conceitos, mas eu também me desafiei a fazer um código mais limpo e modular, bem como realizar todo o projeto utilizando-se de TDD, com uma organização de pastas com a qual os tipos de variáveis e seus usos se estruturasssem harmoniosamente. Para esse fim, cada elemento possui sua pasta, tendo nela um index, para controlar as importações e exportações, um arquivo de tipos, e os arquivos de código em si, tendo o projeto sido construído inteiramente com classes e métodos.'],
    ['A primeira parte do projeto foi a criação da infraestrutura básica e da rota de login. Aqui - foram criados dois testes unitários para cobrir tal infraestrutura, uma vez que um bug nesta poderia causar problemas por todo o código; muito tempo foi gasto, mas isso aceleraria as etapas seguintes. Além disso, tive nesse momento o meu primeiro contato com programação estritamente TDD, apesar de ter usado o método em códigos isolados antes; surge para mim, então, como algo desafiador por si só, uma vez que se mostrou necessário pensar em toda a estrutura de código, a planejando antes de ir para qualquer estágio de produção. Entretanto se provou mais prático ao longo do projeto, conforme eu aprendia a aplicar o conceito corretamente e obtinha os resultados de se deparar com menos erros e bugs.'],
    ['A segunda etapa foi criar a rota responsável por gerenciar os times, a mais fácil, uma vez que pouco código foi necessário e compunha-se apenas de requisições "get". O desafio retornaria na terceira etapa, pois ela exigiria muitas validações para a inserção e atualização de partidas, bem como um aprofundamento dos conhecimentos a respeito da ferramenta Sequelize.'],
    ['Já a quarta etapa seria a mais exótica, uma vez que não envolveu a criação de qualquer model, e sim o tratamento de informações para gerar a tabela de classificação a partir dos models já existentes. Além de cumprir o desafio inicial, decidi também tentar o fazer tentando evitar repetições de código, algo obtido através do uso de um "dicionário" do objeto trazido pela model e o uso intensivo do conceito de open/closed.'],
  ],
  [
    ['Trybe Football Club is a site about football/soccer matches and their impact on the league, displaying the leaderboard with all its information. The site has a MySQL database, accessed through Sequelize queries; as well as the backend and frontend made, and thus functional. In it, in addition to viewing the matches and scores, the user can login and, depending on their role, make changes to the site, adding and modifying football/soccer matches, with the score automatically being updated as de changes are made.'],
    ['The purpose of this project is to simulate a situation in which I was responsible for creating and testing the backend of a project, that is, the database and its use through a node express API. The project has in it all the concepts I\'ve learned throughout the learning of the backend module at Trybe, having as its central theme the correct use of the SOLID concept and object orientation in the creation of the code.'],
    ['The entire frontend was created by Trybe itself, as well as the basic structure for connecting it to the backend and the database. The student\'s role, in my case, is creating the API and correctly adjusting the use of Docker so that everything works correctly; that is, the project\'s backend code was created by me, including the tests.'],
    ['The correct application of the SOLID concept was one of the biggest challenges throughout the development, as this was totally new to me; it was not enough just to apply the concepts, but I also challenged myself to make a cleaner and more modular code, as well as making the entire project using TDD, with an folder organization with which the types of variables and their uses are structures harmoniously. For this purpose, each element has its own folder, with an index in it for controlling imports and exports, a file of types, and the code files themselves, having the project been built entirely with classes and methods.'],
    ['The first part of the project was the creation of the basic infrastructure and the login route. Here - two unit tests were created for covering such infrastructure, since a bug in it would cause problems throughout the entire code; a lot of time was spent, but it would speed up the next steps. In addition, I had my first contact with strictly TDD coding, despite having used the method in other codes before; it was, then, something challenging, since it proved necessary to think through the entire code structure and planning it before going to any stage of production code. However, it proved productive over the course of the project, as I learned to apply the concept correctly and got the results of committing fewers mistakes and having less bugs.'],
    ['The second step was to create the teams route, the easiest one, since little code was necessary and it consisted essencially only of "get" requests. The challenge would return in the third stage, as it would require a lot of validations for the insertion and updating of matches, as well as a deeper knowledge about the Sequelize tool.'],
    ['The fourth step would be the exotic one, since it did not involve the creation of any model, but the processing of data to generate the leaderboard from the existing models. In addition to fulfilling the initial challenge, I also decided to make while trying to avoid code repetitions, something obtained through the use of a "dictionary" of the object brought by the model and the intensive use of the open/closed concept.'],
  ]],
  gifs: [],
};

const reactTune = {
  params: {
    name: ['React Tunes', 'React Tunes'],
    knowledge: ['React, CSS, HTML e Javascript.', 'React, CSS, HTML and Javascript.'],
    tools: ['ESLint.', 'ESLint.'],
    party: ['1 (sozinho).', '1 (solo).'],
    github: ['https://github.com/Victorpagotto/React-Tunes', 'https://github.com/Victorpagotto/React-Tunes'],
  },
  text: [[
    ['Esta é uma aplicação React capaz de reproduzir e pesquisar músicas, álbuns e bandas, e gerenciar as informações de um usuário, realizando login, visualização e edição de perfil e controle de favoritos. O projeto utiliza rotas para a criação de várias páginas, assim distribuindo as funções dentre elas.'],
    ['O controle de API, bem como o manejo de informações de usuário, fora criação da Trybe, enquanto a exibição e uso destes fora de minha autoria. O propósito deste projeto era aperfeiçoar o uso de React, tendo como principal o uso de rotas para que o aplicativo possa ter mais de uma página. Tendo levado 2 dias para ser feito, o projeto não exigia estilização, entretanto escolhi o fazer para praticar também o uso de CSS.'],
    ['Este foi um dos meus primeiros projetos em React, e também um dos primeiros que estilizei nesse framework. Dado isso, este mostra-se rudimentar; entretanto, fora nesse projeto onde comecei a, de melhor maneira, pôr em prática os conhecimentos de CSS, e também onde aprendi a usar melhor as capacidades do CSS, principalmente na página de favoritos, apesar das dificuldades de estilização que encontrei para poder atender os requisitos do projeto, testados por testes automáticos.'],
  ],
  [
    ['This is a React application capable of playing and searching songs, albums and bands, besides managing a user\'s data by performing login, profile viewing and editing and favorites control. The project uses routes to create more than one page, thus distributing the functionalities among them.'],
    ['The API control, as well as the handling of user information, was created by Trybe, while the display and use of these were my own. The purpose of this project was to improve the use of React with routes, so the application can have more than one page. Having taken 2 days to be finished, the project did not require styling, however I chose to so, so I could also practice CSS.'],
    ['This was one of my first projects in React, and also one of the first I styled in this framework. Given that, it looks rudimentary; however, it was in this project where I started to better use my CSS knowledge, and also where I learned to better use CSS capabilities, especially in the favoroites page, despite the stylization difficulties I had so I could meet the project\'s requirements , tested by automated tests.'],
  ]],
  gifs: [],
};

const triviaReact = {
  params: {
    name: ['Trivia em React', 'Trivia in React'],
    knowledge: ['React, CSS, HTML, Javascript, Jest e RTL.', 'React, CSS, HTML, Javascript, Jest and RTL.'],
    tools: ['Redux, ESLint, Google Fonts, Trivia API e Gravatar API.', 'Redux, ESLint, Google Fonts, Trivia API and Gravatar API.'],
    party: ['4.', '4.'],
    github: ['https://github.com/Victorpagotto/triva-react-redux', 'https://github.com/Victorpagotto/triva-react-redux'],
  },
  text: [[
    ['Este projeto é desenvolvido com o intuito de se criar uma página com um sistema de perguntas e respostas baseado no jogo Trivia utilizando o framework React com a biblioteca Redux. O projeto foi realizado em um grupo de 4 pessoas ao longo de 5 dias. O grupo foi dividido em duas duplas, com cada uma sendo responsável por uma página por vez ao longo da criação, e, como dois alunos estavam relativamente atrasados no conteúdo, essas duplas foram dividas de maneira a colocar aqueles em dia para ajudar aqueles que não estavam.'],
    ['Criado inteiro utilizando React, o intuito do projeto era praticar o uso da biblioteca Redux. Ela seria usada para o armazenamento de informações do usuário e, principalmente, das perguntas e respostas referentes ao jogo. O usuário consegue jogar o jogo, acumular os pontos de acordo com suas respostas, e então comparar posteriormente com pontuações anteriores, bem como outros perfis que potencialmente poderiam ter jogado no mesmo navegador, obtido através do uso de local storage.'],
    ['Para obter as perguntas e respostas, uma API foi utilizada. Utilizando-se de dois endpoints, primeiro um token é gerado para criar uma sequência de perguntas, e depois as perguntas em si são carregadas à página assim que o login é realizado, as colocando dentro do estado global do Redux. Após isso, as informações são distribuídas a cada página, havendo tanto informações de usuário quanto do jogo em si. Toda essa distribuição utiliza-se do potencial de acessar o estado global da biblioteca Redux , portanto as informações do usuário intercalam-se dentre o local storage e o Redux de acordo com tal login.'],
    ['Um dos objetivos deste projeto também era a utilização do método Agile com o uso conjunto de Kanban para coordenar o trabalho em grupo. As duplas realizavam reuniões entre si sempre que atingiam um objetivo, e os membros internos de cada dupla seguiam um planejamento interno conforme a designação de tarefas, dividindo a funções em diferentes partes da mesma página para evitar o máximo possível os conflitos de código, tornando o desenvolvimento mais ágil.'],
    ['Eu e minha dupla fomos responsáveis pelas páginas de login, ranking, feedback e metade da página de jogo, a qual demonstrou ser a mais trabalhosa e complexa dentre estas. O projeto fora planejado para também ser inserida uma página de settings, entretanto, devido a problemas pessoais que acometeram a alguns do grupo, não fora possível o fazer a tempo.'],
    ['Eu fora responsável a ajudar a minha dupla a acompanhar o conteúdo, e mais tarde também ajudaria a outra dupla com problemas mais complexos que não estavam sendo resolvidos a tempo. Devido a tais problemas pessoas citados, eu tive que também realizar o término e refatoração da página do jogo mais tarde, bem como fui o responsável por criar o CSS, os códigos de service (API Trivia, Gravatar e temporizador) e os testes da página antes. Os testes seriam levemente refatorados por um de meus companheiros posteriormente para melhor organização de pastas e adição de constantes.'],
  ],
  [
    ['This project was developed in order to create a page with a questions and answers system based on the Trivia game using the React framework together with Redux library. The project was made by a group of 4 people and was 5 days long. The group was divided into pairs, with each one being responsible for one page at a time, and, as two students were relatively behind on the knowledge topics, these pairs were divided in a way of helping them to catch up.'],
    ['Created entirely using React, the purpose of the project was to practice with the Redux library. It would be used to store user information and, mainly, questions and answers regarding the game itself. The user can play it, accumulate points according to their answers, and then compare them later with previous scores, as well as other profiles that could potentially also have played in the same browser, achieved by using the local storage.'],
    ['For getting the questions and answers, an API was used. By access to two endpoints, first a token is generated to create a sequence of questions, and then the questions themselves are loaded onto the page as soon as the login is made, inserting them into the global Redux state. After that, the information is distributed to each page as needed, both with user and game data. This entire distribution takes advantage of the potential to access the global state of the Redux library, so user data is moved between the local storage and Redux according to the login info.'],
    ['One of this project\'s goals was also to use the Agile method altogether with use of Kanban to coordinate the group. The pairs held meetings with each other whenever they reached a milestone, and the members of each pair followed an internal plan according to the assignment of tasks, dividing the work between different parts of the same page to avoid code conflicts as much as possible, resulting in a more agile development.'],
    ['My partner and I were responsible for the login, ranking and the feedback pages, and also half of the game page, which proved to be the most laborious and complex of these. The project was planned to also include a settings page, however, due to personal problems that affected some members of the group, it was not possible to make it in time.'],
    ['I was responsible for helping my pair in keeping up with the necessary knowledge, and later I would also help the other pair with more complex issues that weren\'t getting solved in time. Due to problems, I also had to finish and refactor the game\'s page later on, as well as being responsible for creating the CSS, the service codes (Trivia API, Gravatar and timer) and the page tests earlier. The tests would be slightly refactored by one of my group mates later for better organization of folders and the addition of constants.'],
  ]],
  gifs: [],
};

const starwarsPlanetSearch = {
  params: {
    name: ['Star Wars Planet Search', 'Star Wars Planet Search'],
    knowledge: ['React, CSS, HTML e Javascript.', 'React, CSS, HTML and Javascript.'],
    tools: ['ESLint.', 'ESLint.'],
    party: ['1 (sozinho).', '1 (solo).'],
    github: ['https://github.com/Victorpagotto/starwars-planet-search', 'https://github.com/Victorpagotto/starwars-planet-search'],
  },
  text: [[
    ['Suas funcionalidades envolvem a capacidade de pesquisar planetas de acordo com diferentes critérios de informação, dando ao usuário a capacidade de escolher entre filtros, os quais podem ser números ou palavras. O usuário deve escolher o filtro e, se for numérico, também deve escolher o critério igual, menor ou igual, assim filtrando a lista de planetas abaixo de acordo, podendo ser adicionada uma lista de filtros simultâneos. Tal lista é uma tabela pela qual o usuário pode navegar, assim visualizando em detalhes a informação referente a cada planeta.'],
    ['A API referente ao projeto foi provida pela própria Trybe, curso no qual o projeto foi feito. Esta envia todas as informações necessárias e cabia aos alunos, usando o React funcional com contextAPI e hooks, lidar, exibir e filtrar as mesmas. A estilização não era obrigatória, mas decidi a fazer para buscar melhorar minhas habilidades com CSS, principalmente com tabelas, algo muito usado por esse projeto. O desafio aqui era aplicar conhecimentos de hooks e contextAPI. Para diminuir o número de hooks pelo projeto, desenvolvi um código o qual, por manejo de informações de maneira centralizada usando ContextAPI, simulava algo semelhante a um estado global, assim a informação precisava ser carregada uma única vez e seu uso exigia a criação de menos eventos.'],
  ],
  [
    ['Its functionalities include the ability to search through planets using data filters and giving the user the ability to choose those as well, which can be numbers or words. The user must choose the filter and, if numerical, must also choose if it is equal, less or equal to the chosen info, thus filtering the list of planets below accordingly, being possible to add a list of simultaneous filters. This list is a table through which the user can navigate, thus visualizing in detail the information regarding each planet.'],
    ['The project\'s API was provided by Trybe itself, the course in which the project was made in. This API sends all the necessary data and it was up to the students, using functional React with contextAPI and hooks, to handle, display and filter these. Styling was not mandatory, but I decided to do it to improve my skills with CSS, especially with tables, something that is used a lot by this project. The challenge here was to apply knowledge of hooks and contextAPI. To reduce the number of hooks in the project, I developed a code which, by handling information in a centralized way with ContextAPI, simulated something similar to a global state, so the information needed to be loaded only once and its use required the creation of fewer events.'],
  ]],
  gifs: [],
};

const walletInterface = {
  params: {
    name: ['Interface de Carteira', 'Wallet Interface'],
    knowledge: ['React, CSS, HTML e Javascript.', 'React, CSS, HTML and Javascript.'],
    tools: ['ESLint e Redux.', 'ESLint and Redux.'],
    party: ['1 (sozinho).', '1 (solo).'],
    github: ['https://github.com/Victorpagotto/wallet-interface', 'https://github.com/Victorpagotto/wallet-interface'],
  },
  text: [[
    ['Neste projeto foi desenvolvida uma carteira virtual com capacidade de conversão entre dólar e real. Usando essa carteira, o usuário consegue adicionar, remover e editar gastos, visualizar tais gastos em uma tabela, e visualizar esse total já convertido para outra moeda. A aplicação utiliza de Redux para conectar a informação entre seus componentes, utilizando-se de seu estado global, facilitando implementações e o possível ampliamento das mesmas caso fosse realizado.'],
    ['Esta foi um dos primeiros projetos que realizei utilizando Redux, e seu principal propósito era justamente aprender e dominar essa biblioteca. A aplicação utiliza o Awesomeapi de cotações monetárias para em tempo real realizar conversões, tendo esse sido um dos primeiros projetos em React nos quais eu também teria que criar o manejo de API por conta própria. O projeto foi realizado ao longo de 3 dias, e, embora sua estilização não tenha sido obrigatória, decidi o fazer para ampliar minhas capacidades com CSS.'],
  ],
  [
    ['In this project, a virtual wallet was developed with the functionality of converting between dollar and BRL. Using this wallet, the user can add, remove and edit expenses, as well as viewing such expenses in a table and the total already converted to another currency. The application uses Redux for managing data between its components, using its global state, facilitating implementations and the possible expansion of these if made.'],
    ['It was one of the first projects I made using Redux, and its main purpose was precisely learning and mastering this library. The application uses the currency Awesomeapi to perform real-time conversions, and this was one of the first projects in React in which I would also have to create the API handling on my own. The project was finished in 3 days, and although its styling was not mandatory, I decided to do it for increasing my CSS skills.'],
  ]],
  gifs: [],
};

///////////////////////////////////////

const projectList = [
  portfolio,
  recipeApp,
  footballSiteAPI,
  blogAPI,
  triviaReact,
  starwarsPlanetSearch,
  storeManager,
  virtualSmith,
  reactTune,
  walletInterface,
];

const projectData = {
  projectFields,
  projects: [
    ...projectList
  ]
}

export default projectData;