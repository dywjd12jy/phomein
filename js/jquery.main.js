

$(function(){

    var Header = $('.header')
    var NavBar = $('.navbar')
    var Nav = $('.nav')
    var Nav_Menu = $('.nav_menu')

    // $Header.on("mouseover",function(){
    //     $(this).removeClass("")
    // });

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
});