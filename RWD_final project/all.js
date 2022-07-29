$(document).ready(function () {
   $('.m-list').click(function(){
    event.preventDefault();
    $('.header .menu').toggleClass('menu-show')
   })
   $('.menu-content .menu-card .like').click(function(){
    event.preventDefault();
    $(this).toggleClass('liked')
   }) 
});
