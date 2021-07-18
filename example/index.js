const compiler = require('handlebars-template-compiler');
compiler(
  {
    name: '洛竹',
  },
  './tpl',
  {
    tplSuffix: 'tpl',
    exclude: ['**/*.js'],
  }
);
