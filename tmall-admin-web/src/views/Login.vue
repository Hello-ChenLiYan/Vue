<template>
    <el-card class="login-card">
        <div slot="header" class="slot-header">登录</div>
        <el-form :rules="rules" ref="loginFormRef" :model="loginForm" label-position="right" label-width="70px">
            <el-form-item  label="账号" prop="username">
                <el-input placeholder="请输入账号" v-model="loginForm.username" prefix-icon="el-icon-s-custom"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码" show-password v-model="loginForm.password" prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="captcha" >
                <el-input v-model="loginForm.captcha" class="captcha_input" prefix-icon="el-icon-mobile-phone" placeholder="请输入验证码"></el-input>
                <el-button type="button" @click="createCode" class="verification" >{{checkCode}}</el-button>
            </el-form-item>
            <el-form-item >
                <el-checkbox label="记住密码" name="type"  v-model="loginForm.rem"></el-checkbox>
            </el-form-item>
            <el-button-group class="login-btn">
                <el-button  type="primary" @click="btnLogin" :loading = "isLoading">登录</el-button>
                <el-button  type="primary" plain @click="btnReset">重置</el-button>
            </el-button-group>

        </el-form>
    </el-card>
</template>

<script>

    import {api_login} from '../api/admin.js'

    export default {
        data() {
            return {
                isLoading: false,
                loginForm: {
                    username:'',
                    password:'',
                    rem:false,
                    captcha:''
                },
                checkCode:'',
                rules: {
                    username:[
                        {required:true,message:'请输入账号',trigger:'blur'},
                        {min:4,max:10,message:'长度在4到10个字符',trigger:'blur'}
                    ],
                    password:[
                        {required:true,message:'请输入密码',trigger:'blur'},
                        {min:4,max:10,message:'长度在4到10个字符',trigger:'blur'}
                    ],
                    captcha:[
                        {required:true,message:'验证码不能为空',trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            btnReset(){
                //1.获取表单对象
                //2.通过表单对象执行
                this.$refs['loginFormRef'].resetFields();
            },
            btnLogin(){
                this.isLoading = true;
                //1.验证表单
                this.$refs['loginFormRef'].validate(async (valid) => {
                    if(!valid) {
                        console.log('登录失败');
                        return false;
                    }

                    if (this.loginForm.captcha !== this.checkCode) {
                        console.log("验证码错误");
                        //验证码错误，则验证码会刷新

                        this.createCode();
                        return false;
                    }

                    //2.提交表单数据到后台
                    const {data : res} = await api_login(this.loginForm.username,this.loginForm.password)
                    console.log(res);
                    //网络请求执行完即加载
                    this.isLoading = false

                    if(res.code !== 200) {
                        this.$message.error(res.message)
                        return true
                    }

                    //登录的请求路径正确，往下走
                    const data = res.data
                    const token = data.tokenHead + data.token

                    //3.保存token到sessionStorage，会话结束后自动消除
                    window.sessionStorage.setItem('token',token)

                    //4.保存用户信息到vuex的store

                    //5.记住密码功能，登录将用户密码保存到cookies
                     if (this.loginForm.rem){
                        this.$cookies.set('username',this.loginForm.username,"7D");
                        this.$cookies.set('password',this.loginForm.password,"7D");
                    } else {
                         this.$cookies.remove('username');
                         this.$cookies.remove('password');
                     }

                    //6.登录页面刷新或加载的时候从cookies获取

                    //7.跳转到主页面,编程式路由 异步操作不可控，故操作为同步操作await
                    await this.$router.replace('/home')
                });
            },

            // 图片验证码
            createCode(){
                //先清空验证码的输入
                this.code = "";
                this.checkCode = "";
                this.captcha = "";
                //验证码的长度
                let codeLength = 4;
                //随机数
                let random = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

                for(let i = 0; i < codeLength; i++) {
                    //取得随机数的索引（0~35）
                    let index = Math.floor(Math.random()*36);
                    //根据索引取得随机数加到code上
                    this.code += random[index];
                }
                //把code值赋给验证码
                this.checkCode = this.code;
                console.log(this.checkCode);
            }
        },
        created() {
            //获取cookies中的值
            this.loginForm.username = this.$cookies.get('username')
            this.loginForm.password = this.$cookies.get('password')

            //验证码
            this.createCode();
        }
    }
</script>

<style scoped="scoped">
    .login-card{
        width: 480px;
        margin: auto;
        transform: translateY(30%);
    }

    .login-btn {
        width: 100%;
    }

    .login-btn .el-button{
        width: 50%;
    }

    .slot-header {
        text-align: center;
    }

    .captcha_input {
        width: 59%;
    }

    .verification{
        border-radius: 12px;
        width:120px;
        letter-spacing:5px;
        height: 40px;
        margin-left: 8%;
    }

</style>
