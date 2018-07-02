var fs = require('fs');
var del = require('del');
var copy = require('recursive-copy');
var replace = require('replace');

// Delete all public files
del(['./public/*']).then(paths => {
  console.log('Deleted files and folders:\n', paths.join('\n'));

  copyfile();
});

// Copy files from src to public
var copyfile = function(){

  // Source elements
  var options = {
    filter: [
      'css/**/*',
      'fonts/**/*',
      'data/*',
      // Images
      'img/tiendas/**/*',
      'img/bancos/**/*',
      'img/sprite_flags.png',
      'img/sprite-icons.png',
      'img/logo-aeromexico.png',
      'img/logo-safetypay-small.png',
      'img/codigo-barras.png',
      'img/blank.gif',
      'img/iconos_more.png',
      'img/reloj.gif',
      'img/header-logo.png',
      'img/search-icon.png',
      'img/bullet-1.png',
      'img/bullet-2.png',
      'img/bullet-3.png',
      'img/bullet-4.png',
      // 'img/search-icon.png',

      // JS vendor files
      'js/vendor/jquery.min.js',
      'js/vendor/jquery.validate.min.js',
      'js/vendor/jquery.nicescroll.min.js',
      'js/vendor/jquery.maskedinput.min.js',
      'js/vendor/slick.min.js',
      'js/vendor/jquery.incredible.srcset.js',
      'js/vendor/select2.min.js',
      'js/vendor/jquery.mask.min.js',

      // Own javascript files
      'js/modules/*.js',
      'js/app.js',
      // 'js/modules/main-content.js',
      // 'js/modules/sub-tab.js',
      // 'js/modules/one-step-ticket.js',
      // 'js/modules/print-information.js',
      // 'js/modules/places-of-payment--online.js',
      // 'js/modules/places-of-payment--cash.js',
      // 'js/modules/mybank-search-select.js',
      // 'js/modules/send-instructions.js',
      // 'js/modules/instructions-by.js',
      // 'js/message-voucher-init.js',
      // 'js/online-init.js',
      // 'js/cash-init.js',

      // HTML
      'express-online-*.html',
      'express-cash-*.html',
      'message-*.html',
      'message-voucher-*.html',
      'message-integration-*.html',
      '!.DS_Store',
      '!README.html',
      '!index.html'
    ],
  };
  copy('src', 'public/source/', options)
    .then(function(results) {
      console.info('Copied ' + results.length + ' files');
    })
    .catch(function(error) {
      console.error('Copy failed: ' + error);
    });

  // Index
  copy('src', 'public/', {filter: ['index.html']})
    .then(function(results) {
      addSourcePath();
      console.info('Copied ' + results.length + ' files');
    })
    .catch(function(error) {
      console.error('Copy failed: ' + error);
    });

    var addSourcePath = function() {
      // Edit index.html
      replace({
        regex: 'src="img/',
        replacement: 'src="source/img/',
        paths: ['./public/index.html'],
        recursive: true,
        silent: true
      });
    };
  }
