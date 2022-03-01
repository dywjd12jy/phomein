    

$(function(){

    //1019이상 nav 호버시 슬라이드 이벤트
        var Header_DT = $('#desktop.header')
        var Nav = $('#desktop nav')
        
        Nav.on("mouseover",function(){
            Header_DT.addClass('active');
        }); 
        Nav.on("mouseout",function(){
            Header_DT.removeClass('active');
        });


    //1018이하 ham 이벤트
        var Header_MD = $('#mobile.header')
        var Ham_bar= $('.ham p')
        var Nav = $('#mobile #nav')
        // var nav_p = $('#mobile .nav p')
        var nav_p = $('#mobile .nav p')
        var navMn = $('#mobile .nav_menu')
        
        //ham 아이콘 클릭
        Ham_bar.on("click", function(){
            Header_MD.toggleClass('active')
        });

        //nav 메뉴 상하 슬라이드
        nav_p.on("click", function(){
            
        // console.log($(window).width());
        console.log("클릭");
            navMn.stop().slideUp();
            $(this).siblings("ul").stop().slideToggle();
        });

});







    // } 
    // if($(window).width() <= 1018){
    //     // console.log($(window).width());
    //     // console.log("1018미만");

    //     //1018이하 ham 클릭시 nav가 열리고
    //     //nav_menu 클릭시 나머지 서브메뉴들 토글 이벤트
    //     var Ham= $('.ham')
    //     var Ham_bar= $('.ham p')
    //     var Ham_Actv = $('.active')
    //     var Nav = $('#media #nav')
    //     var nav = $('#media .nav p')
    //     var navMn = $('#media .nav_menu')
        
    //     //ham 아이콘 클릭
    //     Ham_bar.on("click", function(){
    //     Nav.toggleClass('active')
    //     Ham.toggleClass('active')
    //     // Nav.toggle(),
    //     // Ham.delay(5000).toggleClass('active');
    //     });

    //     //nav 메뉴 상하 슬라이드
    //     nav.on("click", function(){
    //     // e.preventDefault();
    //     navMn.stop().slideUp();
    //     $(this).siblings("ul").stop().slideToggle();
    //     // return false;
    //     });
    //     // console.log(width);
    // }
    
    // if($(window).width() <= 1018){
        // console.log($(window).width());
        // console.log("1018미만");

        //1018이하 ham 클릭시 nav가 열리고
        //nav_menu 클릭시 나머지 서브메뉴들 토글 이벤트
        
        // console.log(width);
    // }

// $(window).resize(function(){ 
//     // location.reload();
//     if (window.innerWidth > 1019) { 
       
//     } else {
//         
        
// } }).resize();



// $(window).resize(function() { if($(window).width() > 1019) {
     
// } });

// $(window).resize(function() { if($(window).width() < 1019) {

// } });