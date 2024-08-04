var titleIS = document.getElementById("Institute_Sections_Page_Title");
var Is_h1 = document.getElementById("Institute_Sections_H1");
function IS_Load_Content_Ar() {
  Is_h1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "الأقسام";
}
function IS_Load_Content_En() {
  Is_h1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Institute Sections Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  IS_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  IS_Load_Content_Ar();
}
