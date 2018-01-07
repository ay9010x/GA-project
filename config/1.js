
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
    //首頁或其他共通功能
      
    //標籤LOGO
    //標籤LOGO點擊
    ga_mouse_click_event('#siteLogoContainer','Logo_siteLogoContainer_Click')
    //標籤LOGO滑動
    ga_mouse_over_event('#siteLogoContainer','Logo_siteLogoContainer_Hover')
    
    //首頁橫幅廣告
    //首頁橫幅廣告點擊
    ga_mouse_click_event('.owl-wrapper-outer','Home_Banner_owl-wrapper-outer_Click')
    //首頁橫幅廣告滑動
    ga_mouse_over_event('.owl-wrapper-outer','Home_Banner_owl-wrapper-outer_Hover')
    //首頁橫幅廣告右箭頭紐點擊
    ga_mouse_click_event('.owl-next','Good_Information_Simple_Left_owl-next_Click')
    //首頁橫幅廣告左箭頭紐點擊
    ga_mouse_click_event('.owl-prev','Good_Information_Simple_Right_owl-prev_Click')
       
    
    //首頁大標
    //首頁大標點擊
    ga_mouse_click_event('#FEATUREDPRODUCTSTitle','Home_Title_FEATUREDPRODUCTSTitle_Click')
    ga_mouse_click_event('#BuyerPickTitle','Home_Title_BuyerPickTitle_Click')
    ga_mouse_click_event('#WHATSNEWTitle','Home_Title_WHATSNEWTitle_Click')
    //首頁大標滑動
    ga_mouse_over_event('#FEATUREDPRODUCTSTitle','Home_Title_FEATUREDPRODUCTSTitle_Hover')
    ga_mouse_over_event('#BuyerPickTitle','Home_Title_BuyerPickTitle_Hover')
    ga_mouse_over_event('#WHATSNEWTitle','Home_Title_WHATSNEWTitle_Hover')
        
    //首頁活動區塊
    //首頁活動(優惠商品、新品推薦......等等)點擊
    ga_mouse_click_event('.col-xs-6.col-sm-3.col-md-3','Event_Block_Click')
    //首頁活動(優惠商品、新品推薦......等等)滑動
    ga_mouse_over_event('.col-xs-6.col-sm-3.col-md-3','Event_Block_Hover')
        
    //搜尋框
    //搜尋框(普通)，滑動
    ga_mouse_over_event('#js-site-search-input','Search_Box_Input_Hover')
    //搜尋框(行動)，滑動    
    ga_mouse_over_event('#searchBoxContainerMobile','Search_Box_Input_Mobile_Hover') 
    
    //-----------------------------
        
        
    //自有品牌
    
    //認識好市多說明頁面Label
    //認識好市多說明頁面Label滑動
    ga_mouse_over_event('.sidebar1','Kirkland_Signature_Information_Sidebar1_Hover')
    ga_mouse_over_event('.sidebar2','Kirkland_Signature_Information_Sidebar2_Hover') 
    ga_mouse_over_event('.sidebar3','Kirkland_Signature_Information_Sidebar3_Hover')
    ga_mouse_over_event('.sidebar4','Kirkland_Signature_Information_Sidebar4_Hover')
    ga_mouse_over_event('.sidebar5','Kirkland_Signature_Information_Sidebar5_Hover')
    ga_mouse_over_event('.sidebar6','Kirkland_Signature_Information_Sidebar6_Hover')
    ga_mouse_over_event('.sidebar7','Kirkland_Signature_Information_Sidebar7_Hover')
    ga_mouse_over_event('.sidebar8','Kirkland_Signature_Information_Sidebar8_Hover')
    //認識好市多說明頁面Label點擊
    ga_mouse_click_event('.sidebar1','Kirkland_Signature_Information_Sidebar1_Click')
    ga_mouse_click_event('.sidebar2','Kirkland_Signature_Information_Sidebar2_Click') 
    ga_mouse_click_event('.sidebar3','Kirkland_Signature_Information_Sidebar3_Click')
    ga_mouse_click_event('.sidebar4','Kirkland_Signature_Information_Sidebar4_Click')
    ga_mouse_click_event('.sidebar5','Kirkland_Signature_Information_Sidebar5_Click')
    ga_mouse_click_event('.sidebar6','Kirkland_Signature_Information_Sidebar6_Click')
    ga_mouse_click_event('.sidebar7','Kirkland_Signature_Information_Sidebar7_Click')
    ga_mouse_click_event('.sidebar8','Kirkland_Signature_Information_Sidebar8_Click')
    
    //自有品牌介紹圖片滑動
    //作廢，會產生衝突1.7.19:02
    //ga_mouse_over_event('.content','Kirkland_Signature_Information_Hover')
        
    //-----------------------------
    
        
    //商品
        
    //商品介紹資訊區(簡式，無比較產品按鈕)
    //商品介紹資訊區塊(簡式，無比較產品按鈕)滑動
    ga_mouse_over_event('.owl-item','Good_Information_Simple_Owl-Item_Hover')
    //商品介紹資訊區塊(簡式，無比較產品按鈕)點擊
    ga_mouse_click_event('.owl-item','Good_Information_Simple_Owl-Item_Click')
    
    
    
    //商品介紹資訊區(詳式，具比較產品按鈕)
    //商品介紹資訊區塊(詳式，具比較產品按鈕)滑動
    ga_mouse_over_event('.product-item.vline','Good_Information_Normal_product-item.vline_Hover')
    //商品介紹資訊圖片(詳式，具比較產品按鈕)點擊
    ga_mouse_click_event('.product-image','Good_Information_Picture_Normal_product-image_Click')
    //商品介紹資訊文字(詳式，具比較產品按鈕)點擊
    ga_mouse_click_event('.product-list-details','Good_Information_Text_Normal_product-list-details_Click')
    //商品介紹資訊比較產品按鈕(詳式，具比較產品按鈕)點擊
    ga_mouse_click_event('.product-compare-checkbox__label','Good_Information_Text_Porduct_Compare_product-compare-checkbox__label_Click')
    
        
        //商品介紹資訊區塊(詳式，具比較產品按鈕)點擊作廢
        //ga_mouse_click_event('.product-item.vline','Good_Information_Normal_product-item.vline_Click')
        
    
    
        
    //商品篩選標籤
    //商品篩選標籤滑動
    ga_mouse_over_event('.facet-label','Good_Facet_Label_Hover')
    //商品篩選標籤點擊
    ga_mouse_click_event('.facet-label','Good_Facet_Label_Click')
        
    //商品分類(第二層標籤)的頁面相關
    //商品分類(第二層標籤)置中介紹的圖片，滑動
    ga_mouse_over_event('.js-responsive-image','II_Middle_AdImage_Hover')
    //商品分類(第二層標籤)置中介紹的圖片，點擊
    ga_mouse_click_event('.js-responsive-image','II_Middle_AdImage_Click')
        
    //商品分類(第二層標籤)產品類別，滑動
    ga_mouse_over_event('.category-node','II_Middle_AdImage_Hover')
    //商品分類(第二層標籤)產品類別，點擊
    ga_mouse_click_event('.category-node','II_Middle_AdImage_Click')
        
    
    //商品推薦介紹頁面切換點擊(灰色小點)
    ga_mouse_click_event('.owl-page','Good_Information_Page_Change_Owl-Page_Click')
        
    //-----------------------------
        
        

       
    


        
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
