document.addEventListener("DOMContentLoaded", function () {
  var coll = document.getElementsByClassName("collapsible");
  var col_symb = document.getElementsByClassName("collapsible-symbol");

  for (var i = 0; i < coll.length; i++) {
    (function(index) {
      coll[index].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
          col_symb[index].innerHTML = "+";
        } else {
          content.style.display = "block";
          col_symb[index].innerHTML = "-";
        }
      });
    })(i);
  }
});
