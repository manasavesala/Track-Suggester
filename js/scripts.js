$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var Language = $("#language").val();
    var UIimp = $("input:radio[name=interest]:checked").val();
    var Company = $("input:radio[name=company]:checked").val();
    var Development = $("input:radio[name=development]:checked").val();
    var Learn = $("input:radio[name=learn]:checked").val();
    var Demand = $("input:radio[name=demand]:checked").val();

    
    console.log(UIimp);
    console.log(Company);
    console.log(Development);
    console.log(Learn);
    console.log(Demand);
    console.log(Language);

    if(UIimp === "veryimp" && Company === "bigcmpy"){
      $("#ruby").show();
      $("#css").show();
      $("#csharp").hide();
      $("#php").hide();
      $("#java").hide();
      $("#design").hide();
    }else if(Company === "bigcmpy" && UIimp === "someimp"){
      $("#csharp").show();
      $("#design").show();
      $("#php").hide();
      $("#java").hide();
      $("#ruby").hide();
      $("css").hide();
    }else if(UIimp === "mostimp" || Learn === "content" || Company === "startup" || Development === "money"){
      $("#php").show();
      $("#design").show();
      $("#csharp").hide();
      $("#ruby").hide();
      $("#java").hide();
      $("#css").hide();
    }else if(Language === "cs" || Language === "wd"){
      $("#design").show();
      $("#css").show();
      $("#csharp").hide();
      $("#ruby").hide();
      $("#php").hide();
      $("#java").hide();
    }



  
  });
});
