$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var UIimp = $("input:radio[name=interest]:checked").val();
    console.log(UIimp);
    if(UIimp === "prettyimportant"){
      $("#java").show();
    }
    
  
  });
});
