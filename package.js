Package.describe({
  name: 'rainhaven:orbit',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('fourseven:scss@1.0.0');
  api.use('session');
  api.use('underscore');
  api.use('templating');
  api.use('tracker');
  api.use('percolate:momentum');


  api.addFiles([
    'fonts/ionicons.eot',
    'fonts/ionicons.svg',
    'fonts/ionicons.ttf',
    'fonts/ionicons.woff',
    'scss/ionicons/ionicons.scss',
    'scss/ionic.scss'
  ]);

  api.addFiles([
    'views/orbit.js',

    'views/nav_bar/nav_bar.html',
    'views/nav_bar/nav_bar.js',

    'views/tab_bar/tab_bar.html',
    'views/tab_bar/tab_bar.js',

    'views/table_view/table_view.html',
    'views/table_view/table_view.js',
  ], 'client');

  api.export('Orbit', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rainhaven:orbit');
  api.addFiles('rainhaven:orbit-tests.js');
});
