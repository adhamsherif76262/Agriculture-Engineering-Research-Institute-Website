var Animal_Production_Mechanization_Page_Title = document.getElementById(
  "Animal_Production_Mechanization_Page_Title"
);
var Animal_Production_Mechanization_H1 = document.getElementById(
  "Animal_Production_Mechanization_H1"
);
function Animal_Production_Mechanization_Load_Content_Ar() {
  Animal_Production_Mechanization_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
      HomePageTitle[0].innerHTML = "الانتاج الحيوانى والسمكي والداجنى";
}
function Animal_Production_Mechanization_Load_Content_En() {
  Animal_Production_Mechanization_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI APM Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Animal_Production_Mechanization_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Animal_Production_Mechanization_Load_Content_Ar();
}
