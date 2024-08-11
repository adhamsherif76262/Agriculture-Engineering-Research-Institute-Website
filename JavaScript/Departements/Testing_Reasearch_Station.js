var Testing_Reasearch_Station_Page_Title = document.getElementById(
  "Testing_Reasearch_Station_Page_Title"
);
var Testing_Reasearch_Station_H1 = document.getElementById(
  "Testing_Reasearch_Station_H1"
);
function Testing_Reasearch_Station_Load_Content_Ar() {
  Testing_Reasearch_Station_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "محطة أبحاث و أختبار الجرارات و الالات الزراعية";
}
function Testing_Reasearch_Station_Load_Content_En() {
  Testing_Reasearch_Station_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Testing & Reasearch Station For Tractor & Farm Machinery Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Testing_Reasearch_Station_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Testing_Reasearch_Station_Load_Content_Ar();
}
