
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var url = require('url');

gulp.task('webserver',function(){
    gulp.src('.').pipe(webserver({
        host:'localhost',
        port:8080,
        middleware:function(req,res,next){
            var obj = url.parse(req.url);
            res.setHeader('Access-Control-Allow-Origin','*');
            if(req.method==="GET"){
                if(obj.pathname==='/getdata'){
                   res.end('{"top":["img/2.png","img/3.png","img/4.png","img/5.png"],"con":["img/6.png","img/7.png","img/8.png","img/9.png"],"cons":["img/6.png","img/7.png","img/8.png","img/9.png"]}')
                }else{
                    next();
                }
            }else{
                next()
            }
        }
    }))
});