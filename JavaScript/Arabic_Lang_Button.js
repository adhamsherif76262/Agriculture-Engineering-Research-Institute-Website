function Switch_NavBar_Lang_Ar(){
    HomePageTitle[0].setAttribute("lang", "ar");
    Ar_Nav.innerHTML = Ar_NavTemplate;
    En_Nav.classList.add("D_None");
    Ar_Nav.classList.remove("D_None");
}
function Switch_Footer_Lang_Ar() {
  Main_Footer[0].innerHTML = Ar_FooterTemplate;
}
// async function Store_Encrypted_Lang_Ar() {
//   const EncryptedData = await encryptData(password, "عربي");
//   localStorage.setItem("Permenant_Language", JSON.stringify(EncryptedData));
// }
function LangBtnArClick() {
    console.log("onclick=LangBtnArClick()");
    // Store_Encrypted_Lang_Ar();
    localStorage.setItem("Permenant_Language","عربي");
    alert("The Language Now is :: " + localStorage.getItem("Permenant_Language"));
    // Get_Decrypted_Language().then(Decrypted_Lang_Value=>{
    //   alert("The Language Now is :: " + Decrypted_Lang_Value);
      
    //   });

  Switch_NavBar_Lang_Ar();
  Switch_Footer_Lang_Ar();
  
  switch (true) {
    case location.href.includes("/Institute_Sections") ||
      location.href.includes("/institute_sections"):
      alert("Hello from IS");
      HomePageTitle[0].innerHTML = "الأقسام";
      IS_Load_Content_Ar();
      break;

    case location.href.includes("/Patents") ||
      location.href.includes("/patents"):
      alert("Hello from Patents");
      HomePageTitle[0].innerHTML = "التطبيقات التكنولوجية";
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

    case location.href.includes("/Agricultural_Mechanization_OS") ||
      location.href.includes("/agricultural_mechanization_os"):
      alert("Heloo from Agricultural_Mechanization_OS_Page AR" + Agricultural_Mechanization_OS_Page_Title);
      HomePageTitle[0].innerHTML = "نظم ميكنة العمليات الزراعية";
      Agricultural_Mechanization_OS_Load_Content_Ar();
      break;

    case location.href.includes("/Agricultural_Power_Energy") ||
      location.href.includes("/agricultural_power_energy"):
      alert("Heloo from Agricultural_Power_Energy_Page AR" + Agricultural_Power_Energy_Page_Title);
      HomePageTitle[0].innerHTML = "القوى والطاقة";
      Agricultural_Power_Energy_Load_Content_Ar();
      break;
      
    case location.href.includes("/Animal_Production_Mechanization") ||
      location.href.includes("/animal_production_mechanization"):
      alert("Heloo from Animal_Production_Mechanization AR" + Animal_Production_Mechanization_Page_Title);
      HomePageTitle[0].innerHTML = "الانتاج الحيوانى والسمكي والداجنى";
      Animal_Production_Mechanization_Load_Content_Ar();
      break;

    case location.href.includes("/Biological_Engineering") ||
      location.href.includes("/biological_engineering"):
      alert("Heloo from Biological_Engineering Ar" + Biological_Engineering_Page_Title);
      HomePageTitle[0].innerHTML = "نظم الهندسة الحيوية الزراعية";
      Biological_Engineering_Load_Content_Ar();
      break;

    case location.href.includes("/Handling_Processing_D") ||
      location.href.includes("/handling_processing_d"):
      alert("Heloo from Handling_Processing_D Ar" + Handling_Processing_D_Page_Title);
      HomePageTitle[0].innerHTML = "تصنيع وتداول المنتجات الزراعية";
      Handling_Processing_D_Load_Content_Ar();
      break;

    case location.href.includes("/Irrigation_Engineering_RD") ||
      location.href.includes("/irrigation_engineering_rd"):
      alert("Heloo from Irrigation Engineering RD Ar" + Irrigation_Engineering_RD_Page_Title);
      HomePageTitle[0].innerHTML = "هندسة الرى والصرف الحقلى";
      Irrigation_Engineering_RD_Load_Content_Ar();
      break;

    case location.href.includes("/Rice_Mechanization_Center") ||
      location.href.includes("/rice_mechanization_center"):
      alert("Heloo from Rice Mechanization Center En" + Rice_Mechanization_Center_Page_Title);
      HomePageTitle[0].innerHTML = "نبذه عن مركز ميكنة الارز";
      Rice_Mechanization_Center_Load_Content_Ar();
      break

    case location.href.includes("/Testing_Reasearch_Station") ||
      location.href.includes("/testing_reasearch_station"):
      alert("Heloo from Testing Reasearch Station En" + Testing_Reasearch_Station_Page_Title);
      HomePageTitle[0].innerHTML = "محطة أبحاث و أختبار الجرارات و الالات الزراعية";
      Testing_Reasearch_Station_Load_Content_Ar();
      break;

    default:
      alert("Heloo from Home AR");
      HomePageTitle[0].innerHTML = "الرئيسية";
      Home_Load_Content_Ar();
      break;
  }
}
