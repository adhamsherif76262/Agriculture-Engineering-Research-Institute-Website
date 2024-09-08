var Patents_Title = document.getElementById("Patents_Page_Title");
// var Patents_h1 = document.getElementById("Patents_h1");
var Technological_Applications_Section = document.getElementById(
  "Technological_Applications_Section"
);
var Technological_Applications_Span_1 = document.getElementById(
  "Technological_Applications_Span_1"
);
var Technological_Applications_Span_2 = document.getElementById(
  "Technological_Applications_Span_2"
);
var Technological_Applications_Span_3 = document.getElementById(
  "Technological_Applications_Span_3"
);
var Technological_Applications_Section_Ar = `
      <div class="center_Ar">
        <div class="wrapper_Ar" id = "wrapper_Ar">
            <div class="inner_Ar">
                <div class="card_Ar">
                    <img src="../Images/Picture1.jpg">
                    <div class="content_Ar">
                        <h1>التصميم والتصنيع المحلى لوحدات الرى المحورى (بيفوت)</h1>
                        <h3>
                            تصميم وتصنيع اول جهاز ري محوري مصري يتوافق مع الظروف المصرية وطبيعة المحاصيل
                            المنزرعة وبما يتماشي مع خطة الدولة علي 
                            تشجيع التصنيع المحلي وترشيد مياه    
                            الري من خلال تطبيق نظم الري الحديث
                        </h3>
                    </div>
                </div>
                <div class="card_Ar">
                    <img src="../Images/Picture2.jpg" id = "pic2">
                    <div class="content_Ar">
                        <h1>
                          تحسين انتاجية المياه بتطوير ادارة الرى الحقلى بالمنيا و الفيوم
                        </h1>
                        <h3>
                            <p>يهدف المشروع إلي:</p>
                            <ul class = "Project_Aims_UL">

                                <li>
                                    تحسين كفاءة الرى السطحى، مما يؤدى إلى رفع الإنتاجية
                                    المحصولية وتحسين العائد الاقتصادى.
                                </li>
                                <li>
                                    توفير استهلاك مياه الرى بما يعادل 25 % في مناطق التنفيذ بما يتماشي مع خطة الدولة
                                </li>
                                <li>
                                    لترشيد مياه الري وزيادة كفاءته.
                                </li>
                                <li>
                                    تبطين حوالي 12 كيلومتر من المراوي في محافظة الفيوم والمنيا.
                                    زراعة القمح والذرة على مصاطب 
                                </li>
                            </ul>
                        </h3>
                    </div>
                </div>
                <div class="card_Ar">
                    <img src="../Images/Picture3.jpg">
                    <div class="content_Ar">
                        <h1>تكنولوجيا صوامع الحبوب الافقية متوسطة السعة 400-500 طن</h1>
                        <h3>
                            يتيح المشروع زيادة السعة التخزينية لمحصول القمح دون الحاجة إلى استثمارات ضخمة لانشاء الصوامع المعدنية الرأسية بالإضافة
                            إلي لتغلب على مشكلة التخزين في الشون الترابيه في العراء والتى ينتج عنها فاقد وتالف كمى في المخزون يصل الى 15 % على الأقل
                            مع القضاء على نسبة الفاقد النوعى فى جودة الحبوب المخزنة. والتوسع في تطبيق المشروع مما يؤدي إلي احتفاظ البلاد برصيد
                            إستراتيجي آمن من القمح خاصة في المناطق اللوجيستية الجديدة ومواقع انتاج القمح.
                        </h3>
                    </div>
                </div>
                <div class="card_Ar">
                    <img src="../Images/Picture4.jpg">
                    <div class="content_Ar">
                        <h1>
                            تصميم وتصنيع مقطورة مبتكرة لنقل حبوب القمح من أماكن الانتاج الى شون التخزين
                        </h1>
                        <h3>
                            تصنيع مقطورة لها امكانية وزن الحبوب و تقدير جودتها واستخراج ايصال بالوزن والقيمة المالية مع تحديد درجة نقاوة المحصول
                            من خلال وحده مخصصه لذلك وكذلك رفع وتفريغ الحبوب بطريقة بسيطة عن طريق وحدة رفع مزود بها المقطورة.
                        </h3>
                    </div>
                </div>
                <div class="card_Ar">
                    <img src="../Images/Picture5.png">
                    <div class="content_Ar">
                        <h1>تعظيم الاستفاده من شونه بلومبرج المطوره</h1>
                        <h3>
                            اجراء تعديلات فنية على التصميمات الخاصة بخطوط النقل والتداول محصول القمح أدت إلي زياده السعه الإنتاجية وتقليل العماله
                            المطلوبة بالإضافة إلي توفير مكان جديد للتخزين الأمن للمحصول باستخدام اجولة بلاستيكية محكمة دون التأثر بدرجات الحرارة
                            المرتفعة داخل الهناجر .
                        </h3>
                    </div>
                </div>
                <div class="card_Ar">
                    <img src="../Images/Picture6.jpg">
                    <div class="content_Ar">
                        <h1>تصميم وتصنيع مجففات للعنب تعمل بالطاقة الشمسية والاشعة تحت الحمراء:</h1>
                        <h3>
                            تجفيف محاصيل الفاكهة خاصة محصول العنب باستخدام التقنيات الحديثة سواء بالأشعة تحت الحمراء او الطاقة الشمسية مما يؤدي
                            إلي زيادة القيمة المضافة والعائد من تلك المحاصيل مع توفير منتجات مجففة ذات جودة عالية تنافس المنتجات المستوردة.
                        </h3>
                    </div>
                </div>
                <div class="card_Ar">
                    <img src="../Images/Picture7.png">
                    <div class="content_Ar">
                        <h1>النهوض بزراعة و حصاد و تسويق النباتات الطبية و العطرية</h1>
                        <h3>
                            ميكنة عمليات انتاج وتداول النباتات الطبية و العطرية لتعظيم العائد الاقتصادى لمزارعى النباتات الطبية و العطرية عن طريق
                            التصنيع المحلى لالات حصاد و تداول تلك النباتات.
                        </h3>
                    </div>
                </div>
                <div class="card_Ar">
                    <img src="../Images/Picture8.png">
                    <div class="content_Ar">
                        <h1>تدوير المخلفات الزراعية لمنتجات اقتصادية متنوعة</h1>
                        <h3>
                            تصميم وتصنيع وحدتين متكاملتين لانتاج البيوشار والكربون النشط والبلاستيك العضوى من مخلفات زراعية وصناعية مما يؤدي إلي
                            تعظيم الاستفادة من تلك المخلفات وتوفير منتجات اقتصادية تعمل علي زيادة الإنتاجية للمحاصيل الزراعية بالإضافة إلي توفير
                            منتجات بلاستيكية ذات مواصفات خاصة تلبي احتياجات السوق المحلي في القطاعين الزراعي والصناعي
                        </h3>
                    </div>
                </div>
                <div class="card_Ar">
                    <img src="../Images/Picture9.png">
                    <div class="content_Ar">
                        <h1>وحدة نصف صناعية لانتاج مركبات الألياف البلاستيكية الطبيعية (NFPC)</h1>
                    </div>
                </div>
                <div class="card_Ar">
                    <img src="../Images/Picture10.jpg">
                    <div class="content_Ar">
                        <h1>طريقة مبتكرة للزراعة الدقيقة ا لكهروميكانيكية لبنجر السكر و الذرة</h1>
                        <h3>
                            تطبيق الزراعة الدقيقة فى محصول بنجر السكر و المحاصيل الأخرى مع تعميق التعاون المشترك وتبادل الخبرات بين الجانبين
                            المصري والبيلاروسي
                        </h3>
                    </div>
                </div>
                <div class="card_Ar">
                    <img src="../Images/Picture11.png">
                    <div class="content_Ar">
                        <h1>
                        	تصميم وتصنيع نظام تنقية وتحلية حيوي لمعالجة المياه الرمادية في المناطق الحضرية
                        </h1>
                        <h3>
                            إنشاء نوعين من المرشحات الحيوية لنظام إعادة استخدام المياه الرمادية ( نظام المرشح البيولوجي البوليمر الطبيعي ونظام
                            المفاعل الحيوي ) كضرورة واعدة لطرق بديلة وموفرة للطاقة وفعالة من حيث التكلفة.
                        </h3>
                    </div>
                </div>
                <div class="card_Ar">
                    <img src="../Images/Picture12.png">
                    <div class="content_Ar">
                        <h1>أغلفه حيويه ذكيه لتطبيقات الأغذيه المتداولة (اطالة فترة الحفظ - ادله للفساد)</h1>
                        <h3>
                            انتاج غلاف ذكى متعدد الوظائف يمكنه تأخير ظهور الفساد غي الأطعمة كما يمكنه إكتشاف بدايات الفساد عن طريق تغيير لونه ويتم
                            اختبار العبوة الذكية المطورة في التطبيق على منتجات اللحوم لإطالة العمر الافتراضي أو لتأخير التلف بمنع نمو الميكروبات ،
                            بالإضافة إلى عملها كمؤشرات للكشف عن بدايات ظهور تلف اللحوم عن طريق تغيير اللون.
                        </h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="map_Ar">
            <button class="btn twelveth"></button>
            <button class="btn eleventh"></button>
            <button class="btn tenth"></button>
            <button class="btn ninth"></button>
            <button class="btn eighth"></button>
            <button class="btn seventh"></button>
            <button class="btn sixth"></button>
            <button class="btn fifth"></button>
            <button class="btn fourth"></button>
            <button class="btn third"></button>
            <button class="btn second"></button>
            <button class="btn active first"></button>
        </div>
    </div>
`;
var Technological_Applications_Section_En = `
      <div class="center_En">
        <div class="wrapper_En" id = "wrapper_En">
            <div class="inner_En">
                <div class="card_En">
                    <img src="../Images/Picture1.jpg">
                    <div class="content_En">
                        <h1>Local Design And Manufacturing of Pivot Irrigation Units (Pivot)</h1>
                        <h3>
                            Design and manufacturing the first Egyptian pivot irrigation device that is compatible with
                            Egyptian conditions and the nature of the planted crops, and in line with the state's plan
                            to encourage local manufacturing and rationalize irrigation water through the application of
                            modern irrigation systems.
                        </h3>
                    </div>
                </div>
                <div class="card_En">
                    <img src="../Images/Picture2.jpg" id = "pic2">
                    <div class="content_En">
                        <h1>
                            Improving Water Productivity by Developing Field Irrigation Management in Minya And Fayoum
                        </h1>
                        <h3>
                            <p>The Project Aims To :</p>
                            <ul class = "Project_Aims_UL">
                                <li>
                                    Improve the efficiency of surface irrigation, which leads to increasing crop
                                    productivity and improving economic returns.
                                </li>
                                <li>
                                    Save irrigation water consumption by 25% in the implementation areas in line with 
                                    the state's plan to rationalize irrigation water and increase its efficiency.
                                </li>
                                <li>
                                    Lining about 12 km of canals in Fayoum and Minya governorates.
                                </li>
                                <li>
                                    Growing wheat and corn on terraces.
                                </li>
                            </ul>
                        </h3>
                    </div>
                </div>
                <div class="card_En">
                    <img src="../Images/Picture3.jpg">
                    <div class="content_En">
                        <h1>Medium Capacity Horizontal Grain Silos Technology 400-500 Ton</h1>
                        <h3>
                            The project allows increasing storage capacity of wheat crop without the need for huge
                            investments to establish vertical metal silos, in addition to overcoming the problem of
                            storage in open dirt barns, which results in quantitative loss and damage in the stock of up
                            to at least 15%, while eliminating the percentage of qualitative loss in the quality of
                            stored grains and expanding the implementation of the project, which leads to maintaining a
                            safe strategic balance of wheat in the country, especially in new logistical areas and wheat
                            production sites.
                        </h3>
                    </div>
                </div>
                <div class="card_En">
                    <img src="../Images/Picture4.jpg">
                    <div class="content_En">
                        <h1>
                            Design and Manufacture an Innovative Trailer to Transport Wheat Grains from Production Sites
                            to Storage Silos
                        </h1>
                        <h3>
                            Manufacture a trailer that has the ability to weigh the grains, estimate their quality, and
                            extract a receipt for the weight and financial value, while determining the degree of crop
                            purity through a unit designated for this purpose, as well as lifting and unloading the
                            grains in a simple manner through a lifting unit equipped with the trailer.
                        </h3>
                    </div>
                </div>
                <div class="card_En">
                    <img src="../Images/Picture5.png">
                    <div class="content_En">
                        <h1>Maximizing the Benefit from the Developed Bloomberg Barn</h1>
                        <h3>
                            Technically modify the designs of wheat crop transportation and handling lines led to an
                            increase in production capacity and a reduction in required labor, in addition to providing
                            a new place for safe storage of the crop using sealed plastic bags without being affected by
                            the high temperatures inside the hangars.
                        </h3>
                    </div>
                </div>
                <div class="card_En">
                    <img src="../Images/Picture6.jpg">
                    <div class="content_En">
                        <h1>Design and Manufacture of Solar and Infrared Grape Dryers:</h1>
                        <h3>
                            Drying fruit crops, especially grapes, using modern technologies, whether infrared or solar
                            energy, which leads to increasing the added value and return from these crops, while
                            providing high-quality dried products that compete with imported products.
                        </h3>
                    </div>
                </div>
                <div class="card_En">
                    <img src="../Images/Picture7.png">
                    <div class="content_En">
                        <h1>Advancing the Cultivation, Harvesting, and Marketing of Medicinal and Aromatic Plants</h1>
                        <h3>
                            Mechanization of production and handling processes: to maximize the economic return for
                            medicinal and aromatic plants farmers, there should be a focus on local manufacturing of
                            harvesting and handling equipment for these plants.
                        </h3>
                    </div>
                </div>
                <div class="card_En">
                    <img src="../Images/Picture8.png">
                    <div class="content_En">
                        <h1>Recycling Agricultural Waste into Various Economic Products</h1>
                        <h3>
                            Designing and manufacturing two integrated units for the production of biochar, activated
                            carbon, and organic plastic from agricultural and industrial waste. This maximizes the
                            utilization of these wastes and provides economic products that enhance the productivity of
                            agricultural crops, in addition to providing plastic products with specific specifications
                            that meet the needs of the local market in both the agricultural and industrial sectors.
                        </h3>
                    </div>
                </div>
                <div class="card_En">
                    <img src="../Images/Picture9.png">
                    <div class="content_En">
                        <h1>A Semi-Industrial Unit for the Production of Natural Fiber Plastic Composites (NFPC)</h1>
                    </div>
                </div>
                <div class="card_En">
                    <img src="../Images/Picture10.jpg">
                    <div class="content_En">
                        <h1>An Innovative Method for Electromechanical Precision Farming of Sugar Beet and Corn.</h1>
                        <h3>
                            Application of precision farming in sugar beet and other crops with deepened cooperation and
                            exchange of expertise between the Egyptian and Belarusian sides.
                        </h3>
                    </div>
                </div>
                <div class="card_En">
                    <img src="../Images/Picture11.png">
                    <div class="content_En">
                        <h1>
                            Design and Manufacturing of a Bio-Filtration and Desalination System for Treating Grey Water
                            in Urban Areas.
                        </h1>
                        <h3>
                            Establishment of two types of bio-filters for the grey water re-use system (natural polymer
                            biological filter system and bioreactor system) as a promising necessity for alternative,
                            energy-saving, and cost-effective methods.
                        </h3>
                    </div>
                </div>
                <div class="card_En">
                    <img src="../Images/Picture12.png">
                    <div class="content_En">
                        <h1>Smart Bio-Packaging for Food Applications (Extended Shelf Life - Spoilage Indicators).</h1>
                        <h3>
                            Production of a multifunctional smart packaging that can delay the onset of food spoilage
                            and detect early signs of spoilage by changing color. The developed smart packaging is
                            tested on meat products to extend shelf life or delay spoilage by preventing microbial
                            growth. Additionally, it acts as an indicator to detect the early stages of meat spoilage
                            through color change.
                        </h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="map_En">
            <button class="active first"></button>
            <button class="second"></button>
            <button class="third"></button>
            <button class="fourth"></button>
            <button class="fifth"></button>
            <button class="sixth"></button>
            <button class="seventh"></button>
            <button class="eighth"></button>
            <button class="ninth"></button>
            <button class="tenth"></button>
            <button class="eleventh"></button>
            <button class="twelveth"></button>
        </div>
    </div>
`;
var Patents_Section = document.getElementById("Patents_Section");

