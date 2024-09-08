var Handling_Processing_D_Page_Title = document.getElementById(
  "Handling_Processing_D_Page_Title"
);
var Manufacturing_Evaluation_Section_H2 = document.getElementById(
  "Manufacturing_Evaluation_Section_H2"
);
var Activities_Section_H2 = document.getElementById("Activities_Section_H2");
var Research_Fields_Section_H2 = document.getElementById(
  "Research_Fields_Section_H2"
);

var Acomplishments_Section = document.getElementById("Acomplishments_Section");
var M_E_Section = document.getElementById("Manufacturing_Evaluation_Section");
var Activities_Section = document.getElementById("Activities_Section");
var Research_Fields_Section = document.getElementById(
  "Research_Fields_Section"
);

Research_Fields_Section.innerHTML = `
  <div class="RF_List">
    <ul>
      <li class = "Research_Fields_LI"><span id = "Research_Fields_Span_1"></span></li>
      <li class = "Research_Fields_LI"><span id = "Research_Fields_Span_2"></span></li>
      <li class = "Research_Fields_LI"><span id = "Research_Fields_Span_3"></span></li>
      <li class = "Research_Fields_LI"><span id = "Research_Fields_Span_4"></span></li>
      <li class = "Research_Fields_LI"><span id = "Research_Fields_Span_5"></span></li>
      <li class = "Research_Fields_LI"><span id = "Research_Fields_Span_6"></span></li>
      <li class = "Research_Fields_LI"><span id = "Research_Fields_Span_7"></span></li>
      <li class = "Research_Fields_LI"><span id = "Research_Fields_Span_8"></span></li>
      <li class = "Research_Fields_LI"><span id = "Research_Fields_Span_9"></span></li>
      <li class = "Research_Fields_LI"><span id = "Research_Fields_Span_10"></span></li>
      <li class = "Research_Fields_LI"><span id = "Research_Fields_Span_11"></span></li>
    </ul>
  </div>
`;

