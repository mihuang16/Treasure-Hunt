$(".line").hide();

$(".trick").hide();

$(".restart").hide();

$(".chipsec").hide();

$(".hide").hide();

$(".show").hide();

$(".begin").click(function(){
    $(".begin").hide();
    $(".hints").text("Oh cool, the treasure is already here, that was fast! Double Click on the text below to claim it!");
    $(".space").hide();
    $(".trick").show();
    $(".hints").css("font-family" , "'Caveat Brush' , cursive");
});

$(".trick").dblclick(function(){
    $(".chips").hide();
    $(".hints").text("Oh no! The treasure disappeared, let's try to dig up some clues to find where it went!");
    $("body").css("background" , "black");
    $(".trick").hide();
    $(".hints").css("color" , "white");
    $(".line").show();
});

$(".firstline").mouseenter(function(){
    $(".firstline").css("color" , "lightgreen");
});

$(".secondline").mouseenter(function(){
    $(".secondline").css("color" , "lightgreen");
});

$(".thirdline").mouseenter(function(){
    $(".thirdline").css("color" , "lightgreen");
});

$(".fourthline").mouseenter(function(){
    $(".fourthline").css("color" , "lightgreen");
});

$(".fifthline").mouseenter(function(){
    $(".fifthline").css("color" , "lightgreen");
});

$(".sixthline").mouseenter(function(){
    $(".sixthline").css("color" , "lightgreen");
});

$(".seventhline").mouseenter(function(){
    $(".seventhline").css("color" , "lightgreen");
});

$(".fourthline").click(function(){
    $(".firstline").css("color" , "lightgreen");
    $(".hints").text("We found the treasure! Click the button to hide it from your peers around you or click on the image to obtain your prize");
    $(".line").hide();
    $(".chipsec").show();
    $(".hide").show();
});

$(".secondline").click(function(){
    $(".line").hide();
    $(".hints").text("Oh boy, you clicked the second line on the sentence! It never said sentence... Well... You have to restart now! Click on the button down below. Enjoy your trip!");
    $(".space").show();
    $(".restart").show();
});

$(".firstline").click(function(){
    $(".line").hide();
    $(".hints").text("Oh boy, you clicked the second line out of all the lines! It never said out of all the lines... Well... You have to restart now! Click on the button down below. Enjoy your trip!");
    $(".space").show();
    $(".restart").show();
});

$(".restart").click(function(){
   $(".chips").show();
   $(".restart").hide();
   $(".hints").text("Let's begin! Click on the begin button!");
   $(".hints").css("color" , "black");
   $(".begin").show();
   $("body").css("background" , "white");
   $(".firstline").css("color" , "black");
   $(".secondline").css("color" , "black");
   $(".thirdline").css("color" , "black");
   $(".fourthline").css("color" , "black");
   $(".fifthline").css("color" , "black");
   $(".sixthline").css("color" , "black");
   $(".seventhline").css("color" , "black");
   $(".hints").css("font-family" , "'Caveat' , cursive");
});

$(".hide").click(function(){
    $(".chipsec").slideToggle();
    $(".hide").hide();
    $(".show").show();
    $(".hints").text("We found the treasure! Click the button to show it off to your peers around you or click on the image to obtain your prize.");
});

$(".show").click(function(){
    $(".chipsec").slideToggle();
    $(".hide").show();
    $(".show").hide();
    $(".hints").text("We found the treasure! Click the button to hide it from your peers around you or click on the image to obtain your prize");
});