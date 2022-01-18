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
      autoplay: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      prevArrow: false,
      nextArrow: false,
      dots: true,
      // appendDots: $('.item_list'),
      appendDots: $('.dot_list'),


      customPaging: function(slider, i) { 
        console.log($(slider.$slides[i]).html());
        // console.log(slider.$slides[i].data('title'));
        // console.log($(slider.$slides[i]).data('title'));
        return '<button class="tab">' + $(slider.$slides[i]).find('.slide_list').data('title')+$(slider.$slides[i]).data('text')+'</button>';
        
      },

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
        
      //   console.log($(slider.$slides[i]).html());
      //       return '<button class="tab">' + $(slider.$slides[i]).find('.item').attr('data-dot-title') + '</button>';
      // }

      // customPaging: function(slider, i) { 
        // return '<button class="tab">' + $(slider.$slides[i]).attr('data-title') + '<i class="fa fa-sort-asc"></i></button>';
        //undefined 로 나옴
        //i태그는 폰트어썸이였다..
        // return '<button class="tab">' + $(slider.$slides[i]).text("aaaaaa") + '<i class="fa fa-sort-asc"></i></button>';
        //그냥 오류남
      // },
      // customPaging: function(dot_list, i) { 
      //   return '<button class="tab">' + $(dot_list.$slides[i]).attr('data-title') + '<i class="fa fa-sort-asc"></i></button>';
      // },
      // customPaging: function(slider, i) { 
      //   console.log($(slider.$slides[i]).html());
      //   return '<button class="tab">' + $(slider.$slides[i]).attr('data-title') + '</button>';
        
      // },

        
    });




    // $('.slick_slide_dots').slick({
    //   dots: true,
    //   customPaging: function(item, i) { 
    //       console.log($(item.$slides[i]).html());
    //       return '<button class="tab">' + $(item.$slides[i]).find('.item').attr('data-dot-title') + '</button>';
    //     },
    //   prevArrow: false,
    //   nextArrow: false
    // });




    // $('.slick_slide_dots').slick({
    //   dots:true,
    //   customPaging: function(slider, i) { 
    //       console.log($(slider.$slides[i]).html());
    //       return '<button class="tab">' + $(slider.$slides[i]).find('.item').attr('data-dot-title') + '</button>';
    //     },
    // });



  });