var Patents_Section_Ar = `

    <div class="container_Ar">
        <ul class="responsive-table_Ar">
          <li class="table-header_Ar">
                <div class="col_Ar col-2_Ar" id="Patent_Header_Ar" style="text-align: center;">وصف براءة الاختراع
                </div>
                <div class="col_Ar col-1_Ar" style="text-align: right;">رقم براءة الاختراع المحلية</div>
          </li>
            
          <li class="table-row_Ar">
                <div class="col_Ar col-2_Ar" data-label="وصف براءة الاختراع">
                    ماكينة تقطيع مخلفات المحاصيل الزراعية ذات مقاومة القطع العالية  
                </div>
                <div class="col_Ar col-1_Ar" data-label="رقم براءة الاختراع المحلية">٢٧٠٢١</div>
          </li>
            
          <li class="table-row_Ar">
                <div class="col_Ar col-2_Ar" data-label="وصف براءة الاختراع">
                    ماكينة تقليب الأسمدة العضوية مزدوجة الدرفيل 
                </div>
                <div class="col_Ar col-1_Ar" data-label="رقم براءة الاختراع المحلية">٢٧٥٥٠</div>
          </li>
            
          <li class="table-row_Ar">
                <div class="col_Ar col-2_Ar" data-label="وصف براءة الاختراع">
                مقطورة تكنولوجية حديثة لسهولة نقل الأقماح من حقول المزارعيين الى مخازن الحبوب 
            </div>
            <div class="col_Ar col-1_Ar" data-label="رقم براءة الاختراع المحلية">٩٥٤</div>
          </li>
        
          <li class="table-row_Ar">
            <div class="col_Ar col-2_Ar" data-label="وصف براءة الاختراع">
                آله التثبيت الحرارى لرجيع الأرز باستخدام الأشعة تحت الحمراء 
                <br>
                جهة التمويل : هيئة تحديث الصناعة 
            </div>
            <div class="col_Ar col-1_Ar" data-label="رقم براءة الاختراع المحلية" style="margin-top: 20px;">٢٩٤٢٢</div>
          </li>
        
          <li class="table-row_Ar">
            <div class="col_Ar col-2_Ar" data-label="وصف براءة الاختراع">
                جهاز لقياس تركيز جزيئات القش والاتربه الناتجه أثناء تشغيل الألات الزراعيه مثل آلة الدراس 
            </div>
                <div class="col_Ar col-1_Ar" data-label="رقم براءة الاختراع المحلية" style="margin-top: 10px;">٢٧٢٢٦</div>
          </li>
            
        </ul>
    </div>
`;

