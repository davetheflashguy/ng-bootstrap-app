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
          // bootstrap JS
          {
            cwd : 'src/bower_components/bootstrap/dist/js/',
            expand: true,
            src: [
              '*.js'
            ], 
            dest: 'build/bower_components/bootstrap/dist/js', 
          },
          // bootstrap CSS
          {
            cwd : 'src/bower_components/bootstrap/dist/css/',
            expand: true,
            src: [
              '*.css'
            ], 
            dest: 'build/bower_components/bootstrap/dist/css', 
          },
          // bootstrap Fonts
          {
            cwd : 'src/bower_components/bootstrap/dist/fonts/',
            expand: true,
            src: [
              '**'
            ], 
            dest: 'build/bower_components/bootstrap/dist/fonts', 
          },
          // fastclick
          {
            src: 'src/bower_components/fastclick/lib/fastclick.js', 
            dest: 'build/bower_components/fastclick/fastclick.js'
          },
          // jquery
          {
            cwd : 'src/bower_components/jquery/dist/',
            expand: true,
            src: [
              '**'
            ], 
            dest: 'build/bower_components/jquery/dist/', 
          },
          /**
           * JavaScript Files
           */
          {
            cwd : 'src/bower_components/js/',
            expand: true,
            src: [
              '*.js'
            ], 
            dest: 'build/js/',
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

};