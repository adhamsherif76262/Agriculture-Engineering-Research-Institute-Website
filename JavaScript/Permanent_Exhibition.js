var Permanent_Exhibition_Title = document.getElementById(
  "Permanent_Exhibition_Page_Title"
);
var Permanent_Exhibition_H1 = document.getElementById(
  "Permanent_Exhibition_H1"
);
function Permanent_Exhibition_Load_Content_Ar() {
  Permanent_Exhibition_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "المعرض الدائم";
}
function Permanent_Exhibition_Load_Content_En() {
  Permanent_Exhibition_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Permanent Exhibition Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Permanent_Exhibition_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Permanent_Exhibition_Load_Content_Ar();
}
