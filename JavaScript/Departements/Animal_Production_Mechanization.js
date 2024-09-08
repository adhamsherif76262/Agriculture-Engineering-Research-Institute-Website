var Animal_Production_Mechanization_Page_Title = document.getElementById(
  "Animal_Production_Mechanization_Page_Title"
);
// var Animal_Production_Mechanization_H1 = document.getElementById(
//   "Animal_Production_Mechanization_H1"
// );
var Footer_Section = document.getElementById("Footer_Section");

var APM_Marquee = document.getElementById("Inner_Header_Marquee");

var APM_Marquee_Ar = `
  <h1 id="Animal_Production_Mechanization_H1_Ar">
    <span id="Animal_Production_Mechanization_Span_1_Ar">قسم بحوث ميكنة</span>
    <span id="Animal_Production_Mechanization_Span_2_Ar">الانتاج الحيوانى </span>
    <span id="Animal_Production_Mechanization_Span_3_Ar"> والسمكي والداجنى</span>
  </h1>
`;

var APM_Marquee_En = `
  <h1 id="Animal_Production_Mechanization_H1_En">
    <span id="Animal_Production_Mechanization_Span_1_En">Animal</span>
    <span id="Animal_Production_Mechanization_Span_2_En">Production</span>
    <span id="Animal_Production_Mechanization_Span_3_En">Mechanization</span>
  </h1>
`;

var APM_Goals_Section = document.getElementById("APM_Goals_Section");

var APM_Goals_Section_Ar = `
      <ul class="rolldown-list_Ar" id="myList_Ar">
        <li>تعظيم العائد البيئي والاقتصادي لتدوير المخلفات الزراعية من خلال تحديد أمثل النظم لاستخدام المخلفات في إنتاج
            الأسمدة العضوية، وتصنيع الأعلاف التقليدية والغير تقليدية (المخلفات الحقلية والبستانية - مخلفات مزارع الإنتاج
            الحيواني والداجني - مخلفات المجازر و التصنيع الزراعي).
        </li>
        <li>
            - تحديد أمثل النظم لميكنة مزارع الإنتاج الحيواني والداجنى تحت الظروف المصرية (التغذية –المساقى – التنظيف –
            عمليات التفريخ الصناعي - التحكم البيئي)
        </li>
        <li>
            تطوير النظم الآلية التي تساعد على إزالة معوقات زيادة إنتاج المزارع السمكية
        </li>
        <li>
            تحسين كفاءة وأداء عمليات نقل وتخزين وتداول الأسماك لتقليل الفاقد وتقليل تكاليف الإنتاج.
        </li>
        <li>
            تصنيع بعض المعدات لميكنة المزارع الحيوانية والداجنة والسمكية.
        </li>
        <li>
            تطوير نظم الحلب الآلي بما يلائم الظروف المصرية
        </li>
        <li>
            تطوير معدات استخلاص منتجات دودة الحرير ونحل العسل لتناسب صغار المربين ومشروعات شباب الخريجين
        </li>
        <li>
            تقديم المشورة الفنية لجمهور المربين والمهتمين بميكنة مزارع الإنتاج الحيواني والداجنى والسمكى
        </li>
    </ul>

    <button id="btnReload_Ar">Reload</button>
`;

var APM_Goals_Section_En = `
      <ul class="rolldown-list_En" id="myList_En">
      <li>
        Systems evaluation and development for processing and preparation of conventional
        and non – conventional feed mill.
      </li>
      <li>
        Systems evaluation and development for mechanization of animal and poultry
        production farms ( cleaning – feeding – ventilation – milking –egg collection)
      </li>
      <li>
        Mechanization of aquaculture farm operation and management
        (aeration fish pond- pumps – feeding means).
      </li>
      <li>
         Mechanization of animal and poultry production processing.
      </li>
        <li>
          Best systems identification of managing wastes for processing and production
          of conventional and non- conventional feed mill (field and horticulture wastes
          – animal and poultry production farm wastes – slaughterhouses and agriculture 
          processing wastes).
        </li>
        <li>
          Best systems identification of animal and poultry production farm mechanization
          under Egyptian condition (feeding – irrigation canals – cleaning).
        </li>
        <li>
          Systems development for barriers removal of aquaculture farm production to 
          enhance productivity and efficiency improving of fish transportation, storage
          and handling.
        </li>
        <li>
          Recommendation approach for designing, developing and manufacturing machinery of
          animal, poultry and aquaculture production farms.
        </li>
    </ul>

    <button id="btnReload_En">Reload</button>
`;



