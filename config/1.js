
/**
 * 適用網頁：http://vinson.rd.ssic.nccu.edu.tw/
 * 事件查詢表：https://docs.google.com/spreadsheets/d/1MtMtw9lKLDTUzfBd6Ld0fAe_FGe5u-Mlkh5WfZiH5qM/edit
 * @author Pudding 20170203
 */

GA_TRACE_CODE = "UA-112072858-1";
        
var _local_debug = false;

if (_local_debug === true) {
    CSS_URL = "https://localhost/GA-project/config/1.css";
    LIB_URL = "https://localhost/GA-project/ga_inject_lib.js";
    console.log("[LOCAL TEST MODE]");
}
else {
    CSS_URL = "https://ay9010x.github.io/GA-project/config/1.css";
    LIB_URL = "https://ay9010x.github.io/GA-project/ga_inject_lib.js";
}


var exec = function () {
    auto_set_user_id();   

    //按鈕
    ga_mouse_click_event("#btn_1","Click Btn_1");
    ga_mouse_click_event(".btn","Click Btn");
    ga_mouse_click_event("#facet_商品分類","Click Btn");  

    //滑鼠滑入滑出
    ga_mouse_over_event(".img","Hover img");
  ga_mouse_over_event("#facet_商品分類","hover"); 
    

    //表單送出
    ga_submit_event("form", "submit", function (_ele) {
        return _ele.text();});
    
};


// --------------------------------------

$(function () {
    $.getScript(LIB_URL, function () {
        ga_setup(function () {
            exec();
        });
    });
});


//----------

$(function() {  
    var len =  $('#theMenu').find('.topmenu').length;
    var len2;
    var len3;
    for(var i=0;i<len;i++){
        $('#theMenu').find('.topmenu').eq(i).attr('id', 'top_menu'+i);
        
    };
});
