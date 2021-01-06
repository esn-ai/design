module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Application components',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/index.js',
        templateFile: 'plop-templates/component/index.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.template.js',
        templateFile: 'plop-templates/component/component.hbs'
      },
      {
        type: 'append',
        path: 'src/components/index.js',
        templateFile: 'plop-templates/component/globalIndex.hbs'
      }
    ]
  })
}
