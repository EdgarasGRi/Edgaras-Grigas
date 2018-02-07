
   $(document).ready(function(){
    $(".Edc").click(function(){
        $(".form1").slideDown("slow");
        $(".form2").hide("slow");
        $(".form3").hide("slow");

    })

    $(".cancelbtn").click(function(){
        $(".form1").hide("slow");
    })

    $(".Skills").click(function(){
        $(".form2").slideDown("slow");
        $(".form1").hide("slow");
        $(".form3").hide("slow");
       
    })

    $(".cancelbtn2").click(function(){
        $(".form2").hide("slow");
    })

    $(".Hobb").click(function(){
        $(".form3").slideDown("slow");
        $(".form2").hide("slow");
        $(".form1").hide("slow");
    })

    $(".cancelbtn3").click(function(){
        $(".form3").hide("slow");
    })

});



