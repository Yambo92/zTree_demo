

module.exports = {
    data1: [
        {
            name: '学院事业发展规划',
            children: [
                {
                    name:'事业发展总体规划',
                    children:[
                        { name: '总体规划A' },
                        { name: '总体规划B' },
                        { name: '总体规划C' },
                    ]
                },
                {
                    name:'事业发展单项规划',
                },
                {
                    name:'部门发展规划',
                }
            ]
        },
        {
            name: '学校内部管理制度',
            children: [
                {
                    name:'教学管理制度',
                },
                {
                    name:'学生管理制度',
                }
            ]
        },
        {
            name: '学院管理任务标准',
        },
    ],
    data2: [
        {id:1, pId:0, name: '学院事业发展规划', open: true},
        {id:11, pId:1, name: '事业发展总体规划'},
        {id:111, pId:11, name: '总体规划A'},
        {id:112, pId:11, name: '总体规划B'},
        {id:113, pId:11, name: '总体规划C'},
        {id:12, pId:1, name: '事业发展单项规划'},
        {id:13, pId:1, name: '部门发展规划'},
        {id:2, pId:0, name: '学校内部管理制度'},
        {id:21, pId:2, name: '教学管理制度'},
        {id:22, pId:2, name: '学生管理制度'},
        {id:3, pId:0, name: '学院管理任务标准', isParent:true },
    ],
    data3: [
        {id:1, pId:0, name: '学院事业发展规划', open: true},
        {id:11, pId:1, name: '事业发展总体规划'},
        {id:111, pId:11, name: '总体规划A', url: 'http://www.treejs.cn/', target:"_blank"},
        {id:112, pId:11, name: '总体规划B',  url:"http://ztreeapi.iteye.com/", target:"_blank"},
        {id:113, pId:11, name: '不跳转',  url:"", target:"_blank", click:"alert('我是不会跳转的...');"},
        {id:12, pId:1, name: '事业发展单项规划'},
        {id:13, pId:1, name: '部门发展规划'},
        {id:2, pId:0, name: '学校内部管理制度'},
        {id:21, pId:2, name: '教学管理制度'},
        {id:22, pId:2, name: '学生管理制度'},
        {id:3, pId:0, name: '学院管理任务标准', isParent:true },
    ],
    data4: [
        {id:1, pId:0, name: '学院事业发展规划',  open: true},
        {id:11, pId:1, name: '事业发展总体规划',},
        {id:111, pId:11, name: '总体规划A'},
        {id:112, pId:11, name: '总体规划B'},
        {id:113, pId:11, name: '总体规划C'},
        {id:12, pId:1, name: '事业发展单项规划'},
        {id:13, pId:1, name: '部门发展规划'},
        {id:2, pId:0, name: '学校内部管理制度'},
        {id:21, pId:2, name: '教学管理制度'},
        {id:22, pId:2, name: '学生管理制度'},
        {id:3, pId:0, name: '学院管理任务标准', isParent:true },
    ],
    data5: [
        {id:1, pId:0, name: '学院事业发展规划',  open: true,  checked: true, chkDisabled:true},
        {id:11, pId:1, name: '事业发展总体规划', checked: true},
        {id:111, pId:11, name: '总体规划A', checked: true , chkDisabled:true},
        {id:112, pId:11, name: '总体规划B'},
        {id:113, pId:11, name: '总体规划C', checked: true },
        {id:12, pId:1, name: '事业发展单项规划',  chkDisabled:true},
        {id:13, pId:1, name: '部门发展规划'},
        {id:2, pId:0, name: '学校内部管理制度'},
        {id:21, pId:2, name: '教学管理制度'},
        {id:22, pId:2, name: '学生管理制度'},
        {id:3, pId:0, name: '学院管理任务标准', isParent:true , chkDisabled:true},
    ],
}
 