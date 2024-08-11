var Rice_Mechanization_Center_Page_Title = document.getElementById(
  "Rice_Mechanization_Center_Page_Title"
);
var Rice_Mechanization_Center_H1 = document.getElementById(
  "Rice_Mechanization_Center_H1"
);
function Rice_Mechanization_Center_Load_Content_Ar() {
  Rice_Mechanization_Center_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "نبذه عن مركز ميكنة الارز";
}
function Rice_Mechanization_Center_Load_Content_En() {
  Rice_Mechanization_Center_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Rice Mechanization Center Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Rice_Mechanization_Center_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Rice_Mechanization_Center_Load_Content_Ar();
}
