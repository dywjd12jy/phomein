// $(document).ready(function(){
  
//   // fullpage customization
//   // $('#fullpage').fullpage({
//   //   sectionSelector: '.vertical-scrolling',
//   //   slideSelector: '.horizontal-scrolling',
//   //   navigation: true,
//   //   slidesNavigation: true,
//   //   css3: true,
//   //   controlArrows: false    
//   // });
  
// });


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
      // afterLoad: function( anchorLink, index ){
      //   if (index == 2) {
      //     var sec2_Num = document.querySelector('.num_animation');
      //     var targetnum = sec2_Num.getAttribute('data-rate');
      //     var aniNum = 0;
      //     var aniNumPlus = 7841436;
      //     // var aniStop = 39207180;
      //     // var aniM = 5050;

      //     var aniTimer = setInterval(function(){
      //       // if(aniNum <= targetnum){
      //         aniNum = aniNumPlus+aniNum;
      //         // sec2_Num.innerText = aniNum;
      //         sec2_Num.innerText = aniNum.toLocaleString('ko-KR');
      //         if(aniNum == targetnum){
      //           clearInterval(aniTimer);
      //         }
      //       // }
      //     },10);
      //   }
      // }


      // afterLoad: function( anchorLink, index ){
      //   if (index == 2) {
      //     var sec2_Num = document.querySelectorAll('.num_animation');

      //     function changeNum(idx){

      //       var aniNum = 0;
      //       var targetNum = sec2_Num[idx].getAttribute('data-rate');

      //       if(targetNum < 100){
      //         intervalTime = 0.0000000001;
      //       }

      //       var aniTimer = setInterval(function(){
      //         ++aniNum;
      //         sec2_Num[idx].innerText = aniNum+(',');
      //         if(aniNum == targetNum){
      //             clearInterval(aniTimer);
      //           }
      //       },intervalTime);
      //     }

      //     for(var i = 0; i < sec2_Num.length; i++){
      //       changeNum(i);
      //     }

      //   }
      // }

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


      // customPaging: function(slider, i) { 
        // console.log($(slider.$slides[i]).html());
        // console.log(slider.$slides[i].data('title'));
        // console.log($(slider.$slides[i]).data('title'));
        // return '<button class="tab">' + $(slider.$slides[i]).find('.slide_list').data('title')+$(slider.$slides[i]).find('.slide_list').data('text')+'</button>';
        
      // },


      //slick_dots
      // customPaging: function(slider, i) { 
        
        // console.log($(slider.$slides[i]).html());
        // return '<button class="tab">' + $(slider.$slides[i]).find('.sl_dot').attr('data-title') + '</button>';
        
        
        // return '<button class="tab">' + itemList_i.find('.item').attr('data-dot-title') + '</button>';
        // return '<button class="button">' + $(slider.$slides[i]).find('.item').attr('data-dot-title') + '</button>';
        // return '<button class="button">' + $(item_list.$slides[i]).find('.item').attr('data-dot-title') + '</button>';
        // return '<button class="button">' + $(item_list.$slides[i]).find('.item').dataset('data-dot-title') + '</button>';
        // console.log($(slick_slider.$slides[i]).html());
        // console.log(data-dot-title)
       
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
    

    // var p = document.createElement('p');
    // var text = document.createElement('text');

    

    // $('.slick-dots li').addClass('plus');
    // $('plllus').append('.slick-dots li');
    // console.log($('.plllus'));
    // console.log($(".plllus").get());
    // console.log($('.plus'));

    
    
  });