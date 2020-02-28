require([], function(){
    var $14 = $.noConflict(true); //ztree必须使用1.4的jquery

    let setting = { 
            view: {
                addHoverDom: addHoverDom,
                removeHoverDom: removeHoverDom,
                selectedMulti: false
            },
            edit: {
                enable: true,
                editNameSelectAll: true,
                showRemoveBtn: showRemoveBtn,
                showRenameBtn: showRenameBtn
            },  
            check: {//设置复选框
                enable: true,
                chkStyle: "checkbox",
                chkboxType: {"Y": "ps", "N": "ps"} //默认值不需要修改
            },
            data: {
                simpleData:{
                    enable: true
                }
            },
            callback: {
                beforeDrag: beforeDrag,
                beforeEditName: beforeEditName,
                beforeRemove: beforeRemove,
                beforeRename: beforeRename,
                onRemove: onRemove,
                onRename: onRename
            }
        };
    let zNodes; //树结构所有数据
    let zTreeData;
    let className = 'dark'
    function beforeDrag(treeId, treeNodes){
        return false;
    }

    function beforeEditName(treeId, treeNode){
        className = (className === 'dark' ? "" : 'dark');
        let zTree = $14.fn.zTree.getZTreeObj('treeDemo');
        zTree.selectNode(treeNode);
        setTimeout(function(){
            if(confirm('进入节点--' + treeNode.name + " 的编辑状态吗？")){
                setTimeout(function(){
                    zTree.editName(treeNode)
                }, 0)
            }
        }, 0);
        return false;
    }
    function beforeRemove(treeId, treeNode){ //执行删除动作之前的函数
        className = (className === 'dark' ? "" : "dark");
        let zTree = $14.fn.zTree.getZTreeObj('treeDemo');
        zTree.selectNode(treeNode);
        return confirm('确认删除 节点--' + treeNode.name + ' 吗？')
    }
    function onRemove(e, treeId, treeNode){
        console.log('删除的节点是：', treeNode)
    }
    function beforeRename(treeId, treeNode, newName, isCancel){
        className = (className === 'dark' ? "" : "dark");
        if(newName.length == 0){
            setTimeout(function(){
                let zTree = $14.fn.zTree.getZTreeObj('treeDemo');
                zTree.cancelEditName();
                alert('节点名称不能为空');
            },0);
            return false;
        }
        return true
    }
    function onRename(e, treeId, treeNode, isCancel){
        console.log('修改后的节点为： ', treeNode)
    }

    function showRemoveBtn(treeId, treeNode){
        return true //是否显示删除按钮 可以根据当前treeNode的一些属性做来进行限制
        // return !treeNode.isFirstNode;
    }
    function showRenameBtn(treeId, treeNode){
        return true; //是否显示编辑按钮 可以根据当前treeNode的一些属性做来进行限制
        // return !treeNode.isLastNode;
    }

        let newCount = 1;
		function addHoverDom(treeId, treeNode) { //添加节点
			var sObj = $("#" + treeNode.tId + "_span");
			if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
			var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
				+ "' title='新增节点' onfocus='this.blur();'></span>";
			sObj.after(addStr);
			var btn = $("#addBtn_"+treeNode.tId);
			if (btn) btn.bind("click", function(){
				let zTree = $14.fn.zTree.getZTreeObj("treeDemo");
				zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"新建节点" + (newCount++)});
				return false;
			});
		};
		function removeHoverDom(treeId, treeNode) {
			$("#addBtn_"+treeNode.tId).unbind().remove();
		};
    //获取数据
    $.get('/api/ztree/data5', function(data){ //数据结构为扁平结构， 通过id和pId进行父子关联
        zTreeData = data.ztree;
        zNodes = zTreeData
        $14.fn.zTree.init($('#treeDemo'), setting, zNodes)
    })
})