import validate from '@/libs/validate'
import service from '@/service/index'
let columns = [
    {
        title: '姓名',
        type: 'text',
        key: 'name',
        align: 'center',
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
        placeholder: '请输入手机号码',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: true,
        isShowImportFail: true,
        validate(value) {
            validate.isEmpty(value, '手机号码')
            validate.validatePhone(value)
        },
    },
    {
        title: 'id',
        type: 'text',
        key: 'id',
        align: 'center',
        enableRead: true,
        enableAdd: false,
        enableEdit: false,
        require: true
    },
    {
        title: '邮箱',
        type: 'text',
        key: 'email',
        align: 'center',
        placeholder: '请输入邮箱',
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
        placeholder: '请输入身份证',
        enableRead: true,
        enableAdd: true,
        enableEdit: false,
        require: false,
        validate(value) {
            validate.validateIdCard(value)
        },
    },
    {
        title: '民族',
        type: 'text',
        key: 'nation',
        align: 'center',
        placeholder: '请输入民族',
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
        placeholder: '请选择籍贯',
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
        title: 'QQ号码',
        type: 'text',
        key: 'qq',
        align: 'center',
        placeholder: '请输入QQ号码',
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
        placeholder: '请输入备注',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
    },
    {
        title: '姓别',
        type: 'radio',
        key: 'sex',
        align: 'center',
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
        title: '状态',
        type: 'select',
        key: 'status',
        align: 'center',
        placeholder: '请选择状态',
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
        placeholder: '请选择类型',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        items: [
            {
                value: "招聘专员"
            },
            {
                value: "注册专员"
            },
            {
                value: "线上门店"
            },
            {
                value: "线下门店"
            },
            {
                value: "合伙人"
            },
        ],

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
        enableRead: true,
        enableAdd: false,
        enableEdit: false,
        value: '23432423432',
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
    return service.proxyers.updateProxyer(id, obj)
}
let getList = async function () {
    return await service.proxyers.getList()
}
let get = async function (id) {
    let list = await getList()
    return list.find(item => item.id === id)
}
let add = async function (obj) {
    return await service.proxyers.createProxyer(obj)
}
let allSearch = async function (value = "") {
    return await service.proxyers.allSearchProxyers(value)
}
const tableData = {
    columns,
    getList,
    update,
    get,
    add,
    allSearch
    // get:function(type){
    //     // 
    //     return editInlineAndCellColumn;
    // }
};

export default tableData;
