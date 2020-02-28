require([], function(){
    var $14 = $.noConflict(true); //ztree必须使用1.4的jquery

    let setting = { 
            check: {//设置复选框
                enable: true,
                chkStyle: "checkbox",
                chkboxType: {"Y": "ps", "N": "ps"} //默认值不需要修改
            },
            data: {
                simpleData:{
                    enable: true
                }
            }
        };
    let zNodes; //树结构所有数据
    let zTreeData;
    //获取数据
    $.get('/api/ztree/data5', function(data){ //数据结构为扁平结构， 通过id和pId进行父子关联
        zTreeData = data.ztree;
        zNodes = zTreeData
        $14.fn.zTree.init($('#treeDemo'), setting, zNodes)
    })
})