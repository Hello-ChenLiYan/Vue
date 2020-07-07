import $ from './jquery'

$(function() {
    //css选择器,选择了li
    //奇数
    $('li:odd').css('color', 'red')
        //偶数
    $('li:even').css('color', 'blue')
})