module.exports = function(grunt) {

    grunt.initConfig ({
        wiredep: {
            task: {
                src: 'app/index.html'
            }
        },
        
        jshint: {
            all: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
            options: {
                curly: true
            }
        },
        
        watch: {
            components: {
                files: ['bower_components/*'],
                tasks: ['wiredep']
            },
            js: {
                files: ['tests/**/*.js', 'app/**/*.js', 'app/js/controllers/*.js'],
                tasks: ['jshint', 'concat']
            },
            scss: {
                files: 'app/**/*.scss',
                tasks:  'sass'
            },
            karma: {
                files: ['app.js/**/*.js', 'test/**/*.js'],
                tasks: ['karma:unit:run']
            }
        },
        
        clean: ['dest/**'],
        
        sass: {
            dist: {
                files: {
                    'app/styles/stylesheet.css': 'app/styles/stylesheet.scss'
                }
            }
        },
        
        concat: {
            options: {
                separator: '\n\n',
            },
            dist: {
                src: ['app/scripts/app.js', 'app/scripts/directives.js', 'app/scripts/controllers/*.js'],
                dest: 'app/scripts/angularCombined.js'
            }
        },
        
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['app/index.html', 'bower_components/**'],
                        dest: 'dest'
                    },
                    {
                        expand: true,
                        src: '**',
                        dest: 'dest/app/partials',
                        cwd: 'app/partials'
                    },
                    {
                        expand: true,
                        src: 'angularCombined.js',
                        dest: 'dest/app/scripts',
                        cwd: 'app/scripts'
                    },
                    {
                        expand: true,
                        src: 'stylesheet.css',
                        dest: 'dest/app/styles',
                        cwd: 'app/styles'
                    }
                        ]
                }
            },
        
        karma: {
            unit: {
                options: {
                    files: ['test/jasmine/jasmineTests.js'],
                    background: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-karma');

grunt.registerTask('default', ['clean', 'jshint', 'sass', 'karma', 'concat', 'wiredep', 'copy']);
};