<style lang="less">
    @import './signup.less';
</style>

<template>
    <div class="register-con">
        <Card :bordered="false" class="registerBox">
            <p slot="title">
                <Icon type="person"></Icon>
                新用户注册
            </p>
            <div class="form-con">
                <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80" label-position="left">
                   <!--  <FormItem label="姓名" prop="userName">
                        <Input type="text" v-model="formCustom.userName" placeholder="请输入姓名"></Input>
                    </FormItem> -->
                    <FormItem label="账号" prop="account">
                        <Input type="text" v-model="formCustom.account" placeholder="请输入账号"></Input>
                    </FormItem>
                    <FormItem label="设置密码" prop="passwd">
                        <Input type="password" v-model="formCustom.passwd" placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem label="确认密码" prop="passwdCheck">
                        <Input type="password" v-model="formCustom.passwdCheck" placeholder="请再次输入密码"></Input>
                    </FormItem>
                   <!--  <FormItem label="邮箱" prop="email">
                        <Input type="text" v-model="formCustom.email" placeholder="请输入你的邮箱"></Input>
                    </FormItem>
                    <FormItem label="手机号" prop="phone">
                        <Input type="text" v-model="formCustom.phone" placeholder="请输入手机号"></Input>
                    </FormItem> -->
                </Form>
                <Button @click="registerSubmit('formCustom')" type="primary" long>注册</Button>
            </div>
        </Card>
    </div>
</template>

<script>
import service from '../../../service/index'
export default {
    data () {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.formCustom.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formCustom.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.formCustom.passwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            formCustom: {
                userName: '',
                account: '',
                passwd: '',
                passwdCheck: '',
                email: '',
                phone: ''
            },
            ruleCustom: {
                userName: [
                    {required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                account: [
                    {required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                passwd: [
                    {required: true, validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    {required: true, validator: validatePassCheck, trigger: 'blur' }
                ],
                email: [
                    {required: true, message: '邮箱不能为空', trigger: 'blur' }
                ],
                phone: [
                    {required: true, message: '手机号不能为空', trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        registerSubmit(name){
            this.$refs[name].validate(async (valid) => {
                if (valid) {
                    try {
                        let userName = this.formCustom.userName
                        let account = this.formCustom.account
                        let password = this.formCustom.passwd
                        let email = this.formCustom.email
                        let phone = this.formCustom.phone
                        await service.users.register(userName, account, password, email, phone)
                        this.$Message.success('注册成功')
                        // setTimeout(function(){
                        //     this.$router.push('/login')
                        // }.bind(this),2000)
                        // this.$router.push('/main/share')
                    } catch (error) {
                        this.$Message.error(error.message)
                    }
                } else {
                    this.$Message.error('注册验证失败!');
                }
            })
        }
    }
};
</script>

<style>

</style>
