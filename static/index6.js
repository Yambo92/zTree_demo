require([], function(){
    var $14 = $.noConflict(true); //ztree必须使用1.4的jquery
    console.log($.fn.jquery)
    console.log($14.fn.jquery)
    let setting = { 
            async:{
                enable: true,
                type: 'get', //默认是post
                url: '/api/ztree/data2',
                autoParam: {isAdmin: true},
                otherParam: {arg1: 'aa', arg2: 'bb'}, //将要提交的参数
                dataFilter: filter //对查询结果进行数据处理
            },
            data: {
                simpleData:{
                    enable: true
                }
            }
        };
    let zNodes; //树结构所有数据
    let zTreeData;

    function filter(treeId, parentNode, responseData){
        let resData;
        if(responseData){
            resData = responseData.ztree;
            for(let i in resData){
                resData[i].name += '_处理后的数据'
            }
        }
        return resData
    }
    //渲染到页面
    $14.fn.zTree.init($('#treeDemo'), setting)
    

  
})