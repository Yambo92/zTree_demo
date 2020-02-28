require([], function(){
    var $14 = $.noConflict(true); //ztree必须使用1.4的jquery
   

    let setting = { 
            data: {
                key: {
                    title: '' //鼠标悬浮提示信息默认为name的值
                },
                simpleData:{
                    enable: true
                }
            },
            callback: { //事件
                beforeClick: beforeClick, //点击前执行的事件
                onClick: onClick //执行点击事件调用的函数
            }
        };
    let zNodes; //树结构所有数据
    let zTreeData;

    function beforeClick(treeId, treeNode, clickFlag){
        console.log("beforeClicktreeId", treeId)
        console.log("beforeClicktreeNode", treeNode)
        console.log("beforeClickclickFlag", clickFlag)
    }
    function onClick(event, treeId, treeNode, clickFlag){
        console.log("event", event)
        console.log("treeId", treeId)
        console.log("treeNode", treeNode)
        console.log("clickFlag", clickFlag)
        alert(event.type)
    }
    //获取数据
    $.get('/api/ztree/data2', function(data){ //数据结构为扁平结构， 通过id和pId进行父子关联
        zTreeData = data.ztree;
        zNodes = zTreeData
        $14.fn.zTree.init($('#treeDemo'), setting, zNodes)
    })
})