猎狼天下后台接口文档

服务器地址:
*****************
SERVER_URL='http://api.lielanghr.com/v1' (正式地址)
SERVER_URL='http://192.168.0.167:8080/v1' (测试地址)



统一错误返回
****************
{
    status:400, //400,401,500 错误状态
    error:"invalid_request", //错误
    message:"The access token was not found"//错误的详细信息
}


用户接口
*****************
U0:分页查询用户列表
----------------
Url:
    [GET] {SERVER_URL}/users/list?limit={limit}&column={column}&value={value}&attrs={attrs}&nextPageKey={nextPageKey}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "account",  "role",  "name", "email",  "phone",  "weixin_openid", "qq_openid",  "weibo_openid" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
        -nextPageKey: 下一页的Key,可为空. 直接使用上次请求传回的nextPageKey的JSON. {"key": "account_sssbbbb","id": "HRiMmMVN3aYg"}
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        list:[{
            id:'UIEYWR', //用户id
            role:'超级管理员', //角色
            name:'张三丰', //姓名
            email:'xx@xxx.com',//邮箱
            phone:'17883726453',//手机号码
            weixin:'23wlfw',//微信号
            qq:'123133432',//QQ号
            weibo:'0wff',//微博帐号
            weixin_openid:'0wff',//微信openId, 有值说明已和微信绑定
            qq_openid:'0wff',//QQ的openId, 有值说明已和QQ绑定
            weibo_openid:'0wff',//微博OpenId, 有值说明已和微博绑定
        }]
        "nextPageKey": {
            "key": "account_sssbbbb",
            "id": "HRiMmMVN3aYg"
        }
    }

U1:查询用户列表
----------------
Url:
    [GET] {SERVER_URL}/users?limit={limit}&column={column}&value={value}&attrs={attrs}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "account",  "role",  "name", "email",  "phone",  "weixin_openid", "qq_openid",  "weibo_openid" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    [{
        id:'UIEYWR', //用户id
        role:'超级管理员', //角色
        name:'张三丰', //姓名
        email:'xx@xxx.com',//邮箱
        phone:'17883726453',//手机号码
        weixin:'23wlfw',//微信号
        qq:'123133432',//QQ号
        weibo:'0wff',//微博帐号
        weixin_openid:'0wff',//微信openId, 有值说明已和微信绑定
        qq_openid:'0wff',//QQ的openId, 有值说明已和QQ绑定
        weibo_openid:'0wff',//微博OpenId, 有值说明已和微博绑定
    }]



U2:直接创建一个用户
----------------
Url:
    [POST] {SERVER_URL}/users
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Body:
    -role:'超级管理员', //角色
    -account:'afwef', //帐号
    -name:'张三丰', //姓名
    -password:'89234234fewf', //密码
    -email:'xx@xxx.com',//邮箱
    -phone:'17883726453',//手机号码
    -weixin:'23wlfw',//微信号
    -qq:'123133432',//QQ号
    -weibo:'0wff',//微博帐号
    -weixin_openid:'0wff',//微信openId, 有值说明已和微信绑定
    -qq_openid:'0wff',//QQ的openId, 有值说明已和QQ绑定
    -weibo_openid:'0wff',//微博OpenId, 有值说明已和微博绑定
Return
    {
        id:'UIEYWR', //用户id
        account:'afwef', //帐号
        role:'超级管理员', //角色
        name:'张三丰', //姓名
        email:'xx@xxx.com',//邮箱
        phone:'17883726453',//手机号码
        weixin:'23wlfw',//微信号
        qq:'123133432',//QQ号
        weibo:'0wff',//微博帐号
        weixin_openid:'0wff',//微信openId, 有值说明已和微信绑定
        qq_openid:'0wff',//QQ的openId, 有值说明已和QQ绑定
        weibo_openid:'0wff',//微博OpenId, 有值说明已和微博绑定
    }


U3:根据Id获取一个用户
----------------
Url:
    [GET] {SERVER_URL}/users/{userId}
        - userId: 用户Id
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return
    {
        id:'UIEYWR', //用户id
        account:'afwef', //帐号
        role:'超级管理员', //角色
        name:'张三丰', //姓名
        email:'xx@xxx.com',//邮箱
        phone:'17883726453',//手机号码
        weixin:'23wlfw',//微信号
        qq:'123133432',//QQ号
        weibo:'0wff',//微博帐号
        weixin_openid:'0wff',//微信openId, 有值说明已和微信绑定
        qq_openid:'0wff',//QQ的openId, 有值说明已和QQ绑定
        weibo_openid:'0wff',//微博OpenId, 有值说明已和微博绑定
    }


U4:更新用户的基本信息
----------------
 Url:
     [PATCH] {SERVER_URL}/users/{userId}
        - userId: 用户Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Body:
     -role:'超级管理员', //角色
     -name:'张三丰', //姓名
     -email:'xx@xxx.com',//邮箱
     -phone:'17883726453',//手机号码
     -weixin:'23wlfw',//微信号
     -qq:'123133432',//QQ号
     -weibo:'0wff',//微博帐号
     -weixin_openid:'0wff',//微信openId, 有值说明已和微信绑定
     -qq_openid:'0wff',//QQ的openId, 有值说明已和QQ绑定
     -weibo_openid:'0wff',//微博OpenId, 有值说明已和微博绑定
     以上字段可以选择性填写
 Return
     {
         id:'UIEYWR', //用户id
         account:'afwef', //帐号
         role:'超级管理员', //角色
         name:'张三丰', //姓名
         email:'xx@xxx.com',//邮箱
         phone:'17883726453',//手机号码
         weixin:'23wlfw',//微信号
         qq:'123133432',//QQ号
         weibo:'0wff',//微博帐号
         weixin_openid:'0wff',//微信openId, 有值说明已和微信绑定
         qq_openid:'0wff',//QQ的openId, 有值说明已和QQ绑定
         weibo_openid:'0wff',//微博OpenId, 有值说明已和微博绑定
     }


U5:删除用户的基本信息
----------------
 Url:
     [DELETE] {SERVER_URL}/users/{userId}
        - userId: 用户Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Return
     {
         success:true
     }


U6:注册
----------------
 Url:
     [POST] {SERVER_URL}/users/register
 Body:
     -name:'张三丰', //姓名
     -account:'afwef', //帐号
     -password:'89234234fewf', //密码
     -email:'xx@xxx.com',//邮箱
     -phone:'17883726453',//手机号码
 Return
     {
         id:'UIEYWR', //用户id
         account:'afwef', //帐号
         role:'超级管理员', //角色
         name:'张三丰', //姓名
         email:'xx@xxx.com',//邮箱
     }


U7:重置密码
----------------
 Url:
     [POST] {SERVER_URL}/users/resetPassword
 Body:
     -password:'89234234fewf', //密码
     -phone:'17883726453',//手机号码
     -code:'123456',//验证码
 Return
     {
        success: true
     }


U8: 绑定电话号码
----------------
 Url:
     [POST] {SERVER_URL}/users/{userId}/bindPhone
    - userId: 用户Id
 Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
 Body:
     -phone:'17883726453',//手机号码
     -code:'123456',//验证码
 Return
     {
         id:'UIEYWR', //用户id
         account:'afwef', //帐号
         role:'超级管理员', //角色
         name:'张三丰', //姓名
         email:'xx@xxx.com',//邮箱
         token:'82394kfhwefw;flkwe' //token用于访问其它接口的权限
         expires:3192139 //token的有限期, 单位是秒
     }


U9:发送验证码
----------------
 Url:
     [POST] {SERVER_URL}/identify/sendCode
 Body:
     -phone:'17883726453',//手机号码
 Return
     {
         success: true
     }


U10:取得用户对应的人才信息
------------
Url:
     [get] {SERVER_URL}/users/:userId/talent
       - userId: 用户Id
Header:
     Authorization = Bearer {{token}}
       - token:为登录时拿回的token
Return
     {
         "address": "", //地址
         "birthdate": "1990-1-1", //出生年月
         "education": "博士", //学历, [初中,高中,中专,大专,本科,硕士,博士]
         "email": "a@qq.com", //邮箱
         "id": "Ue312Kf9E1N", //人才id
         "identitycard": "44012312312", //身份证
         "maxmoney": "0", //需要最大薪资
         "minmoney": "0", //需求最小薪资
         "name": "<em>张</em>吸困", //姓名
         "nation": "汉", //民族
         "nativeplace": "广东", //籍贯
         "parent": "null", //介绍人
         "phone": "189189189138", //手机号码
         "qq": "231212321", //QQ号码
         "remark": "", //其它备注
         "requirecity": "", //期望工作地点 显示标准的城市名字
         "requirejob": "", //期望工作职位 职位id
         "sex": "女", //姓别 [男,女,无]
         "skills": "", //专长技能
         "stature": "180", //身高
         "status": "待业", //状态[待业、试用、在职]
         "type": "蓝领",//类型 [蓝领,普通,高级]
         "weixin": "mysql" //微信号
     }


U11:取得用户对应的推荐人信息
------------
Url:
     [get] {SERVER_URL}/users/:userId/proxyer
       - userId: 用户Id
Header:
     Authorization = Bearer {{token}}
       - token:为登录时拿回的token
Return
     {
        "email": "a@qq.com", //邮箱
        "id": "Ue312Kf9E1N", //推荐人id
        "identitycard": "44012312312", //身份证 
        "name": "张吸困", //姓名
        "nation": "汉", //民族
        "nativeplace": "广东", //籍贯 
        "phone": "189189189138", //手机号码
        "qq": "231212321", //QQ号码
        "remark": "", //其它备注 
        "sex": "女", //姓别 [男,女,无] 
        "status": "有效", //状态[有效、无效]
        "channel":"12313",//渠道编号
        "type": "推荐人",//类型 [招聘专员、注册专员、线上门店、线下门店、核伙人] 
     }


