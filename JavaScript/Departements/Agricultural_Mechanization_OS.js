var Agricultural_Mechanization_OS_Page_Title = document.getElementById("Agricultural_Mechanization_OS_Page_Title");
var Agricultural_Mechanization_OS_H1 = document.getElementById("Agricultural_Mechanization_OS_H1");
function Agricultural_Mechanization_OS_Load_Content_Ar() {
  Agricultural_Mechanization_OS_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "نظم ميكنة العمليات الزراعية";
}
function Agricultural_Mechanization_OS_Load_Content_En() {
  Agricultural_Mechanization_OS_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI AMOS Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Agricultural_Mechanization_OS_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Agricultural_Mechanization_OS_Load_Content_Ar();
}
