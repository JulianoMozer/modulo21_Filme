const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

// Função para compilar os arquivos SCSS
function styles() {
    return gulp.src('./src/styles/*.scss') // Pega todos os arquivos SCSS
        .pipe(sass({ outputStyle: 'compressed' })) // Compila e comprime o SCSS para CSS
        .pipe(gulp.dest('./dist/css')); // Salva o resultado na pasta 'dist/css'
}

function images() {
    return gulp.src('./src/images/**/*') // Pega todos os arquivos SCSS
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images')); // Salva o resultado na pasta 'dist/css'
}

// Exporta a função de estilos como tarefa padrão
exports.default = gulp.parallel(styles, images, scripts);

// Tarefa que observa as mudanças nos arquivos SCSS
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) 
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts)) // Monitora as alterações e executa 'styles'
}