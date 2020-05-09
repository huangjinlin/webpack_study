import $ from "jquery";
import Vue from "vue";
import './css/1.css';
import './css/1.less';
import './css/1.scss';

import App from './components/App.vue'

// const vm = new Vue({
//     el:"#app",
//     render:h=>h(App)
// })
const vm = new Vue({
    el: '#app',
    render: h=>h(App)
})

$(function(){
    $("li:odd").css("background","red");
    $("li:even").css("background","pink");
})

class Person {
    static info = 'aaa'
}
console.log(Person.info)