var Overview_Title = document.getElementById("Overview_Page_Title");
var Overview_H1 = document.getElementById("Overview_H1");
function Overview_Load_Content_Ar() {
  Overview_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  HomePageTitle[0].innerHTML = "نبذة";
}
function Overview_Load_Content_En() {
  Overview_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Overview Page";
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Overview_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Overview_Load_Content_Ar();
}
