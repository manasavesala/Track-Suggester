$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var UIimp = $("input:radio[name=interest]:checked").val();
    var Company = $("input:radio[name=company]:checked").val();
    var Development = $("input:radio[name=development]:checked").val();
    var Learn = $("input:radio[name=learn]:checked").val();
    var Language = $("input:radio[name=language]:checked").val();

    
    console.log(UIimp);
    console.log(Company);
    console.log(Development);
    console.log(Learn);
    console.language(Language);

    if(UIimp === "veryimp" && Company === "bigcmpy"){
      $("#ruby").show();
      $("#csharp").hide();
      $("#php").hide();
      $("#java").hide();
    }else if(Company === "bigcmpy" && UIimp === "prettyimp"){
      $("#java").show();
      $("#php").hide();
      $("#java").hide();
      $("#csharp").hide();
    }else if(UIimp === "mostimp" || Learn === "content" || Company === "startup" || Development === "money"){
      $("#php").show();
      $("#csharp").hide();
      $("#ruby").hide();
      $("#java").hide();
    }else if(Language === "cs"){
      $("#php").shoe();
      $("#csharp").hide();
      $("#ruby").hide();
      $("#java").hide();
    }


  
  });
});