U12:重置我自己的密码
----------------
 Url:
     [POST] {SERVER_URL}/users/resetMyPassword
 Body:
     -password:'89234234fewf', //新密码
     -oldPassword:'12313',//旧密码
 Return
     {
        success: true
     }







人才接口
************ 


T0:分页查询人才列表
----------------
Url:
    [GET] {SERVER_URL}/talents/list?limit={limit}&column={column}&value={value}&attrs={attrs}&nextPageKey={nextPageKey}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "email",  "type",  "parent", "phone",  "identityCard",  "nativePlace", "sex",  "education" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
        -nextPageKey: 下一页的Key,可为空. 直接使用上次请求传回的nextPageKey的JSON. {"key": "account_sssbbbb","id": "HRiMmMVN3aYg"}
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        list:[{
          "address": "", //地址
          "birthdate": "1990-1-1", //出生年月
          "education": "博士", //学历, [初中,高中,中专,大专,本科,硕士,博士]
          "email": "a@qq.com", //邮箱
          "id": "Ue312Kf9E1N", //人才id
          "identitycard": "44012312312", //身份证
          "customer": 'Ue312Kf9E12', //最后的任职企业
          "maxmoney": "0", //需要最大薪资
          "minmoney": "0", //需求最小薪资
          "name": "<em>张</em>吸困", //姓名
          "nation": "汉", //民族
          "nativeplace": "广东", //籍贯
          "parent": "null", //推荐人
          "phone": "189189189138", //手机号码
          "qq": "231212321", //QQ号码
          "remark": "", //其它备注
          "requirecity": "", //期望工作地点 显示标准的城市名字
          "requirejob": "", //期望工作职位 职位id
          "sex": "女", //姓别 [男,女,无]
          "skills": "", //专长技能
          "stature": "180", //身高
          "marriage":"已婚",//[已婚,未婚,离异]
          "experience":"{items:[{time:'',title:'',remark:''}]}",//工作经验 JSON
          "status": "待业", //状态[待业、试用、在职]
          "type": "蓝领",//类型 [蓝领,普通,高级]
          "weixin": "mysql" //微信号
       }]
        "nextPageKey": {
            "key": "account_sssbbbb",
            "id": "HRiMmMVN3aYg"
        }
    }




T1:查询人才列表
----------------
Url:
    [GET] {SERVER_URL}/talents?limit={limit}&column={column}&value={value}&attrs={attrs}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "email",  "type",  "parent", "phone",  "identityCard",  "nativePlace", "sex",  "education" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    [{
          "address": "", //地址
          "birthdate": "1990-1-1", //出生年月
          "education": "博士", //学历, [初中,高中,中专,大专,本科,硕士,博士]
          "email": "a@qq.com", //邮箱
          "id": "Ue312Kf9E1N", //人才id
          "identitycard": "44012312312", //身份证
          "customer": 'Ue312Kf9E12', //最后的任职企业
          "maxmoney": "0", //需要最大薪资
          "minmoney": "0", //需求最小薪资
          "name": "<em>张</em>吸困", //姓名
          "nation": "汉", //民族
          "nativeplace": "广东", //籍贯
          "parent": "null", //推荐人
          "phone": "189189189138", //手机号码
          "qq": "231212321", //QQ号码
          "remark": "", //其它备注
          "requirecity": "", //期望工作地点 显示标准的城市名字
          "requirejob": "", //期望工作职位 职位id
          "sex": "女", //姓别 [男,女,无]
          "skills": "", //专长技能
          "stature": "180", //身高
          "marriage":"已婚",//[已婚,未婚,离异]
          "experience":"{items:[{time:'',title:'',remark:''}]}",//工作经验 JSON
          "status": "待业", //状态[待业、试用、在职]
          "type": "蓝领",//类型 [蓝领,普通,高级]
          "weixin": "mysql" //微信号
      }]



T2:直接创建一个人才
----------------
Url:
    [POST] {SERVER_URL}/talents
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Body:
    -"address": "", //地址
    -"birthdate": "1990-1-1", //出生年月
    -"education": "博士", //学历, [初中,高中,中专,大专,本科,硕士,博士]
    -"email": "a@qq.com", //邮箱
    -"customer": 'Ue312Kf9E12', //最后的任职企业id
    -"identitycard": "44012312312", //身份证
    -"maxmoney": "0", //需要最大薪资
    -"minmoney": "0", //需求最小薪资
    -"name": "<em>张</em>吸困", //姓名
    -"nation": "汉", //民族
    -"nativeplace": "广东", //籍贯
    -"parent": "null", //介绍人
    -"phone": "189189189138", //手机号码
    -"qq": "231212321", //QQ号码
    -"remark": "", //其它备注
    -"requirecity": "", //期望工作地点 显示标准的城市名字
    -"requirejob": "", //期望工作职位  职位id
    -"sex": "女", //姓别 [男,女,无]
    -"skills": "", //专长技能
    -"stature": "180", //身高
    -"status": "待业", //状态[待业、试用、在职]
    -"type": "蓝领",//类型 [蓝领,普通,高级]
    -"marriage":"已婚",//[已婚,未婚,离异]
    -"experience":"{items:[{time:'',title:'',remark:''}]}",//工作经验 JSON
    -"weixin": "mysql" //微信号
Return
    {
        "address": "", //标准地址
        "birthdate": "1990-1-1", //出生年月
        "education": "博士", //学历, [初中,高中,中专,大专,本科,硕士,博士]
        "email": "a@qq.com", //邮箱
        "id": "Ue312Kf9E1N", //人才id
        "customer": 'Ue312Kf9E12', //最后的任职企业id
        "identitycard": "44012312312", //身份证
        "maxmoney": "0", //需要最大薪资
        "minmoney": "0", //需求最小薪资
        "name": "<em>张</em>吸困", //姓名
        "nation": "汉", //民族
        "nativeplace": "广东", //籍贯
        "parent": "null", //介绍人
        "phone": "189189189138", //手机号码
        "qq": "231212321", //QQ号码
        "remark": "", //其它备注
        "requirecity": "", //期望工作地点 显示标准的城市名字
        "requirejob": "", //期望工作职位 职位id
        "sex": "女", //姓别 [男,女,无]
        "skills": "", //专长技能
        "stature": "180", //身高
        "status": "待业", //状态[待业、试用、在职]
        "type": "蓝领",//类型 [蓝领,普通,高级]
        "marriage":"已婚",//[已婚,未婚,离异]
        "experience":"{items:[{time:'',title:'',remark:''}]}",//工作经验 JSON
        "weixin": "mysql" //微信号
    }


T3:根据Id获取一个人才
----------------
Url:
    [GET] {SERVER_URL}/talents/{id}
        - id: 人才Id
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return
    {
        "address": "", //地址
        "birthdate": "1990-1-1", //出生年月
        "education": "博士", //学历, [初中,高中,中专,大专,本科,硕士,博士]
        "email": "a@qq.com", //邮箱
        "customer": 'Ue312Kf9E12', //最后的任职企业id
        "id": "Ue312Kf9E1N", //人才id
        "identitycard": "44012312312", //身份证
        "maxmoney": "0", //需要最大薪资
        "minmoney": "0", //需求最小薪资
        "name": "<em>张</em>吸困", //姓名
        "nation": "汉", //民族
        "nativeplace": "广东", //籍贯
        "parent": "null", //介绍人
        "phone": "189189189138", //手机号码
        "qq": "231212321", //QQ号码
        "remark": "", //其它备注
        "requirecity": "", //期望工作地点 显示标准的城市名字
        "requirejob": "", //期望工作职位 职位id
        "sex": "女", //姓别 [男,女,无]
        "skills": "", //专长技能
        "stature": "180", //身高
        "status": "待业", //状态[待业、试用、在职]
        "type": "蓝领",//类型 [蓝领,普通,高级]
        "marriage":"已婚",//[已婚,未婚,离异]
        "experience":"{items:[{time:'',title:'',remark:''}]}",//工作经验 JSON
        "weixin": "mysql" //微信号
    }


T4:更新人才的基本信息
----------------
 Url:
     [PATCH] {SERVER_URL}/talents/{id}
        - id: 人才Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Body:
     -"address": "", //地址
     -"birthdate": "1990-1-1", //出生年月
     -"customer": 'Ue312Kf9E12', //最后的任职企业id
     -"education": "博士", //学历, [初中,高中,中专,大专,本科,硕士,博士]
     -"email": "a@qq.com", //邮箱
     -"identitycard": "44012312312", //身份证
     -"maxmoney": "0", //需要最大薪资
     -"minmoney": "0", //需求最小薪资
     -"name": "<em>张</em>吸困", //姓名
     -"nation": "汉", //民族
     -"nativeplace": "广东", //籍贯
     -"parent": "null", //介绍人
     -"phone": "189189189138", //手机号码
     -"qq": "231212321", //QQ号码
     -"remark": "", //其它备注
     -"requirecity": "", //期望工作地点 显示标准的城市名字
     -"requirejob": "", //期望工作职位  职位id
     -"sex": "女", //姓别 [男,女,无]
     -"skills": "", //专长技能
     -"stature": "180", //身高
     -"status": "待业", //状态[待业、试用、在职]
     -"type": "蓝领",//类型 [蓝领,普通,高级]
     -"marriage":"已婚",//[已婚,未婚,离异]
     -"experience":"{items:[{time:'',title:'',remark:''}]}",//工作经验 JSON
     -"weixin": "mysql" //微信号
     以上字段可以选择性填写
 Return
     {
         "address": "", //地址
         "birthdate": "1990-1-1", //出生年月
         "education": "博士", //学历, [初中,高中,中专,大专,本科,硕士,博士]
         "email": "a@qq.com", //邮箱
         "id": "Ue312Kf9E1N", //人才id
         "customer": 'Ue312Kf9E12', //最后的任职企业id
         "identitycard": "44012312312", //身份证
         "maxmoney": "0", //需要最大薪资
         "minmoney": "0", //需求最小薪资
         "name": "<em>张</em>吸困", //姓名
         "nation": "汉", //民族
         "nativeplace": "广东", //籍贯
         "parent": "null", //介绍人
         "phone": "189189189138", //手机号码
         "qq": "231212321", //QQ号码
         "remark": "", //其它备注
         "requirecity": "", //期望工作地点 显示标准的城市名字
         "requirejob": "", //期望工作职位 职位id
         "sex": "女", //姓别 [男,女,无]
         "skills": "", //专长技能
         "stature": "180", //身高
         "status": "待业", //状态[待业、试用、在职]
         "type": "蓝领",//类型 [蓝领,普通,高级]
         "marriage":"已婚",//[已婚,未婚,离异]
         "experience":"{items:[{time:'',title:'',remark:''}]}",//工作经验 JSON
         "weixin": "mysql" //微信号
     }


