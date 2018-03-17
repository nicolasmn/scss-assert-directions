const path = require('path');
const sassTrue = require('sass-true');

const file = path.join(__dirname, 'test.scss');
sassTrue.runSass({ file }, describe, it);