var Activities_Section_Ar = `
        <div class="container_Ar">
            <ul id = "Activities_UL">
                <li id = "Activities_LI_1">اجراء البحوث التطبيقية الخاصة بالمجالات والفروع المختلفة لعمليات تصنيع وتداول المنتجات الزراعية . </li>
                <li id = "Activities_LI_2">اجراء عمليات التطوير والتعديل والتهيئة لأجهزة ومعدات التصنيع والتداول والعمل على رفع كفاءة تلك المعدات مع الاخذ فى الاعتبار ترشيد الطاقة المستهلكة وزيادة جودة المنتج النهائى وتقليل الفواقد.</li>
                <li id = "Activities_LI_3">اجراء الدورات التدريبية والارشادية والندوات العلمية الخاصة بنقل نتائج البحوث والدراسات الخاصة بنشاط القسم الى الجهات الارشادية والمزارعين والمواقع الانتاجية .</li>
                <li id = "Activities_LI_4">التعاون العلمى والفنى بين انشطة القسم والجهات البحثية المختلفة والجامعات وصولا الى التكامل العلمى والاستفادة بخبرات الاخرين فى تنفيذ البحوث المتكاملة التى تغطى جميع الجوانب العلمية الخاصة بالموضوع البحثى .</li>
                <li id = "Activities_LI_5">المساهمة فى حل المشاكل التي يتعرض لها القطاع الانتاجى فى مجالات تصنيع وتداول المنتجات الزراعية من خلال مشاريع مشتركة تهدف الى الربط بين نتائج البحوث والمشاكل التى يواجها القطاع الانتاجى . </li>
                <li id = "Activities_LI_6">ربط مراحل التصنيع المختلفة فى صورة نظم متكاملة تؤدى إلى زيادة العائد الإقتصادى للمنتج.</li>
                <li id = "Activities_LI_7">دراسات تطبيقية لاستخدام زيت الجوجوبا في التصنيع الغذائي</li>
                <li id = "Activities_LI_8">تطبيق تقنيات الذكاء الاصطناعي في تحسين عمليات التصنيع الغذائي</li>
                <li id = "Activities_LI_9">تصميم أنظمة إنتاج غذائي مرنة وتحسين كفاءة استخدام الموارد في التصنيع الغذائي لمواجهة التغيرات المناخية</li>
            </ul>
        </div>
`;
var Activities_Section_En = `
        <div class="container_En">
            <ul id = "Activities_UL">
                <li id = "Activities_LI_1">Applied researches were conducted in various fields and branches of agricultural products processing and handling.</li>
                <li id = "Activities_LI_2">To carry out the development, modification, and preparation of the processing and handling devices and equipment to upgrade the efficiency of such equipment, taking into account the rationalization of energy consumption, increasing the quality of the final product, and reducing the losses.</li>
                <li id = "Activities_LI_3">Conducting training and extension courses, scientific seminars on the transfer of research results, and special studies related to department activities to the main section of guidance and farmers and production sites.</li>
                <li id = "Activities_LI_4">Scientific and technical cooperation between the activities of the department and the other departments of the Institute, the various research organizations, and universities to achieve scientific integration and benefit from the expertise of others in the implementation of integrated research covering all scientific aspects of the research topic.</li>
                <li id = "Activities_LI_5">Contribute to solving the problems facing the productive sector in the fields of processing and handling of agricultural products through joint projects aimed at linking the results of research and problems faced by the productive sector.</li>
                <li id = "Activities_LI_6">Linking the various stages of processing in the form of integrated systems leads to increased economic return of the product.</li>
                <li id = "Activities_LI_7">Applied studies on the use of jojoba oil in food processing.</li>
                <li id = "Activities_LI_8">Application of artificial intelligence techniques in improving food processing.</li>
                <li id = "Activities_LI_9">Designing flexible food production systems and improving resource efficiency in food processing to face climate change.</li>
            </ul>
        </div>
`;
var M_E_Section_Ar = `
      <div class="slider-container">

        <div class="slider-content" >

            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_1.png" alt="1" />
                <h1 class="slider-single-title_Ar">نموذج تطبيقى لوحدة تدريج متنقلة للمزارع الصغير للمحاصيل الكروية </h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_2.png" alt="2" />
                <h1 class="slider-single-title_Ar">مجفف يعمل بنظام الحرارة والرطوبة النسبية المنخفضة</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_3.png" alt="3" />
                <h1 class="slider-single-title_Ar">نموذج تطبيقى لمجفف دورانى لمحاصيل الحبوب باستخدام خاصية التجفيف السريع</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_4.png" alt="4" />
                <h1 class="slider-single-title_Ar">ماكينة تدريج حجمى لثمار الفاكهة و الخضروات </h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_5.png" alt="5" />
                <h1 class="slider-single-title_Ar">ماكينة تدريج ثمار الخضروات والفاكهة</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_6.png" alt="6" />
                <h1 class="slider-single-title_Ar">التخزين محكم ذكي بسعة 50-70 كيلوجرام لأكياس البلاستيك</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_7.png" alt="7" />
                <h1 class="slider-single-title_Ar">الصوامع البلاستيكية الافقية</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_8.png" alt="8" />
                <h1 class="slider-single-title_Ar">وحدة تعقيم البذور بالأشعة تحت الحمراء</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_9.png" alt="9" />
                <h1 class="slider-single-title_Ar">مجفف بالأشعة تحت الحمراء بسعة 150 كيلوجرام</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_10.png" alt="10" />
                <h1 class="slider-single-title_Ar">مجفف شمسي بسعة 500 كيلوجرام</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_11.png" alt="11" />
                <h1 class="slider-single-title_Ar">تعظيم الاستفادة من منطقة شونة بلومبيرغ المطورة</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_12.png" alt="12" />
                <h1 class="slider-single-title_Ar">مجفف شمسي هجين يجمع بين الطاقة الشمسية وتدفق الهواء الساخن</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_13.png" alt="13" />
                <h1 class="slider-single-title_Ar">مجفف دوار بالأشعة تحت الحمراء</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_14.png" alt="14" />
                <h1 class="slider-single-title_Ar">مكبس هيدروليكي لضغط بعض النباتات الطبية والعطرية</h1>
            </div>
        </div>
    </div>
`;
var M_E_Section_En = `
      <div class="slider-container">

        <div class="slider-content">

            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_1.png" alt="1" />
                <h1 class="slider-single-title">An applied prototype of a portable grading unit for a small farmer of
                    ball crops</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_2.png" alt="2" />
                <h1 class="slider-single-title">Low temperature and relative humidity dryer</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_3.png" alt="3" />
                <h1 class="slider-single-title">An applied model of a rotary dryer for grain crops using the fast-drying
                    feature</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_4.png" alt="4" />
                <h1 class="slider-single-title">Volumetric grading machine for fruits (vegetables and fruits)</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_5.png" alt="5" />
                <h1 class="slider-single-title">Fruit and vegetable grading machine</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_6.png" alt="6" />
                <h1 class="slider-single-title">Smart hermetic storage for capacity of 50-70 kg plastic bags</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_7.png" alt="7" />
                <h1 class="slider-single-title">Plastic Silo bags</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_8.png" alt="8" />
                <h1 class="slider-single-title">Infrared seed sterilization unit</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_9.png" alt="9" />
                <h1 class="slider-single-title">Infrared dryer with 150kg capacity</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_10.png" alt="10" />
                <h1 class="slider-single-title">Solar dryer with 500 kg capacity</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_11.png" alt="11" />
                <h1 class="slider-single-title">Maximize Utilization of developed Shuna Bloomberg</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_12.png" alt="12" />
                <h1 class="slider-single-title">A hybrid solar dryer combines solar energy and hot air flow</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_13.png" alt="13" />
                <h1 class="slider-single-title">Infrared rotary dryer</h1>
            </div>
            <div class="slider-single">
                <img class="slider-single-image" src="../../Images/M&E_P_14.png" alt="14" />
                <h1 class="slider-single-title">Hydraulic press for briquetting some medicinal and aromatic plants</h1>
            </div>
        </div>
    </div>
`;

