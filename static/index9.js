require([], function(){
    var $14 = $.noConflict(true); //ztree必须使用1.4的jquery

    let setting = { 
            edit:{ //启用编辑功能
                enable: true
            },
            check: {
                enable: true,
                chkStyle: "checkbox",
                chkboxType: {"Y": "ps", "N": "ps"}
            },
            data: {
                simpleData:{
                    enable: true
                }
            },
            callback: {
                beforeDrag: beforeDrag
            }
        };
    let zNodes; //树结构所有数据
    let zTreeData;

    function beforeDrag(treeId, treeNodes){
        return false;
    }

    function setEdit(){
        let zTree = $14.fn.zTree.getZTreeObj('treeDemo'); //获取 id 为 treeDemo 的 zTree 对象
        let remove = $('#remove').prop('checked');
        let rename = $('#rename').prop('checked');
        let removeTitle = $('#removeTitle').get(0).value.trim();
        let renameTitle = $('#renameTitle').get(0).value.trim();
        zTree.setting.edit.showRemoveBtn = remove; //动态修改setting中的配置， remove为true显示删除按钮
        zTree.setting.edit.showRenameBtn = rename; //动态修改setting中的配置， rename为true显示编辑按钮
        zTree.setting.edit.removeTitle = removeTitle; //动态修改setting中的配置，设置删除按钮的提示信息
        zTree.setting.edit.renameTitle = renameTitle; //动态修改setting中的配置， 设置编辑按钮的提示信息
    }    

    //获取数据
    $.get('/api/ztree/data5', function(data){ //数据结构为扁平结构， 通过id和pId进行父子关联
        zTreeData = data.ztree;
        zNodes = zTreeData
        $14.fn.zTree.init($('#treeDemo'), setting, zNodes); //初始化
        setEdit() //必须在初始化之后调用
        $('#remove').bind('change', setEdit); //绑定监听事件动态改变setting
        $('#rename').bind('change', setEdit);
        $('#removeTitle').bind('propertychange', setEdit).bind('input', setEdit);
        $('#renameTitle').bind('propertychange', setEdit).bind('input', setEdit);
    })
})