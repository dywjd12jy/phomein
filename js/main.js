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
      anchors: ['section1','section2','section3','section4','section5','section6','section7'],
      showActiveTooltip: true,
      bigSectionsDestination: top,


      //section2 카운트 number
      // afterLoad: function( anchorLink, index ){
      //   if (index == 2) {
      //     var sec2_Num = document.querySelector('.num_animation');
      //     var targetnum = sec2_Num.getAttribute('data-rate');

      //     var aniNum = 10056300;
      //     var increaseNum = 100;

      //     var aniTimer = setInterval(function(){
      //       for (var i = 0; i < targetnum; i + increaseNum){
      //         // increaseNum + aniNum;
      //         i + aniNum;
      //       }
      //       sec2_Num.innerText = aniNum;
      //       if(aniNum == targetnum){
      //         clearInterval(aniTimer);
      //       }
      //     },30);
      //   }
      // }


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

 
    // $(window).scroll(function(){
    //   var threshold = $('.section_2').offset().top - 300;
    //   // console.log(threshold);
    //   if($(window).scrollTop() >= threshold){
    //     var progressRate = $('.animate').attr('data-rate');
    //     $({percent: 0}).animate({percent:progressRate},{
    //       duration:1500,
    //       progress:function(){
    //         var now = this.percent;
    //         console.log(now);
    //       }
    //     })
    //   }


    // });

  });


  // function scrollEvent(){
  //   if (jQuery("body").hasClass("acacactive") == true ){
  //     else{

  //     }
  //   }
  // };