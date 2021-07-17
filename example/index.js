const compiler = require('handlebars-template-compiler');
compiler(
  {
    name: '杨俊宁',
  },
  './tpl',
  {
    include: ['**/*.tpl.*'],
    exclude: ['**/*.js'],
  }
);
