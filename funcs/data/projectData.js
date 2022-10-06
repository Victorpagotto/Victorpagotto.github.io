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
  ],],
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
  ],],
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
  ],],
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
  ],],
  gifs: [],
}

///////////////////////////////////////

const projectList = [
  portfolio,
  recipeApp,
  blogAPI,
  storeManager,
];

const projectData = {
  projectFields,
  projects: [
    ...projectList
  ]
}

export default projectData;