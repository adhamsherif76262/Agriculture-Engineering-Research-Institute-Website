var Agricultural_Power_Energy_Page_Title = document.getElementById(
  "Agricultural_Power_Energy_Page_Title"
);
var Agricultural_Power_Energy_H1 = document.getElementById(
  "Agricultural_Power_Energy_H1"
);
function Agricultural_Power_Energy_Load_Content_Ar() {
  Agricultural_Power_Energy_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "القوى والطاقة";
}
function Agricultural_Power_Energy_Load_Content_En() {
  Agricultural_Power_Energy_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI APE Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Agricultural_Power_Energy_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Agricultural_Power_Energy_Load_Content_Ar();
}