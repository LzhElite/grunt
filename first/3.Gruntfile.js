//3如何触发警告和致命错误
module.exports = function(grunt){
    grunt.registerTask('interview',function(status){
        if(status == 'has_boy'){
            grunt.warn('write a red-black tree with c')
        }else if(status == 'married'){
            grunt.fatal('write a red-black tree with assembly')
        }else{
            grunt.log.writeln('write hello world with word')
        }
        grunt.log.write('you have been accepted')
    });
};
