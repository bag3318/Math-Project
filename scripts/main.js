  $(document).ready(function() {
    $("button").button();
    $("#hidden1, #hidden2, #hidden3, #hidden4, #hidden5, #hidden6, #hidden7, #hidden8, #hidden9, #hidden10").hide();
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
        $("#hidden1").slideToggle(); 
  
        return false;
    });
    $("#show2").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden2").slideToggle(); 
  
        return false;
    });
    $("#show3").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden3").slideToggle(); 
  
        return false;
    });
    $("#show4").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden4").slideToggle(); 
  
        return false;
    });
    $("#show5").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden5").slideToggle(); 
    
        return false;
    });
    $("#show6").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden6").slideToggle(); 
    
        return false;
    });
    $("#show7").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden7").slideToggle(); 
    
        return false;
    });
    $("#show8").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden8").slideToggle(); 
    
        return false;
    });
    $("#show9").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden9").slideToggle(); 
    
        return false;
    });
    $("#show10").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden10").slideToggle(); 
    
        return false;
    });
  });