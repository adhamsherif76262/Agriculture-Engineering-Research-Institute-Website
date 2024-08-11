var titleIS = document.getElementById("Institute_Sections_Page_Title");
var Is_h1 = document.getElementById("Institute_Sections_H1");
var Institute_Departements_Section = document.getElementById("Institute_Departements_Section");
var Institute_Departements_En = `
  <ol id = "OL_En">
      <li>
          <a class = "Departements_Links_En" href="./Departements/Agricultural_Mechanization_OS.html">
            Agricultural Mechanization Operations Systems Department
          </a>
      </li>
      <li>
          <a class = "Departements_Links_En" href="./Departements/Animal_Production_Mechanization.html">Animal Production Mechanization
            Department
          </a>
      </li>
      <li>
          <a class = "Departements_Links_En" href="./Departements/Agricultural_Power_Energy.html">Agricultural Power And Energy
            Department
          </a>
      </li>
      <li>
          <a class = "Departements_Links_En" href="./Departements/Irrigation_Engineering_RD.html">Irrigation Engineering Research
            Department
          </a>
      </li>
      <li>
          <a class = "Departements_Links_En" href="./Departements/Handling_Processing_D.html">Crop Handling & Processing Department
          </a>
      </li>
      <li>
          <a class = "Departements_Links_En" href="./Departements/Rice_Mechanization_Center.html">Rice Mechanization Center in Mit Diba
            Department
          </a>
      </li>
      <li>
          <a class = "Departements_Links_En" href="./Departements/Biological_Engineering.html">Biological Engineering Department
          </a>
      </li>
      <li>
          <a class = "Departements_Links_En" href="./Departements/Testing_Reasearch_Station.html">Testing & Reasearch Station For Tractor
            & Farm Machinery Department
          </a>
      </li>
  </ol>
`;
var Institute_Departements_Ar = `
  <ol id = "OL_Ar">
      <li>
          <a class = "Departements_Links_Ar" href="./Departements/Agricultural_Mechanization_OS.html">
	          قسم بحوث نظم ميكنة العمليات الزراعية	
          </a>
      </li>
      <li>
          <a class = "Departements_Links_Ar" href="./Departements/Animal_Production_Mechanization.html">
           	قسم بحوث ميكنة الانتاج الحيوانى والسمكي والداجنى	
          </a>
      </li>
      <li>
          <a class = "Departements_Links_Ar" href="./Departements/Agricultural_Power_Energy.html">
           	قسم بحوث القوى والطاقة	
          </a>
      </li>
      <li>
          <a class = "Departements_Links_Ar" href="./Departements/Irrigation_Engineering_RD.html">
           	قسم بحوث هندسة الرى والصرف الحقلى	
          </a>
      </li>
      <li>
          <a class = "Departements_Links_Ar" href="./Departements/Handling_Processing_D.html">
           	قسم بحوث تصنيع وتداول المنتجات الزراعية	
          </a>
      </li>
      <li>
          <a class = "Departements_Links_Ar" href="./Departements/Rice_Mechanization_Center.html">
            مركز ميكنة الارز بميت الديبة
          </a>
      </li>
      <li>
          <a class = "Departements_Links_Ar" href="./Departements/Biological_Engineering.html">
           	قسم بحوث نظم الهندسة الحيوية الزراعية
          </a>
      </li>
      <li>
          <a class = "Departements_Links_Ar" href="./Departements/Testing_Reasearch_Station.html">
          	محطة أبحاث و أختبار الجرارات و الالات الزراعية
          </a>
      </li>
  </ol>
`;

function IS_Load_Content_Ar() {
  Is_h1.textContent = "أقسام المعهد";
  Is_h1.style.fontFamily = "PT-Bold-Heading";
  Is_h1.style.fontSize = "60px";
  HomePageTitle[0].innerHTML = "الأقسام";
  Institute_Departements_Section.innerHTML = Institute_Departements_Ar ;
}
function IS_Load_Content_En() {
  Is_h1.textContent = "Institute Departements ";
  Is_h1.style.fontFamily = "Arial Black, Arial Bold, Gadget, sans-serif";
  Is_h1.style.fontSize = "50px";
  HomePageTitle[0].innerHTML = "AERI Institute Sections Page";
  Institute_Departements_Section.innerHTML = Institute_Departements_En ;
}

if (localStorage.getItem("Permenant_Language") === "English") {
  IS_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  IS_Load_Content_Ar();
}
