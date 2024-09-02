var Handling_Processing_D_Page_Title = document.getElementById(
  "Handling_Processing_D_Page_Title"
);
// var Handling_Processing_D_H1 = document.getElementById(
//   "Handling_Processing_D_H1"
// );
var Acomplishments_Section = document.getElementById("Acomplishments_Section");

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
                        <!-- <p>“The team really takes pride in their work. If I didn’t know any better I would think they
                            actually worked for my company.”</p>
                        <p class="testimonialFrom">Bill, Owner</p>
                        <p class="testimonialState">Rochester, NY</p> -->
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-2" name="basic_carousel" />
                    <label class="label_testimonial-2" for="radio_testimonial-2"><span>II.</span></label>
                    <div class="content-test content_testimonial-2">
                        <span class="picto"></span>
                        <h1 id = "Item_2_H1">Development and Evaluation of an Innovative Grain Cart with a Pneumatic Conveyor</h1>
                        <!-- <p>“Quite simply… the service offers prompt response time to my visitors and helps me to better
                            know what type of project a potential customer wants.”</p>
                        <p class="testimonialFrom">Bill, Owner</p>
                        <p class="testimonialState">Tucson, AZ</p> -->
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-3" name="basic_carousel" />
                    <label class="label_testimonial-3" for="radio_testimonial-3"><span>III.</span></label>
                    <div class="content-test content_testimonial-3">
                        <span class="picto"></span>
                        <h1 id = "Item_3_H1">Thermal stabilization and safe storage of rice bran </h1>
                        <!-- <p>“I couldn’t believe it. I actually had to hire someone to help me keep up with the new
                            business. I had no idea my website had so much value.”</p>
                        <p class="testimonialFrom">Marlene, Owner</p>
                        <p class="testimonialState">Monterey, CA</p> -->
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-4" name="basic_carousel" />
                    <label class="label_testimonial-4" for="radio_testimonial-4"><span>IV.</span></label>
                    <div class="content-test content_testimonial-4">
                        <span class="picto"></span>
                        <h1 id = "Item_4_H1">Biochar production from agricultural waste and palm waste</h1>
                        <!-- <p>Great company to send leads. Very efficient and pleased with the services. We get lots of
                            leads and that whats important. Support is also great from the managers/support. Thanks YPC
                            Chat</p>
                        <p class="testimonialFrom">Mark, Owner</p>
                        <p class="testimonialState">Somerset, VA</p> -->
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-5" name="basic_carousel" />
                    <label class="label_testimonial-5" for="radio_testimonial-5"><span>V.</span></label>
                    <div class="content-test content_testimonial-5">
                        <span class="picto"></span>
                        <h1 id = "Item_5_H1">Maintaining post-harvest quality and extending the storage life of tomatoes (fresh and dried)</h1>
                        <!-- <p>Great company to send leads. Very efficient and pleased with the services. We get lots of
                            leads and that whats important. Support is also great from the managers/support. Thanks YPC
                            Chat</p>
                        <p class="testimonialFrom">Mark, Owner</p>
                        <p class="testimonialState">Somerset, VA</p> -->
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-6" name="basic_carousel" />
                    <label class="label_testimonial-6" for="radio_testimonial-6"><span>VI.</span></label>
                    <div class="content-test content_testimonial-6">
                        <span class="picto"></span>
                        <h1 id = "Item_6_H1">Smart Natural Packaging Films for Food handling applications (Shelf life & Spoilage indicators) </h1>
                        <!-- <p>Great company to send leads. Very efficient and pleased with the services. We get lots of
                            leads and that whats important. Support is also great from the managers/support. Thanks YPC
                            Chat</p>
                        <p class="testimonialFrom">Mark, Owner</p>
                        <p class="testimonialState">Somerset, VA</p> -->
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-7" name="basic_carousel" />
                    <label class="label_testimonial-7" for="radio_testimonial-7"><span>VII.</span></label>
                    <div class="content-test content_testimonial-7">
                        <span class="picto"></span>
                        <h1 id = "Item_7_H1"> Safe Storage of Some Medical and Aromatic Seeds Using Ultraviolet and Different Types of Hermetic Bags </h1>
                        <!-- <p>Great company to send leads. Very efficient and pleased with the services. We get lots of
                            leads and that whats important. Support is also great from the managers/support. Thanks YPC
                            Chat</p>
                        <p class="testimonialFrom">Mark, Owner</p>
                        <p class="testimonialState">Somerset, VA</p> -->
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-8" name="basic_carousel" />
                    <label class="label_testimonial-8" for="radio_testimonial-8"><span>VIII.</span></label>
                    <div class="content-test content_testimonial-8">
                        <span class="picto"></span>
                        <h1 id = "Item_8_H1">Some engineering factors affecting solar drying of date.</h1>
                        <!-- <p>Great company to send leads. Very efficient and pleased with the services. We get lots of
                            leads and that whats important. Support is also great from the managers/support. Thanks YPC
                            Chat</p>
                        <p class="testimonialFrom">Mark, Owner</p>
                        <p class="testimonialState">Somerset, VA</p> -->
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-9" name="basic_carousel" />
                    <label class="label_testimonial-9" for="radio_testimonial-9"><span>IX.</span></label>
                    <div class="content-test content_testimonial-9">
                        <span class="picto"></span>
                        <h1 id = "Item_9_H1">Improving the thermal efficiency of the solar drying process for producing concentrated feed from fish farm waste. </h1>
                        <!-- <p>Great company to send leads. Very efficient and pleased with the services. We get lots of
                            leads and that whats important. Support is also great from the managers/support. Thanks YPC
                            Chat</p>
                        <p class="testimonialFrom">Mark, Owner</p>
                        <p class="testimonialState">Somerset, VA</p> -->
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-10" name="basic_carousel" />
                    <label class="label_testimonial-10" for="radio_testimonial-10"><span>X</span></label>
                    <div class="content-test content_testimonial-10">
                        <span class="picto"></span>
                        <h1 id = "Item_10_H1">Engineering studies on sorting and grading some horticultural crops</h1>
                        <!-- <p>Great company to send leads. Very efficient and pleased with the services. We get lots of
                            leads and that whats important. Support is also great from the managers/support. Thanks YPC
                            Chat</p>
                        <p class="testimonialFrom">Mark, Owner</p>
                        <p class="testimonialState">Somerset, VA</p> -->
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-11" name="basic_carousel" />
                    <label class="label_testimonial-11" for="radio_testimonial-11"><span>XI.</span></label>
                    <div class="content-test content_testimonial-11">
                        <span class="picto"></span>
                        <h1 id = "Item_11_H1">Engineering fodder production by solar drying vegetable crop waste</h1>
                        <!-- <p>Great company to send leads. Very efficient and pleased with the services. We get lots of
                            leads and that whats important. Support is also great from the managers/support. Thanks YPC
                            Chat</p>
                        <p class="testimonialFrom">Mark, Owner</p>
                        <p class="testimonialState">Somerset, VA</p> -->
                        <br>
                    </div>
                </li>
                <li class="item">
                    <input type="radio" id="radio_testimonial-12" name="basic_carousel" />
                    <label class="label_testimonial-12" for="radio_testimonial-12"><span>XII.</span></label>
                    <div class="content-test content_testimonial-12">
                        <span class="picto"></span>
                        <h1 id = "Item_12_H1">Suffocation of silkworm pupae using a mechanical dryer powered by butane gas</h1>
                        <!-- <p>Great company to send leads. Very efficient and pleased with the services. We get lots of
                            leads and that whats important. Support is also great from the managers/support. Thanks YPC
                            Chat</p>
                        <p class="testimonialFrom">Mark, Owner</p>
                        <p class="testimonialState">Somerset, VA</p>
                        <br> -->
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
  
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Handling_Processing_D_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Handling_Processing_D_Load_Content_Ar();
}
