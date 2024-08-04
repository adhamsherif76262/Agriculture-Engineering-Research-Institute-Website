var Patents_Title = document.getElementById("Patents_Page_Title");
var Patents_h1 = document.getElementById("Patents_h1");
function Patents_Load_Content_Ar() {
  Patents_h1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "برءات الاختراع";
}
function Patents_Load_Content_En() {
  Patents_h1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Patents Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Patents_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Patents_Load_Content_Ar();
}
