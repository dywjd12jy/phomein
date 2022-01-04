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


      // onSlideLeave: function( section2, index, slideAnchor, slideIndex ){
      onSlideLeave: function( section2 ){
        console.log(section);

        var sec2_Num = document.querySelector('.num_animation');
        var targetnum = sec2_Num.getAttribute('data-rate');
        var aniNum = 0;
        var aniTimer = setInterval(function(){
          ++aniNum;
          sec2_Num.innerText = aniNum;
          if(aniNum == targetnum){
            clearInterval(aniTimer);
          }
        },8);

      }

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