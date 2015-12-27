var gulp = require("gulp");
var jade = require("gulp-jade");
var less = require("gulp-less");

gulp.task("jade", function() {
  gulp.src("./sphero-server/*.jade").pipe(jade({
    pretty: true
  })).pipe(gulp.dest("./sphero-server/"));
});
gulp.task("less", function() {
  gulp.src("./sphero-server/*.less").pipe(less()).pipe(gulp.dest("./sphero-server/"));
});
gulp.task("w", function() {
  gulp.watch("./sphero-server/*.less", ["less"]);
  gulp.watch("./sphero-server/*.jade", ["jade"]);
});