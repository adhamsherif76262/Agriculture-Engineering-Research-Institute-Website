var Agricultural_Mechanization_OS_Page_Title = document.getElementById("Agricultural_Mechanization_OS_Page_Title");
// var Agricultural_Mechanization_OS_H1 = document.getElementById("Agricultural_Mechanization_OS_H1");
var Agricultural_Mechanization_OS_Span_1 = document.getElementById(
  "Agricultural_Mechanization_OS_Span_1"
);
var Agricultural_Mechanization_OS_Span_2 = document.getElementById(
  "Agricultural_Mechanization_OS_Span_2"
);
var Agricultural_Mechanization_OS_Span_3 = document.getElementById(
  "Agricultural_Mechanization_OS_Span_3"
);
var Agricultural_Mechanization_OS_Span_4 = document.getElementById(
  "Agricultural_Mechanization_OS_Span_4"
);

var Main_Objectives_Section = document.getElementById(
  "Main_Objectives_Section"
);
var Main_Objectives_Section_Ar = `
      <header role="banner" id="Main_Objectives_Ar">
        <nav class="nav" role="navigation">
            <ul class="nav__list">
                <li>
                    <input id="group-1" type="checkbox" hidden />
                    <label for="group-1">
                        <p> تطوير آلات ومعدات زراعية ذكية منخفضة التكاليف   :</p>
                        <span class="fa fa-angle-left"></span>
                    </label>
                    <ul class="group-list_Ar">
                        <li><a href="#">تعزيز الإنتاجية وتقليل الفاقد باستخدام تقنيات حديثة، بما في ذلك الابتكار في آلات
                                الحصاد وتداول المحاصيل.</a></li>
                    </ul>
                </li>
                <li>
                    <input id="group-2" type="checkbox" hidden />
                    <label for="group-2">
                        <p>تصميم أنظمة آلية لتحسين الأمان وتقليل الجهد البشري  :</p>
                        <span class="fa fa-angle-left"></span>
                    </label>
                    <ul class="group-list_Ar">
                        <li><a href="#">تطوير معدات تسلق أشجار النخيل وروبوتات متخصصة لتنفيذ مهام الزراعة، الري،
                                والحصاد.</a></li>
            </ul>
            </li>
            <li>
                <input id="group-3" type="checkbox" hidden />
                <label for="group-3">
                    <p> تعزيز استدامة التربة وإدارة المخلفات الزراعي  :</p>
                    <span class="fa fa-angle-left"></span>
                    </label>
                    <ul class="group-list_Ar">
                        <li><a href="#">ابتكار معدات آلية لإخلاء الأرض وإزالة المخلفات بكفاءة مع تعزيز الحفاظ على
                                البيئة.</a></li>
                    </ul>
            </li>
            <li>
                <input id="group-4" type="checkbox" hidden />
                <label for="group-4">
                    <p>تطبيق الذكاء الاصطناعي في الإنتاج الحيواني والتحكم في الموارد  : </p>
                    <span class="fa fa-angle-left"></span>
                    </label>
                    <ul class="group-list_Ar">
                        <li><a href="#">تطوير أنظمة تعتمد على الذكاء الاصطناعي لتحسين كفاءة الإنتاج الحيواني والتحكم
                                الدقيق في المياه والمغذيات.</a></li>
                    </ul>
            </li>
            <li>
                <input id="group-5" type="checkbox" hidden />
                <label for="group-5">
                    <p>تعزيز السلامة المهنية في تصميم المعدات الزراعية  : </p>
                    <span class="fa fa-angle-left"></span>
                    </label>
                    <ul class="group-list_Ar">
                        <li><a href="#">استخدام تقنيات حديثة في تصميم المعدات لضمان سلامة العاملين وتحسين ظروف
                                العمل.</a></li>
                    </ul>
            </li>
            </ul>
        </nav>
    </header>
`;
var Main_Objectives_Section_En = `
      <header role="banner" id="Main_Objectives_En">
        <nav class="nav" role="navigation">
            <ul class="nav__list">
                <li>
                    <input id="group-1" type="checkbox" hidden />
                    <label for="group-1"><span class="fa fa-angle-right"></span>Development of low-cost intelligent agricultural machinery and equipment: </label>
                    <ul class="group-list_En">
                        <li><a href="#">Enhancing productivity and reducing waste by employing modern technologies, including innovations in harvesting machines and crop handling.</a></li>
                    </ul>
                </li>
                <li>
                    <input id="group-2" type="checkbox" hidden />
                    <label for="group-2"><span class="fa fa-angle-right"></span>Design of automated systems to
                        improve safety and reduce human effort: </label>
                    <ul class="group-list_En">
                        <li><a href="#">Developing specialized equipment such as palm tree climbing tools and robots to
                                carry out agricultural tasks like planting, irrigation, and harvesting.</a></li>
            </ul>
            </li>
            <li>
                <input id="group-3" type="checkbox" hidden />
                <label for="group-3"><span class="fa fa-angle-right"></span>Enhancing soil sustainability and managing
                    agricultural waste: </label>
                <ul class="group-list_En">
                    <li>
                        <li><a href="#">Innovating automated machinery for efficient land clearing and waste removal while promoting environmental preservation.</a></li>
                    </li>
            </ul>
            </li>
            <li>
                <input id="group-4" type="checkbox" hidden />
                <label for="group-4"><span class="fa fa-angle-right"></span>Application of artificial intelligence in
                    livestock production and resource
                    management:</label>
                <ul class="group-list_En">
                    <li>
                        <li><a href="#">Developing AI-based systems to improve the efficiency of livestock
                                production and precise control of water and nutrient resources.</a></li>
                    </li>
            </ul>
            </li>
            <li>
                <input id="group-5" type="checkbox" hidden />
                <label for="group-5"><span class="fa fa-angle-right"></span>Promoting occupational safety in the design
                    of agricultural equipment:</label>
                <ul class="group-list_En">
                    <li>
                        <li><a href="#">Utilizing advanced technologies in the design of machinery to ensure worker safety and
                                improve working conditions.</a></li>
                    </li>
            </ul>
            </li>
            </ul>
        </nav>
    </header>
`;
var Achievements_Section = document.getElementById("Achievements_Section");
var Achievements_Section_Ar = `
      <div class="leaderboard_Ar">
        <h1>
            <svg class="ico-cup">
                <use xlink:href="#cup"></use>
            </svg>
            انجازات القسم
        </h1>
        <ol id="OL_Ar">
            <li id = "A_OL_LI_AR_1">
                <mark>
                    تطوير آلات زراعية ذكية باستخدام الذكاء الاصطناعي : يشمل تصميم آلات زراعة مثل آلة زراعة بنجر السكر
                    وآلات للحيازات الصغيرة تعتمد على تقنيات الاستشعار الذكي لتقليل الهدر في البذور والأسمدة وتحسين الكفاءة
                </mark>
            </li>
            <li id = "A_OL_LI_AR_2">
                <mark>
                    تطوير معدات حصاد منخفضة التكاليف باستخدام الروبوتات  : يشمل تصميم آلات حصاد ودراس محاصيل الحبوب
                    والفاكهة، بالإضافة إلى تطوير آلة لحصاد الذرة وفول الصويا تعتمد على تقنيات الذكاء الاصطناعي لتحديد
                    المحصول الناضج
                </mark>
            </li>
            <li id = "A_OL_LI_AR_3">
                <mark>
                    تحسين عمليات ما بعد الحصاد باستخدام التكنولوجيا الحيوية : يشمل تصميم آلات لإزالة بقايا المحاصيل
                    وتحويلها إلى سماد عضوي، وتطوير معدات لدراس الكتان تعتمد على تقنيات الهواء المضغوط لتحسين الكفاءة
                </mark>
            </li>
            <li id = "A_OL_LI_AR_4">
                <mark>
                    خدمة أشجار النخيل باستخدام أنظمة آلية وذكية  : يشمل تطوير معدات للتلقيح والتقليم والحصاد، بما في
                    ذلك معدات تلقائية تعتمد على الذكاء الاصطناعي لتحديد أفضل وقت للتلقيح وسلالم هيدروليكية ذكية لضمان
                    أمان العاملين
                </mark>
            </li>
            <li id = "A_OL_LI_AR_5">
                <mark>
                    صميم أدوات اختبار ذكية تتيح مراقبة أداء المعدات الزراعية بشكل لحظي وإجراء التعديلات الفورية لتحسين
                </mark>
            </li>
        </ol>
    </div>


    <svg style="display: none;">
        <symbol id="cup" x="0px" y="0px" width="25px" height="26px" viewBox="0 0 25 26"
            enable-background="new 0 0 25 26" xml:space="preserve">
            <path fill="#F26856" d="M21.215,1.428c-0.744,0-1.438,0.213-2.024,0.579V0.865c0-0.478-0.394-0.865-0.88-0.865H6.69
	C6.204,0,5.81,0.387,5.81,0.865v1.142C5.224,1.641,4.53,1.428,3.785,1.428C1.698,1.428,0,3.097,0,5.148
	C0,7.2,1.698,8.869,3.785,8.869h1.453c0.315,0,0.572,0.252,0.572,0.562c0,0.311-0.257,0.563-0.572,0.563
	c-0.486,0-0.88,0.388-0.88,0.865c0,0.478,0.395,0.865,0.88,0.865c0.421,0,0.816-0.111,1.158-0.303
	c0.318,0.865,0.761,1.647,1.318,2.31c0.686,0.814,1.515,1.425,2.433,1.808c-0.04,0.487-0.154,1.349-0.481,2.191
	c-0.591,1.519-1.564,2.257-2.975,2.257H5.238c-0.486,0-0.88,0.388-0.88,0.865v4.283c0,0.478,0.395,0.865,0.88,0.865h14.525
	c0.485,0,0.88-0.388,0.88-0.865v-4.283c0-0.478-0.395-0.865-0.88-0.865h-1.452c-1.411,0-2.385-0.738-2.975-2.257
	c-0.328-0.843-0.441-1.704-0.482-2.191c0.918-0.383,1.748-0.993,2.434-1.808c0.557-0.663,1-1.445,1.318-2.31
	c0.342,0.192,0.736,0.303,1.157,0.303c0.486,0,0.88-0.387,0.88-0.865c0-0.478-0.394-0.865-0.88-0.865
	c-0.315,0-0.572-0.252-0.572-0.563c0-0.31,0.257-0.562,0.572-0.562h1.452C23.303,8.869,25,7.2,25,5.148
	C25,3.097,23.303,1.428,21.215,1.428z M5.238,7.138H3.785c-1.116,0-2.024-0.893-2.024-1.99c0-1.097,0.908-1.99,2.024-1.99
	c1.117,0,2.025,0.893,2.025,1.99v2.06C5.627,7.163,5.435,7.138,5.238,7.138z M18.883,21.717v2.553H6.118v-2.553H18.883
	L18.883,21.717z M13.673,18.301c0.248,0.65,0.566,1.214,0.947,1.686h-4.24c0.381-0.472,0.699-1.035,0.947-1.686
	c0.33-0.865,0.479-1.723,0.545-2.327c0.207,0.021,0.416,0.033,0.627,0.033c0.211,0,0.42-0.013,0.627-0.033
	C13.195,16.578,13.344,17.436,13.673,18.301z M12.5,14.276c-2.856,0-4.93-2.638-4.93-6.273V1.73h9.859v6.273
	C17.43,11.638,15.357,14.276,12.5,14.276z M21.215,7.138h-1.452c-0.197,0-0.39,0.024-0.572,0.07v-2.06
	c0-1.097,0.908-1.99,2.024-1.99c1.117,0,2.025,0.893,2.025,1.99C23.241,6.246,22.333,7.138,21.215,7.138z" />
        </symbol>
    </svg>
`;
var Achievements_Section_En = `
      <div class="leaderboard_En">
        <h1>
            <svg class="ico-cup">
                <use xlink:href="#cup"></use>
            </svg>
            Achievements of the Department
        </h1>
        <ol id="OL_EN">
            <li id = "A_OL_LI_EN_1">
                <mark>
                    Development of intelligent agricultural machinery using artificial intelligence: This includes
                    designing planting machines such as sugar beet planters and equipment for small-scale farms that
                    rely on smart sensor technologies to reduce seed and fertilizer waste and improve efficiency.
                </mark>
            </li>
            <li id = "A_OL_LI_EN_2">
                <mark>
                    Development of low-cost harvesting equipment using robotics: Involves designing machines for
                    harvesting and threshing grain and fruit crops, as well as developing corn and soybean harvesters
                    that use AI technologies to identify ripe crops.
                </mark>
            </li>
            <li id = "A_OL_LI_EN_3">
                <mark>
                    Improving post-harvest processes using biotechnology: Includes designing machines for removing
                    crop residues and converting them into organic fertilizer, and developing flax threshing equipment
                    that relies on compressed air technologies to enhance efficiency.
                </mark>
            </li>
            <li id = "A_OL_LI_EN_4">
                <mark>
                    Servicing palm trees using automated and intelligent systems: Includes developing equipment for
                    pollination, pruning, and harvesting, including AI-powered tools to determine the optimal
                    pollination time and smart hydraulic ladders to ensure worker safety.
                </mark>
            </li>
            <li id = "A_OL_LI_EN_5">
                <mark>
                    Design of smart testing tools: These tools allow real-time monitoring of agricultural equipment
                    performance and enable instant adjustments to improve overall efficiency.
                </mark>
            </li>
        </ol>
    </div> 
    
    <svg style="display: none;">
        <symbol id="cup" x="0px" y="0px" width="25px" height="26px" viewBox="0 0 25 26"
            enable-background="new 0 0 25 26" xml:space="preserve">
            <path fill="#F26856" d="M21.215,1.428c-0.744,0-1.438,0.213-2.024,0.579V0.865c0-0.478-0.394-0.865-0.88-0.865H6.69
	C6.204,0,5.81,0.387,5.81,0.865v1.142C5.224,1.641,4.53,1.428,3.785,1.428C1.698,1.428,0,3.097,0,5.148
	C0,7.2,1.698,8.869,3.785,8.869h1.453c0.315,0,0.572,0.252,0.572,0.562c0,0.311-0.257,0.563-0.572,0.563
	c-0.486,0-0.88,0.388-0.88,0.865c0,0.478,0.395,0.865,0.88,0.865c0.421,0,0.816-0.111,1.158-0.303
	c0.318,0.865,0.761,1.647,1.318,2.31c0.686,0.814,1.515,1.425,2.433,1.808c-0.04,0.487-0.154,1.349-0.481,2.191
	c-0.591,1.519-1.564,2.257-2.975,2.257H5.238c-0.486,0-0.88,0.388-0.88,0.865v4.283c0,0.478,0.395,0.865,0.88,0.865h14.525
	c0.485,0,0.88-0.388,0.88-0.865v-4.283c0-0.478-0.395-0.865-0.88-0.865h-1.452c-1.411,0-2.385-0.738-2.975-2.257
	c-0.328-0.843-0.441-1.704-0.482-2.191c0.918-0.383,1.748-0.993,2.434-1.808c0.557-0.663,1-1.445,1.318-2.31
	c0.342,0.192,0.736,0.303,1.157,0.303c0.486,0,0.88-0.387,0.88-0.865c0-0.478-0.394-0.865-0.88-0.865
	c-0.315,0-0.572-0.252-0.572-0.563c0-0.31,0.257-0.562,0.572-0.562h1.452C23.303,8.869,25,7.2,25,5.148
	C25,3.097,23.303,1.428,21.215,1.428z M5.238,7.138H3.785c-1.116,0-2.024-0.893-2.024-1.99c0-1.097,0.908-1.99,2.024-1.99
	c1.117,0,2.025,0.893,2.025,1.99v2.06C5.627,7.163,5.435,7.138,5.238,7.138z M18.883,21.717v2.553H6.118v-2.553H18.883
	L18.883,21.717z M13.673,18.301c0.248,0.65,0.566,1.214,0.947,1.686h-4.24c0.381-0.472,0.699-1.035,0.947-1.686
	c0.33-0.865,0.479-1.723,0.545-2.327c0.207,0.021,0.416,0.033,0.627,0.033c0.211,0,0.42-0.013,0.627-0.033
	C13.195,16.578,13.344,17.436,13.673,18.301z M12.5,14.276c-2.856,0-4.93-2.638-4.93-6.273V1.73h9.859v6.273
	C17.43,11.638,15.357,14.276,12.5,14.276z M21.215,7.138h-1.452c-0.197,0-0.39,0.024-0.572,0.07v-2.06
	c0-1.097,0.908-1.99,2.024-1.99c1.117,0,2.025,0.893,2.025,1.99C23.241,6.246,22.333,7.138,21.215,7.138z" />
            </symbol>
        </svg>
   
`;

