window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector("#nav").style.background = "rgba(22, 22, 22, 0.99)";
    document.querySelector("#nav").style.transitionDuration = ".5s"
 
  } else {
    document.querySelector("#nav").style.background = "none";
  }
}