var APM_Machinery_Section = document.getElementById("APM_Machinery_Section");

var APM_Machinery_Section_Ar = `
    <div id="carousel-wrapper_Ar">
        <div id="menu_Ar">
            <div id="current-option_Ar">
                <p id="current-option-text1_Ar" data-previous-text="" data-next-text=""></p>
                <p id="current-option-text2_Ar" data-previous-text="" data-next-text=""></p>
            </div>
            <button title="s" id="previous-option_Ar"></button>
            <button title="s" id="next-option_Ar"></button>
        </div>
        <div id="image_Ar" title="CurrentImage_Ar"></div>
    </div>
`;
var APM_Machinery_Section_En = `
      <div id="carousel-wrapper_En">
        <div id="menu_En">
            <div id="current-option_En">
                <span id="current-option-text1_En" data-previous-text="" data-next-text=""></span>
                <span id="current-option-text2_En" data-previous-text="" data-next-text=""></span>
                <button title="s" id="previous-option_En"></button>
                <button title="s" id="next-option_En"></button>
            </div>
        </div>
        <div id="image_En"></div>
      </div>
  `;
            // <div id="image_En" title="CurrentImage_En"></div>

function Animal_Production_Mechanization_Load_Content_Ar() {
  // Animal_Production_Mechanization_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
    APM_Marquee.innerHTML = APM_Marquee_Ar;
    APM_Goals_Section.innerHTML = APM_Goals_Section_Ar;
    APM_Machinery_Section.innerHTML = APM_Machinery_Section_Ar;
    HomePageTitle[0].innerHTML = "الانتاج الحيوانى والسمكي والداجنى";
    $(".rolldown-list_Ar li").each(function () {
      var delay = $(this).index() / 4 + "s";
      $(this).css({
        webkitAnimationDelay: delay,
        mozAnimationDelay: delay,
        animationDelay: delay,
      });
    });
    $("#btnReload_Ar").click(function () {
      $("#myList_Ar").removeClass("rolldown-list_Ar");
      setTimeout(function () {
        $("#myList_Ar").addClass("rolldown-list_Ar");
      }, 1);
    });


    const text1_options_Ar = [
            `في هذه الدراسة، تم تصنيع آلة ذاتية الحركة لكشط فرشة الدواجن من الأرضية الخرسانية وتعبئتها آليًا في أجوله باستخدام نظام رفع بريمي، للحد من المشاكل الصحية عن طريق منع الانبعاثات الغازية مثل الهيدروجين والكبريتيد والأمونيا.
      يوفر هذا النظام الكثير من المصاريف لمربي الدواجن ويزيد من الأرباح عند بيع الفرشة كسماد.
      كما يهدف البحث إلى دراسة العوامل المؤثرة على تعبئة فرشة الدواجن. تتمثل الميزات الموجودة في الجهاز في وجود واجهة حماية من الغبار لمنع انتشار الغبار وحماية المشغلين منه.`,

            `يهدف البحث الي تصنيع آلة لإنتاج أعلاف بديلة بطريقة بسيطة ورخيصة وبإنتاجية عالية وفي متناول المربي الصغير وذلك باستبدال حبوب الشعير الداخلة في مكونات العليقة بشعير مستنبت وذلك من اجل خفض التكاليف ولما يحتويه الشعير المستنبت من كمية أعلي من المادة الخضراء ونسبه مرتفعة من البروتين .
      وتشمل الاله المصنعة علي اربع وحدات رئيسية هي وحدة القدرة ونقل القدرة ووحدة التقطيع ووحدة الخلط ووحدة التصبيع.`,

            `تركز هذه الدراسة على تطوير قارب مدعوم بالطاقة الشمسية ومزود بلوحة Arduino Mega، مصمم لتحسين عملية تغذية الأسماك بشكل فعّال في مجال الاستزراع السمكي.
      من خلال دمج تكنولوجيا إنترنت الأشياء وتطبيق جوال، تهدف الدراسة إلى تقليل تكاليف العمالة وتحسين ممارسات تغذية، مع التركيز على التحديات المتعلقة بالتغذية اليدوية، التي لم تكن كافية سابقًا لتغطية المنطقة الكاملة بالمزرعة. `,
    ];
    // const text2_options = [
    // "69 min. read",
    // "7 min. read",
    // "8 min. read",
    // ];
    const color_options_Ar = ["#E3AC59", "#59E390", "#E3AC59"];
    const image_options_Ar = [
      "../../Images/Machine_1_-removebg-preview.png",
      "../../Images/Machine_2_-removebg-preview.png",
      "../../Images/Machine_3_-removebg-preview.png",
    ];
    const Image_Dimentions_Ar = [
      { width: "315px", height: "425px" },
      { width: "340px", height: "415px" },
      { width: "350px", height: "450px" },
    ];
    const Image_Margins_Ar = [
      { marginLeft: "-48%", marginRight: "" },
      { marginLeft: "-55%", marginRight: "" },
      { marginLeft: "-55%", marginRight: "" },
    ];
    const Text_Width_Margins_Ar = [
      { marginLeft: "", width: "60%", marginRight: "1%" },
      { marginLeft: "", width: "60%", marginRight: "1%" },
      { marginLeft: "", width: "60%", marginRight: "1%" },
    ];
    var i_Ar = 0;
    const currentOptionText1_Ar = document.getElementById(
      "current-option-text1_Ar"
    );
    const currentOptionText2_Ar = document.getElementById(
      "current-option-text2_Ar"
    );
    const currentOptionImage_Ar = document.getElementById("image_Ar");
    const carousel_Ar = document.getElementById("carousel-wrapper_Ar");
    const mainMenu_Ar = document.getElementById("menu_Ar");
    const optionPrevious_Ar =
      document.getElementById("previous-option_Ar");
    const optionNext_Ar = document.getElementById("next-option_Ar");
    currentOptionText1_Ar.innerText = text1_options_Ar[i_Ar];
    currentOptionText1_Ar.style.marginRight = `${Text_Width_Margins_Ar[i_Ar].marginRight}`;
    currentOptionText1_Ar.style.width = `${Text_Width_Margins_Ar[i_Ar].width}`;
    currentOptionImage_Ar.style.background = `url("${image_options_Ar[i_Ar]}")`;
    mainMenu_Ar.style.background = color_options_Ar[i_Ar];
    currentOptionImage_Ar.style.width = `${Image_Dimentions_Ar[i_Ar].width}`;
    currentOptionImage_Ar.style.height = `${Image_Dimentions_Ar[i_Ar].height}`;
    currentOptionImage_Ar.style.marginLeft = `${Image_Margins_Ar[i_Ar].marginLeft}`;
    optionNext_Ar.onclick = function () {

      i_Ar = i_Ar + 1;
      i_Ar = i_Ar % text1_options_Ar.length;

      // currentOptionText1.dataset.nextText = text1_options[i_Ar];
      // currentOptionText2.dataset.nextText = text2_options[i_Ar];
      mainMenu_Ar.style.background = color_options_Ar[i_Ar];
      carousel_Ar.classList.add("anim-next");
      setTimeout(() => {
        currentOptionImage_Ar.style.backgroundImage = `url("${image_options_Ar[i_Ar]}")`;
        currentOptionImage_Ar.style.width = `${Image_Dimentions_Ar[i_Ar].width}`;
        currentOptionImage_Ar.style.height = `${Image_Dimentions_Ar[i_Ar].height}`;
        currentOptionImage_Ar.style.marginLeft = `${Image_Margins_Ar[i_Ar].marginLeft}`;
        currentOptionText1_Ar.style.width = `${Text_Width_Margins_Ar[i_Ar].width}`;
      }, 455);
      setTimeout(() => {
        currentOptionText1_Ar.innerText = text1_options_Ar[i_Ar];
        // currentOptionText2.innerText = text2_options[i_Ar];
        carousel_Ar.classList.remove("anim-next");
      }, 650);
    };
    optionPrevious_Ar.onclick = function () {
      if (i_Ar === 0) {
        i_Ar = text1_options_Ar.length;
      }
      i_Ar = i_Ar - 1;
      // currentOptionText1.dataset.previousText = text1_options[i_Ar];
      // currentOptionText2.dataset.previousText = text2_options[i_Ar];
      mainMenu_Ar.style.background = color_options_Ar[i_Ar];
      carousel_Ar.classList.add("anim-previous");
      setTimeout(() => {
        currentOptionImage_Ar.style.backgroundImage = `url("${image_options_Ar[i_Ar]}")`;
        currentOptionImage_Ar.style.width = `${Image_Dimentions_Ar[i_Ar].width}`;
        currentOptionImage_Ar.style.height = `${Image_Dimentions_Ar[i_Ar].height}`;
        currentOptionImage_Ar.style.marginLeft = `${Image_Margins_Ar[i_Ar].marginLeft}`;
        currentOptionText1_Ar.style.width = `${Text_Width_Margins_Ar[i_Ar].width}`;
      }, 455);
      setTimeout(() => {
        currentOptionText1_Ar.innerText = text1_options_Ar[i_Ar];
        // currentOptionText2.innerText = text2_options[i_Ar];
        carousel_Ar.classList.remove("anim-previous");
      }, 650);
    };

  }
  function Animal_Production_Mechanization_Load_Content_En() {
    // Animal_Production_Mechanization_H1.textContent = "zzzzzzzzzzzzzz";
    APM_Marquee.innerHTML = APM_Marquee_En;
    APM_Goals_Section.innerHTML = APM_Goals_Section_En;
    APM_Machinery_Section.innerHTML = APM_Machinery_Section_En;
    HomePageTitle[0].innerHTML = "AERI APM Page";
    $(".rolldown-list_En li").each(function () {
      var delay = $(this).index() / 4 + "s";
      $(this).css({
        webkitAnimationDelay: delay,
        mozAnimationDelay: delay,
        animationDelay: delay,
      });
    });
    $("#btnReload_En").click(function () {
      $("#myList_En").removeClass("rolldown-list_En");
      setTimeout(function () {
        $("#myList_En").addClass("rolldown-list_En");
      }, 1);
    });

    
    const text1_options_En = [
        `This research manufactures a self-propelled machine for scraping poultry litter off the concrete floor and packing it mechanically into sacks by a screw elevating system to reduce hygienic problems by preventing atmospheric emissions, such as hydrogen, sulfide, and ammonia.
      This system saves feedlot operators and increases profit for poultry litter contractors who sell it as fertilizer. 
      Also, it aims to study the factors affecting the packing of poultry litter.
      The machine is provided with a dust protection divider to keep dust away and protect operators from rising dust.`,

        `The main objectives of this research are to fabricate a machine for producing a special feed with an easy operating system, that is suitable for small breeders, with low operating costs and high productivity, as well as substitution of barley grains in the feed components by sprouted barley in order to reduce costs and to increase amount of green feed and percentage of protein.
      The fabricated machine consisted of four main units;
      power and power transmission unit;
      chopping unit; 
      mixing unit and pelletizing unit.`,

        `This study focuses on development of a 
        solar-powered Arduino Mega-driven robotic 
        boat designed for efficient fish feeding in aquaculture. 
        By integrating IoT technology and a mobile app, the project
         aims to reduce labor costs and improve feeding practices while
          addressing challenges associated with manual feeding, which previously
           failed to adequately cover the entire pond area.`,
    ];
    // const text2_options = [
    // "69 min. read",
    // "7 min. read",
    // "8 min. read",
    // ];
    const color_options_En = ["#FE9968", "#7FE0EB", "#6CE5B1"];
    const image_options_En = [
      "../../Images/Machine_1_-removebg-preview - Copy.png",
      "../../Images/Machine_2_-removebg-preview.png",
      "../../Images/Machine_3_-removebg-preview.png",
    ];
    const Image_Dimentions_En = [
      { width: "315px", height: "425px" },
      { width: "340px", height: "415px" },
      { width: "350px", height: "450px" },
    ];
    const Image_Margins_En = [
      { marginLeft: "55%", marginRight: "" },
      { marginLeft: "55%", marginRight: "" },
      { marginLeft: "55%", marginRight: "" },
    ];
    const Text_Width_Margins_En = [
      { marginLeft: "5%", width: "60%", marginRight: "" },
      { marginLeft: "5%", width: "60%", marginRight: "" },
      { marginLeft: "5%", width: "60%", marginRight: "" },
    ];
    var i_En = 0;
    const currentOptionText1_En = document.getElementById(
      "current-option-text1_En"
    );
    const currentOptionText2_En = document.getElementById(
      "current-option-text2_En"
    );
    const currentOptionImage_En = document.getElementById("image_En");
    const carousel_En = document.getElementById("carousel-wrapper_En");
    const mainMenu_En = document.getElementById("menu_En");
    const optionPrevious_En = document.getElementById("previous-option_En");
    const optionNext_En = document.getElementById("next-option_En");
    currentOptionText1_En.innerText = text1_options_En[i_En];
    currentOptionText1_En.style.marginLeft = `${Text_Width_Margins_En[i_En].marginLeft}`;
    currentOptionText1_En.style.width = `${Text_Width_Margins_En[i_En].width}`;
    currentOptionImage_En.style.background = `url("${image_options_En[i_En]}")`;
    mainMenu_En.style.background = color_options_En[i_En];
    currentOptionImage_En.style.width = `${Image_Dimentions_En[i_En].width}`;
    currentOptionImage_En.style.height = `${Image_Dimentions_En[i_En].height}`;
    currentOptionImage_En.style.marginLeft = `${Image_Margins_En[i_En].marginLeft}`;
    
    optionNext_En.onclick = function () {

      i_En = i_En + 1;
      i_En = i_En % text1_options_En.length;

      mainMenu_En.style.background = color_options_En[i_En];
      carousel_En.classList.add("anim-next");
      setTimeout(() => {
        currentOptionImage_En.style.backgroundImage = `url("${image_options_En[i_En]}")`;
        currentOptionImage_En.style.width = `${Image_Dimentions_En[i_En].width}`;
        currentOptionImage_En.style.height = `${Image_Dimentions_En[i_En].height}`;
        currentOptionImage_En.style.marginLeft = `${Image_Margins_En[i_En].marginLeft}`;
        currentOptionText1_En.style.width = `${Text_Width_Margins_En[i_En].width}`;
      }, 455);
      setTimeout(() => {
        currentOptionText1_En.innerText = text1_options_En[i_En];
        // currentOptionText2.innerText = text2_options[i_En];
        carousel_En.classList.remove("anim-next");
      }, 650);
    };
    optionPrevious_En.onclick = function () {
      if (i_En === 0) {
        i_En = text1_options_En.length;
      }
      i_En = i_En - 1;

      // currentOptionText1.dataset.previousText = text1_options[i_En];
      // currentOptionText2.dataset.previousText = text2_options[i_En];
      mainMenu_En.style.background = color_options_En[i_En];
      carousel_En.classList.add("anim-previous");
      setTimeout(() => {
        currentOptionImage_En.style.backgroundImage = `url("${image_options_En[i_En]}")`;
        currentOptionImage_En.style.width = `${Image_Dimentions_En[i_En].width}`;
        currentOptionImage_En.style.height = `${Image_Dimentions_En[i_En].height}`;
        currentOptionImage_En.style.marginLeft = `${Image_Margins_En[i_En].marginLeft}`;
        currentOptionText1_En.style.width = `${Text_Width_Margins_En[i_En].width}`;
      }, 455);
      setTimeout(() => {
        currentOptionText1_En.innerText = text1_options_En[i_En];
        // currentOptionText2.innerText = text2_options[i_En];
        carousel_En.classList.remove("anim-previous");
      }, 650);
    };

}

if (localStorage.getItem("Permenant_Language") === "English") {
  Animal_Production_Mechanization_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Animal_Production_Mechanization_Load_Content_Ar();
}
