
$(document).scroll(function(){
  var height = $(".navbar").height();
  if( $(this).scrollTop() > height){
    $(".navbar").css("background-color","#101010" );
  }else{
    $(".navbar").css("background-color","#1a2930");
  }
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

document.querySelector(".card-flip").classList.toggle("flip");

/* 
 * Holder.js for demo image
 * Just for demo purpose
 */
Holder.addTheme('gray', {
  bg: '#777',
  fg: 'rgba(255,255,255,.75)',
  font: 'Helvetica',
  fontweight: 'normal'
});