var Patents_Section_En = `
    <div class="container_En">
        <ul class="responsive-table_En">
            <li class="table-header_En">
                <div class="col_En col-1_En" id="Patent_Header_En">Local Patent Number</div>
                <div class="col_En col-2_En" style="text-align: center; margin-top: 20px;">Patent Description</div>
            </li>
            <li class="table-row_En">
                <div class="col_En col-1_En" data-label="Local Patent Number">27021</div>
                <div class="col_En col-2_En" data-label="Patent Description">
                     High-Resistance Crop Residue Cutting Machine
                </div>
            </li>
            <li class="table-row_En">
                <div class="col_En col-1_En" data-label="Local Patent Number">27550</div>
                <div class="col_En col-2_En" data-label="Patent Description">
                     Double-Drum Organic Fertilizer Turner Machine
                </div>
            </li>
            <li class="table-row_En">
                <div class="col_En col-1_En" data-label="Local Patent Number">954</div>
                <div class="col_En col-2_En" data-label="Patent Description">
                     Modern Technological Trailer for Easy Transport of Wheat from Farmers' Fields to Grain Storage.
                </div>
            </li>
            <li class="table-row_En">
                <div class="col_En col-1_En" data-label="Local Patent Number" style="margin-top: 20px;">29422</div>
                <div class="col_En col-2_En" data-label="Patent Description">
                     Thermal Fixation Machine for Rice Husk Using Infrared Radiation.
                    <br><br>
                     Funding entity: Industrial Modernization Center.
                </div>
            </li>
            <li class="table-row_En">
                <div class="col_En col-1_En" data-label="Local Patent Number" style="margin-top: 10px;">27226</div>
                <div class="col_En col-2_En" data-label="Patent Description">
                     Device for Measuring the Concentration of Straw and Dust Particles Produced during the Operation of Agricultural
                    Machines like a Thresher.
                </div>
            </li>
        </ul>
    </div>
`;

