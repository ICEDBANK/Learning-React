const gulp = require('gulp');
const git = require('gulp-git');
const watch = require('gulp-watch');
const debounce = require('lodash.debounce');

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

// Debounced commit and push function
const debouncedCommitAndPush = debounce(function() {
    console.log('Debounced function called. Waiting for debounce delay...');
    gulp.series('commit-changes', 'push-changes')();
}, 300000); // 5-minute debounce time (adjust as needed)

// Watch task to trigger commit and push after a debounce period
gulp.task('watch', function() {
    watch(['./src/**/*.js', './pages/**/*.js', './components/**/*.js'], function() {
        console.log('Change detected. Triggering debounce...');
        debouncedCommitAndPush();
    });
});

// Default task to start watching for changes
gulp.task('default', gulp.series('watch'));
