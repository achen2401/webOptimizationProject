module.exports = function(grunt) {

  grunt.initConfig({
    /* Clear out the images directory if it exists */
    clean: {
      build: {
        src: ['dist/**/*']
      }
    },
    copy: {
      build: {
        files: [
          // includes files within path and its sub-directories
          {
            expand: true,
            cwd: 'src',
            src: '**',
            dest: 'dist/',
          }
        ],
      },
    },
    uglify: {
      main: {
        options: {
          banner: '/*uglified ' + (new Date()) + '*/'
        },
        files: [{
          expand: true,
          cwd: 'src/js/',
          src: '**/*.js',
          dest: 'dist/js'
        }]
      }
    },
    imagemin: {
        main: {
          options: {                       // Target options
            optimizationLevel: 3
          },
          files: [{
            expand: true,                  // Enable dynamic expansion
            cwd: 'src/img/',                   // Src matches are relative to this path
            src: ['**/*.{png,jpg}'],       // Actual patterns to match
            dest: 'dist/img'                  // Destination path prefix
          }]
        },
        views: {
          options: {                       // Target options
            optimizationLevel: 5
          },
          files: [{
            expand: true,                  // Enable dynamic expansion
            cwd: 'src/views/images/',      // Src matches are relative to this path
            src: ['**/*.{png,jpg}'],       // Actual patterns to match
            dest: 'dist/views/images'      // Destination path prefix
          }]

        }
    },
    responsive_images: {
        main: {
          options:{
            engine: 'im',
            sizes: [

              {
                width: 180,
                height: 130,
                suffix: '_small',
                quality: 50
              },
              {
                width: 204,
                height: 153,
                suffix: '_medium',
                quality: 50
              },
              {
                width: 408,
                height: 306,
                suffix: '_large',
                quality: 50
              }

            ]
          },
          files: [{
            expand: true,
            src: 'pizzeria.jpg',
            cwd: 'src/views/images/',
            dest: 'dist/views/images'
          }]
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['clean', 'copy', 'uglify', 'imagemin:main', 'responsive_images', 'imagemin:views']);

};
