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
    party: ['1 (sozinho)', '1 (solo)'],
    github: ['https://github.com/Victorpagotto/blog-api-project/blob/main/README.md', 'https://github.com/Victorpagotto/blog-api-project/blob/main/README.md'],
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
///////////////////////////////////////

const projectList = [
  recipeApp,
  blogAPI,
];

const projectData = {
  projectFields,
  projects: [
    ...projectList
  ]
}

export default projectData;