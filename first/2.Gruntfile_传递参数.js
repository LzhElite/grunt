//2 如何往插件里传参数
module.exports = function(grunt){
    grunt.registerTask('default',function(name1,name2){
        grunt.log.writeln('hello '+name1+' and '+name2)
    });
};
