    


// $(function(){


//     // $(window).resize(function(){
//     //     var width = window.innerWidth;
        
//     //     if(width > 1019){
            
//     //     }
        
//     //     else{
            
//     //     }; 
        
//     // }).resize();
// });
$(function(){
$(window).resize(function() { 

    // console.log("");
    // console.log("window");
    // console.log("width");
    // console.log(window);
    
    // console.log("window resize : start");
    // console.log("");


    if($(window).width() > 1019) { 

        //1019이상 nav 호버시 슬라이드 이벤트
        var Header = $('.header')
        var NavBar = $('#desktop .navbar')
        var Nav = $('#desktop .nav')
        var Nav_Menu = $('#desktop .nav_menu')
        
        Nav.on("mouseover",function(){
            Header.css('background-color','rgba(0,0,0,0.9)'),
            NavBar.css('height','260%'),
            NavBar.css('padding','60rem 0 0 0'),
            NavBar.css('opacity','1'),
            Nav_Menu.css('padding','20rem 0'),
            Nav_Menu.css('opacity','1'),
            Nav_Menu.css('top','100%')
        }); 
        Nav.on("mouseout",function(){
            Header.css('background-color','rgba(0,0,0,0)'),
            NavBar.css('height','0'),
            NavBar.css('padding','0'),
            NavBar.css('opacity','0'),
            Nav_Menu.css('padding','0'),
            Nav_Menu.css('opacity','0'),
            Nav_Menu.css('top','-200%')
        });

    } 
    if($(window).width() <= 1018){
        // console.log($(window).width());
        // console.log("1018미만");

        //1018이하 ham 클릭시 nav가 열리고
        //nav_menu 클릭시 나머지 서브메뉴들 토글 이벤트
        var Ham= $('.ham')
        var Ham_bar= $('.ham p')
        var Ham_Actv = $('.active')
        var Nav = $('#media #nav')
        var nav = $('#media .nav p')
        var navMn = $('#media .nav_menu')
        
        //ham 아이콘 클릭
        Ham_bar.on("click", function(){
        Nav.toggleClass('active')
        Ham.toggleClass('active')
        // Nav.toggle(),
        // Ham.delay(5000).toggleClass('active');
        });

        //nav 메뉴 상하 슬라이드
        nav.on("click", function(){
        // e.preventDefault();
        navMn.stop().slideUp();
        $(this).siblings("ul").stop().slideToggle();
        // return false;
        });
        // console.log(width);
    }
});
});


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