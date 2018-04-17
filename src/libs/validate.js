let validate = {

}
validate.isEmpty = function (value = '', name = '') {
    if (!value) {
        throw Error(name + '不能为空')
    }
}
validate.validatePhone = function (phone) {
    if (!(/^1[34578]\d{9}$/.test(phone))) {
        throw Error('手机号码格式不正确')
    }

}
validate.validateNum = function (num = '') {
    if (!(/^\d+(?=\.{0,1}\d+$|$)/.test(num))) {
        throw Error('数字格式不正确')
    }
}
validate.validateEmail = function (email = '') {
    if (!(/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(email))) {
        throw Error('邮箱格式不正确')
    }
}
validate.validateIdCard = function (idCard = '') {
    if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCard))) {
        throw Error('身份证格式不正确')
    }

}
validate.validateMaxSalary = function (maxSalary = '') {
    if (!(/^\d+(?=\.{0,1}\d+$|$)/.test(maxSalary))) {
        throw Error('最大薪酬项格式不正确，请检查后重新输入')
    }
}
validate.validateMixSalary = function (minSalary = '') {
    if (!(/^\d+(?=\.{0,1}\d+$|$)/.test(minSalary))) {
        throw Error('最小薪酬项格式不正确，请检查后重新输入')
    }
}
validate.validateMixAge = function (minAge = '') {
    if (!(/^\d+(?=\.{0,1}\d+$|$)/.test(minAge))) {
        throw Error('最小年龄项格式不正确，请检查后重新输入')
    }
}
validate.validateMaxAge = function (maxAge = '') {
    if (!(/^\d+(?=\.{0,1}\d+$|$)/.test(maxAge))) {
        throw Error('最大年龄项格式不正确，请检查后重新输入')
    }
}
validate.validateNeedCount = function (count = '') {
    if (!(/^\d+(?=\.{0,1}\d+$|$)/.test(count))) {
        throw Error('岗位需求人数格式不正确，请检查后重新输入')
    }
}
validate.validateMaxSignUpCount = function (count = '') {
    if (!(/^\d+(?=\.{0,1}\d+$|$)/.test(count))) {
        throw Error('最大报名人数格式不正确，请检查后重新输入')
    }
}
validate.validateStature = function (stature = '') {
    if (!(/^\d+(?=\.{0,1}\d+$|$)/.test(stature))) {
        throw Error('身高格式不正确，请检查后重新输入')
    }
}
validate.validateIntroducer = function (introducer = '') {
    if (!(/^1[34578]\d{9}$/.test(introducer))) {
        throw Error('介绍人格式不正确，要填写介绍人的手机号')
    }
}
export default validate