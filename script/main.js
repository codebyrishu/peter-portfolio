function opennav() {
    document.getElementById("mobile-menu").style.transform = "translateX(0%)"
  };
  function closenav() {
    document.getElementById("mobile-menu").style.transform = "translateX(120%)"
  };
  
  window.onload = function(){
    document.getElementById("hide-loader").style.display = "none";
  }