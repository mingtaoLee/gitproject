<style lang="less">
    @import './signin.less';
</style>

<template>
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <Button @click="register" type="primary" long>注册</Button>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </Card>
        </div>
</template>

<script>
import Cookies from 'js-cookie';
import service from '../../../service/index'
export default {
    data () {
        return {
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空!!!', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空!!!', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate(async(valid) => {
                if (valid) {
                    // Cookies.set('user', this.form.userName);
                    // Cookies.set('password', this.form.password);
                    // this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                    // if (this.form.userName === 'admin') {
                    //     Cookies.set('access', 0);
                    // } else {
                    //     Cookies.set('access', 1);
                    // }\
                    try {
                        let account = this.form.userName
                        let password = this.form.password
                        // await service.users.signin(account, password)
                        // console.log(result)
                        Cookies.set('user', this.form.userName);
                        // Cookies.set('password', this.form.password);
                        this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                        this.$router.push({name:'home_index'})
                    } catch (error) {
                        let message = error.response && error.response.data && error.response.data.message
                        if (message) {
                            error.message = message            
                        }
                        this.$Message.error(error.message)
                    }
                }
            });
        },
        register(){
            Cookies.set('user', 'admin');
            this.$router.push('/login/signup');
            Cookies.remove('user');
        }
    }
};
</script>

<style>

</style>
