import validate from '@/libs/validate'
import service from '@/service/index'
let columns = [
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
        validate:validate.validatePhone    
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
        title: '备注',
        type: 'text',
        key: 'remark',
        align: 'center',
        placeholder: '请输入备注',
        enableRead: true,
        enableAdd: true,
        enableEdit: true,
        require: false
    },
    {
        title: '身份证',
        type: 'text',
        key: 'identityCard',
        align: 'center',
        placeholder: '请输入身份证',
        enableRead: true,
        enableAdd: true,
        enableEdit: false,
        require: false,
        // valid:[idValid]                
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
        require: true
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
let update = async function(id, obj) {
    return service.talent.updateTalent(id, obj)
}
let getList = async function() {
    return await service.talent.getList()
 }
 let get =async  function (id) {
     let list =await getList()
     return  list.find(item => item.id === id)
 }
let add = async function (obj) {
   return await service.talent.createTalent(obj)
}
const tableData = {
    columns,
    getList,
    update,
    get,
    add
    // get:function(type){
    //     // 
    //     return editInlineAndCellColumn;
    // }
};

export default tableData;
