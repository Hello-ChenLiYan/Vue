<template>
	<el-card class="login-card">
		<el-form :rules="rules" ref="loginFormRef" :model="loginForm" label-position="right" label-width="60px">
			<el-form-item  label="账号" prop="account">
			    <el-input v-model="loginForm.account"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="password">
				  <el-input show-password v-model="loginForm.password"></el-input>
			  </el-form-item>
			  <el-form-item prop="rem">
				  <el-checkbox label="记住密码" name="type"  v-model="loginForm.rem"></el-checkbox>
			  </el-form-item>
			  <el-button-group class="login-btn">
				  <el-button  type="primary" @click="btnLogin">登录</el-button>
				  <el-button  type="primary" @click="btnReset">重置</el-button>
			  </el-button-group>
			  
		</el-form>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				loginForm: {
					account:'',
					password:'',
					rem:false
				},
				rules: {
					account:[
						{required:true,message:'请输入账号',trigger:'blur'},
						{min:4,max:10,message:'长度在4到10个字符',trigger:'blur'}
					],
					password:[
						{required:true,message:'请输入密码',trigger:'blur'},
						{min:4,max:10,message:'长度在4到10个字符',trigger:'blur'}
					]
				}
			}
		},
		methods:{
			btnReset(){
				//1.获取表单对象
				//2.通过表单对象执行
				this.$refs['loginFormRef'].resetFields()
			},
			btnLogin(){
				this.$refs['loginFormRef'].validate(valid)=>{
					if(valid) {
						console.log('submit!' + this.loginForm.account);
						
					} else {
						console.log('登录失败');
						return false;
					}
				});
			}
		}
	}
</script>

<style scoped="scoped">
	.login-card{
		width: 480px;
		margin: auto;
		transform: translateY(50%);
	}
	
	.login-btn {
		width: 100%;
	}
	
	.login-btn .el-button{
		width: 50%;
	}
	
	
</style>
