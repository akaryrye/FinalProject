var modal = document.getElementById("myModal");
var exit = document.getElementsByClassName("close")[0];

window.onload = function() {
  modal.style.display = "block";

  var is21 = localStorage.getItem("is21");

  is21 === "true"
    ? (modal.style.display = "none")
    : (modal.style.display = "block");

  exit.onclick = function() {
    location.href = "https://www.disney.com";
  };
  document.getElementById("no").onclick = function() {
    localStorage.setItem("is21", "false");
    location.href = "https://cponline.pw/";
  };
  document.getElementById("yes").onclick = function() {
    localStorage.setItem("is21", "true");
    modal.style.display = "none";
  };
};

// <div id="myModal" class="modal">
//                 <!-- Modal content -->
//                 <div class="modal-content">
//                   <span class="close">&times;</span>
//                   <p id="age">You must be 21 or over to view this page</p>
//                   <button type="button" class="no" id="no">
//                     Leave
//                   </button>
//                   <button
//                     type="button"
//                     class="yes"
//                     id="yes"
//                     data-dismiss="modal"
//                   >
//                     Enter
//                   </button>
//                 </div>
//               </div>
