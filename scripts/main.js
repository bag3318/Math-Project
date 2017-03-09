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
  });