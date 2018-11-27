window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var element = document.getElementById("navbar");
  var h = document.getElementById('navbar').clientHeight;
  if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
    element.classList.add("solid-navbar")
  } else {
    element.classList.remove("solid-navbar")
  }
}

$( document ).ready(function() {
  
	$( "#responsive" ).click(function() {
	  $( "#mobile-navbar" ).slideToggle( "fast")
	});
	
});
