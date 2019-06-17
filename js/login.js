$(document).ready(function(e) {
  $('#recover').click(function(e) {
    e.preventDefault();
    
    $('.splas').hide();
    $('.recuperar').show();
  });
  
  $("#registro").click(function(e){
    e.preventDefault();

    $('.splas').hide();
    $(".registro_user").show();
  })
});
