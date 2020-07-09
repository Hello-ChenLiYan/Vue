import $ from 'jquery'
import '../css/style.css'

import Vue from 'vue'
import App from '../App.vue'


const app = new Vue({
	el:'#app',
	render:h => h(App),
});

$(function() {
    //css选择器,选择了li,冒号 伪元素/伪类
    //奇数
    $('li:odd').css('color', 'pink')
    //偶数
    $('li:even').css('color', 'blue')
})

class Person {
	static info = "haha"
}

console.log(Person.info);