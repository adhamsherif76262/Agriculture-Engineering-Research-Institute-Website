var Research_ProjectsTitle = document.getElementById("Research_Projects_Page_Title");
var Research_Projects_H1 = document.getElementById("Research_Projects_H1");
function Research_Projects_Load_Content_Ar() {
  Research_Projects_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "مشاريع بحثية";
}
function Research_Projects_Load_Content_En() {
  Research_Projects_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Research Projects Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Research_Projects_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Research_Projects_Load_Content_Ar();
}
