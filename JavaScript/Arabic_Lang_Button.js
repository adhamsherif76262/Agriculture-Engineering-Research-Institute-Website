
function Switch_NavBar_Lang_Ar(){
    HomePageTitle[0].setAttribute("lang", "ar");
    Ar_Nav.innerHTML = Ar_NavTemplate;
    En_Nav.classList.add("D_None");
    Ar_Nav.classList.remove("D_None");
}
function Switch_Footer_Lang_Ar() {
  Main_Footer[0].innerHTML = Ar_FooterTemplate;
}
function LangBtnArClick() {
    console.log("onclick=LangBtnArClick()");

  localStorage.setItem("Permenant_Language", "عربي");
  alert("The Language Now is :: " + localStorage.getItem("Permenant_Language"));

  Switch_NavBar_Lang_Ar();
  Switch_Footer_Lang_Ar();
  
  switch (true){
    case location.href.includes("/Institute_Sections") ||
      location.href.includes("/institute_sections"):
      alert("Hello from IS");
      HomePageTitle[0].innerHTML = "الأقسام";
      IS_Load_Content_Ar();
      break;

    case location.href.includes("/Patents") ||
      location.href.includes("/patents"):
      alert("Hello from Patents");
      HomePageTitle[0].innerHTML = "برءات الاختراع";
      Patents_Load_Content_Ar();
      break;

    case location.href.includes("/Contact_Us") ||
      location.href.includes("/contact_us"):
      alert("Heloo from contact AR" + Contact_PageTitle);
      Contact_Load_Content_Ar();
      HomePageTitle[0].innerHTML = "الإتصال بنا";
      break;

    case location.href.includes("/Helping_Units") ||
      location.href.includes("/helping_units"):
      alert("Heloo from Helping Units AR" + Helping_Units_Page_Title);
      HomePageTitle[0].innerHTML = "وحدات مساعدة";
      Helping_Units_Load_Content_Ar();
      break;

    case location.href.includes("/Institute_Branches") ||
      location.href.includes("/institute_branches"):
      alert("Heloo from Institute Branches AR" + Institute_Branches_Title);
      HomePageTitle[0].innerHTML = "فروع المعهد";
      Institute_Branches_Load_Content_Ar();
      break;

    case location.href.includes("/Permanent_Exhibition") ||
      location.href.includes("/permanent_exhibition"):
      alert("Heloo from Permanent Exhibition AR" + Permanent_Exhibition_Title);
      HomePageTitle[0].innerHTML = "المعرض الدائم";
      Permanent_Exhibition_Load_Content_Ar();
      break;

    case location.href.includes("/Research_Projects") ||
      location.href.includes("/research_projects"):
      alert("Heloo from Research Projects AR" + Research_ProjectsTitle);
      HomePageTitle[0].innerHTML = "مشاريع بحثية";
      Research_Projects_Load_Content_Ar();
      break;

    case location.href.includes("/Overview") ||
      location.href.includes("/overview"):
      alert("Heloo from Overview AR" + Overview_Title);
      HomePageTitle[0].innerHTML = "نبذة";
      Overview_Load_Content_Ar();
      break;

    default:
      alert("Heloo from Home AR");
      HomePageTitle[0].innerHTML = "الرئيسية";
      Home_Load_Content_Ar();
      break;
  }
}
