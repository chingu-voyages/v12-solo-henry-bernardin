window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 44 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav-links-purple").id = "nav-links-white";
  } else {
    document.getElementById("nav-links-white").id = "nav-links-purple";
  }
}