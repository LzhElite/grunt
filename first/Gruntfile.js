//6.如何定义多任务
module.exports = function(grunt){
    //初始化配置信息，可以定义属性和值
    grunt.initConfig({
        eat:{//eat 是一个task的名字
            food:'rice',//里面是一个target的名字
            drink:'orange',
            vegetable:'potato'
        }
    });
    grunt.registerMultiTask('eat',function(){
        for(var i=0;i<10;i++){
            grunt.log.writeln('I am eating '+i+' of '+this.target+','+this.data)
        }
    })
};
