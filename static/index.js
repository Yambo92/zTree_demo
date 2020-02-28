require([], function(){
    var $14 = $.noConflict(true); //ztree必须使用1.4的jquery
    console.log($.fn.jquery)
    console.log($14.fn.jquery)
    let setting = { };
    let zNodes; //树结构所有数据
    let zTreeData;
    //获取数据
    $.get('/api/ztree/data', function(data){ //数据结构为嵌套式
        zTreeData = data.ztree;
        zNodes = zTreeData.map((treeD, i) => {
            let newData;
            if(i == 0){ //默认展开第一个 ， 如果不需要可以不写
                newData = Object.assign({}, treeD, {open: true})
            }else{
                newData = treeD
            };
            if(typeof treeD.children == 'undefined'){
                newData = Object.assign({}, newData, {isParent: true})
            }
            return newData

        })
        $14.fn.zTree.init($('#treeDemo'), setting, zNodes)
    })
})