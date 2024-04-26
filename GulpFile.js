const gulp = require('gulp');
const git = require('gulp-git');
const watch = require('gulp-watch');

// Task to commit changes
gulp.task('commit-changes', function() {
    return gulp.src(['./src/**/*.js', './pages/**/*.js', './components/**/*.js'])
        .pipe(git.add()) // Add all files to staging area
        .pipe(git.commit('Automated commit')); // Commit changes with a default message
});

// Task to push changes to remote repository
gulp.task('push-changes', function(cb) {
    git.push('origin', 'master', cb); // Push changes to the 'master' branch of the 'origin' remote
});

// Watch task to trigger commit and push when files change
gulp.task('watch', function() {
    watch(['./src/**/*.js', './pages/**/*.js', './components/**/*.js'], function() { // Watch JavaScript files in 'src', 'pages', and 'components' directories and their subdirectories
        gulp.series('commit-changes', 'push-changes')();
    });
});

// Default task to start watching for changes
gulp.task('default', gulp.series('watch'));
