var Rice_Mechanization_Center_Page_Title = document.getElementById(
  "Rice_Mechanization_Center_Page_Title"
);
// var Rice_Mechanization_Center_H1 = document.getElementById(
//   "Rice_Mechanization_Center_H1"
// );

var RMC_Marquee = document.getElementById("Inner_Header_Marquee")

var RMC_Marquee_Ar = `
  <h1 id="Rice_Mechanization_Center_H1_Ar">
    <span id="Rice_Mechanization_Center_Span_1_Ar">مركز</span>
    <span id="Rice_Mechanization_Center_Span_2_Ar">ميكنة</span>
    <span id="Rice_Mechanization_Center_Span_3_Ar">الأرز</span>
  </h1>
`;
var RMC_Marquee_En = `
  <h1 id="Rice_Mechanization_Center_H1_En">
    <span id="Rice_Mechanization_Center_Span_1_En">Rice</span>
    <span id="Rice_Mechanization_Center_Span_2_En">Mechanization</span>
    <span id="Rice_Mechanization_Center_Span_3_En">Center</span>
  </h1>
`;


var RMC_Main_Section_Ar = document.getElementById("Main_RMC_Section_Ar");
var RMC_Main_Section_En = document.getElementById("Main_RMC_Section_En");

var RMC_Section_Ar = `
      <ol class="olcards_Ar">
        <li style="--cardColor:rgb(190, 64, 64);" style = "margin-bottom : -300px">
            <div class="content">
                <!-- <div class="icon">😁</div> -->
                <div class="icon"><img src="../../Images/TRACTOR_giphy.gif" alt="Tractor Giffy" class="LI_Text_sGifs" style="width:200px; margin-right : 15px"></div>
                <div class="title LI_Paragraph_Titles Ar_Titles">نشأة مركز ميكنة الأرز</div>
                <div class="text">
                    تم إطلاق مشروع مركز ميكنة الأرز في أغسطس ١٩٨١ م من خلال اتفاق متبادل بين حكومتي مصر واليابان وتم
                    تحديد موقع المشروع بميت الديبة مركز قلين بكفرالشيخ وبدأت عملية البناء في فبراير ١٩٨٣ م واكتملت في
                    مارس ١٩٨٤ م وبلغت تكلفة البناء حوالي ٦ مليون دولار أمريكي وتم افتتاح المشروع من قبل السيد الرئيس
                    الأسبق محمد حسنى مبارك.
                </div>
            </div>
        </li>
        <li style="--cardColor:#E3AC59">
            <div class="content">
                <!-- <div class="icon">😀</div> -->
                <div class="icon"><img id = "List_1_Img_Ar" src="../../Images/tractor.gif" alt="Tractor Giffy"></div>
                <!-- <div class="icon"><img src="./Farming GIF - Farming - Discover & Share GIFs.gif" alt="Tractor Giffy"></div> -->
                <!-- <div class="icon">
                <iframe title="Tractor_Iframe" src="https://assets.pinterest.com/ext/embed.html?id=1151303092236036426" height="295"
                width="345" frameborder="0" scrolling="no"></iframe>
                </div> -->
                <div class="title LI_Points_Titles Ar_Titles">اهداف مركز ميكنة الأرز</div>
                <div class="Grid_List_Col">
                      <div class="m-dropdown">
                        <div class="e-button_1 E_Button_1_Ar open">
                            <article id="Drop_Down_Btn_Title_Ar_1">اقرأ المزيد</article>
                            <div class="e-burger">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <ul class="e-list_1 E_List_1_Ar">
                            <div><a href="">عمل دراسات بحثية من قبل الباحثين لمركز ميكنة الأرز</a></div>
                            <div><a href="">دراسات اقتصادية لميكنة زراعة الأرز</a></div>
                            <div><a href="">تأسيس نظام ميكنة كامل لزراعة الأرز وذلك بعمل خط انتاج لزراعة صواني الأرز و تجهزها بالمشتل</a></div>
                            <div><a href="">لإتمام عملية الزراعة بالشتالات مع المتعاقدين من المزارعين</a></div>
                            <div><a href="">لبرامج التدريبية والإرشادية في مجال ميكنة زراعة الأرز</a></div>
                            <div><a href="">عرض وتطبيق ونشر تقنيات ميكنة الأرز</a></div>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
        <li style="--cardColor:#59E390">
            <div class="content">
                <!-- <div class="icon">😉</div> -->
                <div class="icon"><img src="../../Images/Tractor 4 .gif" alt="Tractor Giffy" class="LI_Tesxt_Gifs_Ar" style="width: 300px; margin-right: -50px !important;"></div>
                <div class="title LI_Paragraph_Titles Ar_Titles">اجمالي مساحة مركز ميكنة الأرز</div>
                <div class="text">
                    ٨٢.٦ فدان منهم ٥ افدان مبنى الأداره 
                    وقاعات التدريب ومبنى الاعاشة للمتدربين وقاعة المؤتمرات ومكاتب
                    الباحثين وصوبة خط الزراعة الألية والورشة ومخازن قطع الغيار
                </div>
            </div>
        </li>
        <li style="--cardColor:#0e76d7">
            <div class="content">
                <!-- <div class="icon">😜</div> -->
                <div class="icon"><img id = "List_2_Img_Ar" src="../../Images/Tractor_Replica .gif" alt="Tractor Giffy" class="LI_Text_Gsifs" style="width: 200px; margin-right: 20px; margin-left: -40px;"></div>
                    <div class="title LI_Points_Titles Ar_Titles">الهيكل التنظيمي لمركز ميكنة الأرز</div>
                    <!-- <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem. -->
                    <div class="Grid_List_Col">
                        <div class="m-dropdown">
                            <div class="e-button_2 E_Button_2_Ar open">
                                <article id="Drop_Down_Btn_Title_Ar_2">اقرأ المزيد</article>
                                <div class="e-burger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <ul class="e-list_2 E_List_2_Ar">
                                <div><a href=""> قسم الهيئة البحثية</a></div>
                                <div><a href=""> قسم المزرعة</a></div>
                                <div><a href=""> قسم الأرشد والتدريب</a></div>
                                <div><a href=""> قسم الشئون الفنية والهندسية (الورشة)</a></div>
                                <div><a href="">قسم التشغيل ووحدة تكنولوجيا 
                                        الهندسة الزراعية ويضم هذا القسم عدد من
                                        الشتالات والجرارات وآلات
                                        التسوية بالليزر وآلات
                                        الخدمة بأنواعها والكومبينات الخاصة بدراس الأرز والقمح
                                    </a></div>
                                <div><a href=""> قسم المركبات</a></div>
                                <div><a href=""> قسم الشئون المالية والأدرية</a></div>
                                <div><a href=""> قسم الأمن والحراسة</a></div>
                            </ul>
                        </div>
                    </div>
            </div>
        </li>
    </ol>
`;
var RMC_Section_En = `
      <ol class="olcards_En">
        <li style="--cardColor:rgb(190, 64, 64);">
            <div class="content">
                <!-- <div class="icon">😁</div> -->
                <div class="icon"><img src="../../Images/TRACTOR_giphy.gif" alt="Tractor Giffy" class="LI_sText_Gifs" style="transform: rotateY(180deg);width: 200px;margin-left: -20px;"></div>
                <div class="title LI_Paragraph_Titles En_Titles" style="margin-left: -35px;font-size: 40px;">Establishment of the RMC</div>
                <div class="text text_En" style="line-height: 3rem;">
                    The Rice Mechanization Center project was launched in August 1981
                    through a mutual agreement between the governments of
                    Egypt and Japan. The project was located in Mit El-Deeba, Kafr 
                    El-Sheikh. Construction began in February 1983 and was
                    completed in March 1984, with a total cost of approximately 6 
                    million USD. The project was inaugurated by the former
                    President Mohamed Hosni Mubarak.
                </div>
            </div>
        </li>
        <li style="--cardColor:#E3AC59">
            <div class="content">
                <!-- <div class="icon">😀</div> -->
                <div class="icon"><img src="../../Images/tractor.gif" alt="Tractor Giffy" class="LI_Text_Gsifs" style="width: 300px; margin-left: -20px; margin-right: -45px;"></div>
                <!-- <div class="icon"><img src="../../Images/Farming GIF - Farming - Discover & Share GIFs.gif" alt="Tractor Giffy"></div> -->
                <!-- <div class="icon">
                <iframe title="Tractor_Iframe" src="https://assets.pinterest.com/ext/embed.html?id=1151303092236036426" height="295"
                width="345" frameborder="0" scrolling="no"></iframe>
                </div> -->
                <div class="title LI_Points_Titles En_Titles_2nd" style="margin-left: -60px;font-size: 45px;">Objectives of the RMC</div>
                <div class="Grid_List_Col">
                    <div class="m-dropdown">
                        <div class="e-button_1 E_Button_1_En open" style="width: 350px; height: 50px;">
                            <article id="Drop_Down_Btn_Title_En_1" style="font-size: 37px;margin-top: 5px !important; margin-left: 10px;">READ MORE</article>
                            <div class="e-burger" style="margin-bottom: 50px;">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <ul class="e-list_1 E_List_1_En">
                            <div><a href="">Conduct research studies by the center's researchers.</a></div>
                            <div><a href="">Perform economic studies related to the mechanization of rice cultivation.</a></div>
                            <div><a href="">Establish a complete mechanization system for rice cultivation by creating a
                                    production line for preparing rice trays for transplantation, which are then
                                    supplied to farmers.</a></div>
                            <div><a href="">Provide training and guidance programs in the field of rice cultivation
                                    mechanization.</a></div>
                            <div><a href="">Demonstrate, apply, and promote rice mechanization technologies.</a></div>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
        <li style="--cardColor:#59E390">
            <div class="content">
                <!-- <div class="icon">😉</div> -->
                <div class="icon"><img src="../../Images/Tractor 4 .gif" alt="Tractor Giffy" class="LI_Text_Gifs" style="width: 300px; margin-left: -80px !important; margin-right: -60px !important; transform: rotateY(180deg);"></div>
                <div class="title LI_Paragraph_Titles En_Titles_3rd" style="margin-left: -60px;font-size: 45px;">Total Area of the RMC</div>
                <div class="text text_En" style="margin-left: 40px; line-height: 3rem;">
                    The center covers a total area of 82.6 acres, including 5 acres dedicated to administration
                    buildings, training halls, accommodation for trainees, conference rooms, researcher offices, a
                    greenhouse for automated agriculture, workshops, and spare parts storage.
                </div>
            </div>
        </li>
        <li style="--cardColor:#0e76d7">
            <div class="content">
                <!-- <div class="icon">😜</div> -->
                <div class="icon"><img src="../../Images/Tractor_Replica .gif" alt="Tractor Giffy" class="LI_Text_GsiFFs" style="transform: rotateY(180deg); width: 200px; margin-right: -40px; margin-left: 0px;"></div>
                    <div class="title LI_Points_Titles En_Titles" style="font-size: 45px;">Organizational Structure of the RMC</div>
                    <!-- <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem. -->
                    <div class="Grid_List_Col">
                        <div class="m-dropdown">
                            <div class="e-button_2 E_Button_2_En open" style="width: 350px; height: 50px;">
                                <article id="Drop_Down_Btn_Title_En_2" style="font-size: 37px;margin-top: 5px !important; margin-left: 10px;">READ MORE</article>
                                <div class="e-burger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <ul class="e-list_2 E_List_2_En">
                                <div><a href="">Research Department</a></div>
                                <div><a href="">Farm Department</a></div>
                                <div><a href="">Guidance and Training Department</a></div>
                                <div><a href="">Technical and Engineering Affairs Department (Workshop)</a></div>
                                <div><a href="">Operations Department and Agricultural Engineering Technology Unit,
                                        which includes several transplanters, tractors, laser leveling machines, various
                                        service machines, and combines for rice and wheat threshing.</a></div>
                                <div><a href="">Vehicle Department</a></div>
                                <div><a href="">Financial and Administrative Affairs Department</a></div>
                                <div><a href="">Security and Guard Department</a></div>
                            </ul>
                        </div>
                    </div>
            </div>
        </li>
    </ol>
`;