var Handling_Processing_D_Span_1 = document.getElementById(
  "Handling_Processing_D_Span_1"
);
var Handling_Processing_D_Span_2 = document.getElementById(
  "Handling_Processing_D_Span_2"
);
Acomplishments_Section.innerHTML = `
      <div id="flex-container" class="testimonials">
        <div id="left-zone">
            <ul class="list">
                <li class="item">
                    <input type="radio" id="radio_testimonial-1" name="basic_carousel" checked="checked" />
                    <label class="label_testimonial-1" for="radio_testimonial-1"><span>I.</span></label>
                    <div class="content-test content_testimonial-1">
                        <span class="picto"></span>
                        <h1 id = "Item_1_H1">Performance analysis and quality evaluation of wheat storage in horizontal silo bags</h1>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-2" name="basic_carousel" />
                    <label class="label_testimonial-2" for="radio_testimonial-2"><span>II.</span></label>
                    <div class="content-test content_testimonial-2">
                        <span class="picto"></span>
                        <h1 id = "Item_2_H1">Development and Evaluation of an Innovative Grain Cart with a Pneumatic Conveyor</h1>
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-3" name="basic_carousel" />
                    <label class="label_testimonial-3" for="radio_testimonial-3"><span>III.</span></label>
                    <div class="content-test content_testimonial-3">
                        <span class="picto"></span>
                        <h1 id = "Item_3_H1">Thermal stabilization and safe storage of rice bran </h1>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-4" name="basic_carousel" />
                    <label class="label_testimonial-4" for="radio_testimonial-4"><span>IV.</span></label>
                    <div class="content-test content_testimonial-4">
                        <span class="picto"></span>
                        <h1 id = "Item_4_H1">Biochar production from agricultural waste and palm waste</h1>
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-5" name="basic_carousel" />
                    <label class="label_testimonial-5" for="radio_testimonial-5"><span>V.</span></label>
                    <div class="content-test content_testimonial-5">
                        <span class="picto"></span>
                        <h1 id = "Item_5_H1">Maintaining post-harvest quality and extending the storage life of tomatoes (fresh and dried)</h1>
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-6" name="basic_carousel" />
                    <label class="label_testimonial-6" for="radio_testimonial-6"><span>VI.</span></label>
                    <div class="content-test content_testimonial-6">
                        <span class="picto"></span>
                        <h1 id = "Item_6_H1">Smart Natural Packaging Films for Food handling applications (Shelf life & Spoilage indicators) </h1>
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-7" name="basic_carousel" />
                    <label class="label_testimonial-7" for="radio_testimonial-7"><span>VII.</span></label>
                    <div class="content-test content_testimonial-7">
                        <span class="picto"></span>
                        <h1 id = "Item_7_H1"> Safe Storage of Some Medical and Aromatic Seeds Using Ultraviolet and Different Types of Hermetic Bags </h1>
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-8" name="basic_carousel" />
                    <label class="label_testimonial-8" for="radio_testimonial-8"><span>VIII.</span></label>
                    <div class="content-test content_testimonial-8">
                        <span class="picto"></span>
                        <h1 id = "Item_8_H1">Some engineering factors affecting solar drying of date.</h1>
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-9" name="basic_carousel" />
                    <label class="label_testimonial-9" for="radio_testimonial-9"><span>IX.</span></label>
                    <div class="content-test content_testimonial-9">
                        <span class="picto"></span>
                        <h1 id = "Item_9_H1">Improving the thermal efficiency of the solar drying process for producing concentrated feed from fish farm waste. </h1>
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-10" name="basic_carousel" />
                    <label class="label_testimonial-10" for="radio_testimonial-10"><span>X</span></label>
                    <div class="content-test content_testimonial-10">
                        <span class="picto"></span>
                        <h1 id = "Item_10_H1">Engineering studies on sorting and grading some horticultural crops</h1>
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-11" name="basic_carousel" />
                    <label class="label_testimonial-11" for="radio_testimonial-11"><span>XI.</span></label>
                    <div class="content-test content_testimonial-11">
                        <span class="picto"></span>
                        <h1 id = "Item_11_H1">Engineering fodder production by solar drying vegetable crop waste</h1>
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-12" name="basic_carousel" />
                    <label class="label_testimonial-12" for="radio_testimonial-12"><span>XII.</span></label>
                    <div class="content-test content_testimonial-12">
                        <span class="picto"></span>
                        <h1 id = "Item_12_H1">Suffocation of silkworm pupae using a mechanical dryer powered by butane gas</h1>
                        <br>
                    </div>
                </li>
            </ul>
        </div>
        <div id="right-zone"></div>
    </div>
`;

