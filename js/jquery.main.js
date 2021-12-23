$(document).ready(function () 
{
    var NavBar = $('.navbar')
    var Nav = $('.nav')
    var Nav_Menu = $('.nav_menu')
    Nav.hover(function(){
        NavBar.css('top','100%');
        NavBar.css('opacity','1');
        Nav_Menu.css('top','100%');
        Nav_Menu.css('opacity','1');
    }, function() {
        NavBar.css('top','-100%');
        NavBar.css('opacity','0');
        Nav_Menu.css('top','-300%');
        Nav_Menu.css('opacity','0');
    });
});
