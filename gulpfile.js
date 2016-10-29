var gulp = require("gulp");
var connect = require("gulp-connect");
var sass= require("gulp-sass");

gulp.task("server",function(){
	connect.server({
		root:["myself"],
		port:8000,
		livereload:true
	})
})


gulp.task("watch",function(){
	gulp.watch("index.html",["htmlReload"]);
	gulp.watch("src/css/*",["cssReload"]);
	gulp.watch("src/js/*",["jsReload"]);
})

gulp.task("htmlReload",function(){
	gulp.src("index.html").pipe(connect.reload());
})

gulp.task("cssReload",function(){
	gulp.src("src/css/*").pipe(sass()).pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("jsReload",function(){
	gulp.src("src/js/*").pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})


gulp.task("default",["server","watch"]);