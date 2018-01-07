
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
   /* ga_mouse_click_event("#btn_1","Click Btn_1");
    ga_mouse_click_event(".btn","Click Btn");
    ga_mouse_click_event("#facet_商品分類","Click Btn");
    
*/
    ga_mouse_click_event('#sortOptions1','Select_Box_sortOptions1_Click')
    ga_mouse_click_event('.owl-item','Good_Information_Owl-Item_Click')
    ga_mouse_click_event('.owl-page','Good_Information_Page_Change_Owl-Page_Click')
    
        
        
        
    //滑鼠滑入滑出
    ga_mouse_over_event(".img","Hover img");
    //ga_mouse_over_event("#facet_商品分類","hover"); 
    //ga_mouse_over_event('.facet-checkbox','123');
    ga_mouse_over_event('.menu-trigger','222123');
    //ga_mouse_over_event('#product-facet','RWR');
    //ga_mouse_over_event('.facet-checkbox.js-facet-checkbox.sr-only','fuckfuckfuck');
    //ga_mouse_over_event('.facet-mark','123');
    //ga_mouse_over_event('.facet-name','123');
    ga_mouse_over_event('.facet-label','Good_Facet_Label_Hover')
    ga_mouse_over_event('.js-responsive-image','Middle_Image_Hover')  
    //ga_mouse_over_event('#sortOptions1','mouse hover select box')
    ga_mouse_over_event('.sidebar1','Kirkland_Signature_Information_Sidebar1_Hover')
    ga_mouse_over_event('.sidebar2','Kirkland_Signature_Information_Sidebar2_Hover') 
    ga_mouse_over_event('.sidebar3','Kirkland_Signature_Information_Sidebar3_Hover')
    ga_mouse_over_event('.sidebar4','Kirkland_Signature_Information_Sidebar4_Hover')
    ga_mouse_over_event('.sidebar5','Kirkland_Signature_Information_Sidebar5_Hover')
    ga_mouse_over_event('.sidebar6','Kirkland_Signature_Information_Sidebar6_Hover')
    ga_mouse_over_event('.sidebar7','Kirkland_Signature_Information_Sidebar7_Hover')
    ga_mouse_over_event('.sidebar8','Kirkland_Signature_Information_Sidebar8_Hover')
    ga_mouse_over_event('.owl-item','Good_Information_Owl-Item_Hover')
    ga_mouse_over_event('.content','Kirkland_Signature_Information_Hover')
    ga_mouse_over_event('#js-site-search-input','Search_Box_Input_Hover') 
    ga_mouse_over_event('#searchBoxContainerMobile','Search_Box_Input_Mobile_Hover') 

        
    //ga_mouse_over_event()    
        
    
        
        
        
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
