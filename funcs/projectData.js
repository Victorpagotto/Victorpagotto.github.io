const projectFields = {
  name: ['nome:', 'name:'],
  knowledge: ['Conhecimentos usados:', 'Used Knowledges:'],
  tools: ['tools:', 'Used tools:'],
  party: ['Numero de pessoas:', 'Number of people:'],
  github: ['Github:', 'Github:'],
  title: ['Descrição:', 'Description:'],
}
///////////////////////////////////////
const testProject = {
  name: ['nome do projeto', 'project name'],
  knowledge: ['HTML, CSS e Javascript.', 'HTML, CSS and Javascript.'],
  tools: ['lint e google-fonts.', 'lint and google-fonts.'],
  party: ['Sozinho', 'Solo'],
  github: ['Link do Github.', 'Link of Github.'],
  text: [[
    ['Parágrafo 1'],
    ['Parágrafo 2'],
    ['Parágrafo 3'],
  ],
  [
    ['Paragraph 1'],
    ['Paragraph 2'],
    ['Paragraph 3'],
  ],],
  gifs: [],
}
///////////////////////////////////////
const testProject2 = {
  name: ['nome do projeto2', 'project name2'],
  knowledge: ['HTML, CSS e Javascript.2', 'HTML, CSS and Javascript.2'],
  tools: ['lint e google-fonts.2', 'lint and google-fonts.2'],
  party: ['Sozinho2', 'Solo2'],
  github: ['Link do Github.2', 'Link of Github.2'],
  text: [[
    ['Parágrafo 1'],
    ['Parágrafo 2'],
    ['Parágrafo 3'],
  ],
  [
    ['Paragraph 1'],
    ['Paragraph 2'],
    ['Paragraph 3'],
  ],],
  gifs: [],
}
///////////////////////////////////////

const projectList = [
  testProject,
  testProject2,
];

const projectData = {
  projectFields,
  projects: [
    ...projectList
  ]
}

export default projectData;