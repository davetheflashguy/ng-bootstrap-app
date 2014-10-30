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
        files: [
          // angular
          {src: 'src/bower_components/angular/angular.min.js', dest: 'build/vendor/angular/angular.min.js'},
          // angular touch
          {src: 'src/bower_components/angular-touch/angular-touch.min.js', dest: 'build/vendor/angular-touch/angular-touch.min.js'},
          // angular ui bootstrap
          {src: 'src/bower_components/angular-ui-bootstrap/dist/ui-bootstrap-tpls-0.11.2.min.js', dest: 'build/vendor/angular-ui-bootstrap/ui-bootstrap-tpls-0.11.2.min.js'},
          // bootstrap
          {expand: true, flatten:true, src: ['src/bower_components/bootstrap/dist/**'], dest: 'build/vendor/bootstrap/', filter: 'isFile'},
          // fastclick
          {src: 'src/bower_components/fastclick/lib/fastclick.js', dest: 'build/vendor/fastclick/fastclick.js'},
          // jquery
          {expand: true, flatten:true, src: ['src/bower_components/jquery/dist/**'], dest: 'build/vendor/jquery/', filter: 'isFile'},
        ],
      },
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

  // Default task(s).
  grunt.registerTask('default', ['clean', 'uglify', 'csslint', 'cssmin', 'copy']);

};