window.onscroll = function() {scrollFunction()};

function scrollFunction() {
//   Navbar
  var element = document.getElementById("navbar");
  var h = document.getElementById('navbar').clientHeight;
  if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
    element.classList.add("solid-navbar")
  } else {
    element.classList.remove("solid-navbar")
  }
  
}

//   Notification
  var notification = document.getElementById("notification")
  if (notification) {
	  var navbar = document.getElementById("navbar")
	  navbar.classList.add("fixed-navbar-notification")
  }

$( document ).ready(function() {
  
	$( "#responsive" ).click(function() {
	  $( "#mobile-navbar" ).slideToggle( "fast")
	});
	
});
