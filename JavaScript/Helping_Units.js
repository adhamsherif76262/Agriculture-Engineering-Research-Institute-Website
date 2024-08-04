var Helping_Units_Title = document.getElementById("Helping_Units_Page_Title");
var Helping_Units_H1 = document.getElementById("Helping_Units_H1");
function Helping_Units_Load_Content_Ar() {
  Helping_Units_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "وحدات مساعدة";
}
function Helping_Units_Load_Content_En() {
  Helping_Units_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Helping Units Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Helping_Units_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Helping_Units_Load_Content_Ar();
}
