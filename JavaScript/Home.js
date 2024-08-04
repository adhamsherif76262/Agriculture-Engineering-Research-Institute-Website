var titleHome = document.getElementById("Title_Home");
var homeH1 = document.getElementById("Home_H1");
function Home_Load_Content_Ar() {
  homeH1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "الرئيسية";
}
function Home_Load_Content_En() {
  homeH1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Home Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Home_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Home_Load_Content_Ar();
}
