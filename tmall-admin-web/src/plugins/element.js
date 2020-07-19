import Vue from 'vue'
//引入关于element-ui组件的样式
import 'element-ui/lib/theme-chalk/index.css'

//form表单
import {Form,FormItem} from "element-ui";
Vue.use(Form)
Vue.use(FormItem)

//按钮，按钮组
import {Button,ButtonGroup} from "element-ui";
Vue.use(Button)
Vue.use(ButtonGroup)

//输入框
import {Input} from "element-ui";
Vue.use(Input)

//卡片布局
import {Card} from "element-ui";
Vue.use(Card)

//复选框
import {Checkbox} from "element-ui";
Vue.use(Checkbox)

//菜单
import {Menu,MenuItem,Submenu,MenuItemGroup} from "element-ui";
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)

//行、列
import {Row,Col} from "element-ui";
Vue.use(Row)
Vue.use(Col)

//布局
import {Aside,Container,Main,Header} from "element-ui";
Vue.use(Aside)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)

//下拉菜单
import {Dropdown,DropdownMenu,DropdownItem} from "element-ui";
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Dropdown)

//头像
import {Avatar} from "element-ui";
Vue.use(Avatar)

//消息提示框
import {Message,MessageBox} from "element-ui";
//挂载到原型
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

//回到顶部框
import {Backtop} from "element-ui";
Vue.use(Backtop)

//对话框
import {Dialog} from "element-ui";
Vue.use(Dialog)

//面包屑
import {Breadcrumb,BreadcrumbItem} from "element-ui";
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)

//级联选择器
import {Cascader} from "element-ui";
Vue.use(Cascader)

//选择器
import {Select,Option} from "element-ui";
Vue.use(Select)
Vue.use(Option)

//表格
import {Table,TableColumn} from "element-ui";
Vue.use(Table)
Vue.use(TableColumn)

//图片
import {Image} from "element-ui";
Vue.use(Image)

//switch
import {Switch} from "element-ui";
Vue.use(Switch)

//分页
import {Pagination} from "element-ui";
Vue.use(Pagination)