$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var Language = $("#language").val();
    var UIimp = $("input:radio[name=interest]:checked").val();
    var Company = $("input:radio[name=company]:checked").val();
    var Development = $("input:radio[name=development]:checked").val();
    var Learn = $("input:radio[name=learn]:checked").val();
    var Demand = $("input:radio[name=demand]:checked").val();
    var Interest = $("input:radio[name=interest]:checked").val();
    var Name = $("#name").val();
    
    $(".person").text(Name);
    if(Name === ""){
      alert("Please,Enter Your Name.");
    }else if(Language === "ja"){
      $(".sug").show();
      $("#java").show();
/*

      $("#csharp").hide();
      $("#css").hide();
      $("#ruby").hide();
      $("#php").hide();
      $("#design").hide();
      $("#javascript").hide(); 
      $("#bootstrap").hide(); 
*/
    }else if(Language === "c"){
      $(".sug").show();
      $("#csharp").show();
/*

      $("#css").hide();
      $("#php").hide();
      $("#java").hide();
      $("#ruby").hide();
      $("#design").hide();
      $("#javascript").hide(); 
      $("#bootstrap").hide(); 
*/
    }else if(Language === "cs"){
      $(".sug").show();
      $("#css").show();
/*
      $("#csharp").hide();
      $("#php").hide();
      $("#ruby").hide();
      $("#java").hide();
      $("#design").hide(); 
      $("#javascript").hide(); 
      $("#bootstrap").hide(); 
*/
    }
  });
});



$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var Language = $("#language").val();
    var UIimp = $("input:radio[name=interest]:checked").val();
    var Company = $("input:radio[name=company]:checked").val();
    var Development = $("input:radio[name=development]:checked").val();
    var Learn = $("input:radio[name=learn]:checked").val();
    var Demand = $("input:radio[name=demand]:checked").val();
    var Interest = $("input:radio[name=interest]:checked").val();

    if(Development === "datarichapp" || Development === "design" || Company === "startup" || Company === "contentcmpy"){
      $("#php").show();
    }else if(Development === "program" || Development === "money" || Company === "bigcmpy"){
      $("#ruby").show();
    }
  });
});

$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var Language = $("#language").val();
    var UIimp = $("input:radio[name=interest]:checked").val();
    var Company = $("input:radio[name=company]:checked").val();
    var Development = $("input:radio[name=development]:checked").val();
    var Learn = $("input:radio[name=learn]:checked").val();
    var Demand = $("input:radio[name=demand]:checked").val();
    var Interest = $("input:radio[name=interest]:checked").val();

    if(Learn === "coding" || Learn === "webpage" || Demand === "useful"|| Demand === "quick"){
      $("#javascript").show();
    }else if(Learn === "content" || Demand === "enjoy" || Interest === "someimp"){
      $("#bootstrap").show();
    }else if(Interest === "veryimp" || Interest === "mostimp"){
      $("#css").show();
    }
  });
});
