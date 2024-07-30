var LangBtn = document.getElementById("Language_Switch");
var En_Nav = document.getElementById("English_NavBar");
var Ar_Nav = document.getElementById("Arabic_NavBar");
var Upper_NavBar_En = document.getElementById("Upper_NavBar_En");
var Upper_NavBar_Ar = document.getElementById("Upper_NavBar_Ar");
var PageTitle = document.getElementsByTagName("title");
var title = PageTitle[0].innerHTML;
var navItems = document.querySelectorAll(".Nav_Links");

var Ar_NavTemplate = `
          <div id="Upper_NavBar_Ar" class="Flex_Direction_Ar">
              <img class="NavBar_Logos" width="100" height="100" src="../Images/AERI Logo .jpg" alt="Agriculture Engineering Institute Logo">
              <p id="NavBar_P">معهد بحوث الهندسة الزراعية</p>
              <img class="NavBar_Logos" width="150" height="100" src="../Images/ARC Logo .png" alt="Agriculture Research Center Logo"></img>
          </div>
          <div id="navbar">
              <div id="Lower_NavBar">
                   <div id = "Nav_Links_Container">
                      <a onmouseover="Mouse_Over(this); Mouse_Over_Special(this);" onmouseout="Mouse_Leave(this); Mouse_Leave_Special(this);" class="Nav_Links Nav_Links_Ar" href="../HTML/Home.html">الرئيسية</a>
                      <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="../HTML/Institute Sections .html">الأقسام</a>
                      <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="../HTML/Helping Units .html">وحدات مساعدة</a>
                      <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="../HTML/Institute Branches .html">فروع المعهد</a>
                      <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="../HTML/Patents .html">برءات الاختراع</a>
                      <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="../HTML/Permanent Exhibition .html">المعرض الدائم</a>
                      <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="../HTML/Research Projects.html">مشاريع بحثية</a>
                      <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="../HTML/Overview.html">نبذة</a>
                      <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="../HTML/Contact Us .html">الإتصال بنا</a>
                  </div>
              </div>
          </div>
    `;

var En_NavTemplate = `<div id="Upper_NavBar_En" class="Flex_Direction_En">
            <img class="NavBar_Logos" width="100" height="100" src="../Images/AERI_Logo_-removebg-preview.png" alt="Agriculture Engineering Institute Logo">
            <p id="NavBar_P">Agriculture Engineering Research Institute</p>
            <img class="NavBar_Logos" width="150" height="100" src="../Images/ARC_Logo_-removebg-preview.png" alt="Agriculture Engineering Institute Logo">
        </div>
        <div id="navbar">
          <div id="Lower_NavBar">
            <div id = "Nav_Links_Container">
                <a onmouseover="Mouse_Over(this); Mouse_Over_Special(this);" onmouseout="Mouse_Leave(this); Mouse_Leave_Special(this);" class="Nav_Links Nav_Links_En" href="../HTML/Contact Us .html">Contact Us</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="../HTML/Overview.html">Overview</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="../HTML/Research Projects.html">Research Projects</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="../HTML/Permanent Exhibition .html">Permanent Exhibition</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="../HTML/Patents .html">Patents</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="../HTML/Institute Branches .html">Institute Branches</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="../HTML/Helping Units .html">Helping Units</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="../HTML/Institute Sections .html">Institute Sections</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="../HTML/Home.html">Home</a>
            </div>
          </div>
        </div>`;

title = title.slice(5);
title = title.substring(0, title.length - 5);
console.log("object")

function Mouse_Over_Special(Special_Anchor){
  $(Special_Anchor).css({
    color: "white",
    marginLeft: "-6%",
  });
}
function Mouse_Leave_Special(Special_Anchor){
  $(Special_Anchor).css({
    color: "Black",
    marginLeft: "0px",
  });
}
function Mouse_Over(anchor){
  En_Nav.style.height = "360px"
  Ar_Nav.style.height = "300px"
  
  $(anchor)
  .siblings()
  .css({ 
    transition:"0.5s",
    opacity:"0.2",
    filter:"blur(5px)",
  });
  $(anchor).css({
    fontSize: "50px",
    color: "white",
  });
}
function Mouse_Leave(anchor){
  En_Nav.style.height = "300px"
  Ar_Nav.style.height = "300px"
  $(anchor)
  .siblings()
  .css({ 
    transition:"0.5s",
    opacity:"1",
            filter:"blur(0px)",
          });
          $(".Nav_Links_En").css({
            width: "min-content",
            height: "fit-content",
            fontSize: "25px",
            color: "Black",
          });
          $(".Nav_Links_Ar").css({
            width: "fit-content",
            height: "fit-content",
            fontSize: "25px",
            color: "Black",
          });
}
const xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    "https://api.geoapify.com/v1/ipinfo?&apiKey=b1eafd427c864fd8ad4009a48be4ec1f"
  );
  xhr.onload = function(){
    JSON.parse(xhr.responseText);
    console.log(JSON.parse(xhr.responseText));
    if (JSON.parse(xhr.responseText).country.languages[0].name_native === "العربية") {
      Ar_Nav.innerHTML = Ar_NavTemplate;
      LangBtn.innerHTML = "English";
      En_Nav.classList.add("D_None");
      Ar_Nav.classList.remove("D_None");
    } else {
      En_Nav.innerHTML = En_NavTemplate;
      LangBtn.innerHTML = "عربي";
      Ar_Nav.classList.add("D_None");
      En_Nav.classList.remove("D_None");
    }
  }
    
  xhr.send();

document.addEventListener("DOMContentLoaded", function () {

  if (LangBtn.innerHTML === "ُEnglish") {
    En_Nav.classList.add("D_None");
    Ar_Nav.classList.remove("D_None");
  } else if (LangBtn.innerHTML === "عربي") {
    Ar_Nav.classList.add("D_None");
    En_Nav.classList.remove("D_None");
  }
});

En_Nav.classList.add("Text_Direction_En");
Ar_Nav.classList.add("Text_Direction_Ar");

LangBtn.addEventListener("click", function () {
  if (LangBtn.innerHTML === "English") {
    console.log("666666666666666666");
    PageTitle[0].innerHTML = "الرئيسية";
    PageTitle[0].setAttribute("lang", "ar");
    LangBtn.innerHTML = "عربي";
    Ar_Nav.classList.add("D_None");
    En_Nav.classList.remove("D_None");
    En_Nav.innerHTML = En_NavTemplate;
  } else if (LangBtn.innerHTML === "عربي") {
    PageTitle[0].innerHTML = "AERI Home Page";
    PageTitle[0].setAttribute("lang", "en");
    LangBtn.innerHTML = "English";
    Ar_Nav.innerHTML = Ar_NavTemplate;
    En_Nav.classList.add("D_None");
    Ar_Nav.classList.remove("D_None");
  }
});
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("Arabic_NavBar").style.padding = "10px 10px";
    document.getElementById("English_NavBar").style.padding = "10px 10px";
  } else {
    document.getElementById("Arabic_NavBar").style.padding = "30px 10px";
    document.getElementById("English_NavBar").style.padding = "30px 10px";
  }
}