require([], function(){
    var $14 = $.noConflict(true); //ztree必须使用1.4的jquery
  
    let setting = { 
            data: {
                simpleData:{
                    enable: true
                }
            }
        };
    let zNodes; //树结构所有数据
    let zTreeData;

    //获取数据 //实例为连接跳转 详情查看datas/data.js 中的data3结构
    $.get('/api/ztree/data3', function(data){ //数据结构为扁平结构， 通过id和pId进行父子关联
        zTreeData = data.ztree;
        zNodes = zTreeData
        $14.fn.zTree.init($('#treeDemo'), setting, zNodes)
    })
})