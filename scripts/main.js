  $(document).ready(function() {
    $("button").button();
    // $("#hidden").hide(); // normally, this would be used; however, css is the more appropriate way to hide something
    $("#accordion").accordion({
      heightStyle: "content",
      collapsible: true,
      active: false
    });
    $("#tabs, #tabs2").tabs({
        collapsible: true
    });
    $("#tabs, #tabs2").find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      stop: function() {
        tabs.tabs( "refresh" );
      }
    });
    $("#show1").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $(".hidden").slideToggle(); 
  
        return false;
    });
    $("#show2").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $(".hidden").slideToggle(); 
  
        return false;
    });
    $("#show3").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $(".hidden").slideToggle(); 
  
        return false;
    });
    $("#show4").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $(".hidden").slideToggle(); 
  
        return false;
    });
    $("#show5").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $(".hidden").slideToggle(); 
    
        return false;
    });
    $("#show6").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $(".hidden").slideToggle(); 
    
        return false;
    });
    $("#show7").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $(".hidden").slideToggle(); 
    
        return false;
    });
    $("#show8").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $(".hidden").slideToggle(); 
    
        return false;
    });
    $("#show9").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $(".hidden").slideToggle(); 
    
        return false;
    });
    $("#show10").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $(".hidden").slideToggle(); 
    
        return false;
    });
    $("#show11").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $(".hidden").slideToggle(); 
    
        return false;
    });
    $("#start").on("click", function() { // when button 1 is clicked
        $("#start").fadeOut(887); // make the start button fade out
        $("code").slideUp(888).delay(888); // then take the text art (the one that says madagascar), which is code and slide it up to hide it, then delay 888 milliseconds
        $("#accordion").delay(888).slideDown(1508); // now the accordion will slide down in 1508 milliseconds but first we need to delay it another 888 milliseconds
        $("#end").delay(890).fadeIn(888);
    }); // close the click function
    $("#end").on("click", function() { // now when button 2 is clicked ...
        $(this).fadeOut(887); // fade button 2 (this) out
        $("#start").delay(890).fadeIn(887); // then make the start button delay 887 milliseconds and fade in in 888 milliseconds
        $("#accordion").slideUp(888).delay(888); // now we must hide the accordion by sliding it up and then delay 888 milliseconds
        $("code").delay(888).slideDown(1508); // now slide down the code but first delay 888 milliseconds then slide down in 1508 milliseconds
    }); // close the click function
  });