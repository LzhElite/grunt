//4.如何定义组合任务
module.exports = function(grunt){
    grunt.registerTask('buy',function(){
        console.log('buy somethings');
    });
    grunt.registerTask('cook',function(){
        console.log('cook somethings');
    });
    grunt.registerTask('eat',function(){
        console.log('eat somethings');
    });

    grunt.registerTask('dinner',['buy','cook','eat']);
};