T5:删除人才
----------------
 Url:
     [DELETE] {SERVER_URL}/talents/{id}
        - id: 人才Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Return
     {
         success:true
     }



T6:全文查询
----------------
Url:
    [GET] {SERVER_URL}/talents/search?v={value}&education={education}&pageIndex={pageIndex}&pageSize={pageSize}
        &parent={parent}&education={education}&status={status}&type={type}&sex={sex}&nativeplace={nativeplace}
        &requirecity={requirecity}&requirejob={requirejob}&name={name}&customer={customer}&proxyerId={proxyerId}
        -v: 默认查询值
        -pageIndex: 第几页,从0开始, 默认为0
        -pageSize: 每页多少项,默认为20
        -parent: 推荐人手机，为空则不查询
        -proxyerId: 推荐人id，为空则不查询
        -customer: 企业id，为空则不查询
        -education: 学历，为空则不查询
        -status 状态，为空则不查询
        -sex 性别，为空则不查询
        -nativeplace 籍贯，为空则不查询
        -requirecity 期望工作地点，为空则不查询
        -requirejob 期望工作职位，为空则不查询
        -name 姓名，为空则不查询
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        total:12,
        list: [{
            "address": "", //地址
            "birthdate": "1990-1-1", //出生年月
            "education": "博士", //学历, [初中,高中,中专,大专,本科,硕士,博士]
            "email": "a@qq.com", //邮箱
            "id": "Ue312Kf9E1N", //人才id
            "identitycard": "44012312312", //身份证
            "maxmoney": "0", //需要最大薪资
            "minmoney": "0", //需求最小薪资
            "name": "<em>张</em>吸困", //姓名
            "nation": "汉", //民族
            "nativeplace": "广东", //籍贯
            "parent": "null", //介绍人
            "phone": "189189189138", //手机号码
            "qq": "231212321", //QQ号码
            "remark": "", //其它备注
            "requirecity": "", //期望工作地点 显示标准的城市名字
            "requirejob": "", //期望工作职位 职位id
            "sex": "女", //姓别 [男,女,无]
            "skills": "", //专长技能
            "stature": "180", //身高
            "status": "待业", //状态[待业、试用、在职]
            "type": "蓝领",//类型 [蓝领,普通,高级]
            "weixin": "mysql" //微信号
        }]
    }


T7:查找我的所有人才成员状态（按待业、试用、在职等状态分）
----------------
 Url:
     [GET] {SERVER_URL}/talents/status?proxyerId={proxyerId} 
        - proxyerId: 推荐人Id, 必须填写
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Return
     {
        max: 432, //我的人才总数
        stat: {
            "待业":203, //待业203个
            "在职":143 //在职143个
            "无":12 //没有状态的12个
        }
    }

T7:查找我的推荐的人才成员状态（按企业分）
----------------
 Url:
     [GET] {SERVER_URL}/talents/customerStatus?proxyerId={proxyerId} 
        - proxyerId: 推荐人Id, 必须填写
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Return
     [{
        id:'',//企业id, 没有企业为'' 
        name:'',//企业名称, 没有企业的为''
        logoUrl:'',//企业Logo, 没有企业的为''
        stat: {
            "待业":203, //待业203个
            "在职":143 //在职143个
            "无":12 //没有状态的12个
        }
    }]

  






推荐人接口
************
 

P1:分页查询推荐人列表
----------------
Url:
    [GET] {SERVER_URL}/proxyers/list?limit={limit}&column={column}&value={value}&attrs={attrs}&nextPageKey={nextPageKey}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "name", "phone" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
        -nextPageKey: 下一页的Key,可为空. 直接使用上次请求传回的nextPageKey的JSON. {"key": "account_sssbbbb","id": "HRiMmMVN3aYg"}
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        list:[{ 
            "email": "a@qq.com", //邮箱
            "id": "Ue312Kf9E1N", //推荐人id
            "identitycard": "44012312312", //身份证 
            "name": "张吸困", //姓名
            "nation": "汉", //民族
            "nativeplace": "广东", //籍贯 
            "phone": "189189189138", //手机号码
            "qq": "231212321", //QQ号码
            "remark": "", //其它备注 
            "sex": "女", //姓别 [男,女,无] 
            "status": "有效", //状态[有效、无效]
            "channel":"12313",//渠道编号
            "type": "推荐人",//类型 [招聘专员、注册专员、线上门店、线下门店、核伙人] 
        }]
        "nextPageKey": {
            "key": "account_sssbbbb",
            "id": "HRiMmMVN3aYg"
        }
    }



P1:查询推荐人列表
----------------
Url:
    [GET] {SERVER_URL}/proxyers?limit={limit}&column={column}&value={value}&attrs={attrs}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "name", "phone" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    [{ 
          "email": "a@qq.com", //邮箱
          "id": "Ue312Kf9E1N", //推荐人id
          "identitycard": "44012312312", //身份证 
          "name": "张吸困", //姓名
          "nation": "汉", //民族
          "nativeplace": "广东", //籍贯 
          "phone": "189189189138", //手机号码
          "qq": "231212321", //QQ号码
          "remark": "", //其它备注 
          "sex": "女", //姓别 [男,女,无] 
          "status": "有效", //状态[有效、无效]
          "channel":"12313",//渠道编号
          "type": "推荐人",//类型 [招聘专员、注册专员、线上门店、线下门店、核伙人] 
      }]



P2:直接创建一个推荐人
----------------
Url:
    [POST] {SERVER_URL}/proxyers
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Body: 
    -"email": "a@qq.com", //邮箱
    -"identitycard": "44012312312", //身份证 
    -"name": "张吸困", //姓名
    -"nation": "汉", //民族
    -"nativeplace": "广东", //籍贯 
    -"phone": "189189189138", //手机号码
    -"qq": "231212321", //QQ号码
    -"remark": "", //其它备注 
    -"sex": "女", //姓别 [男,女,无] 
    -"channel":"12313",//渠道编号
    -"status": "待业", //状态[待业、试用、在职]
    -"type": "推荐人",//类型 [招聘专员、注册专员、线上门店、线下门店、核伙人] 
Return
    {
        "email": "a@qq.com", //邮箱
        "id": "Ue312Kf9E1N", //推荐人id
        "identitycard": "44012312312", //身份证 
        "name": "张吸困", //姓名
        "nation": "汉", //民族
        "nativeplace": "广东", //籍贯 
        "phone": "189189189138", //手机号码
        "qq": "231212321", //QQ号码
        "remark": "", //其它备注 
        "sex": "女", //姓别 [男,女,无] 
        "status": "有效", //状态[有效、无效]
        "channel":"12313",//渠道编号
        "type": "推荐人",//类型 [招聘专员、注册专员、线上门店、线下门店、核伙人] 
    }


P3:根据Id获取一个推荐人
----------------
Url:
    [GET] {SERVER_URL}/proxyers/{id}
        - id: 推荐人Id
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return
    {
        "email": "a@qq.com", //邮箱
        "id": "Ue312Kf9E1N", //推荐人id
        "identitycard": "44012312312", //身份证 
        "name": "张吸困", //姓名
        "nation": "汉", //民族
        "nativeplace": "广东", //籍贯 
        "phone": "189189189138", //手机号码
        "qq": "231212321", //QQ号码
        "remark": "", //其它备注 
        "sex": "女", //姓别 [男,女,无] 
        "status": "有效", //状态[有效、无效]
        "channel":"12313",//渠道编号
        "type": "推荐人",//类型 [招聘专员、注册专员、线上门店、线下门店、核伙人] 
    }


P4:更新推荐人的基本信息
----------------
 Url:
     [PATCH] {SERVER_URL}/proxyers/{id}
        - id: 推荐人Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Body:
    -"email": "a@qq.com", //邮箱
    -"identitycard": "44012312312", //身份证 
    -"name": "张吸困", //姓名
    -"nation": "汉", //民族
    -"nativeplace": "广东", //籍贯 
    -"phone": "189189189138", //手机号码
    -"qq": "231212321", //QQ号码
    -"remark": "", //其它备注 
    -"sex": "女", //姓别 [男,女,无] 
    -"channel":"12313",//渠道编号
    -"status": "待业", //状态[待业、试用、在职]
    -"type": "推荐人",//类型 [招聘专员、注册专员、线上门店、线下门店、核伙人] 
     以上字段可以选择性填写
 Return
     {
        "email": "a@qq.com", //邮箱
        "id": "Ue312Kf9E1N", //推荐人id
        "identitycard": "44012312312", //身份证 
        "name": "张吸困", //姓名
        "nation": "汉", //民族
        "nativeplace": "广东", //籍贯 
        "phone": "189189189138", //手机号码
        "qq": "231212321", //QQ号码
        "remark": "", //其它备注 
        "sex": "女", //姓别 [男,女,无] 
        "channel":"12313",//渠道编号
        "status": "有效", //状态[有效、无效]
        "type": "推荐人",//类型 [招聘专员、注册专员、线上门店、线下门店、核伙人] 
     }


