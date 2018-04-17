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
        title: '岗位id',
        type: 'text',
        key: 'jobId',
        align: 'center',
        placeholder: '请输入标题',
        enableRead: true,
        enableAdd: false,
        enableEdit: false,
        require: false
    },
    {
        title: '人才',
        type: 'autoComplete',
        key: 'talentId',
        align: 'center',
        placeholder: '请搜索人才',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: true,
        validate(value) {
            validate.isEmpty(value, '人才')
        },
        async search(value) {
            let list = await service.talent.allSearchTalents(value)
            return list
        },
    },
    {
        title: '企业',
        type: 'autoComplete',
        key: 'customer',
        align: 'center',
        placeholder: '请搜索企业',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: true,
        validate(value) {
            validate.isEmpty(value, '企业')
        },
        async search(value) {
            let list = await service.customers.allSearchCustomers(value)
            return list
        },
    },
    {
        title: '推荐人',
        type: 'autoComplete',
        key: 'proxyerId',
        align: 'center',
        placeholder: '请搜索推荐人',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: true,
        validate(value) {
            validate.isEmpty(value, '推荐人')
        },
        async search(value) {
            let list = await service.proxyers.allSearchProxyers(value)
            return list
        },
    },
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
        validate(value) {
            validate.isEmpty(value, '姓名')
        },
    },
    {
        title: '手机号',
        type: 'text',
        key: 'phone',
        align: 'center',
        placeholder: '请输入姓名',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: true,
        validate(value) {
            validate.isEmpty(value, '手机号')
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
                value: "预报名"
            },
            {
                value: "已签到"
            },
            {
                value: "面试通过"
            },
            {
                value: "试用中"
            },
            {
                value: "已转正"
            },
        ],
    },
    {
        title: '到岗时间',
        type: 'date',
        key: 'preWokingDate',
        align: 'center',
        placeholder: '请选择到岗时间',
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
        title: '头像',
        type: 'avatar',
        key: 'avatarUrl',
        align: 'center',
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
                            // this.$router.push({
                            //     name: "editor",
                            //     query: { type: jobs, id: params.row.id }
                            // });
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
    return service.jobTalents.updateJobTalent(id, obj)
}
let getList = async function (id) {
    return await service.jobTalents.getList(id)
}
let get = async function (id) {
    let list = await getList()
    return list.find(item => item.id === id)
}
let add = async function (id, obj) {
    return await service.jobTalents.createJobTalent(id, obj)
}
let uploadAvatar = async function (imgData) {
    return await service.attachments.uploadFile(imgData);
}
const tableData = {
    columns,
    getList,
    update,
    get,
    add,
    uploadAvatar,
    // get:function(type){
    //     // 
    //     return editInlineAndCellColumn;
    // }
};

export default tableData;
