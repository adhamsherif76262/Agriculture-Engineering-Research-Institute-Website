var Biological_Engineering_Page_Title = document.getElementById(
  "Biological_Engineering_Page_Title"
);
// var Biological_Engineering_H1 = document.getElementById(
//   "Biological_Engineering_H1"
// );
var Biological_Engineering_Span_1 = document.getElementById(
  "Biological_Engineering_Span_1"
);
var Biological_Engineering_Span_2 = document.getElementById(
  "Biological_Engineering_Span_2"
);
function Biological_Engineering_Load_Content_Ar() {
    Biological_Engineering_Span_1.textContent = "نظم الهندسة";
    Biological_Engineering_Span_2.textContent = "الحيوية الزراعية";
    // Biological_Engineering_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
    HomePageTitle[0].innerHTML = "نظم الهندسة الحيوية الزراعية";
  }
  function Biological_Engineering_Load_Content_En() {
  Biological_Engineering_Span_1.textContent = "Biological";
  Biological_Engineering_Span_2.textContent = "Engineering";
  // Biological_Engineering_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Biological Engineering Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Biological_Engineering_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Biological_Engineering_Load_Content_Ar();
}
