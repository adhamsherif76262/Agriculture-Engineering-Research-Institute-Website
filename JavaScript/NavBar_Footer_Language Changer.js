var En_Nav = document.getElementById("English_NavBar");
var Ar_Nav = document.getElementById("Arabic_NavBar");
var HomePageTitle = document.getElementsByTagName("title");
var LangBtnEn = `<button onclick="LangBtnEnClick()" type="button" id="LangBtnEn" title="Language Button">English</button>`;
var LangBtnAr = `<button onclick="LangBtnArClick()" type="button" id="LangBtnAr" title="Language Button">عربي</button>`;
var HTMLpath = "";
var IMAGESpath = ".";
if (location.href.includes("/Home") || location.href.includes("/home")){
  alert(`I${HTMLpath}am${HTMLpath}Home`);
  HTMLpath = "./HTML/";
  IMAGESpath = ""
}
// ${LangBtnEn}
// ${LangBtnEn}
// ${LangBtnEn}
var Ar_NavTemplate = `
  <div id="Upper_NavBar_Ar" class="Flex_Direction_Ar">
<a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="ARC_Logo" href=".${IMAGESpath}/Home.html"><img class="NavBar_Logos" src=".${IMAGESpath}/Images/AERI-ARC-Logo_-removebg .png" alt="Agriculture Engineering Institute Logo"></a>
    <p id="NavBar_P_Ar">معهد بحوث الهندسة الزراعية</p>
    ${LangBtnEn}
  </div>
  <div id="navbar">
    <div id="Lower_NavBar">
      <div id = "Nav_Links_Container_Ar">
          <a onmouseover="Mouse_Over(this); Mouse_Over_Special(this);" onmouseout="Mouse_Leave(this); Mouse_Leave_Special(this);" class="Nav_Links Nav_Links_Ar" href=".${IMAGESpath}/Home.html">الرئيسية</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Institute_Sections.html">الأقسام</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Helping_Units.html">وحدات مساعدة</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Institute_Branches.html">فروع المعهد</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Patents.html">برءات الاختراع</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Permanent_Exhibition.html">المعرض الدائم</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Research_Projects.html">مشاريع بحثية</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Overview.html">نبذة</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Contact_Us.html">الإتصال بنا</a>
      </div>
    </div>
  </div>
`;

// ${LangBtnAr}
// ${LangBtnAr}
// ${LangBtnAr}
// ${LangBtnAr}
var En_NavTemplate = `
<div id="Upper_NavBar_En" class="Flex_Direction_En">
<a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="" href=".${IMAGESpath}/Home.html"><img class="NavBar_Logos" src=".${IMAGESpath}/Images/AERI-ARC-Logo_-removebg .png" alt="Agriculture Engineering Institute Logo"></a>

<p id="NavBar_P_En">Agriculture Engineering Research Institute</p>
${LangBtnAr}
</div>
<div id="navbar">
        <div id="Lower_NavBar">
        <div id = "Nav_Links_Container_En">
                <a onmouseover="Mouse_Over(this); Mouse_Over_Special(this);" onmouseout="Mouse_Leave(this); Mouse_Leave_Special(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Contact_Us.html">Contact Us</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Overview.html">Overview</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Research_Projects.html">Research Projects</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Permanent_Exhibition.html">Permanent Exhibition</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Patents.html">Patents</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Institute_Branches.html">Institute Branches</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Helping_Units.html">Helping Units</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Institute_Sections.html">Institute Sections</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href=".${IMAGESpath}/Home.html">Home</a>
            </div>
          </div>
        </div>
    `;

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
  if(window.innerWidth > 1485){

    En_Nav.style.height = "382px"
    Ar_Nav.style.height = "345px"
  }
  
  $(anchor)
  .siblings()
  .css({ 
    transition:"0.5s",
    opacity:"0.2",
    filter:"blur(5px)",
  });
  $(anchor).css({
    fontSize: "33px",
    color: "white",
  });
}
function Mouse_Leave(anchor){
  if(window.innerWidth > 1485){
    En_Nav.style.height = "330px";
    Ar_Nav.style.height = "300px";
  }
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

console.log(localStorage.getItem("Permenant_Language"));
if (localStorage.getItem("Permenant_Language") === "English"){
  NavIsEn();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  NavIsAR();
}
  function NavIsAR() {
    Ar_Nav.innerHTML = Ar_NavTemplate;
    En_Nav.classList.add("D_None");
    Ar_Nav.classList.remove("D_None");
  }
function NavIsEn(){
      En_Nav.innerHTML = En_NavTemplate;
      Ar_Nav.classList.add("D_None");
      En_Nav.classList.remove("D_None");
}

En_Nav.classList.add("Text_Direction_En");
Ar_Nav.classList.add("Text_Direction_Ar");

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //   document.getElementById("Arabic_NavBar").style.padding = "10px 10px";
  //   document.getElementById("English_NavBar").style.padding = "10px 10px";
  // } else {
  //   document.getElementById("Arabic_NavBar").style.padding = "30px 10px";
  //   document.getElementById("English_NavBar").style.padding = "30px 10px";
  // }
}