module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/<%= pkg.name %>.js',
        dest: 'build/js/<%= pkg.name %>.min.js'
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
        src: 'src/bower_components/angular/angular.min.js',
        dest: 'build/js/vendor/angular/angular.min.js',
      },
    }
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

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'csslint', 'cssmin', 'copy']);

};