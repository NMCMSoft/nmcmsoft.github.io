document.addEventListener('DOMContentLoaded', () => {
    /*ELEMENT CONTENT - TEMPLATE ELEMENT NAME*/
    loadHTML('templates/footerblock.html', 'TEMPLATE-IS-FOOTER-BLOCK');
    loadHTML('templates/topbarblock.html', 'TEMPLATE-TOPBAR-BLOCK');



});

function openCity(evt, optname) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(optname).style.display = "block";
  evt.currentTarget.className += " active";

}