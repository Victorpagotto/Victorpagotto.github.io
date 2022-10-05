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
    ['In production'],
    ['In production'],
    ['In production'],
    ['In production'],
    ['In production'],
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
    ['In production'],
    ['In production'],
    ['In production'],
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