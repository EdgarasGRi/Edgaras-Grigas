$(document).ready(function(){
    $(".loginas").mouseenter(function(){
        $(".stilius").stop().slideDown(1000);
        $(".fa-user").css("color", "red");
    })

    $(".loginas").mouseleave(function(){
        $(".stilius").stop().slideUp(1000);
        $(".fa-user").css("color", "white");
       
    }); 
    
    $(".fa-search").mouseenter(function(){
        $(".form-control").stop().slideDown(1000);
        $(".fa-search").css("color", "red");
    });
   

   

});