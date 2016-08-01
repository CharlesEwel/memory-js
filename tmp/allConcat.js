$(function() {
  $(".card").click(function(event){
    $(this).find(".face-down").hide();
    $(this).find(".face-up").show();
  });
});
