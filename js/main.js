 $(function(){

    $('#fullpage').fullpage({
      //options here
      autoScrolling:true,
      scrollHorizontally: true,
      navigation: true, 
      navigationTooltips: ['홈','브랜드','메뉴','서비스','사회공헌','SNS','커뮤니티','footer'],
      anchors: ['section1','section2','section3','section4','section5','section6','section7','section8'],
      showActiveTooltip: true,
      bigSectionsDestination: top,
      recordHistory: false,

      //section2 카운트 number
      onLeave: function( anchorLink, index ){
        if (index == 2) {
          var sec2_Num = document.querySelector('.num2_ani');
          var targetnum = sec2_Num.getAttribute('data-rate');
          var aniNum = 0;
          var aniNumPlus = 1960359;

          var aniTimer = setInterval(function(){
              aniNum = aniNumPlus+aniNum;
              sec2_Num.innerText = aniNum.toLocaleString('ko-KR');
              if(aniNum == targetnum){
                clearInterval(aniTimer);
              }
          },50); 
        }
        if (index == 3) {
          var sec3_Num = document.querySelector('.num3_ani');
          var targetnum = sec3_Num.getAttribute('data-rate');
          var aniNum = 0;

          var aniTimer = setInterval(function(){
              ++aniNum;
              sec3_Num.innerText = aniNum;
              if(aniNum == targetnum){
                clearInterval(aniTimer);
              }
          },100);
        }
      }

    });



    //slick_slider
    $('.main_slider').slick({
      // autoplay: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      prevArrow: false,
      nextArrow: false,
      dots: true,
      appendDots: $('.dots'),
       
    });

    var $dotText_1 = $('<p>쌀국수 창업의</br>새로운 패러다임</br>포메인 RED</p>');
    var $dotText_2 = $('<p>쌀국수는</br>포메인</p>');
    var $dotText_3 = $('<p>쌀 한 톨부터 다른</br>포메인다움</p>');
    var $dotText_4 = $('<p>매일매일 까다로운</br>포메인다움</p>');
    var $dotText_5 = $('<p>재료부터 건강한</br>포메인다움</p>');
    $('.slick-dots li:first-of-type').append($dotText_1);
    $('.slick-dots li:nth-of-type(2)').append($dotText_2);
    $('.slick-dots li:nth-of-type(3)').append($dotText_3);
    $('.slick-dots li:nth-of-type(4)').append($dotText_4);
    $('.slick-dots li:last-of-type').append($dotText_5);

    $('.slick-dots li p').addClass('p_style');

    var dotIdx = $('.slick-dots>li').index(this);

    $('.slick-dots li').click(function(){
      $('.slick-list').addClass('sl_active');
    });


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