function Rice_Mechanization_Center_Load_Content_Ar() {
  // Rice_Mechanization_Center_H1.textContent = "ىىىىىىىىىىىىىىىىىىىىىىىىىىىى";
  RMC_Marquee.innerHTML = RMC_Marquee_Ar;
  HomePageTitle[0].innerHTML = "نبذه عن مركز ميكنة الارز";
  RMC_Main_Section_Ar.innerHTML = RMC_Section_Ar;
  RMC_Main_Section_En.innerHTML = "";
  $(".E_List_1_Ar").slideUp(function () {
    $(".E_Button_1_Ar").removeClass("open");
  });

  $(".E_List_2_Ar").slideUp(function () {
    $(".E_Button_2_Ar").removeClass("open");
  });
  
  $(".E_Button_1_Ar").on("click", function () {
      if ($(this).hasClass("open")) {
          $(".E_List_1_Ar").slideUp(function () {
              $(".E_Button_1_Ar").removeClass("open");
          });
      } else {
          $(this).addClass("open");
          setTimeout(function () {
              $(".E_List_1_Ar").stop().slideDown();
          }, 200);
      }
  });

  $(".E_Button_2_Ar").on("click", function () {
      if ($(this).hasClass("open")) {
          $(".E_List_2_Ar").slideUp(function () {
              $(".E_Button_2_Ar").removeClass("open");
          });
      } else {
          $(this).addClass("open");
          setTimeout(function () {
              $(".E_List_2_Ar").stop().slideDown();
          }, 200);
      }
  });
}

