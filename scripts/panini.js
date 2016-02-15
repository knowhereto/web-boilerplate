var src = require('vinyl-fs').src;
var dest = require('vinyl-fs').dest;
var panini = require("panini");

panini.refresh();

src('src/html/**/*.html')
  .pipe(panini({
    root: 'src/html',
    layouts: 'src/layouts/',
    partials: 'src/partials/'
  }))
  .pipe(dest('./app'));
