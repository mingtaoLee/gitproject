import validate from '@/libs/validate'
import service from '@/service/index'
import config from '@/config/config'
let columns = [
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
        title: '名称',
        type: 'text',
        key: 'name',
        align: 'center',
        placeholder: '请输入企业名称',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: true,
        isSearch: true,
        isShowImportFail: true,
        validate(value) {
            validate.isEmpty(value, '名称')
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
        isSearch: true,
        require: false,
        isShowImportFail: true,
        validate(value) {
            validate.isEmpty(value, '手机号码')
            validate.validatePhone(value)
        },
    },
    {
        title: '地址',
        type: 'address',
        key: 'address',
        align: 'center',
        placeholder: '请选择地址',
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
                    return address
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
        title: '企业logo',
        type: 'img',
        key: 'logoUrl',
        align: 'center',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        noShowExcelTemplate: true,
        formatter: {
            input(items) {
                if (items && items.length > 0) {
                    return items.map(item => {
                        return config.urls.base + 'attachments/' + item.id + '/' + item.md5
                    })
                }
            },
            output(items) {
                if (items && items.length > 0) {
                    console.log(items)
                    return items.map(item => {
                        return config.urls.base + 'attachments/' + item.id + '/' + item.md5
                    })
                }
            },
        },
        render: (h, params) => {
            return h('div', [
                h('img', {
                    attrs: {
                        src: params.row.logoUrl
                    },
                    style: {
                        width: '40px',
                        height: '40px'
                    }
                }),
            ]);
        }
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
        title: '籍贯',
        type: 'text',
        key: 'category',
        align: 'center',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
    },
    {
        title: '企业规模',
        type: 'select',
        key: 'scope',
        align: 'center',
        placeholder: '请选择企业规模',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        items: [
            {
                value: "小"
            },
            {
                value: "中"
            },
            {
                value: "大"
            },
            {
                value: "集团"
            },
        ],
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
        require: false
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
                value: "有效"
            },
            {
                value: "无效"
            },
        ],
    },
    {
        title: '企业类型',
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
                value: "外资"
            },
            {
                value: "中外合资"
            },
            {
                value: "民营"
            },
            {
                value: "国企"
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
    return service.customers.updateCustomer(id, obj)
}
let getList = async function () {
    return await service.customers.getList()
}
let get = async function (id) {
    let list = await getList()
    return list.find(item => item.id === id)
}
let add = async function (obj) {
    return await service.customers.createCustomer(obj)
}
let uploadImg = async function (imgData) {
    return await service.attachments.uploadFile(imgData);
}
let allSearch = async function (value = "") {
    return await service.customers.allSearchCustomers(value)
}
const tableData = {
    columns,
    getList,
    update,
    get,
    uploadImg,
    add,
    allSearch
    // get:function(type){
    //     // 
    //     return editInlineAndCellColumn;
    // }
};

export default tableData;