var Item_1_H1 = document.getElementById("Item_1_H1");
var Item_2_H1 = document.getElementById("Item_2_H1");
var Item_3_H1 = document.getElementById("Item_3_H1");
var Item_4_H1 = document.getElementById("Item_4_H1");
var Item_5_H1 = document.getElementById("Item_5_H1");
var Item_6_H1 = document.getElementById("Item_6_H1");
var Item_7_H1 = document.getElementById("Item_7_H1");
var Item_8_H1 = document.getElementById("Item_8_H1");
var Item_9_H1 = document.getElementById("Item_9_H1");
var Item_10_H1 = document.getElementById("Item_10_H1");
var Item_11_H1 = document.getElementById("Item_11_H1");
var Item_12_H1 = document.getElementById("Item_12_H1");


var Activities_LI_1 = document.getElementById("Activities_LI_1");
var Activities_LI_2 = document.getElementById("Activities_LI_2");
var Activities_LI_3 = document.getElementById("Activities_LI_3");
var Activities_LI_4 = document.getElementById("Activities_LI_4");
var Activities_LI_5 = document.getElementById("Activities_LI_5");
var Activities_LI_6 = document.getElementById("Activities_LI_6");
var Activities_LI_7 = document.getElementById("Activities_LI_7");
var Activities_LI_8 = document.getElementById("Activities_LI_8");
var Activities_LI_9 = document.getElementById("Activities_LI_9");

