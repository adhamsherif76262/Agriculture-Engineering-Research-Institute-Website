var Irrigation_Engineering_RD_Page_Title = document.getElementById(
  "Irrigation_Engineering_RD_Page_Title"
);
var Irrigation_Engineering_RD_H1 = document.getElementById(
  "Irrigation_Engineering_RD_H1"
);
function Irrigation_Engineering_RD_Load_Content_Ar() {
  Irrigation_Engineering_RD_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "هندسة الرى والصرف الحقلى";
}
function Irrigation_Engineering_RD_Load_Content_En() {
  Irrigation_Engineering_RD_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Irrigation Engineering Research Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Irrigation_Engineering_RD_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Irrigation_Engineering_RD_Load_Content_Ar();
}
