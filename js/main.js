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
      showActiveTooltip: true,
    });
  });