var Research_Fields_LI = document.getElementsByClassName("Research_Fields_LI");
var Research_Fields_Span_1 = document.getElementById("Research_Fields_Span_1");
var Research_Fields_Span_2 = document.getElementById("Research_Fields_Span_2");
var Research_Fields_Span_3 = document.getElementById("Research_Fields_Span_3");
var Research_Fields_Span_4 = document.getElementById("Research_Fields_Span_4");
var Research_Fields_Span_5 = document.getElementById("Research_Fields_Span_5");
var Research_Fields_Span_6 = document.getElementById("Research_Fields_Span_6");
var Research_Fields_Span_7 = document.getElementById("Research_Fields_Span_7");
var Research_Fields_Span_8 = document.getElementById("Research_Fields_Span_8");
var Research_Fields_Span_9 = document.getElementById("Research_Fields_Span_9");
var Research_Fields_Span_10 = document.getElementById("Research_Fields_Span_10");
var Research_Fields_Span_11 = document.getElementById("Research_Fields_Span_11");

function M_E_Section_Load(){
  const slider_single_image = document.getElementsByClassName(
    "slider-single-image"
  );
  alert("Width" + "         " +slider_single_image[1].offsetWidth);
  alert("Height" + "         " + slider_single_image[1].offsetHeight);
  alert("Width" + "         " + window.innerWidth);
  alert("Height" + "         " + window.innerHeight);
    const repeat = false;
    const noArrows = false;
    const noBullets = false;
    const container = document.querySelector('.slider-container');
    var slide = document.querySelectorAll('.slider-single');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;
    function initBullets() {
    if (noBullets) {
    return;
    }
    const bulletContainer = document.createElement('div');
    bulletContainer.classList.add('bullet-container')
    slide.forEach((elem, i) => {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet')
    bullet.id = `bullet-index-${i}`
    bullet.addEventListener('click', () => {
    goToIndexSlide(i);
    })
    bulletContainer.appendChild(bullet);
    elem.classList.add('proactivede');
    })
    container.appendChild(bulletContainer);
    }
    function initArrows() {
    if (noArrows) {
    return;
    }
    const leftArrow = document.createElement('a')
    const iLeft = document.createElement('i');
    iLeft.classList.add('fa')
    iLeft.classList.add('fa-hand-o-left')
    // iLeft.classList.add('fa-arrow-left')
    iLeft.style.fontSize = "50px"
    leftArrow.classList.add('slider-left')
    leftArrow.appendChild(iLeft)
    leftArrow.addEventListener('click', () => {
    slideLeft();
    })
    const rightArrow = document.createElement('a')
    const iRight = document.createElement('i');
    iRight.classList.add('fa')
    iRight.classList.add('fa-hand-o-right')
    iRight.style.fontSize = "50px"
    // iRight.classList.add('fa-arrow-right')
    rightArrow.classList.add('slider-right')
    rightArrow.appendChild(iRight)
    rightArrow.addEventListener('click', () => {
    slideRight();
    })
    container.appendChild(leftArrow);
    container.appendChild(rightArrow);
    }
    function slideInitial() {
    initBullets();
    initArrows();
    setTimeout(function () {
    slideRight();
    }, 500);
    }
    function updateBullet() {
    if (!noBullets) {
    document.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
    elem.classList.remove('active');
    if (i === slideCurrent) {
    elem.classList.add('active');
    }
    })
    }
    checkRepeat();
    }
    function checkRepeat() {
    if (!repeat) {
    if (slideCurrent === slide.length - 1) {
    slide[0].classList.add('not-visible');
    slide[slide.length - 1].classList.remove('not-visible');
    if (!noArrows) {
    document.querySelector('.slider-right').classList.add('not-visible')
    document.querySelector('.slider-left').classList.remove('not-visible')
    }
    }
    else if (slideCurrent === 0) {
    slide[slide.length - 1].classList.add('not-visible');
    slide[0].classList.remove('not-visible');
    if (!noArrows) {
    document.querySelector('.slider-left').classList.add('not-visible')
    document.querySelector('.slider-right').classList.remove('not-visible')
    }
    } else {
    slide[slide.length - 1].classList.remove('not-visible');
    slide[0].classList.remove('not-visible');
    if (!noArrows) {
    document.querySelector('.slider-left').classList.remove('not-visible')
    document.querySelector('.slider-right').classList.remove('not-visible')
    }
    }
    }
    }
    function slideRight() {
    if (slideCurrent < slideTotal) { slideCurrent++; } else { slideCurrent=0; } if (slideCurrent> 0) {
        var preactiveSlide = slide[slideCurrent - 1];
        } else {
        var preactiveSlide = slide[slideTotal];
        }
        var activeSlide = slide[slideCurrent];
        if (slideCurrent < slideTotal) { var proactiveSlide=slide[slideCurrent + 1]; } else { var
            proactiveSlide=slide[0]; } slide.forEach((elem)=> {
            var thisSlide = elem;
            if (thisSlide.classList.contains('preactivede')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
            }
            if (thisSlide.classList.contains('preactive')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
            }
            });
            preactiveSlide.classList.remove('preactivede');
            preactiveSlide.classList.remove('active');
            preactiveSlide.classList.remove('proactive');
            preactiveSlide.classList.remove('proactivede');
            preactiveSlide.classList.add('preactive');
            activeSlide.classList.remove('preactivede');
            activeSlide.classList.remove('preactive');
            activeSlide.classList.remove('proactive');
            activeSlide.classList.remove('proactivede');
            activeSlide.classList.add('active');
            proactiveSlide.classList.remove('preactivede');
            proactiveSlide.classList.remove('preactive');
            proactiveSlide.classList.remove('active');
            proactiveSlide.classList.remove('proactivede');
            proactiveSlide.classList.add('proactive');
            updateBullet();
            }
            function slideLeft() {
            if (slideCurrent > 0) {
            slideCurrent--;
            } else {
            slideCurrent = slideTotal;
            }
            if (slideCurrent < slideTotal) { var proactiveSlide=slide[slideCurrent + 1]; } else { var
              proactiveSlide=slide[0]; } var activeSlide=slide[slideCurrent]; if (slideCurrent> 0) {
              var preactiveSlide = slide[slideCurrent - 1];
              } else {
              var preactiveSlide = slide[slideTotal];
              }
              slide.forEach((elem) => {
              var thisSlide = elem;
              if (thisSlide.classList.contains('proactive')) {
              thisSlide.classList.remove('preactivede');
              thisSlide.classList.remove('preactive');
              thisSlide.classList.remove('active');
              thisSlide.classList.remove('proactive');
              thisSlide.classList.add('proactivede');
              }
              if (thisSlide.classList.contains('proactivede')) {
              thisSlide.classList.remove('preactive');
              thisSlide.classList.remove('active');
              thisSlide.classList.remove('proactive');
              thisSlide.classList.remove('proactivede');
              thisSlide.classList.add('preactivede');
              }
              });
              preactiveSlide.classList.remove('preactivede');
              preactiveSlide.classList.remove('active');
              preactiveSlide.classList.remove('proactive');
              preactiveSlide.classList.remove('proactivede');
              preactiveSlide.classList.add('preactive');
              activeSlide.classList.remove('preactivede');
              activeSlide.classList.remove('preactive');
              activeSlide.classList.remove('proactive');
              activeSlide.classList.remove('proactivede');
              activeSlide.classList.add('active');
              proactiveSlide.classList.remove('preactivede');
              proactiveSlide.classList.remove('preactive');
              proactiveSlide.classList.remove('active');
              proactiveSlide.classList.remove('proactivede');
              proactiveSlide.classList.add('proactive');
              updateBullet();
              }
              function goToIndexSlide(index) {
              const sliding = (slideCurrent > index) ? () => slideRight() : () => slideLeft();
              while (slideCurrent !== index) {
              sliding();
              }
              }
              slideInitial();
}
function Handling_Processing_D_Load_Content_Ar() {
    Handling_Processing_D_Span_1.textContent = "تصنيع وتداول";
    Handling_Processing_D_Span_2.textContent = "المنتجات الزراعية";
    HomePageTitle[0].innerHTML = "تصنيع وتداول المنتجات الزراعية";
    Item_1_H1.textContent =
      "تكنولوجيا الصوامع البلاستيكية حبوب متوسطة السعة ٤٠٠-٥٠٠ طن";
    Item_2_H1.textContent =
      " تطوير وتقييم مقطوره مبتكره للحبوب بنظام النقل الهوائي";
    Item_3_H1.textContent = "التثبيت الحراري والتخزين الأمن لرجيع الأرز";
    Item_4_H1.textContent =
      "انتاج البيوشارمن المخلفات الزراعية ومخلفات النخيل";
    Item_5_H1.textContent =
      "الحفاظ علي جودة ما بعد الحصاد واطالة عمر تخزين الطماطم (الطازجة والمجففة)";
    Item_6_H1.textContent =
      "انتاج أغلفه حيويه ذكيه من بعض المخلفات الزراعية لحقظ الأغذيه سريعة الفساد (اطالة فترة الحفظ - ادله للفساد) ";
    Item_7_H1.textContent =
      "التخزين الآمن لبذور بعض النباتات الطبية والعطرية باستخدام التعقيم بالاشعة فوق البنفسجية والتخزين بالأجولة البلاستيكية النوعية";
    Item_8_H1.textContent =
      "بعض العوامل الهندسية المؤثرة علي التجفيف الشمسي للبلح";
    Item_9_H1.textContent =
      "تحسين الكفاءة الحرارية لعملية التجفيف الشمسى لآنتاج الاعلاف المركزة من مخلفات المزارع السمكية";
    Item_10_H1.textContent =
      "دراسات هندسية على فرز وتدريج بعض المحاصيل البستانية";
    Item_11_H1.textContent =
      "هندسة إنتاج العلف بواسطة التجفيف الشمسي لمخلفات محاصيل الخضر";
    Item_12_H1.textContent =
      "خنق عذارى ديدان الحرير باستخدام مجفف ميكانيكي يعمل بغاز البيوتان";
    // Handling_Processing_D_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
    M_E_Section.innerHTML = M_E_Section_Ar;
    M_E_Section_Load();
    Manufacturing_Evaluation_Section_H2.textContent = "النماذج الأولية للوحدات التي تم الإنتهاء من تصنيعها وتقييمها";

    Activities_Section_H2.textContent = "الأهداف الرئيسية للقسم";
    Activities_Section.style.direction = "rtl";
    Activities_Section.innerHTML = Activities_Section_Ar;

    Research_Fields_Span_1.textContent =
      "ستخدام تطبيقات النانوتكنولوجى فى هنسة التصنيع والتداول";
    Research_Fields_Span_2.textContent = "عمليات تجفيف  المنتجات الزراعية ";
    Research_Fields_Span_3.textContent = "عمليات تخزين وحفظ المنتجات الزراعية ";
    Research_Fields_Span_4.textContent =
      "عمليات الفرز والتدريج والغسيل والتشميع والتعبئة للمحاصيل الزراعية ";
    Research_Fields_Span_5.textContent =
      "عمليات والتقشير والطحن والخلط للمحاصيل الزراعية ";
    Research_Fields_Span_6.textContent =
      "عمليات التعبئة والتغليف والنقل للمنتجات الزراعية ";
    Research_Fields_Span_7.textContent =
      "النظم المتكاملة لعمليات التصنيع والحفظ والتداول ";
    Research_Fields_Span_8.textContent =
      "عمليات التصنيع والتداول للمخلفات والنواتج الثانوية الناتجة عن عمليات التصنيع الزراعى ومصانع الاغذية ";
    Research_Fields_Span_9.textContent =
      "عمليات استخلاص وتنقية زيوت النباتية الطبية والعطرية";
    Research_Fields_Span_10.textContent = "تطوير وتصنيع بعض الأجهزة العلمية ";
    Research_Fields_Span_11.textContent =
      "تطبيقات أشعة الليزر والأشعة الكهرومغناطيسية في تحسين جودة المنتجات الزراعية و البيئة";
    Research_Fields_Section_H2.textContent = "المجالات البحثية للقسم";
      for (let index = 0; index < Research_Fields_LI.length; index++) {
        Research_Fields_LI[index].style.borderRight =
          "20px double rgb(243, 235, 223)";
        Research_Fields_LI[index].style.borderLeft = "none";
      }
      Research_Fields_Section.style.direction = "rtl";
  }
  function Handling_Processing_D_Load_Content_En() {
  Handling_Processing_D_Span_1.textContent = "Crop Handling";
  Handling_Processing_D_Span_2.textContent = "& Processing";
  // Handling_Processing_D_H1.textContent = "zzzzzzzzzzzzzz";
  HomePageTitle[0].innerHTML = "AERI Crop Handling & Processing Page";
  Item_1_H1.textContent =
    "Performance analysis and quality evaluation of wheat storage in horizontal silo bags";
  Item_2_H1.textContent =
    "Development and Evaluation of an Innovative Grain Cart with a Pneumatic Conveyor";
  Item_3_H1.textContent =
    "Thermal stabilization and safe storage of rice bran ";
  Item_4_H1.textContent =
    "Biochar production from agricultural waste and palm waste";
  Item_5_H1.textContent =
    "Maintaining post-harvest quality and extending the storage life of tomatoes (fresh and dried)";
  Item_6_H1.textContent =
    "Smart Natural Packaging Films for Food handling applications (Shelf life & Spoilage indicators) ";
  Item_7_H1.textContent =
    "Safe Storage of Some Medical and Aromatic Seeds Using Ultraviolet and Different Types of Hermetic Bags ";
  Item_8_H1.textContent =
    "Some engineering factors affecting solar drying of date.";
  Item_9_H1.textContent =
    "Improving the thermal efficiency of the solar drying process for producing concentrated feed from fish farm waste.";
  Item_10_H1.textContent =
    "Engineering studies on sorting and grading some horticultural crops";
  Item_11_H1.textContent =
    "Engineering fodder production by solar drying vegetable crop waste";
  Item_12_H1.textContent =
    "Suffocation of silkworm pupae using a mechanical dryer powered by butane gas";
  
    M_E_Section.innerHTML = M_E_Section_En;
  
  M_E_Section_Load();
  Manufacturing_Evaluation_Section_H2.textContent = "Prototypes of the units that have been completed and evaluated :";
  
  Activities_Section.style.direction = "ltr";
  Activities_Section.innerHTML = Activities_Section_En;
  Activities_Section_H2.textContent = "Main Objectives"

  Research_Fields_Span_1.textContent = "Using nano-technology applications in processing and handling engineering.";
  Research_Fields_Span_2.textContent = "Drying processes of agricultural products.";
  Research_Fields_Span_3.textContent = "Storage and preservation processes of agricultural products.";
  Research_Fields_Span_4.textContent = "Sorting, grading, washing, waxing, and packaging processes for crops.";
  Research_Fields_Span_5.textContent = "Husking, Milling, and mixing processes for crops.";
  Research_Fields_Span_6.textContent = "Packaging, coating, and transporting processes for agricultural products.";
  Research_Fields_Span_7.textContent = "Integrated systems for processing, preservation, and handling.";
  Research_Fields_Span_8.textContent = "Processing and handling processes for waste and by-products resulting from agricultural processing and food factories.";
  Research_Fields_Span_9.textContent = "Extraction and purification processes for medical and aromatic plant oils. ";
  Research_Fields_Span_10.textContent= "Development and manufacture of some scientific devices.";
  Research_Fields_Span_11.textContent= "Applications of laser and electromagnetic radiation in improving the quality of agricultural products and the environment.";
  Research_Fields_Section_H2.textContent = "Research Fields :";
  for (let index = 0; index < Research_Fields_LI.length; index++) {
      Research_Fields_LI[index].style.borderLeft =
        "25px double rgb(243, 235, 223)";
      Research_Fields_LI[index].style.borderRight = "none";
  }
  Research_Fields_Section.style.direction = "ltr";
  }

if (localStorage.getItem("Permenant_Language") === "English") {
  Handling_Processing_D_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Handling_Processing_D_Load_Content_Ar();
}
