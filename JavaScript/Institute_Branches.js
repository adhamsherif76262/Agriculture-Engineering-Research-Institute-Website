var Institute_Branches_Title = document.getElementById("Institute_Branches_Page_Title");
var Institute_Branches_H1 = document.getElementById("Institute_Branches_H1");
function Institute_Branches_Load_Content_Ar() {
  Institute_Branches_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "فروع المعهد";
}
function Institute_Branches_Load_Content_En() {
  Institute_Branches_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Institute Branches Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Institute_Branches_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Institute_Branches_Load_Content_Ar();
}
