require([], function(){
    var $14 = $.noConflict(true); //ztree必须使用1.4的jquery
    console.log($.fn.jquery)
    console.log($14.fn.jquery)
    let setting = { 
            view: {
                showIcon: showIconForTree
            },
            data: {
                simpleData:{
                    enable: true
                }
            }
        };
    let zNodes; //树结构所有数据
    let zTreeData;

    function showIconForTree(treeId, treeNode){
        return true;
        // return !treeNode.isParent //隐藏父的文件夹图标
    }
    //获取数据
    $.get('/api/ztree/data2', function(data){ //数据结构为扁平结构， 通过id和pId进行父子关联
        zTreeData = data.ztree;
        zNodes = zTreeData
        $14.fn.zTree.init($('#treeDemo'), setting, zNodes)
    })
})