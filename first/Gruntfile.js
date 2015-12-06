//8.如何读取创建文件
module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json')
    });
    /*
    * 需求：
    * 往这test.js增加我的注释
    * 内容：项目名 作者
    * var content = grunt.file.read('./test.js','utf8);
    * var comment = '<%=pkg.name%><%=pkg.author%>';
    * comment = grunt.template.process(comment);
    * 把变化后的内容写入test2.js
    *
    * */

    grunt.registerTask('after',function(){
        var content = grunt.file.read('./test.js','utf8');
        var comment = '//<%=pkg.name%><%=pkg.author%>';
        comment = grunt.template.process(comment);
        grunt.file.write('./test2.js',comment+grunt.util.normalizelf('\n')+content,'utf8')
    })
};