P5:删除推荐人
----------------
 Url:
     [DELETE] {SERVER_URL}/proxyers/{id}
        - id: 推荐人Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Return
     {
         success:true
     }



P6:全文查询
----------------
Url:
    [GET] {SERVER_URL}/proxyers/search?v={value}&pageIndex={pageIndex}&pageSize={pageSize}
        &name={name}&nativeplace={nativeplace}&identitycard={identitycard}&sex={sex}&status={status}
        &type={type}
        -v: 查询值
        -pageIndex: 第几页,从0开始, 默认为0
        -pageSize: 每页多少项,默认为20
        -name 姓名，为空则不查询
        -nativeplace 籍贯，为空则不查询
        -identitycard 身份证，为空则不查询
        -sex 性别，为空则不查询
        -status 状态，为空则不查询
        -type 类型，为空则不查询
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        total:12,
        list: [{
            "email": "a@qq.com", //邮箱
            "id": "Ue312Kf9E1N", //推荐人id
            "identitycard": "44012312312", //身份证 
            "name": "张吸困", //姓名
            "nation": "汉", //民族
            "nativeplace": "广东", //籍贯 
            "phone": "189189189138", //手机号码
            "qq": "231212321", //QQ号码
            "remark": "", //其它备注 
            "sex": "女", //姓别 [男,女,无] 
            "status": "有效", //状态[有效、无效]
            "type": "推荐人",//类型 [招聘专员、注册专员、线上门店、线下门店、核伙人]
        }]
    }    







企业接口
************
 
C0:分页查询企业列表
----------------
Url:
    [GET] {SERVER_URL}/customers/list?limit={limit}&column={column}&value={value}&attrs={attrs}&nextPageKey={nextPageKey}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "name", "phone" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
        -nextPageKey: 下一页的Key,可为空. 直接使用上次请求传回的nextPageKey的JSON. {"key": "account_sssbbbb","id": "HRiMmMVN3aYg"}
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        list:[{ 
            "email": "a@qq.com", //邮箱
            "id": "Ue312Kf9E1N", //企业id
            “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
            "name": “深圳市理约云信息管理有限公司”, //名称
            "logoUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //企业logo
            "category": “互联网”, //籍贯 
            "phone": "189189189138", //手机号码
            "scope”: “3000-10000人”, //企业规模 [小，中，大，集团]
            "remark": "", //其它备注 
            "type": “台资”, //企业类型 [外资,中外合资,民营,国企] 
            "certified":true,//认证状态
            "certifiedSign":true,//是否已签定委托协议
            "certifiedAuditJob":true,//严格审核岗位
            "certifiedSuper":true,//专人接待
            "status": "有效", //状态[有效、无效] 
       }]
        "nextPageKey": {
            "key": "account_sssbbbb",
            "id": "HRiMmMVN3aYg"
        }
    }




C1:查询企业列表
----------------
Url:
    [GET] {SERVER_URL}/customers?limit={limit}&column={column}&value={value}&attrs={attrs}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "name", "phone" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    [{ 
          "email": "a@qq.com", //邮箱
          "id": "Ue312Kf9E1N", //企业id
          “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
          "name": “深圳市理约云信息管理有限公司”, //名称
          "logoUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //企业logo
          "category": “互联网”, //籍贯 
          "phone": "189189189138", //手机号码
          "scope”: “3000-10000人”, //企业规模 [小，中，大，集团]
          "remark": "", //其它备注 
          "type": “台资”, //企业类型 [外资,中外合资,民营,国企] 
          "certified":true,//认证状态
          "certifiedSign":true,//是否已签定委托协议
          "certifiedAuditJob":true,//严格审核岗位
          "certifiedSuper":true,//专人接待
          "status": "有效", //状态[有效、无效] 
      }]



C2:直接创建一个企业
----------------
Url:
    [POST] {SERVER_URL}/customers
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Body: 
    -"email": "a@qq.com", //邮箱 
    -“address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
    -"name": “深圳市理约云信息管理有限公司”, //名称
    -"logoUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //企业logo
    -"category": “互联网”, //籍贯 
    -"phone": "189189189138", //手机号码
    -"scope”: “3000-10000人”, //企业规模 [小，中，大，集团]
    -"remark": "", //其它备注 
    -"type": “台资”, //企业类型 [外资,中外合资,民营,国企] 
    -"certified":true,//认证状态
    -"certifiedSign":true,//是否已签定委托协议
    -"certifiedAuditJob":true,//严格审核岗位
    -"certifiedSuper":true,//专人接待
    -"status": "有效", //状态[有效、无效] 
Return
    {
        "email": "a@qq.com", //邮箱
          "id": "Ue312Kf9E1N", //企业id
          “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
          "name": “深圳市理约云信息管理有限公司”, //名称
          "logoUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //企业logo
          "category": “互联网”, //籍贯 
          "phone": "189189189138", //手机号码
          "scope”: “3000-10000人”, //企业规模 [小，中，大，集团]
          "remark": "", //其它备注 
          "type": “台资”, //企业类型 [外资,中外合资,民营,国企] 
          "certified":true,//认证状态
          "certifiedSign":true,//是否已签定委托协议
          "certifiedAuditJob":true,//严格审核岗位
          "certifiedSuper":true,//专人接待
          "status": "有效", //状态[有效、无效] 
    }


C3:根据Id获取一个企业
----------------
Url:
    [GET] {SERVER_URL}/customers/{id}
        - id: 企业Id
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return
    {
       "email": "a@qq.com", //邮箱
          "id": "Ue312Kf9E1N", //企业id
          “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
          "name": “深圳市理约云信息管理有限公司”, //名称
          "logoUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //企业logo
          "category": “互联网”, //籍贯 
          "phone": "189189189138", //手机号码
          "scope”: “3000-10000人”, //企业规模 [小，中，大，集团]
          "remark": "", //其它备注 
          "type": “台资”, //企业类型 [外资,中外合资,民营,国企] 
          "certified":true,//认证状态
          "certifiedSign":true,//是否已签定委托协议
          "certifiedAuditJob":true,//严格审核岗位
          "certifiedSuper":true,//专人接待
          "status": "有效", //状态[有效、无效] 
    }


C4:更新企业的基本信息
----------------
 Url:
     [PATCH] {SERVER_URL}/customers/{id}
        - id: 企业Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Body:
    -"email": "a@qq.com", //邮箱 
    -“address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
    -"name": “深圳市理约云信息管理有限公司”, //名称
    -"logoUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //企业logo
    -"category": “互联网”, //籍贯 
    -"phone": "189189189138", //手机号码
    -"scope”: “3000-10000人”, //企业规模 [小，中，大，集团]
    -"remark": "", //其它备注 
    -"type": “台资”, //企业类型 [外资,中外合资,民营,国企] 
    -"certified":true,//认证状态
    -"certifiedSign":true,//是否已签定委托协议
    -"certifiedAuditJob":true,//严格审核岗位
    -"certifiedSuper":true,//专人接待
    -"status": "有效", //状态[有效、无效] 
     以上字段可以选择性填写
 Return
     {
        "email": "a@qq.com", //邮箱
          "id": "Ue312Kf9E1N", //企业id
          “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
          "name": “深圳市理约云信息管理有限公司”, //名称
          "logoUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //企业logo
          "category": “互联网”, //籍贯 
          "phone": "189189189138", //手机号码
          "scope”: “3000-10000人”, //企业规模 [小，中，大，集团]
          "remark": "", //其它备注 
          "type": “台资”, //企业类型 [外资,中外合资,民营,国企] 
          "certified":true,//认证状态
          "certifiedSign":true,//是否已签定委托协议
          "certifiedAuditJob":true,//严格审核岗位
          "certifiedSuper":true,//专人接待
          "status": "有效", //状态[有效、无效] 
     }


C5:删除企业
----------------
 Url:
     [DELETE] {SERVER_URL}/customers/{id}
        - id: 企业Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Return
     {
         success:true
     }



C6:全文查询
----------------
Url:
    [GET] {SERVER_URL}/customers/search?v={value}&pageIndex={pageIndex}&pageSize={pageSize}
        &address={address}&name={name}&category={category}&type={type}&status={status}
        -v: 查询值
        -pageIndex: 第几页,从0开始, 默认为0
        -pageSize: 每页多少项,默认为20
        -address 地址，为空则不查询
        -name 名称，为空则不查询
        -category 公司类别，为空则不查询
        -type 企业类型，为空则不查询
        -status 状态，为空则不查询
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        total:12,
        list: [{
          "email": "a@qq.com", //邮箱
          "id": "Ue312Kf9E1N", //企业id
          “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
          "name": “深圳市理约云信息管理有限公司”, //名称
          "logoUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //企业logo
          "category": “互联网”, //籍贯 
          "phone": "189189189138", //手机号码
          "scope”: “3000-10000人”, //企业规模 [小，中，大，集团]
          "remark": "", //其它备注 
          "type": “台资”, //企业类型 [外资,中外合资,民营,国企] 
          "certified":true,//认证状态
          "certifiedSign":true,//是否已签定委托协议
          "certifiedAuditJob":true,//严格审核岗位
          "certifiedSuper":true,//专人接待
          "status": "有效", //状态[有效、无效] 
        }]
    }    



附件接口
******************