var Research_Fields_Section = document.getElementById(
  "Research_Fields_Section"
);
var Research_Fields_Section_Ar = `
<div class="list-type5_Ar">
    <ol>
        <li><a href="">تطبيق الذكاء الاصطناعي والروبوتات في الزراعة  :<br><br> يشمل تطوير روبوتات ومعدات ذكية لتنفيذ مهام الزراعة، الري، الحصاد، والإنتاج الحيواني، بالإضافة إلى تحسين إدارة الموارد الزراعية باستخدام الذكاء الاصطناعي.</a></li>
        <li><a href="">ابتكار تقنيات ري وتسميد وحصاد ذكية  :<br><br> يركز على تطوير تقنيات ري وتسميد مبتكرة، ومعدات حصاد منخفضة التكاليف لتحسين كفاءة استخدام الموارد وتقليل الفاقد.</a></li>
        <li><a href="">تحسين أنظمة الفرز والتعبئة والتغليف  :<br><br> يشمل تحسين عمليات ما بعد الحصاد لضمان جودة المحاصيل وزيادة الكفاءة.</a></li>
        <li><a href="">تطوير تقنيات مستدامة لإعادة تدوير المخلفات الزراعية  :<br><br> يركز على ابتكار حلول مستدامة لإدارة وإعادة تدوير المخلفات الزراعية لتعزيز الاستدامة البيئية.</a></li>
        <li><a href="">دمج التكنولوجيا الحيوية والآلات المستدامة  :<br><br> يشمل تصميم آلات تقلل الأثر البيئي وتعزز الاستدامة، بالإضافة إلى دمج التكنولوجيا الحيوية لتحسين جودة المحاصيل وزيادة مقاومتها.</a></li>
    </ol>
</div>
`;

