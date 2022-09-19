const projectFields = {
  params: {
    name: ['nome:', 'name:'],
    knowledge: ['Conhecimentos usados:', 'Used Knowledges:'],
    tools: ['tools:', 'Used tools:'],
    party: ['Numero de pessoas:', 'Number of people:'],
    github: ['Github:', 'Github:'],
  },
  descript: ['DESCRIÇÃO:', 'DESCRIPTION:'],
}
///////////////////////////////////////
const testProject = {
  params: {
    name: ['nome do projeto', 'project name'],
    knowledge: ['HTML, CSS e Javascript.', 'HTML, CSS and Javascript.'],
    tools: ['lint e google-fonts.', 'lint and google-fonts.'],
    party: ['Sozinho', 'Solo'],
    github: ['Link do Github.', 'Link of Github.'],
  },
  text: [[
    ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
    ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'],
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
  params: {
    name: ['nome do projeto2', 'project name2'],
    knowledge: ['HTML, CSS e Javascript.2', 'HTML, CSS and Javascript.2'],
    tools: ['lint e google-fonts.2', 'lint and google-fonts.2'],
    party: ['Sozinho2', 'Solo2'],
    github: ['Link do Github.2', 'Link of Github.2'],
  },
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