A1:上传图片等附件
-------------    
Url:
    [POST] {SERVER_URL}/attachments
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
    Content-MD5 = {{md5}}
        - md5:为附个的md5值    
Body: 
    -"file": ...., //文件， 其中如果文件的中文名，请用encodeURIComponent对文件名称进行加密。
Return
    {
        "fileName": "****.jpg", //文件史
          "id": "Ue312Kf9E1N", //id
          "path": “http://**“, //内部地址
          "size": 12312, //文件大小，byte
          "md5": "f1231abe3231b131e12f", //文件的md5 
    }
特别注意，这个图片的完整地址组成规则为：
    {SERVER_URL}/attachments/{id}/{md5}
如果要保存到企业的logo或是岗位宣传图等栏位建议保存为 /attachments/{id}/{md5}
在展示时再通过和 {SERVER_URL} 组成完整地址。







岗位接口
************
 

J0:分页查询岗位列表
----------------
Url:
    [GET] {SERVER_URL}/jobs/list?limit={limit}&column={column}&value={value}&attrs={attrs}&nextPageKey={nextPageKey}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "title", "position" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
        -nextPageKey: 下一页的Key,可为空. 直接使用上次请求传回的nextPageKey的JSON. {"key": "account_sssbbbb","id": "HRiMmMVN3aYg"}
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        list:[{ 
            "title": "龙华富士康招工", //标题
            "id": "Ue312Kf9E1N", //岗位id
            “customer”: “Ee312KA213D“, //企业id 
            “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
            "welfare": "送50寸电视,车补,加班补偿,平台奖励", //福利 以英文,符号隔开
            "bgUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位logo
            "minMoney": 3000, //最小薪资 
            "maxMoney": 5500, //最大薪资 
            "moneyRemark": "特定工资:5999元; 车补:203元/月 ",// 薪资其它信息 富文本
            "reword": 923,// 蓝领直聘奖励 
            "minAge": 18, //最小年龄 
            "maxAge": 45, //最大年龄 
            "count":1000, //岗位需求人数
            "maxSignCount":1100, //最大预报名人数
            "closeSignUpCount":1100, //达到这个人数时关闭预报名
            "closeSignInCount":1100, //达到这个人数时关闭签到 
            "sex": "男女不限", //性别要求 [男，女，男女不限]
            "status: “有效”, //状态 [无效，有效]
            "position": "普工", //岗位名称 
            "hurry": "急聘", //岗位紧急情况 ["普通","急聘"]
            "workShow":"['http://***.jpg','http://***.jpg','http://***.jpg']",//劳动保护相关图片,多项
            "customerUpRemark":"",//企业晋升级通道 富文本
            "upRemark":"",//猎狼晋升级通道 富文本
            ”remark":"" //职位描述 富文本
        }]
        "nextPageKey": {
            "key": "account_sssbbbb",
            "id": "HRiMmMVN3aYg"
        }
    }



J1:查询岗位列表
----------------
Url:
    [GET] {SERVER_URL}/jobs?limit={limit}&column={column}&value={value}&attrs={attrs}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "title", "position" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    [{ 
          "title": "龙华富士康招工", //标题
          "id": "Ue312Kf9E1N", //岗位id
          “customer”: “Ee312KA213D“, //企业id 
          “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
          "welfare": "送50寸电视,车补,加班补偿,平台奖励", //福利 以英文,符号隔开
          "bgUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位logo
          "minMoney": 3000, //最小薪资 
          "maxMoney": 5500, //最大薪资 
          "moneyRemark": "特定工资:5999元; 车补:203元/月 ",// 薪资其它信息 富文本
          "reword": 923,// 蓝领直聘奖励 
          "minAge": 18, //最小年龄 
          "maxAge": 45, //最大年龄 
          "count":1000, //岗位需求人数
          "maxSignCount":1100, //最大预报名人数
          "closeSignUpCount":1100, //达到这个人数时关闭预报名
          "closeSignInCount":1100, //达到这个人数时关闭签到 
          "sex": "男女不限", //性别要求 [男，女，男女不限]
          "status: “有效”, //状态 [无效，有效]
          "position": "普工", //岗位名称 
          "hurry": "急聘", //岗位紧急情况 ["普通","急聘"]
          "workShow":"['http://***.jpg','http://***.jpg','http://***.jpg']",//劳动保护相关图片,多项
          "customerUpRemark":"",//企业晋升级通道 富文本
          "upRemark":"",//猎狼晋升级通道 富文本
          ”remark":"" //职位描述 富文本
    }]



J2:直接创建一个岗位
----------------
Url:
    [POST] {SERVER_URL}/jobs
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Body: 
    -"title": "龙华富士康招工", //标题 
    -“customer”: “Ee312KA213D“, //企业id 
    -“address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
    -"welfare": "送50寸电视,车补,加班补偿,平台奖励", //福利 以英文,符号隔开
    -"bgUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位logo
    -"minMoney": 3000, //最小薪资 
    -"maxMoney": 5500, //最大薪资 
    -"minAge": 18, //最小年龄 
    -"maxAge": 45, //最大年龄 
    -"sex": "男女不限", //性别要求 [男，女，男女不限]
    -"status: “有效”, //状态 [无效，有效]
    -"position": "普工", //岗位名称
    -"count":1000, // 岗位需求人数
    -"education":"中专",//学历, [初中,高中,中专,大专,本科,硕士,博士]
    -"maxSignCount":1100, //最大预报名人数
    -"moneyRemark": "特定工资:5999元; 车补:203元/月 ",// 薪资其它信息 富文本
    -"reword": 923,// 蓝领直聘奖励 
    -"hurry": "急聘", //岗位紧急情况 ["普通","急聘"]
    -"workShow":"['http://***.jpg','http://***.jpg','http://***.jpg']",//劳动保护相关图片,多项
    -"customerUpRemark":"",//企业晋升级通道 富文本
    -"upRemark":"",//猎狼晋升级通道 富文本
    -”remark":"" //其它备注
Return
    {
        "title": "龙华富士康招工", //标题
          "id": "Ue312Kf9E1N", //岗位id
          “customer”: “Ee312KA213D“, //企业id 
          “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
          "welfare": "送50寸电视,车补,加班补偿,平台奖励", //福利 以英文,符号隔开
          "bgUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位logo
          "minMoney": 3000, //最小薪资 
          "maxMoney": 5500, //最大薪资 
          "minAge": 18, //最小年龄 
          "maxAge": 45, //最大年龄 
          "education":"中专",//学历, [初中,高中,中专,大专,本科,硕士,博士]
          "count":1000, //岗位需求人数
          "maxSignCount":1100, //最大预报名人数
          "sex": "男女不限", //性别要求 [男，女，男女不限]
          "status: “有效”, //状态 [无效，有效]
          "position": "普工", //岗位名称
          "moneyRemark": "特定工资:5999元; 车补:203元/月 ",// 薪资其它信息 富文本
          "reword": 923,// 蓝领直聘奖励 
          "hurry": "急聘", //岗位紧急情况 ["普通","急聘"]
          "workShow":"['http://***.jpg','http://***.jpg','http://***.jpg']",//劳动保护相关图片,多项
          "customerUpRemark":"",//企业晋升级通道 富文本
          "upRemark":"",//猎狼晋升级通道 富文本
          ”remark":"" //其它备注
    }


J3:根据Id获取一个岗位
----------------
Url:
    [GET] {SERVER_URL}/jobs/{id}
        - id: 岗位Id
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return
    {
       "title": "龙华富士康招工", //标题
          "id": "Ue312Kf9E1N", //岗位id
          “customer”: “Ee312KA213D“, //企业id 
          “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
          "welfare": "送50寸电视,车补,加班补偿,平台奖励", //福利 以英文,符号隔开
          "bgUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位logo
          "minMoney": 3000, //最小薪资 
          "maxMoney": 5500, //最大薪资 
          "minAge": 18, //最小年龄 
          "maxAge": 45, //最大年龄 
          "education":"中专",//学历, [初中,高中,中专,大专,本科,硕士,博士]
          "count":1000, //岗位需求人数
          "maxSignCount":1100, //最大预报名人数
          "sex": "男女不限", //性别要求 [男，女，男女不限]
          "status: “有效”, //状态 [无效，有效]
          "position": "普工", //岗位名称
          "moneyRemark": "特定工资:5999元; 车补:203元/月 ",// 薪资其它信息 富文本
          "reword": 923,// 蓝领直聘奖励 
          "hurry": "急聘", //岗位紧急情况 ["普通","急聘"]
          "workShow":"['http://***.jpg','http://***.jpg','http://***.jpg']",//劳动保护相关图片,多项
          "customerUpRemark":"",//企业晋升级通道 富文本
          "upRemark":"",//猎狼晋升级通道 富文本
          ”remark":"" //其它备注
    }