function Rice_Mechanization_Center_Load_Content_En() {
  // Rice_Mechanization_Center_H1.textContent = "zzzzzzzzzzzzzz";
  RMC_Marquee.innerHTML = RMC_Marquee_En;
  HomePageTitle[0].innerHTML = "AERI Rice Mechanization Center Page";
  RMC_Main_Section_En.innerHTML = RMC_Section_En;
  RMC_Main_Section_Ar.innerHTML = "";
  $(".E_List_1_En").slideUp(function () {
    $(".E_Button_1_En").removeClass("open");
  });

  $(".E_List_2_En").slideUp(function () {
    $(".E_Button_2_En").removeClass("open");
  });
 
  $(".E_Button_1_En").on("click", function () {
    if ($(this).hasClass("open")) {
      $(".E_List_1_En").slideUp(function () {
        $(".E_Button_1_En").removeClass("open");
      });
    } else {
      $(this).addClass("open");
      setTimeout(function () {
        $(".E_List_1_En").stop().slideDown();
      }, 200);
    }
  });

  $(".E_Button_2_En").on("click", function () {
    if ($(this).hasClass("open")) {
      $(".E_List_2_En").slideUp(function () {
        $(".E_Button_2_En").removeClass("open");
      });
    } else {
      $(this).addClass("open");
      setTimeout(function () {
        $(".E_List_2_En").stop().slideDown();
      }, 200);
    }
  });
}

if (localStorage.getItem("Permenant_Language") === "English") {
  Rice_Mechanization_Center_Load_Content_En();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  Rice_Mechanization_Center_Load_Content_Ar();
}