function detectBrowser() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Edg") > -1) {
        return "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    } else if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
    } else if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } else if (userAgent.indexOf("Opera") > -1) {
        return "Opera";
    } else if (userAgent.indexOf("Trident") > -1 || userAgent.indexOf("MSIE") > -1) {
        return "Internet Explorer";
    }

    return "Unknown";
}

// Get the browser name and display it
var browserName = detectBrowser();
console.log("Your browser is: " + browserName);
function Patents_Load_Content_Ar() {
  // Patents_h1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
    Technological_Applications_Span_1.textContent = "التطبيقات";
    Technological_Applications_Span_2.textContent = "التكنولوجية";
  HomePageTitle[0].innerHTML = "التطبيقات التكنولوجية";
  Technological_Applications_Section.innerHTML = Technological_Applications_Section_Ar;
  Patents_Section.innerHTML = Patents_Section_Ar;
  var Wrapper_Ar = document.getElementById("wrapper_Ar");
    if (
      window.performance.getEntriesByType("navigation")[0].type !== "prerender" ||
      window.performance.getEntriesByType("navigation")[0].type === "prerender"
    ) {
      if (browserName.toLowerCase() === "chrome") {
        alert(browserName);
        Wrapper_Ar.style.width = "66.8%";
        alert(Wrapper_Ar.style.width);
      } else if (browserName.toLowerCase() === "firefox") {
        alert(browserName);
        Wrapper_Ar.style.width = "66%";
        alert(Wrapper_Ar.style.width);
      } else if (browserName.toLowerCase() === "microsoft edge") {
        alert(browserName);
        // Wrapper_En.style.width = "62.9%";
        Wrapper_Ar.style.width = "68.9%";
        alert(Wrapper_Ar.style.width);
      }
    }
  const myfun_Ar = (num) => {
    let res = 0;
    res = (num - 1) * 100;

    switch (true) {
      case num == 1 || num == 2 || num == 3:
        slides_Ar.style.transform = `translateX(${res - 1}%)`;
        break;
      case num == 4 || num == 5:
        slides_Ar.style.transform = `translateX(${res - 1}%) translateX(${
          num - 0.5
        }0px)`;
        break;
      case num == 6 || num == 7:
        slides_Ar.style.transform = `translateX(${res - 3}%) translateX(${
          num - 4
        }0px)`;
        break;
      case num == 8:
        slides_Ar.style.transform = `translateX(${res - 4.5}%) translateX(${
          num - 4
        }0px)`;
        break;
      case num == 9 || num == 10:
        slides_Ar.style.transform = `translateX(${res - 5}%) translateX(${
          num - 4
        }0px)`;
        break;
      case num == 11 || num == 12:
        slides_Ar.style.transform = `translateX(${res - 7.2}%) translateX(${
          num - 4
        }0px)`;
        break;

      default:
        break;
    }
  };
  const buttonsWrapper_Ar = document.querySelector(".map_Ar");
  const slides_Ar = document.querySelector(".inner_Ar");

    buttonsWrapper_Ar.addEventListener("click", (e) => {
      if (e.target.nodeName === "BUTTON") {
        Array.from(buttonsWrapper_Ar.children).forEach((item) =>
          item.classList.remove("active")
        );
        switch (true) {
          case e.target.classList.contains("first"):
            myfun_Ar(1);
            e.target.classList.add("active");
            break;
          case e.target.classList.contains("second"):
            myfun_Ar(2);
            e.target.classList.add("active");
            break;
          case e.target.classList.contains("third"):
            myfun_Ar(3);
            e.target.classList.add("active");
            break;
          case e.target.classList.contains("fourth"):
            myfun_Ar(4);
            e.target.classList.add("active");
            break;
          case e.target.classList.contains("fifth"):
            myfun_Ar(5);
            e.target.classList.add("active");
            break;
          case e.target.classList.contains("sixth"):
            myfun_Ar(6);
            e.target.classList.add("active");
            break;
          case e.target.classList.contains("seventh"):
            myfun_Ar(7);
            e.target.classList.add("active");
            break;
          case e.target.classList.contains("eighth"):
            myfun_Ar(8);
            e.target.classList.add("active");
            break;
          case e.target.classList.contains("ninth"):
            myfun_Ar(9);
            e.target.classList.add("active");
            break;
          case e.target.classList.contains("tenth"):
            myfun_Ar(10);
            e.target.classList.add("active");
            break;
          case e.target.classList.contains("eleventh"):
            myfun_Ar(11);
            e.target.classList.add("active");
            break;
          case e.target.classList.contains("twelveth"):
            myfun_Ar(12);
            e.target.classList.add("active");
            break;
          default:
            break;
        }
      }
    });
}
function Patents_Load_Content_En() {
  // Patents_h1.textContent = "zzzzzzzzzzzzzz";
  Technological_Applications_Span_1.textContent = "Technological";
  Technological_Applications_Span_2.textContent = "Applications";
  
  HomePageTitle[0].innerHTML = "AERI Technological Applications Page";
  Technological_Applications_Section.innerHTML = Technological_Applications_Section_En;
  Patents_Section.innerHTML = Patents_Section_En;
  var Wrapper_En = document.getElementById("wrapper_En");
    if (window.performance.getEntriesByType("navigation")[0].type !== "prerender" ||
        window.performance.getEntriesByType("navigation")[0].type === "prerender"){
      
      if (
        browserName.toLowerCase() === "chrome") {
          alert(browserName)
        Wrapper_En.style.width = "66.8%";
      } else if (browserName.toLowerCase() === "firefox") {
        alert(browserName)
        Wrapper_En.style.width = "66%";
      } else if (browserName.toLowerCase() === "microsoft edge") {
        alert(browserName)
        // Wrapper_En.style.width = "62.9%";
        Wrapper_En.style.width = "68.9%";
        alert(Wrapper_En.style.width);
      }
    }
  
    const myfun_En = (num) => {
          let res = 0;
          res = (num - 1) * 100;
          switch (true) {
            case num == 1 || num == 2 || num == 3:
              slides_En.style.transform = `translateX(-${res}%)`;
              break;
            case num == 4 || num == 5:
              slides_En.style.transform = `translateX(-${res - 1}%) translateX(-${num - 4}0px)`;
              break;
            case num == 6 || num == 7:
              slides_En.style.transform = `translateX(-${
                res -0.75
              }%) translateX(-${num - 6}0px)`;
              break;
            case num == 8 || num == 9:
              slides_En.style.transform = `translateX(-${
                res-0.5
              }%) translateX(-${num - 8}0px)`;
              break;
            case num == 10:
              slides_En.style.transform = `translateX(-${
                res - 2
              }%) translateX(-${num - 8}0px)`;
              break;
            case num == 11 || num == 12:
              slides_En.style.transform = `translateX(-${
                res - 7
              }%) translateX(-${num - 4}0px)`;
              break;

            default:
              break;
          }

          // console.log("Fun Called")
    };
    const buttonsWrapper_En = document.querySelector(".map_En");
    const slides_En = document.querySelector(".inner_En");
    buttonsWrapper_En.addEventListener("click", (e) => {
          if (e.target.nodeName === "BUTTON") {
            Array.from(buttonsWrapper_En.children).forEach((item) =>
              item.classList.remove("active")
            );

            switch (true) {
              case e.target.classList.contains("first"):
                myfun_En(1);
                e.target.classList.add("active");
                break;
              case e.target.classList.contains("second"):
                myfun_En(2);
                e.target.classList.add("active");
                break;
              case e.target.classList.contains("third"):
                myfun_En(3);
                e.target.classList.add("active");
                break;
              case e.target.classList.contains("fourth"):
                myfun_En(4);
                e.target.classList.add("active");
                break;
              case e.target.classList.contains("fifth"):
                myfun_En(5);
                e.target.classList.add("active");
                break;
              case e.target.classList.contains("sixth"):
                myfun_En(6);
                e.target.classList.add("active");
                break;
              case e.target.classList.contains("seventh"):
                myfun_En(7);
                e.target.classList.add("active");
                break;
              case e.target.classList.contains("eighth"):
                myfun_En(8);
                e.target.classList.add("active");
                break;
              case e.target.classList.contains("ninth"):
                myfun_En(9);
                e.target.classList.add("active");
                break;
              case e.target.classList.contains("tenth"):
                myfun_En(10);
                e.target.classList.add("active");
                break;
              case e.target.classList.contains("eleventh"):
                myfun_En(11);
                e.target.classList.add("active");
                break;
              case e.target.classList.contains("twelveth"):
                myfun_En(12);
                e.target.classList.add("active");
                break;
              default:
                break;
            }
          }
    });
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Patents_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Patents_Load_Content_Ar();
}
