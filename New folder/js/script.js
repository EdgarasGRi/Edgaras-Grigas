$(document).ready(function(){
    $(".fa-user").mouseenter(function(){
        $(".stilius").show("faster");
        $(".fa-user").css("color", "red");
    })

  
    
    

    $(".stilius").mouseleave(function(){
        $(".stilius").slideUp("slow");
        $(".fa-user").css("color", "white");
       
    }); 
    
    $(".fa-search").mouseenter(function(){
        $(".form-control").slideDown();
        $(".fa-search").css("color", "red");
    });
   

   

});