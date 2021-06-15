var i = 0;
var text = 'Kickstart your morning with us!'; 
var speed = 170; 

function typeWriter() {
  if (i < text.length) {
    document.getElementById("headline").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

$(document).ready(function(){
  $(this).scrollTop(0);
});

$(document).ready(function() {
  $(window).scroll(function() {
     if($(this).scrollTop() > 1) { 
         $('.navbar').addClass('navbar-color');
     } else {
         $('.navbar').removeClass('navbar-color');
     }
  });
});

typeWriter();
