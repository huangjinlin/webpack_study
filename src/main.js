import $ from "jquery";
import './css/1.css';
import './css/1.less';
import './css/1.scss';
$(function(){
    $("li:odd").css("background","red");
    $("li:even").css("background","pink");
})

class Person {
    static info = 'aaa'
}
console.log(Person.info)