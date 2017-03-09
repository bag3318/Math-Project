  $(document).ready(function() {
    $("button").button();
    $("#hidden1").hide();
    $("#hidden2").hide();
    $("#hidden3").hide();
    $("#hidden4").hide();
    $("#hidden5, #hidden6, #hidden7").hide();
    $("#accordion").accordion({
      heightStyle: "content",
      collapsible: true
    });
    $("#tabs, #tabs2").tabs({
        collabsible: true
    });
    $("#show1").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden1").toggle(); 
  
        return false;
    });
    $("#show2").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden2").toggle(); 
  
        return false;
    });
    $("#show3").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden3").toggle(); 
  
        return false;
    });
    $("#show4").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden4").toggle(); 
  
        return false;
    });
    $("#show5").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden5").toggle(); 
    
        return false;
    });
    $("#show6").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden6").toggle(); 
    
        return false;
    });
    $("#show7").on("click", function(){
        if($(this).text() == "Show Answer")
        {
            $(this).text("Hide Answer");
        } else {
            $(this).text("Show Answer");
        }
        $("#hidden7").toggle(); 
    
        return false;
    });
  });