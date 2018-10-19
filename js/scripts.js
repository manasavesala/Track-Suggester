$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var Language = $("#language").val();
    var UIimp = $("input:radio[name=interest]:checked").val();
    var Company = $("input:radio[name=company]:checked").val();
    var Development = $("input:radio[name=development]:checked").val();
    var Learn = $("input:radio[name=learn]:checked").val();
    var Demand = $("input:radio[name=demand]:checked").val();
    var Name = $("#name").val();
    
    console.log(UIimp);
    console.log(Company);
    console.log(Development);
    console.log(Learn);
    console.log(Demand);
    console.log(Language);
    $(".person").text(Name);
    if(Name === ""){
      alert("Please,Enter Your Name.");
    }else if(Language === "ja"){
      $(".sug").show();
      $("#java").show();
    }else if(UIimp === "veryimp" && Company === "bigcmpy"){
      $(".sug").show();
      $("#ruby").show();
      $("#css").show();
      $("#csharp").hide();
      $("#php").hide();
      $("#java").hide();
      $("#design").hide();
    }else if(Company === "bigcmpy" && UIimp === "someimp"){
      $("#sug").show();
      $("#csharp").show();
      $("#css").show();
      $("#php").hide();
      $("#java").hide();
      $("#ruby").hide();
      $("#design").hide();
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
