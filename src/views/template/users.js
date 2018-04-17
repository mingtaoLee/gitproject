import service from '@/service/index'
import validate from '@/libs/validate'
export const columns = [
    {
        type: 'selection',
        align: 'center',
        width: 60,
        enableRead: true,
        enableAdd: false,
        enableEdit: false,
        require: true,
    },
    {
        title: '账号',
        type: 'text',
        key: 'account',
        align: 'center',
        enableRead: true,
        enableAdd: true,
        enableEdit: false,
        placeholder: '请输入账号',
        require: true,
        isShowImportFail: true,
        validate(value) {
            validate.isEmpty(value, '账号')
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
        // validate: validate.validateEmail
        validate(value) {
            validate.isEmpty(value, '邮箱')
            validate.validateEmail(value)
        },
    },
    {
        title: '名字',
        type: 'text',
        key: 'name',
        align: 'center',
        placeholder: '请输入名字',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        validate(value) {
            validate.isEmpty(value, '名字')
        },
    },
    {
        title: '手机号',
        type: 'text',
        key: 'phone',
        align: 'center',
        placeholder: '请输入手机号',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false,
        // validate:validate.validatePhone    
        validate(value) {
            validate.isEmpty(value, '手机号码')
            validate.validatePhone(value)
        },
    },
    {
        title: '密码',
        type: 'password',
        key: 'password',
        align: 'center',
        placeholder: '请输入密码',
        enableRead: false,
        enableAdd: true,
        enableEdit: false,
        require: false,
        validate(value) {
            validate.isEmpty(value, '密码')
        },
    },
    {
        title: '微信号',
        type: 'text',
        key: 'weixin',
        align: 'center',
        placeholder: '请输入微信号',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false
    },
    {
        title: 'QQ',
        type: 'text',
        key: 'qq',
        align: 'center',
        placeholder: '请输入QQ号',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false
    },
    {
        title: '微博',
        type: 'text',
        key: 'weibo',
        align: 'center',
        placeholder: '请输入微博',
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
        title: '角色',
        type: "select",
        placeholder: '请选择角色',
        items: [
            {
                value: "普通管理员"
            },
            {
                value: "超级管理员"
            }
        ],
        key: 'role',
        align: 'center',
        enableRead: true,
        enableAdd: true,
        enableEdit: true
    },
    {
        title: '操作',
        align: 'center',
        width: 200,
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
                }, 'View'),
                h('Button', {
                    props: {
                        type: 'text',
                        size: 'small'
                    },
                    on: {
                        click: (event) => {

                        }
                    }
                }, '删除')
            ]);
        }
    }
];
let update = async function (id, obj) {
    return await service.users.updateUser(id, obj)

}
let getList = async function () {
    await service.users.getList()
}
let get = async function (id) {
    let list = await getList()
    return list.find(item => item.id === id)
}
let add = async function (obj) {
    return await service.users.addUsers(obj)
}
let deletes = async function (id) {
    return await service.users.deleteUser(id)
}


const tableData = {
    columns,
    getList,
    update,
    get,
    add,
    deletes,
};

export default tableData;
