const gulp = require('gulp');
const git = require('gulp-git');
const watch = require('gulp-watch');

// Task to commit changes
gulp.task('commit-changes', function() {
    return gulp.src(['./pages/AboutPage.js', './pages/HomePage.js', './pages/MyTable.js', './src/App.js', './pages/BlogPage.js', './pages/ProductsPage.js', './src/index.js'])
        .pipe(git.add()) // Add all files to staging area
        .pipe(git.commit('Automated commit')); // Commit changes with a default message
});

// Task to push changes to remote repository
gulp.task('push-changes', function(cb) {
    git.push('origin', 'master', cb); // Push changes to the 'master' branch of the 'origin' remote
});

// Watch task to trigger commit and push when files change
gulp.task('watch', function() {
    watch(['./pages/*.js', './src/*.js'], function() { // Watch JavaScript files in 'pages' and 'src' directories
        gulp.series('commit-changes', 'push-changes')();
    });
});

// Default task to start watching for changes
gulp.task('default', gulp.series('watch'));
