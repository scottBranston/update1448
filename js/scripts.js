$(function() {
    // Carousel controls
        $(".carousel").carousel( { interval: 4000 } );
        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("i").hasClass("fa-pause")) { //if this is a pause button
                $(".carousel").carousel("pause");                          //pause when clicked
                $("#carouselButton").children("i").removeClass("fa-pause");//remove pause icon
                $("#carouselButton").children("i").addClass("fa-play");    //show play icon
            } else {
                $(".carousel").carousel("cycle");                          //play carousel
                $("#carouselButton").children("i").removeClass("fa-play"); //remove play icon
                $("#carouselButton").children("i").addClass("fa-pause");   //show pause icon
            }
        });
        // Login Modal button
        $("#loginButton").click(function() {
            $("#loginModal").modal();
        });
        $("#loginClose").click(function() {
            $("#loginModal").modal("hide");
        });
        $("#loginCancel").click(function() {
            $("#loginModal").modal("hide");
    });
    });
    