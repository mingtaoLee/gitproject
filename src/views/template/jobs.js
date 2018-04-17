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
        title: '标题',
        type: 'text',
        key: 'title',
        align: 'center',
        placeholder: '请输入标题',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: true,
        isShowImportFail: true,
        validate(value) {
            validate.isEmpty(value, '标题')
        },
    },
    {
        title: '岗位名称',
        type: 'text',
        key: 'position',
        align: 'center',
        placeholder: '请输入岗位名称',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: true,
        isShowImportFail: true,
        validate(value) {
            validate.isEmpty(value, '岗位名称')
        },
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
                value: "无效"
            },
            {
                value: "有效"
            },
        ],
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
        title: '企业ID ',
        type: 'autoComplete',
        key: 'customer',
        align: 'center',
        placeholder: '请输入企业ID',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        async search(value) {
            let list = await service.customers.allSearchCustomers(value)
            return list
        },
    },
    {
        title: '福利 ',
        type: 'text',
        key: 'welfare',
        align: 'center',
        placeholder: '请输入福利',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        remark: '请以英文,符号隔开, 如：五险一金,周末双休,年终奖金'
    },
    {
        title: '岗位logo ',
        type: 'img',
        key: 'bgUrl',
        align: 'center',
        placeholder: '岗位logo',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        noShowExcelTemplate: true,
        formatter: {
            input(obj) {
                if (obj) {
                    return config.urls.base + 'attachments/' + obj.id + '/' + obj.md5
                }
            },
            output(obj) {
                if (obj) {
                    return config.urls.base + 'attachments/' + obj.id + '/' + obj.md5
                }
            }
        },
        render: (h, params) => {
            return h('div', [
                h('img', {
                    attrs: {
                        src: params.row.bgUrl
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
        title: '最大薪资',
        type: 'text',
        key: 'maxMoney',
        align: 'center',
        placeholder: '请输入最大薪资',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        validate(value) {
            validate.validateMaxSalary(value)
        },

    },
    {
        title: '最小薪资',
        type: 'text',
        key: 'minMoney',
        align: 'center',
        placeholder: '请输入最小薪资',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        validate(value) {
            validate.validateMixSalary(value)
        },
    },
    {
        title: '最小年龄',
        type: 'text',
        key: 'minAge',
        align: 'center',
        placeholder: '请输入最小年龄',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        validate(value) {
            validate.validateMixAge(value)
        },
    },
    {
        title: '最大年龄',
        type: 'text',
        key: 'maxAge',
        align: 'center',
        placeholder: '请输入最大年龄',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        validate(value) {
            validate.validateMaxAge(value)
        },
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
                value: "男女不限"
            },
        ],
    },
    {
        title: '岗位需求人数',
        type: 'text',
        key: 'count',
        align: 'center',
        placeholder: '请输入岗位需求人数',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        validate(value) {
            validate.validateNeedCount(value)
        },
    },
    {
        title: '最大预报名人数',
        type: 'text',
        key: 'maxSignCount',
        align: 'center',
        placeholder: '请输入最大预报名人数',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        validate(value) {
            validate.validateMaxSignUpCount(value)
        },
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
                    on: {
                        click: () => {

                            // this.remove(params.index)
                        }
                    }
                }, '创建岗位'),
                h('Button', {
                    props: {
                        type: 'text',
                        size: 'small'
                    },
                    on: {
                        click: () => {
                            this.$router.push({
                                name: "editor",
                                query: { type: jobs, id: params.row.id }
                            });
                            // this.remove(params.index)
                        }
                    }
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
    return service.jobs.updateJob(id, obj)
}
let getList = async function () {
    return await service.jobs.getList()
}
let get = async function (id) {
    let list = await getList()
    return list.find(item => item.id === id)
}
let add = async function (obj) {
    return await service.jobs.createJob(obj)
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
    add,
    uploadImg,
    allSearch
    // get:function(type){
    //     // 
    //     return editInlineAndCellColumn;
    // }
};

export default tableData;