J4:更新岗位的基本信息
----------------
 Url:
     [PATCH] {SERVER_URL}/jobs/{id}
        - id: 岗位Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Body:
    -"title": "龙华富士康招工", //标题 
    -“customer”: “Ee312KA213D“, //企业id 
    -“address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
    -"welfare": "送50寸电视,车补,加班补偿,平台奖励", //福利 以英文,符号隔开
    -"bgUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位logo
    -"minMoney": 3000, //最小薪资 
    -"maxMoney": 5500, //最大薪资 
    -"minAge": 18, //最小年龄 
    -"maxAge": 45, //最大年龄 
    -"count":1000, //岗位需求人数
    -"education":"中专",//学历, [初中,高中,中专,大专,本科,硕士,博士]
    -"maxSignCount":1100, //最大预报名人数
    -"sex": "男女不限", //性别要求 [男，女，男女不限]
    -"status: “有效”, //状态 [无效，有效]
    -"position": "普工", //岗位名称
    -”remark":"" //其它备注
    -"moneyRemark": "特定工资:5999元; 车补:203元/月 ",// 薪资其它信息 富文本
    -"reword": 923,// 蓝领直聘奖励 
    -"hurry": "急聘", //岗位紧急情况 ["普通","急聘"]
    -"workShow":"['http://***.jpg','http://***.jpg','http://***.jpg']",//劳动保护相关图片,多项
    -"customerUpRemark":"",//企业晋升级通道 富文本
    -"upRemark":"",//猎狼晋升级通道 富文本
     以上字段可以选择性填写
 Return
     {
        "title": "龙华富士康招工", //标题
          "id": "Ue312Kf9E1N", //岗位id
          “customer”: “Ee312KA213D“, //企业id 
          “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
          "welfare": "送50寸电视,车补,加班补偿,平台奖励", //福利 以英文,符号隔开
          "bgUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位logo
          "minMoney": 3000, //最小薪资 
          "maxMoney": 5500, //最大薪资 
          "minAge": 18, //最小年龄 
          "maxAge": 45, //最大年龄 
          "count":1000, //岗位需求人数
          "education":"中专",//学历, [初中,高中,中专,大专,本科,硕士,博士]
          "maxSignCount":1100, //最大预报名人数
          "sex": "男女不限", //性别要求 [男，女，男女不限]
          "status: “有效”, //状态 [无效，有效]
          "position": "普工", //岗位名称
          "moneyRemark": "特定工资:5999元; 车补:203元/月 ",// 薪资其它信息 富文本
          "reword": 923,// 蓝领直聘奖励 
          "hurry": "急聘", //岗位紧急情况 ["普通","急聘"]
          "workShow":"['http://***.jpg','http://***.jpg','http://***.jpg']",//劳动保护相关图片,多项
          "customerUpRemark":"",//企业晋升级通道 富文本
          "upRemark":"",//猎狼晋升级通道 富文本
          ”remark":"" //其它备注
     }


J5:删除岗位
----------------
 Url:
     [DELETE] {SERVER_URL}/jobs/{id}
        - id: 岗位Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Return
     {
         success:true
     }



J6:全文查询
----------------
Url:
    [GET] {SERVER_URL}/jobs/search?v={value}&pageIndex={pageIndex}&pageSize={pageSize}
        &title={title}&customer={customer}&address={address}&welfare={welfare}&sex={sex}
        &status={status}&position={position}
        -v: 查询值
        -pageIndex: 第几页,从0开始, 默认为0
        -pageSize: 每页多少项,默认为20
        -title: 标题，为空则不查询
        -customer: 企业id，为空则不查询
        -address: 地址，为空则不查询
        -welfare: 福利，为空则不查询
        -sex: 性别，为空则不查询
        -status: 状态，为空则不查询
        -position: 岗位，为空则不查询 
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        total:12,
        list: [{
          "title": "龙华富士康招工", //标题
          "id": "Ue312Kf9E1N", //岗位id
          “customer”: “Ee312KA213D“, //企业id
          “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
          "welfare": "送50寸电视,车补,加班补偿,平台奖励", //福利 以英文,符号隔开
          "bgUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位logo
          "minMoney": 3000, //最小薪资 
          "maxMoney": 5500, //最大薪资 
          "minAge": 18, //最小年龄 
          "maxAge": 45, //最大年龄 
          "count":1000, //岗位需求人数
          "maxSignCount":1100, //最大预报名人数
          "sex": "男女不限", //性别要求 [男，女，男女不限]
          "status: “有效”, //状态 [无效，有效]
          "position": "普工", //岗位名称
          ”remark":"" //其它备注
        }]
    }    


J7:找到当前有效的岗位展示
----------------
Url:
    [GET] {SERVER_URL}/jobs/activeList?v={value}&pageIndex={pageIndex}&pageSize={pageSize}
        &address={address}
        -v: 查询值
        -pageIndex: 第几页,从0开始, 默认为0
        -pageSize: 每页多少项,默认为20 
        -address: 地址，为空则不查询，可填写深圳、广东、昆明等
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        total:12,
        list: [{
          "title": "龙华富士康招工", //标题
          "id": "Ue312Kf9E1N", //岗位id
          “customer”: “Ee312KA213D“, //企业id
          "customerObject":{
            "id":"Ee312KA213D", 
            "name": “深圳市理约云信息管理有限公司”, //名称
            "logoUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //企业logo
            "category": “互联网”, //行业  
            "scope”: “小”, //企业规模 [小，中，大，集团] 
            "type": “台资”, //企业类型 [外资,中外合资,民营,国企]  
          }
          “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址 
          "welfare": "送50寸电视,车补,加班补偿,平台奖励", //福利 以英文,符号隔开
          "bgUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位logo
          "minMoney": 3000, //最小薪资 
          "maxMoney": 5500, //最大薪资 
          "minAge": 18, //最小年龄 
          "maxAge": 45, //最大年龄 
          "education":"中专",//学历, [初中,高中,中专,大专,本科,硕士,博士]
          "count":1000, //岗位需求人数
          "maxSignCount":1100, //最大预报名人数
          "sex": "男女不限", //性别要求 [男，女，男女不限]
          "status: “有效”, //状态 [无效，有效]
          "position": "普工", //岗位名称
          ”remark":"" //其它备注
        }]
    }    






黑名单接口
************
 

B0:分页查询黑名单列表
----------------
Url:
    [GET] {SERVER_URL}/blacks/list?limit={limit}&column={column}&value={value}&attrs={attrs}&nextPageKey={nextPageKey}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "name", "phone" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
        -nextPageKey: 下一页的Key,可为空. 直接使用上次请求传回的nextPageKey的JSON. {"key": "account_sssbbbb","id": "HRiMmMVN3aYg"}
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        list:[{  
          "id": "Ue312Kf9E1N", //黑名单id
          "phone": "189237461273", //手机号码 
          "name": "张楚岚", //名称 
          "identityCard": "441821312323143", //身份证号码 
          ”remark":"" //其它备注
      }]
        "nextPageKey": {
            "key": "account_sssbbbb",
            "id": "HRiMmMVN3aYg"
        }
    }



B1:查询黑名单列表
----------------
Url:
    [GET] {SERVER_URL}/blacks?limit={limit}&column={column}&value={value}&attrs={attrs}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "name", "phone" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    [{  
          "id": "Ue312Kf9E1N", //黑名单id
          "phone": "189237461273", //手机号码 
          "name": "张楚岚", //名称 
          "identityCard": "441821312323143", //身份证号码 
          ”remark":"" //其它备注
      }]



B2:直接创建一个黑名单
----------------
Url:
    [POST] {SERVER_URL}/blacks
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Body: 
    -"phone": "189237461273", //手机号码 
    -"name": "张楚岚", //名称 
    -"identityCard": "441821312323143", //身份证号码 
    -”remark":"" //其它备注
Return
    {
        "id": "Ue312Kf9E1N", //黑名单id
          "phone": "189237461273", //手机号码 
          "name": "张楚岚", //名称 
          "identityCard": "441821312323143", //身份证号码 
          ”remark":"" //其它备注
    }


B3:根据Id获取一个黑名单
----------------
Url:
    [GET] {SERVER_URL}/blacks/{id}
        - id: 黑名单Id
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return
    {
       "id": "Ue312Kf9E1N", //黑名单id
          "phone": "189237461273", //手机号码 
          "name": "张楚岚", //名称 
          "identityCard": "441821312323143", //身份证号码 
          ”remark":"" //其它备注
    }


B4:更新黑名单的基本信息
----------------
 Url:
     [PATCH] {SERVER_URL}/blacks/{id}
        - id: 黑名单Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Body:
    -"phone": "189237461273", //手机号码 
    -"name": "张楚岚", //名称 
    -"identityCard": "441821312323143", //身份证号码 
    -”remark":"" //其它备注
     以上字段可以选择性填写
 Return
     {
        "id": "Ue312Kf9E1N", //黑名单id
          "phone": "189237461273", //手机号码 
          "name": "张楚岚", //名称 
          "identityCard": "441821312323143", //身份证号码 
          ”remark":"" //其它备注
     }


B5:删除黑名单
----------------
 Url:
     [DELETE] {SERVER_URL}/blacks/{id}
        - id: 黑名单Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Return
     {
         success:true
     }

 




岗位人才接口
************ 

JT0:分页查询岗位人才列表
----------------
Url:
    [GET] {SERVER_URL}/jobs/:jobId/jobTalents/list?limit={limit}&column={column}&value={value}&attrs={attrs}&nextPageKey={nextPageKey}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "proxyerId", "talentId","phone" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
        -nextPageKey: 下一页的Key,可为空. 直接使用上次请求传回的nextPageKey的JSON. {"key": "account_sssbbbb","id": "HRiMmMVN3aYg"}
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        list:[{ 
            "jobId": "Ue312Kf2E1N", //岗位id
            "id": "Ue312Kf2E1N_Ee312aA213D", //岗位人才id
            "talentId": “Ee312aA213D“, //人才id 
            "customer": “Ee312KA213D“, //企业id 
            "proxyerId": “Ee31423213D“, //推荐人id 
            "name": "李顺办", //姓名
            "sex": "男", //性别 [男,女]
            "signUpDate": '2017-11-23T09:49:11.280Z', //预报名时间
            "signInDate": '2017-11-23T09:49:11.280Z', //签到时间
            "status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
            "preWokingDate":'2017-11-23',//拟到岗时间
            "Remark":'',//备注 富文本
            "avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
            "phone": "1892381923", //手机号码
       }]
        "nextPageKey": {
            "key": "account_sssbbbb",
            "id": "HRiMmMVN3aYg"
        }
    }



