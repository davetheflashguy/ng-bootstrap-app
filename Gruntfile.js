module.exports = function(grunt) {
  require('time-grunt')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/<%= pkg.name %>.js',
        dest: 'build/js/<%= pkg.name %>.js'
      }
    }
    ,
    /* CSS Min */
    cssmin: {
      add_banner: {
        options: {
          banner: '/* My minified css file */'
        },
        files: {
          'build/css/<%= pkg.name %>.css': ['src/css/**/*.css']
        }
      }
    }
    ,
    /* Copy */
    copy: {
      main: {
        files: [
          /**
           * Bower components
           */
          // angular
          {
            src: 'src/bower_components/angular/angular.min.js', dest: 'build/bower_components/angular/angular.min.js'
          },
          {
            cwd : 'src/bower_components/angular/',
            expand: true,
            src: [
              '*.js',
              '*.map',
            ], 
            dest: 'build/bower_components/angular/', 
          },
          // angular touch
          {
            cwd : 'src/bower_components/angular-touch/',
            expand: true,
            src: [
              '*.js',
              '*.map',
            ], 
            dest: 'build/bower_components/angular-touch/', 
          },
          // angular ui bootstrap
          {
            cwd : 'src/bower_components/angular-ui-bootstrap/dist',
            expand: true,
            src: [
              '**'
            ], 
            dest: 'build/bower_components/angular-ui-bootstrap/dist', 
          },
          // angular animate
          {
            cwd : 'src/bower_components/angular-animate',
            expand: true,
            src: [
              '**'
            ], 
            dest: 'build/bower_components/angular-animate', 
          }
          ,
          // angular aria
          {
            cwd : 'src/bower_components/angular-aria',
            expand: true,
            src: [
              '**'
            ], 
            dest: 'build/bower_components/angular-aria', 
          }
          ,
          // angular material
          {
            cwd : 'src/bower_components/angular-material',
            expand: true,
            src: [
              '**'
            ], 
            dest: 'build/bower_components/angular-material', 
          }
          ,
          // hammerjs
          {
            cwd : 'src/bower_components/hammerjs',
            expand: true,
            src: [
              '**'
            ], 
            dest: 'build/bower_components/hammerjs', 
          }
          ,
          // Font Awesome CSS
          {
            cwd : 'src/bower_components/components-font-awesome/css/',
            expand: true,
            src: [
              '**'
            ], 
            dest: 'build/bower_components/components-font-awesome/css/', 
          },
          // Font Awesome Fonts
          {
            cwd : 'src/bower_components/components-font-awesome/fonts/',
            expand: true,
            src: [
              '**'
            ], 
            dest: 'build/bower_components/components-font-awesome/fonts/', 
          },
          /**
           * JavaScript Files
           */
          {
            cwd : 'src/js/',
            expand: true,
            src: [
              '*.js'
            ], 
            dest: 'build/js/',
          },
          /**
           * Angular Controllers
           */
          {
            cwd : 'src/js/controllers/',
            expand: true,
            src: [
              '*.js'
            ], 
            dest: 'build/js/controllers/',
          },
          /**
           * Assets
           */
          {
            cwd : 'src/img/',
            expand: true,
            src: [
              '**'
            ], 
            dest: 'build/img/', 
          },
          /**
           * Templates
           */
          {
            cwd : 'src/templates/',
            expand: true,
            src: [
              '**'
            ], 
            dest: 'build/templates/', 
          },
          /**
           * Index.html
           */
          {
            src: 'src/index.html', 
            dest: 'build/index.html'
          }
        ],
      },
    }
    /* Node  */
    ,
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          keepalive: true,
          port: 8080,
          base: 'build'
        }
      }
    }
    ,
    /* Clean */
    clean: ["build"]
    , 
    /* CSS Lint */
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      lax: {
        options: {
          import: false
        },
        src: ['src/css/**/*.css']
      }
    }
  });
  

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // load the css minifier
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // load the css linter 
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // load the file copier
  grunt.loadNpmTasks('grunt-contrib-copy');

  // load the clean pluging
  grunt.loadNpmTasks('grunt-contrib-clean');

  // node server
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'uglify', 'csslint', 'cssmin', 'copy', 'connect']);

  // Build
  grunt.registerTask('build', ['clean', 'uglify', 'csslint', 'cssmin', 'copy']);

  // Start Server
  grunt.registerTask('server', ['connect']);

};