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
  api.use('templating', 'client');
  api.use('tracker');

  api.use([
    'rainhaven:orbit-theme-red'
  ], { weak: true });


  api.addFiles([
    'fonts/ionicons.eot',
    'fonts/ionicons.svg',
    'fonts/ionicons.ttf',
    'fonts/ionicons.woff',
    'scss/ionicons/ionicons.scss',
    'scss/helpers/_variables.scss',
    'scss/components/_bars.scss',
    'scss/components/_view.scss',
    'scss/components/_layouts.scss',
    'scss/components/_side-nav.scss',
    'scss/orbit.scss'
  ]);

  api.addFiles([
    'views/orbit.js',

    'views/modal/modal.html',
    'views/modal/modal.js',

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
