var Handling_Processing_D_Page_Title = document.getElementById(
  "Handling_Processing_D_Page_Title"
);
var Handling_Processing_D_H1 = document.getElementById(
  "Handling_Processing_D_H1"
);
function Handling_Processing_D_Load_Content_Ar() {
  Handling_Processing_D_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "تصنيع وتداول المنتجات الزراعية";
}
function Handling_Processing_D_Load_Content_En() {
  Handling_Processing_D_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Crop Handling & Processing Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Handling_Processing_D_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Handling_Processing_D_Load_Content_Ar();
}
