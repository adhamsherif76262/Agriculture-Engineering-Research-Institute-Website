function Switch_NavBar_Lang_En(){
    HomePageTitle[0].setAttribute("lang", "en");
    Ar_Nav.classList.add("D_None");
    En_Nav.classList.remove("D_None");
    En_Nav.innerHTML = En_NavTemplate;
}

function LangBtnEnClick() {
  console.log("onclick=LangBtnEnClick()");
  console.log("666666666666666666");
  localStorage.setItem("Permenant_Language" , "English");
  alert("The Language Now is :: " + localStorage.getItem("Permenant_Language"));
//   sessionStorage.setItem("Permenant_Language" , "English");
//   alert("The Language Now is :: " + sessionStorage.getItem("Permenant_Language"));


    switch (true) {
      case location.href.includes("/Institute_Sections") ||
        location.href.includes("/institute_sections"):
        alert("Heloo from Institute Sections ENG");
        HomePageTitle[0].innerHTML = "AERI Institute Sections Page";
        Switch_NavBar_Lang_En();
        IS_Load_Content_En();
        break;
      case location.href.includes("/Patents") ||
        location.href.includes("/patents"):
        alert("Heloo from Patents ENG");
        HomePageTitle[0].innerHTML = "AERI Patents Page";
        Switch_NavBar_Lang_En();
        Patents_Load_Content_En();
        break;

      case location.href.includes("/Contact_Us") ||
        location.href.includes("/contact_us"):
        alert("Heloo from contact ENG");
        Contact_Load_Content_En();
        console.log(Contact_H1);
        HomePageTitle[0].innerHTML = "AERI Contact Us Page";
        Switch_NavBar_Lang_En();
        break;
      case location.href.includes("/Helping_Units") ||
        location.href.includes("/helping_units"):
        alert("Heloo from Helping Units ENG");
        HomePageTitle[0].innerHTML = "AERI Helping Units Page";
        Switch_NavBar_Lang_En();
        Helping_Units_Load_Content_En();
        break;

      case location.href.includes("/Institute_Branches") ||
        location.href.includes("/institute_branches"):
        alert("Heloo from Institute Branches ENG");
        HomePageTitle[0].innerHTML = "AERI Institute Branches Page";
        Switch_NavBar_Lang_En();
        Institute_Branches_Load_Content_En();
        break;

      case location.href.includes("/Permanent_Exhibition") ||
        location.href.includes("/permanent_exhibition"):
        alert("Heloo from Permanent Exhibition ENG");
        HomePageTitle[0].innerHTML = "AERI Permanent Exhibition Page";
        Switch_NavBar_Lang_En();
        Permanent_Exhibition_Load_Content_En();
        break;

      case location.href.includes("/Research_Projects") ||
        location.href.includes("/research_projects"):
        alert("Heloo from Research Projects ENG");
        HomePageTitle[0].innerHTML = "AERI Research Projects Page";
        Switch_NavBar_Lang_En();
        Research_Projects_Load_Content_En();
        break;

      case location.href.includes("/Overview") ||
        location.href.includes("/overview"):
        alert("Heloo from Overview ENG");
        HomePageTitle[0].innerHTML = "AERI Overview Page";
        Switch_NavBar_Lang_En();
        Overview_Load_Content_En();
        break;

      default:
        alert("Heloo from Home ENG");
        HomePageTitle[0].innerHTML = "AERI Home Page";
        Switch_NavBar_Lang_En();
        Home_Load_Content_En();
        break;
    }
}