var Research_Fields_Section_En = `
<div class="list-type5_En">
    <ol>
        <li><a href="">Application of artificial intelligence and robotics in agriculture:<br><br> This involves the development of robots and intelligent machinery to perform agricultural tasks such as planting, irrigation, harvesting, and livestock production, as well as improving resource management through AI technologies.</a></li>
        <li><a href="">Innovation in smart irrigation, fertilization, and harvesting techniques:<br><br> Focuses on the development of innovative irrigation and fertilization technologies, along with low-cost harvesting equipment to enhance resource efficiency and reduce waste.</a></li>
        <li><a href="">Improvement of sorting, packing, and packaging systems:<br><br> Aims at enhancing post-harvest processes to ensure crop quality and increase operational efficiency.</a></li>
        <li><a href="">Development of sustainable technologies for recycling agricultural waste:<br><br> Focuses on creating sustainable solutions for managing and recycling agricultural waste to promote environmental sustainability.</a></li>
        <li><a href="">Integration of biotechnology and sustainable machinery:<br><br> Involves designing machines that reduce environmental impact and promote sustainability, while also incorporating biotechnology to improve crop quality and resistance.as</a></li>
    </ol>
</div>
`;

function Agricultural_Mechanization_OS_Load_Content_Ar() {
    Agricultural_Mechanization_OS_Span_1.textContent = "نظم ميكنة";
    Agricultural_Mechanization_OS_Span_2.textContent = "العمليات";
    Agricultural_Mechanization_OS_Span_3.textContent = "الزراعية";
    Agricultural_Mechanization_OS_Span_4.textContent = "";
    HomePageTitle[0].innerHTML = "نظم ميكنة العمليات الزراعية";
    Main_Objectives_Section.innerHTML = Main_Objectives_Section_Ar;
    Achievements_Section.innerHTML = Achievements_Section_Ar;
    Research_Fields_Section.innerHTML = Research_Fields_Section_Ar;
}
function Agricultural_Mechanization_OS_Load_Content_En() {
    Agricultural_Mechanization_OS_Span_1.textContent = "Agricultural";
    Agricultural_Mechanization_OS_Span_2.textContent = "Mechanization";
    Agricultural_Mechanization_OS_Span_3.textContent = "Operations";
    Agricultural_Mechanization_OS_Span_4.textContent = "Systems";
    HomePageTitle[0].innerHTML = "AERI AMOS Page";
    Main_Objectives_Section.innerHTML = Main_Objectives_Section_En;
    Achievements_Section.innerHTML = Achievements_Section_En
    Research_Fields_Section.innerHTML = Research_Fields_Section_En;
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Agricultural_Mechanization_OS_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Agricultural_Mechanization_OS_Load_Content_Ar();
}
