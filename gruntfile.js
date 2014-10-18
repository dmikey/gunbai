module.exports = function(grunt) {

  grunt.initConfig({
   uglify: {
      dist: {
        files: {
          'dist/gunbai.min.js': ['src/gunbai.js']
        }
      }
    },
    jshint: {
      files: ['src/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          console: true,
          module: true,
          document: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'uglify']);

};