import validate from '@/libs/validate'
import service from '@/service/index'
import moment from 'moment'
let columns = [
    {
        type: 'selection',
        align: 'center',
        fixed: 'left',
        width: 60,
        enableRead: true,
        enableAdd: false,
        enableEdit: false,
        require: true,
    },
    {
        title: '姓名',
        type: 'text',
        key: 'name',
        align: 'center',
        width: 150,
        placeholder: '请输入姓名',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: true,
        isShowImportFail: true,
        validate(value) {
            validate.isEmpty(value, '姓名')
        },
    },
    {
        title: '手机号码',
        type: 'text',
        key: 'phone',
        align: 'center',
        width: 150,
        placeholder: '请输入手机号码',
        sortable: true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: true,
        isSearch: true,
        validate(value) {
            validate.isEmpty(value, '手机号码')
            validate.validatePhone(value)
        },
        isShowImportFail: true
    },
    {
        title: '地址',
        type: 'address',
        key: 'address',
        align: 'center',
        "width": 150,
        placeholder: '请选择地址',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        level: 3,
        formatter: {
            input(text) {
                if (text) {
                    return text.split(' ')
                }
            },
            output(list) {
                if (list && list.length > 0) {
                    let address = ''
                    list.forEach(item => {
                        address = address + item.name + ' '
                    })
                    return address.substr(0, address.length - 1)
                }
            }
        }
    },
    {
        title: '详细地址',
        type: 'text',
        key: 'detailAddress',
        align: 'center',
        placeholder: '请输入地址',
        enableRead: false,
        enableAdd: true,
        enableEdit: true,
        require: false,
    },
    {
        title: '出生年月',
        type: 'date',
        key: 'birthdate',
        align: 'center',
        "width": 150,
        placeholder: '请选择出生年月',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        formatter: {
            output(value) {
                if (value) {
                    return moment(value).format('YYYY-MM-DD')
                }
            }
        }
    },
    {
        title: '学历',
        type: 'select',
        key: 'education',
        align: 'center',
        "width": 150,
        placeholder: '请选择学历',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        items: [
            {
                value: "初中"
            },
            {
                value: "高中"
            },
            {
                value: "中专"
            },
            {
                value: "大专"
            },
            {
                value: "本科"
            },
            {
                value: "硕士"
            },
            {
                value: "博士"
            }
        ],
    },
    {
        title: '邮箱',
        type: 'text',
        key: 'email',
        align: 'center',
        "width": 150,
        placeholder: '请输入邮箱',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        validate(value) {
            validate.validateEmail(value)
        },
    },
    {
        title: '身份证',
        type: 'text',
        key: 'identitycard',
        align: 'center',
        "width": 150,
        placeholder: '请输入身份证',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: false,
        require: false,
        // validate: validate.validateIdCard
        validate(value) {
            validate.validateIdCard(value)
        },
        // valid:[idValid]                
    },
    {
        title: '需要最大薪资',
        type: 'text',
        key: 'maxmoney',
        align: 'center',
        "width": 150,
        placeholder: '请输入需要最大薪资',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        // validate: validate.validateMaxSalary
        validate(value) {
            validate.validateMaxSalary(value)
        },
    },
    {
        title: '需求最小薪资',
        type: 'text',
        key: 'minmoney',
        align: 'center',
        "width": 150,
        placeholder: '请输入需求最小薪资',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        // validate: validate.validateMixSalary
        validate(value) {
            validate.validateMixSalary(value)
        },
    },
    {
        title: '民族',
        type: 'text',
        key: 'nation',
        align: 'center',
        "width": 150,
        placeholder: '请输入民族',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false
    },
    {
        title: '籍贯',
        type: 'address',
        key: 'nativeplace',
        align: 'center',
        "width": 150,
        placeholder: '请选择籍贯',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        level: 0,
        formatter: {
            input(text) {
                if (text) {
                    return text.split(' ')
                }
            },
            output(list) {
                if (list && list.length > 0) {
                    let nativeplace = ''
                    list.forEach(item => {
                        nativeplace = nativeplace + item.name + ' '
                    })
                    return nativeplace.substr(0, nativeplace.length - 1)
                }
            }
        }
    },
    {
        title: '介绍人',
        type: 'text',
        key: 'parent',
        align: 'center',
        "width": 150,
        placeholder: '请输入介绍人',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        // validate: validate.validateIntroducer,
        validate(value) {
            validate.validateIntroducer(value)
        },
    },
    {
        title: 'QQ号码',
        type: 'text',
        key: 'qq',
        align: 'center',
        "width": 150,
        placeholder: '请输入QQ号码',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false
    },
    {
        title: '备注',
        type: 'html',
        category: 'editor',
        key: 'remark',
        align: 'center',
        "width": 150,
        placeholder: '请输入备注',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false
    },
    {
        title: '期望工作地点',
        type: 'address',
        key: 'requirecity',
        align: 'center',
        "width": 150,
        placeholder: '请选择期望工作地点',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        level: 1,
        formatter: {
            input(text) {
                if (text) {
                    return text.split(' ')
                }
            },
            output(list) {
                if (list && list.length > 0) {
                    let requirecity = ''
                    list.forEach(item => {
                        requirecity = requirecity + item.name + ' '
                    })
                    return requirecity.substr(0, requirecity.length - 1)
                }
            }
        }
    },
    {
        title: '期望工作职位',
        type: 'text',
        key: 'requirejob',
        align: 'center',
        "width": 150,
        placeholder: '请输入期望工作职位',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false
    },
    {
        title: '姓别',
        type: 'radio',
        key: 'sex',
        align: 'center',
        "width": 150,
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        items: [
            {
                value: "男"
            },
            {
                value: "女"
            },
            {
                value: "保密"
            },
        ],
    },
    {
        title: '专长技能',
        type: 'text',
        key: 'skills',
        align: 'center',
        "width": 150,
        placeholder: '请输入专长技能',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false
    },
    {
        title: '身高',
        type: 'text',
        key: 'stature',
        align: 'center',
        "width": 150,
        placeholder: '请输入身高',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        // validate: validate.validateStature
        validate(value) {
            validate.validateStature(value)
        },

    },
    {
        title: '状态',
        type: 'select',
        key: 'status',
        align: 'center',
        "width": 150,
        placeholder: '请选择状态',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        items: [
            {
                value: "待业中"
            },
            {
                value: "预约中"
            },
            {
                value: "已报到"
            },
            {
                value: "试用中"
            },
            {
                value: "任职中"
            },
            {
                value: "在职、想换工作"
            }
        ],
    },
    {
        title: '类型',
        type: 'select',
        key: 'type',
        align: 'center',
        "width": 150,
        placeholder: '请选择类型',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        items: [
            {
                value: "蓝领"
            },
            {
                value: "普通"
            },
            {
                value: "高级"
            }
        ],

    },
    {
        title: '微信号',
        type: 'text',
        key: 'weixin',
        align: 'center',
        "width": 150,
        placeholder: '请输入微信号',
        "sortable": true,
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false
    },
    {
        title: '失败原因',
        key: 'reason',
        align: 'center',
        enableRead: false,
        enableAdd: false,
        enableEdit: false,
        isShowImportFail: true
    },
    {
        title: '操作',
        align: 'center',
        key: 'handle',
        fixed: 'right',
        "width": 150,
        enableRead: true,
        enableAdd: false,
        enableEdit: false,
        // handle: ['edit', 'delete']
        render: (h, params) => {
            return h('div', [
                h('Button', {
                    props: {
                        type: 'text',
                        size: 'small'
                    },
                }, '编辑'),
                h('Button', {
                    props: {
                        type: 'text',
                        size: 'small'
                    },
                }, '删除')
            ]);
        }
    }
];
let update = async function (id, obj) {
    return service.talent.updateTalent(id, obj)
}
let getList = async function (column = "phone", value = "") {
    return await service.talent.getList(column, value)
}
let get = async function (id) {
    let list = await getList()
    return list.find(item => item.id === id)
}
let add = async function (obj) {
    return await service.talent.createTalent(obj)
}
let deletes = async function (id) {
    return await service.talent.deleteTalent(id)
}
let allSearch = async function (value = "") {
    return await service.talent.allSearchTalents(value)
}
const tableData = {
    columns,
    getList,
    update,
    get,
    add,
    deletes,
    allSearch
    // get:function(type){
    //     // 
    //     return editInlineAndCellColumn;
    // }
};

export default tableData;