JT1:查询岗位人才列表
----------------
Url:
    [GET] {SERVER_URL}/jobs/:jobId/jobTalents?limit={limit}&column={column}&value={value}&attrs={attrs}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "proxyerId", "talentId","phone" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    [{ 
          "jobId": "Ue312Kf2E1N", //岗位id
          "id": "Ue312Kf2E1N_Ee312aA213D", //岗位人才id
          "talentId": “Ee312aA213D“, //人才id 
          "customer": “Ee312KA213D“, //企业id 
          "proxyerId": “Ee31423213D“, //推荐人id 
          "name": "李顺办", //姓名
          "sex": "男", //性别 [男,女]
          "signUpDate": '2017-11-23T09:49:11.280Z', //预报名时间
          "signInDate": '2017-11-23T09:49:11.280Z', //签到时间
          "status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
          "preWokingDate":'2017-11-23',//拟到岗时间
          "Remark":'',//备注 富文本
          "avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
          "phone": "1892381923", //手机号码
      }]



JT2:直接创建一个岗位人才
----------------
Url:
    [POST] {SERVER_URL}/jobs/:jobId/jobTalents
        -jobId: 岗位Id
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Body: 
    -"jobId": "Ue312Kf2E1N", //岗位id 
    -"talentId": “Ee312aA213D“, //人才id 
    -"customer": “Ee312KA213D“, //企业id 
    -"proxyerId": “Ee31423213D“, //推荐人id 
    -"name": "李顺办", //姓名
    -"sex": "男", //性别 [男,女]
    -"status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
    -"preWokingDate":'2017-11-23',//拟到岗时间
    -"Remark":'',//备注 富文本
    -"avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
    -"phone": "1892381923", //手机号码
Return
    {
        "jobId": "Ue312Kf2E1N", //岗位id
        "id": "Ue312Kf2E1N_Ee312aA213D", //岗位人才id
        "talentId": “Ee312aA213D“, //人才id 
        "customer": “Ee312KA213D“, //企业id 
        "proxyerId": “Ee31423213D“, //推荐人id 
        "name": "李顺办", //姓名
        "sex": "男", //性别 [男,女]
        "signUpDate": '2017-11-23T09:49:11.280Z', //预报名时间
        "signInDate": '2017-11-23T09:49:11.280Z', //签到时间
        "preWokingDate":'2017-11-23',//拟到岗时间
        "Remark":'',//备注 富文本
        "status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
        "avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
        "phone": "1892381923", //手机号码
    }


JT3:根据Id获取一个岗位人才
----------------
Url:
    [GET] {SERVER_URL}/jobTalents/{id}
        - id: 岗位人才Id
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return
    {
       "jobId": "Ue312Kf2E1N", //岗位id
        "id": "Ue312Kf2E1N_Ee312aA213D", //岗位人才id
        "talentId": “Ee312aA213D“, //人才id 
        "customer": “Ee312KA213D“, //企业id 
        "proxyerId": “Ee31423213D“, //推荐人id 
        "name": "李顺办", //姓名
        "sex": "男", //性别 [男,女]
        "preWokingDate":'2017-11-23',//拟到岗时间
        "Remark":'',//备注 富文本
        "signUpDate": '2017-11-23T09:49:11.280Z', //预报名时间
        "signInDate": '2017-11-23T09:49:11.280Z', //签到时间
        "status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
        "avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
        "phone": "1892381923", //手机号码
    }


JT4:根据人才id获取一个岗位人才
----------------
Url:
    [GET] {SERVER_URL}/jobs/:jobId/jobTalents/:talentId
        - jobId: 岗位人才Id
        - talentId: 人才Id
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return
    {
       "jobId": "Ue312Kf2E1N", //岗位id
        "id": "Ue312Kf2E1N_Ee312aA213D", //岗位人才id
        "talentId": “Ee312aA213D“, //人才id 
        "customer": “Ee312KA213D“, //企业id 
        "proxyerId": “Ee31423213D“, //推荐人id 
        "name": "李顺办", //姓名
        "sex": "男", //性别 [男,女]
        "preWokingDate":'2017-11-23',//拟到岗时间
        "Remark":'',//备注 富文本
        "signUpDate": '2017-11-23T09:49:11.280Z', //预报名时间
        "signInDate": '2017-11-23T09:49:11.280Z', //签到时间
        "status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
        "avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
        "phone": "1892381923", //手机号码
    }


JT5:更新岗位人才的基本信息
----------------
 Url:
     [PATCH] {SERVER_URL}/jobTalents/{id}
        - id: 岗位人才Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Body: 
    -"customer": “Ee312KA213D“, //企业id 
    -"proxyerId": “Ee31423213D“, //推荐人id 
    -"name": "李顺办", //姓名
    -"sex": "男", //性别 [男,女]
    -"preWokingDate":'2017-11-23',//拟到岗时间
    -"Remark":'',//备注 富文本
    -"status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
    -"avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
    -"phone": "1892381923", //手机号码
     以上字段可以选择性填写
 Return
     {
        "jobId": "Ue312Kf2E1N", //岗位id
        "id": "Ue312Kf2E1N_Ee312aA213D", //岗位人才id
        "talentId": “Ee312aA213D“, //人才id 
        "customer": “Ee312KA213D“, //企业id 
        "proxyerId": “Ee31423213D“, //推荐人id 
        "name": "李顺办", //姓名
        "sex": "男", //性别 [男,女]
        "preWokingDate":'2017-11-23',//拟到岗时间
        "Remark":'',//备注 富文本
        "signUpDate": '2017-11-23T09:49:11.280Z', //预报名时间
        "signInDate": '2017-11-23T09:49:11.280Z', //签到时间
        "status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
        "avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
        "phone": "1892381923", //手机号码
     }


JT6:删除岗位人才
----------------
 Url:
     [DELETE] {SERVER_URL}/jobTalents/{id}
        - id: 岗位人才Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Return
     {
         success:true
     }



JT7:全文查询
----------------
Url:
    [GET] {SERVER_URL}/jobs/:jobId/jobTalents/search?v={value}&pageIndex={pageIndex}&pageSize={pageSize}
        &jobId={jobId}&customer={customer}&talentId={talentId}&name={name}&sex={sex}
        &status={status}&phone={phone}
        -v: 查询值
        -pageIndex: 第几页,从0开始, 默认为0
        -pageSize: 每页多少项,默认为20
        -jobId: 岗位Id，为空则不查询
        -customer: 企业id，为空则不查询
        -talentId: 人才Id，为空则不查询
        -name: 姓名，为空则不查询
        -sex: 性别，为空则不查询
        -status: 状态，为空则不查询
        -phone: 手机号码，为空则不查询 
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        total:12,
        list: [{
            "jobId": "Ue312Kf2E1N", //岗位id
            "id": "Ue312Kf2E1N_Ee312aA213D", //岗位人才id
            "talentId": “Ee312aA213D“, //人才id 
            "customer": “Ee312KA213D“, //企业id 
            "proxyerId": “Ee31423213D“, //推荐人id 
            "name": "李顺办", //姓名
            "sex": "男", //性别 [男,女]
            "status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
            "avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
            "phone": "1892381923", //手机号码
        }]
    }    

JT8:查找岗位报名成员状态， 如预报名多少人，签到多少人，面试通过多少人？
----------------
 Url:
     [GET] {SERVER_URL}/jobs/:jobId/jobTalents/status?proxyerId={proxyerId}
        - jobId: 岗位人才Id
        - proxyerId: 推荐人Id, 不填写则为整个岗位的人才状态统计
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Return
     {
        max: 1000, //岗位需求人数
        stat: {
            "预报名":203, //预报名203个
            "已签到":143 //已签到143个
            "无":12 //没有状态的12个
        }
    }


JT9:预报名
----------------
Url:
    [POST] {SERVER_URL}/jobs/:jobId/jobTalents/signup
        -jobId: 岗位Id
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Body:   
    -"customer": “Ee312KA213D“, //企业id 
    -"proxyerId": “Ee31423213D“, //推荐人id 
    -"name": "李顺办", //姓名
    -"sex": "男", //性别 [男,女] 
    -"avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
    -"phone": "1892381923", //手机号码
Return
    {
        "jobId": "Ue312Kf2E1N", //岗位id
        "id": "Ue312Kf2E1N_Ee312aA213D", //岗位人才id
        "talentId": “Ee312aA213D“, //人才id 
        "customer": “Ee312KA213D“, //企业id 
        "proxyerId": “Ee31423213D“, //推荐人id 
        "name": "李顺办", //姓名
        "signUpDate": '2017-11-23T09:49:11.280Z', //预报名时间
        "signInDate": '2017-11-23T09:49:11.280Z', //签到时间
        "sex": "男", //性别 [男,女]
        "status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
        "avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
        "phone": "1892381923", //手机号码
    }


JT10:签到
----------------
Url:
    [POST] {SERVER_URL}/jobs/:jobId/jobTalents/signin
        -jobId: 岗位Id
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Body:    
Return
    {
        "jobId": "Ue312Kf2E1N", //岗位id
        "id": "Ue312Kf2E1N_Ee312aA213D", //岗位人才id
        "talentId": “Ee312aA213D“, //人才id 
        "customer": “Ee312KA213D“, //企业id 
        "proxyerId": “Ee31423213D“, //推荐人id 
        "signUpDate": '2017-11-23T09:49:11.280Z', //预报名时间
        "signInDate": '2017-11-23T09:49:11.280Z', //签到时间
        "name": "李顺办", //姓名
        "sex": "男", //性别 [男,女]
        "status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
        "avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
        "phone": "1892381923", //手机号码
    }    



