module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js'],
     options: {
      globals: {
        jQuery: true
      }
    }
  },
  uglify: {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    },
    dist: {
      files: {
        'dist/main.min.js': ['js/**/*.js']
      }
    }
  },
  less: {
    dev: {
      options: {
        compress: true
      },
      files: {
        "dist/main.min.css": "less/build.less"
      }

    }
  },
  watch: {
    files: ['<%= jshint.files %>', 'less/**/*.less'],
    tasks: ['jshint', 'less', 'uglify']
  }
});
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'uglify', 'less']);

};