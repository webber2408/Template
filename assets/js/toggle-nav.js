$(".nav-res-bars").click(function(){
    if(!$(".header-toggle-options").is(":visible")){
        $(".header-toggle-options").slideDown('slow');
    }else{
        $(".header-toggle-options").slideUp('slow');
    }
});