JT11:取得我的报名历史？
----------------
 Url:
     [GET] {SERVER_URL}/jobTalents/myhistory 
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Return
     [{
        "jobId": "Ue312Kf2E1N", //岗位id
        "jobObject":{
            "id":"Ue312Kf2E1N", //岗位id
            "title": "龙华富士康招工", //标题 
            “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址  
            "education":"中专",//学历, [初中,高中,中专,大专,本科,硕士,博士] 
            "position": "普工", //岗位名称 
            "hurry": "急聘", //岗位紧急情况 ["普通","急聘"] 
        },
        "id": "Ue312Kf2E1N_Ee312aA213D", //岗位人才id
        "talentId": “Ee312aA213D“, //人才id 
        "customer": “Ee312KA213D“, //企业id 
        "customerObject": {
            "id":"Ue312Kf2E1N", //企业id
            "name":"富士康", //企业名称
            "logoUrl":"http://***.jpg", //企业logo
        }
        "proxyerId": “Ee31423213D“, //推荐人id 
        "name": "李顺办", //姓名
        "sex": "男", //性别 [男,女]
        "status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
        "avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
        "phone": "1892381923", //手机号码
     }]


JT12:找到我推荐的人才列表, 设定customer和proxyerId即可查出我推荐到某家公司的人才列表
----------------
Url:
    [GET] {SERVER_URL}/jobTalents/search?v={value}&pageIndex={pageIndex}&pageSize={pageSize}
        &customer={customer}&proxyerId={proxyerId}&name={name}&sex={sex}
        &status={status}&phone={phone}
        -v: 查询值
        -pageIndex: 第几页,从0开始, 默认为0
        -pageSize: 每页多少项,默认为20 
        -customer: 企业id，为空则不查询 
        -name: 姓名，为空则不查询
        -sex: 性别，为空则不查询
        -status: 状态，为空则不查询
        -phone: 手机号码，为空则不查询 
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        total:12,
        list: [{
            "jobId": "Ue312Kf2E1N", //岗位id
            "id": "Ue312Kf2E1N_Ee312aA213D", //岗位人才id
            "talentId": “Ee312aA213D“, //人才id 
            "customer": “Ee312KA213D“, //企业id 
            "proxyerId": “Ee31423213D“, //推荐人id 
            "name": "李顺办", //姓名
            "sex": "男", //性别 [男,女]
            "status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
            "avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
            "phone": "1892381923", //手机号码
        }]
    }    




JT13:取得某个人才的报名历史记录
----------------
 Url:
     [GET] {SERVER_URL}/jobTalents/history/:talentId
        -talentId: 人才id 
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Return
     [{
        "jobId": "Ue312Kf2E1N", //岗位id
        "jobObject":{
            "id":"Ue312Kf2E1N", //岗位id
            "title": "龙华富士康招工", //标题 
            “address”: “中国 广东 深圳 龙华新区 深圳北西广场深圳通大厦209B“, //地址  
            "education":"中专",//学历, [初中,高中,中专,大专,本科,硕士,博士] 
            "position": "普工", //岗位名称 
            "hurry": "急聘", //岗位紧急情况 ["普通","急聘"] 
        },
        "id": "Ue312Kf2E1N_Ee312aA213D", //岗位人才id
        "talentId": “Ee312aA213D“, //人才id 
        "customer": “Ee312KA213D“, //企业id 
        "customerObject": {
            "id":"Ue312Kf2E1N", //企业id
            "name":"富士康", //企业名称
            "logoUrl":"http://***.jpg", //企业logo
        }
        "proxyerId": “Ee31423213D“, //推荐人id 
        "name": "李顺办", //姓名
        "sex": "男", //性别 [男,女]
        "status": "预报名", //状态 [预报名、已签到、面试通过、试用中、已转正]
        "avatarUrl": “http://api.lielanghr.com/v1/attachments/12313/weflsdfkewjf“, //岗位人才头像，由人才或用户导入
        "phone": "1892381923", //手机号码
     }]




 

推荐人收益接口
************ 



PI0:查询推荐人收益列表
----------------
Url:
    [GET] {SERVER_URL}/proxyerIncomes/list?limit={limit}&column={column}&value={value}&attrs={attrs}&nextPageKey={nextPageKey}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "title","sendDate", "phone" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone-nextPageKey: 下一页的Key,可为空. 直接使用上次请求传回的nextPageKey的JSON. {"key": "account_sssbbbb","id": "HRiMmMVN3aYg"}
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    {
        list:[{  
            "id": "Ue312Kf9E1N", //推荐人收益id
            "proxyerId": "Ue312Kf9E1N", //推荐人id
            "title": "龙华富士康***招募返利", //标题
            "name": "牛可呆", //推荐人姓名
            "money": 32.23, //钱,单位元 
            "sendDate": '2017-11-23T09:49:11.280Z', //发放日期
            "phone": "189237461273", //手机号码 
            "bankAccount": "123131321333123", //银行帐号 
            "status": "已付款", //名称  [已付款,未付款]
       }]
        "nextPageKey": {
            "key": "account_sssbbbb",
            "id": "HRiMmMVN3aYg"
        }
    }



PI1:查询推荐人收益列表
----------------
Url:
    [GET] {SERVER_URL}/proxyerIncomes?limit={limit}&column={column}&value={value}&attrs={attrs}
        -limit: 拿回最大条数, 默认为20
        -column: 查询的栏位, 应该是在[ "title","sendDate", "phone" ]的一个. 必填
        -value: 查询的值. 如果查询下一页,则为最后一项的值.
        -attrs: 返回栏位, 不填写则全部返回, 用英文','隔开. 如: name,email,phone
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return:
    [{  
        "id": "Ue312Kf9E1N", //推荐人收益id
        "proxyerId": "Ue312Kf9E1N", //推荐人id
        "title": "龙华富士康***招募返利", //标题
        "name": "牛可呆", //推荐人姓名
        "money": 32.23, //钱,单位元 
        "sendDate": '2017-11-23T09:49:11.280Z', //发放日期
        "phone": "189237461273", //手机号码 
        "bankAccount": "123131321333123", //银行帐号 
        "status": "已付款", //名称  [已付款,未付款]
      }]



PI2:直接创建一个推荐人收益
----------------
Url:
    [POST] {SERVER_URL}/proxyerIncomes
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Body: 
    -"phone": "189237461273", //手机号码 
    -"name": "张楚岚", //名称 
    -"identityCard": "441821312323143", //身份证号码 
    -”remark":"" //其它备注
Return
    {
       "id": "Ue312Kf9E1N", //推荐人收益id
       "proxyerId": "Ue312Kf9E1N", //推荐人id
       "title": "龙华富士康***招募返利", //标题
       "name": "牛可呆", //推荐人姓名
       "money": 32.23, //钱,单位元 
       "sendDate": '2017-11-23T09:49:11.280Z', //发放日期
       "phone": "189237461273", //手机号码 
       "bankAccount": "123131321333123", //银行帐号 
       "status": "已付款", //名称  [已付款,未付款]
    }


PI3:根据Id获取一个推荐人收益
----------------
Url:
    [GET] {SERVER_URL}/proxyerIncomes/{id}
        - id: 推荐人收益Id
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return
    {
       "id": "Ue312Kf9E1N", //推荐人收益id
       "proxyerId": "Ue312Kf9E1N", //推荐人id
       "title": "龙华富士康***招募返利", //标题
       "name": "牛可呆", //推荐人姓名
       "money": 32.23, //钱,单位元 
       "sendDate": '2017-11-23T09:49:11.280Z', //发放日期
       "phone": "189237461273", //手机号码 
       "bankAccount": "123131321333123", //银行帐号 
       "status": "已付款", //名称  [已付款,未付款]
    }


PI4:更新推荐人收益的基本信息
----------------
 Url:
     [PATCH] {SERVER_URL}/proxyerIncomes/{id}
        - id: 推荐人收益Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Body: 
    -"proxyerId": "Ue312Kf9E1N", //推荐人id
    -"title": "龙华富士康***招募返利", //标题
    -"name": "牛可呆", //推荐人姓名
    -"money": 32.23, //钱,单位元 
    -"sendDate": '2017-11-23T09:49:11.280Z', //发放日期
    -"phone": "189237461273", //手机号码 
    -"bankAccount": "123131321333123", //银行帐号 
    -"status": "已付款", //名称  [已付款,未付款]
     以上字段可以选择性填写
 Return
     {
       "id": "Ue312Kf9E1N", //推荐人收益id
       "proxyerId": "Ue312Kf9E1N", //推荐人id
       "title": "龙华富士康***招募返利", //标题
       "name": "牛可呆", //推荐人姓名
       "money": 32.23, //钱,单位元 
       "sendDate": '2017-11-23T09:49:11.280Z', //发放日期
       "phone": "189237461273", //手机号码 
       "bankAccount": "123131321333123", //银行帐号 
       "status": "已付款", //名称  [已付款,未付款]
     }


PI5:删除推荐人收益
----------------
 Url:
     [DELETE] {SERVER_URL}/proxyerIncomes/{id}
        - id: 推荐人收益Id
 Header:
     Authorization = Bearer {{token}}
         - token:为登录时拿回的token
 Return
     {
         success:true
     }    




PI3:获取我的所有推荐人收益
----------------
Url:
    [GET] {SERVER_URL}/proxyerIncomes/myIncomes 
Header:
    Authorization = Bearer {{token}}
        - token:为登录时拿回的token
Return
    {
        total:2310.20, //总收益, 元
        list:[{
            "id": "Ue312Kf9E1N", //推荐人收益id 
            "title": "龙华富士康***招募返利", //标题 
            "money": 32.23, //钱,单位元 
            "sendDate": '2017-11-23T09:49:11.280Z', //发放日期 
            "status": "已付款", //名称  [已付款,未付款]
        }]
    }
     