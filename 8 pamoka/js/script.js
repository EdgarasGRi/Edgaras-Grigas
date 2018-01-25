$(document).ready(function(){
    $(".Bt1").click(function(){
        $("#result").text("Hello word");
    });

    $(".Bt2").mouseenter(function(){
        $(this).css("background", "blue");
    });

    $(".Bt2").mouseleave(function(){
        $(this).css("background", "#f2f2f2");
    });

    $(".kvadratas").click(function(){
        $("#result1").text("Paspaudete ant kvadrato");
    });

    $(".cirkle").hover(function(){
        $("#result1").text("Uzejote ant saules");
    });

    

});