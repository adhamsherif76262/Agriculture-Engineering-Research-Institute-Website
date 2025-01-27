var En_Nav = document.getElementById("English_NavBar");
var Ar_Nav = document.getElementById("Arabic_NavBar");
var Main_Footer = document.getElementsByClassName("footer");
var HomePageTitle = document.getElementsByTagName("title");
var LangBtnEn = `<button onclick="LangBtnEnClick()" type="button" id="LangBtnEn" title="Language Button">English</button>`;
var LangBtnAr = `<button onclick="LangBtnArClick()" type="button" id="LangBtnAr" title="Language Button">عربي</button>`;
var Footer_LangBtnEn = `<button onclick="LangBtnEnClick()" type="button" id="Footer_LangBtnEn" title="Footer Language Button">English</button>`;
var Footer_LangBtnAr = `<button onclick="LangBtnArClick()" type="button" id="Footer_LangBtnAr" title="Footer Language Button">عربي</button>`;
var TopBtnAr = `<button onclick="To_Top()" type="button" id="TopBtnAr" title="To Top Button">القمة</button>`;
var TopBtnEn = `<button onclick="To_Top()" type="button" id="TopBtnEn" title="To Top Button">Top</button>`;
var HTMLpath = "";
var IMAGESpath = ".";

if (location.href.includes("/Home") || location.href.includes("/home")){
  alert(`I${HTMLpath}am${HTMLpath}Home`);
  HTMLpath = "./HTML/";
  IMAGESpath = ""
}
else if (location.href.includes("/Departements") || location.href.includes("/departements")){
  alert(`I ${HTMLpath} am ${location.href}  Departement`);
  HTMLpath = "../";
  IMAGESpath = "./..";
}

var Bubbles = `<div class="bubbles">
    <div class="bubble" style="--size:5.0135313648835025rem; --distance:9.416550778957694rem; --position:19.903269440715132%; --time:3.254147592799995s; --delay:-2.7348329494573114s;"></div>
    <div class="bubble" style="--size:4.137121420921593rem; --distance:7.675318118080081rem; --position:94.55828450308567%; --time:2.4472531580422068s; --delay:-3.5833354183932897s;"></div>
    <div class="bubble" style="--size:2.9326380642961896rem; --distance:9.841694363893145rem; --position:89.20484175256362%; --time:2.7128466273325604s; --delay:-2.6327070752151576s;"></div>
    <div class="bubble" style="--size:3.9563867877545906rem; --distance:8.485386704745872rem; --position:36.56660748917097%; --time:2.723968419270746s; --delay:-3.321702142463571s;"></div>
    <div class="bubble" style="--size:3.4669435776698894rem; --distance:8.330106917651754rem; --position:83.09604793527627%; --time:3.5148917676476095s; --delay:-2.3899248214764697s;"></div>
    <div class="bubble" style="--size:4.242348431698182rem; --distance:9.698394200972968rem; --position:55.03500902861114%; --time:3.241813177207199s; --delay:-3.800187337361377s;"></div>
    <div class="bubble" style="--size:2.1479975914682115rem; --distance:8.300122969092696rem; --position:16.039734287281043%; --time:3.846783473742432s; --delay:-2.5406013966074075s;"></div>
    <div class="bubble" style="--size:3.6039094030214907rem; --distance:7.082565499213606rem; --position:37.89104552339183%; --time:2.133638195236606s; --delay:-2.4837797425243062s;"></div>
    <div class="bubble" style="--size:2.0727453982743445rem; --distance:7.633611831396785rem; --position:5.612440121090053%; --time:2.8935992739821517s; --delay:-3.9532581724622093s;"></div>
    <div class="bubble" style="--size:4.4568114678334325rem; --distance:8.157412970751619rem; --position:39.134214974867156%; --time:2.4258358125987165s; --delay:-2.9621513290930332s;"></div>
    <div class="bubble" style="--size:4.516391718139145rem; --distance:9.415421487278783rem; --position:46.04542800449539%; --time:3.871839586432808s; --delay:-2.4431177693617383s;"></div>
    <div class="bubble" style="--size:2.2719158051122523rem; --distance:9.989882868752304rem; --position:52.04761695556612%; --time:2.6566904034389265s; --delay:-3.7701013557353718s;"></div>
    <div class="bubble" style="--size:3.792563326931507rem; --distance:7.102350634808894rem; --position:16.224068675616607%; --time:2.466686796703879s; --delay:-3.74174185485001s;"></div>
    <div class="bubble" style="--size:2.485581864360663rem; --distance:8.063891064288615rem; --position:102.21931008430651%; --time:2.454680509528262s; --delay:-2.675758262903268s;"></div>
    <div class="bubble" style="--size:5.546362189069684rem; --distance:7.432541815842329rem; --position:7.579422059265898%; --time:2.3849700611854847s; --delay:-3.3725389276493254s;"></div>
    <div class="bubble" style="--size:3.0216707578705106rem; --distance:9.006206599366623rem; --position:24.987733908007023%; --time:3.4656255824603677s; --delay:-3.793261792373851s;"></div>
    <div class="bubble" style="--size:5.0077708334391176rem; --distance:8.320459219545189rem; --position:91.89089512701055%; --time:2.8456332923460503s; --delay:-3.289477862700461s;"></div>
    <div class="bubble" style="--size:4.204959519544rem; --distance:6.082306469492456rem; --position:44.434859513882635%; --time:2.5514789082736646s; --delay:-3.6564485743734356s;"></div>
    <div class="bubble" style="--size:5.197559413682651rem; --distance:7.613070852915952rem; --position:40.016292803686824%; --time:3.183126830087912s; --delay:-3.0868867530233164s;"></div>
    <div class="bubble" style="--size:3.086614776204427rem; --distance:8.303866561319687rem; --position:86.0554340096329%; --time:3.114156438063863s; --delay:-3.872063564989395s;"></div>
    <div class="bubble" style="--size:5.432905068096636rem; --distance:8.137814873790354rem; --position:46.524736369285755%; --time:3.615726755845242s; --delay:-3.863177380777048s;"></div>
    <div class="bubble" style="--size:4.327445842969319rem; --distance:9.14465985408156rem; --position:34.83256106839261%; --time:3.575463380988782s; --delay:-2.7300621945529935s;"></div>
    <div class="bubble" style="--size:5.784887505474887rem; --distance:9.527403977769563rem; --position:30.071973625155245%; --time:3.280837077348707s; --delay:-3.207967617503775s;"></div>
    <div class="bubble" style="--size:4.439252207874209rem; --distance:8.710899196545359rem; --position:17.09323893485216%; --time:3.213734631712105s; --delay:-2.5489215687346687s;"></div>
    <div class="bubble" style="--size:2.7068295183451214rem; --distance:6.348935360405433rem; --position:74.55960821718635%; --time:3.23411874709953s; --delay:-3.77494759106356s;"></div>
    <div class="bubble" style="--size:5.578710369411326rem; --distance:8.080317264619357rem; --position:93.28638040696855%; --time:2.366250350604508s; --delay:-3.5252697555118946s;"></div>
    <div class="bubble" style="--size:3.1739099751894484rem; --distance:9.709341715037326rem; --position:81.40223119616485%; --time:2.1429307965832782s; --delay:-3.1290870419286354s;"></div>
    <div class="bubble" style="--size:3.8677353659212006rem; --distance:6.651547817044601rem; --position:16.880787225430602%; --time:2.2819810503028832s; --delay:-2.6478107609460344s;"></div>
    <div class="bubble" style="--size:4.9340032585463405rem; --distance:8.07379981424735rem; --position:15.758452001327203%; --time:2.630477164193557s; --delay:-2.8426134690163516s;"></div>
    <div class="bubble" style="--size:3.344660009077832rem; --distance:7.171013577185216rem; --position:2.7695580019537225%; --time:3.060612171099297s; --delay:-3.013157863612708s;"></div>
    <div class="bubble" style="--size:5.806541900990209rem; --distance:9.551764282175434rem; --position:39.555890720781775%; --time:2.50486320675765s; --delay:-3.360886290812074s;"></div>
    <div class="bubble" style="--size:2.458208284676875rem; --distance:7.437715976274293rem; --position:-3.0377638371034688%; --time:2.8127131914526653s; --delay:-3.4954170770871698s;"></div>
    <div class="bubble" style="--size:2.6178993897405496rem; --distance:8.280298249929675rem; --position:77.5807691609711%; --time:2.869264184047357s; --delay:-3.6854742698264396s;"></div>
    <div class="bubble" style="--size:3.226090890366639rem; --distance:9.967297740612683rem; --position:87.0860569206365%; --time:3.6563098427392062s; --delay:-3.2304016642266773s;"></div>
    <div class="bubble" style="--size:2.888038370129002rem; --distance:9.905043297012405rem; --position:75.78254149038912%; --time:3.838771029084537s; --delay:-2.517689247730489s;"></div>
    <div class="bubble" style="--size:5.9295465096554745rem; --distance:9.724654837271103rem; --position:68.26688198276352%; --time:2.5803964274596405s; --delay:-2.3724274182559175s;"></div>
    <div class="bubble" style="--size:3.9951382173582966rem; --distance:9.520763250649363rem; --position:10.118169969538764%; --time:2.1544711159034837s; --delay:-3.7622398896914864s;"></div>
    <div class="bubble" style="--size:5.808730128387738rem; --distance:6.290737153557265rem; --position:18.411344581274633%; --time:3.877364833526634s; --delay:-2.5294140632714197s;"></div>
    <div class="bubble" style="--size:5.856629024011965rem; --distance:7.902013683066589rem; --position:14.954919722293997%; --time:3.3334088301320546s; --delay:-3.621557305867418s;"></div>
    <div class="bubble" style="--size:2.1644732647444886rem; --distance:7.092025996958278rem; --position:66.95677515516182%; --time:3.508749994956843s; --delay:-3.8207823181561413s;"></div>
    <div class="bubble" style="--size:4.493704184024409rem; --distance:6.333674616743674rem; --position:30.68109435778156%; --time:2.968979174589211s; --delay:-2.706570973144532s;"></div>
    <div class="bubble" style="--size:3.9349347904972953rem; --distance:8.055786911798403rem; --position:89.2135626134705%; --time:3.975155983125604s; --delay:-2.0913317614595517s;"></div>
    <div class="bubble" style="--size:4.402702060794083rem; --distance:9.597092845037464rem; --position:100.99915849929457%; --time:2.90912089203086s; --delay:-2.055728083287558s;"></div>
    <div class="bubble" style="--size:2.4042040903753064rem; --distance:8.910726377196507rem; --position:39.88385171991176%; --time:2.3844852947775976s; --delay:-2.9349583134264776s;"></div>
    <div class="bubble" style="--size:5.268373771972985rem; --distance:7.481366620045076rem; --position:65.55680618743419%; --time:3.0953551445205405s; --delay:-2.9563108258030044s;"></div>
    <div class="bubble" style="--size:2.561992089578178rem; --distance:6.02795951130939rem; --position:18.06244970884334%; --time:3.88252205081618s; --delay:-3.0183323090991467s;"></div>
    <div class="bubble" style="--size:3.811013700974014rem; --distance:8.63351504729448rem; --position:76.80308740370795%; --time:3.8743815356900884s; --delay:-2.742344392981946s;"></div>
    <div class="bubble" style="--size:3.0720839285332424rem; --distance:8.346876408286937rem; --position:-0.26207047401484385%; --time:2.7272457481733694s; --delay:-3.465844614141232s;"></div>
    <div class="bubble" style="--size:4.931052858246561rem; --distance:7.527940932656678rem; --position:18.520839427322656%; --time:3.2847223160985846s; --delay:-3.3507609946299657s;"></div>
    <div class="bubble" style="--size:3.9177934865683453rem; --distance:7.470359102376583rem; --position:92.8180915725267%; --time:2.1647376200785566s; --delay:-2.114693872739969s;"></div>
    <div class="bubble" style="--size:3.1810447279015035rem; --distance:7.560764385123763rem; --position:58.76260290265141%; --time:2.9791778426834092s; --delay:-3.705572414566355s;"></div>
    <div class="bubble" style="--size:4.573595053866335rem; --distance:6.131318313086064rem; --position:-1.909409301510867%; --time:2.235342757112053s; --delay:-3.619058093127482s;"></div>
    <div class="bubble" style="--size:3.098339839675816rem; --distance:8.078908466696992rem; --position:45.41274645795641%; --time:3.0442675258559526s; --delay:-3.2212842522822456s;"></div>
    <div class="bubble" style="--size:4.912250346706277rem; --distance:9.421093457861597rem; --position:45.50165761251009%; --time:2.7094933890191952s; --delay:-3.9647614547650365s;"></div>
    <div class="bubble" style="--size:3.628848928163257rem; --distance:9.299605012745388rem; --position:50.371114694943294%; --time:2.95133618470907s; --delay:-2.790874149778937s;"></div>
    <div class="bubble" style="--size:3.944193543077625rem; --distance:8.287223598389698rem; --position:5.136654049482772%; --time:3.782534928864107s; --delay:-2.487981272670187s;"></div>
    <div class="bubble" style="--size:4.607073062143755rem; --distance:9.387498498668084rem; --position:12.622798303061888%; --time:3.896648121399768s; --delay:-3.8420494050301652s;"></div>
    <div class="bubble" style="--size:3.260485786296039rem; --distance:6.281830149545101rem; --position:43.47782154952841%; --time:3.0421864760495727s; --delay:-2.285028176207091s;"></div>
    <div class="bubble" style="--size:5.25088617405902rem; --distance:8.071589203332042rem; --position:92.48513797759479%; --time:3.015567280079684s; --delay:-2.1629244014448257s;"></div>
    <div class="bubble" style="--size:4.670670151307825rem; --distance:7.537578516297972rem; --position:34.229094205746684%; --time:2.3466496667362575s; --delay:-3.4190132047187523s;"></div>
    <div class="bubble" style="--size:4.668584919006466rem; --distance:6.416650305984389rem; --position:9.187431630344786%; --time:3.707725019399237s; --delay:-2.0691811919995042s;"></div>
    <div class="bubble" style="--size:3.8053610954027093rem; --distance:6.386473841806202rem; --position:9.65749042531711%; --time:2.8620322541695717s; --delay:-2.6245591675181004s;"></div>
    <div class="bubble" style="--size:5.530422092101728rem; --distance:6.757364091427505rem; --position:0.5697542632482282%; --time:3.069052148931656s; --delay:-3.914174900517594s;"></div>
    <div class="bubble" style="--size:3.215901464256354rem; --distance:6.257767037822522rem; --position:74.81064891832843%; --time:2.432187466486616s; --delay:-3.0087142139149643s;"></div>
    <div class="bubble" style="--size:4.176413172902538rem; --distance:7.606490814181077rem; --position:16.35106618425337%; --time:3.20279879736076s; --delay:-2.486957689809643s;"></div>
    <div class="bubble" style="--size:5.700474402788585rem; --distance:9.432235258004903rem; --position:34.81077269856984%; --time:3.080273879026653s; --delay:-2.101509535797194s;"></div>
    <div class="bubble" style="--size:3.0559872485255672rem; --distance:9.764910578024821rem; --position:26.432306473494396%; --time:2.1930293155890466s; --delay:-2.934496676601529s;"></div>
    <div class="bubble" style="--size:2.5913821662668983rem; --distance:8.631939400374733rem; --position:67.8778893417487%; --time:2.2440560151293503s; --delay:-3.7707849331751437s;"></div>
    <div class="bubble" style="--size:2.1430563716241275rem; --distance:7.903903280088162rem; --position:44.12288798684878%; --time:3.12237537292438s; --delay:-2.3030123367865993s;"></div>
    <div class="bubble" style="--size:2.535705348770053rem; --distance:8.508774937379489rem; --position:46.08769876268064%; --time:3.3946507916893167s; --delay:-3.1385191286550658s;"></div>
    <div class="bubble" style="--size:5.421653735956004rem; --distance:9.480075638734316rem; --position:85.03590725254676%; --time:2.5609782421903975s; --delay:-3.7396724903164595s;"></div>
    <div class="bubble" style="--size:5.727874502470695rem; --distance:8.854900610736914rem; --position:96.68868751265404%; --time:2.7238428655263554s; --delay:-2.7003674299171028s;"></div>
    <div class="bubble" style="--size:3.4401861898314214rem; --distance:6.061695587788157rem; --position:84.4316556303179%; --time:3.0838621495368623s; --delay:-3.1929597278684305s;"></div>
    <div class="bubble" style="--size:3.8993513202870176rem; --distance:6.601400746507077rem; --position:93.86726377920455%; --time:2.6498440683517375s; --delay:-2.124566252142666s;"></div>
    <div class="bubble" style="--size:2.1306563997885792rem; --distance:7.250272914135127rem; --position:1.9639231108178894%; --time:3.053609079608743s; --delay:-3.4801128316769065s;"></div>
    <div class="bubble" style="--size:4.740853586720022rem; --distance:8.704643605325007rem; --position:3.9413249220524076%; --time:3.3884637434331304s; --delay:-2.3466245021276353s;"></div>
    <div class="bubble" style="--size:2.960141957895039rem; --distance:9.152366088561948rem; --position:104.72478450864044%; --time:3.6978590337648574s; --delay:-3.3849140622613705s;"></div>
    <div class="bubble" style="--size:3.6964564407619163rem; --distance:8.580108391051542rem; --position:78.20325177489913%; --time:2.8529396147334936s; --delay:-2.3887845550643103s;"></div>
    <div class="bubble" style="--size:3.130155125129291rem; --distance:8.779034987647218rem; --position:85.09565439773432%; --time:2.921285172554972s; --delay:-3.8587711543571404s;"></div>
    <div class="bubble" style="--size:3.121845662219335rem; --distance:9.859033280709484rem; --position:81.95733225696361%; --time:3.290397071797473s; --delay:-2.029422145977357s;"></div>
    <div class="bubble" style="--size:2.5413825591818284rem; --distance:6.548426632735908rem; --position:16.615507879149398%; --time:3.2002977216184236s; --delay:-3.278823383491992s;"></div>
    <div class="bubble" style="--size:3.480159947021403rem; --distance:8.44204110140403rem; --position:65.28611682023575%; --time:3.740434379432429s; --delay:-2.1766880562361917s;"></div>
    <div class="bubble" style="--size:4.927236309017594rem; --distance:7.703279587191993rem; --position:89.1564280728334%; --time:3.138664759337744s; --delay:-2.045494630283736s;"></div>
    <div class="bubble" style="--size:2.883291566588574rem; --distance:7.677880924598122rem; --position:75.31492354197607%; --time:2.483424883717707s; --delay:-2.5518049613283154s;"></div>
    <div class="bubble" style="--size:3.0412231569793446rem; --distance:7.863512253862808rem; --position:84.89402512636094%; --time:2.92979903654858s; --delay:-3.6239751371637072s;"></div>
    <div class="bubble" style="--size:2.4550297963625205rem; --distance:9.569346529788918rem; --position:60.35984300056039%; --time:2.7631917277917992s; --delay:-3.3770669195208516s;"></div>
    <div class="bubble" style="--size:5.531183809140091rem; --distance:6.021341951337112rem; --position:31.325899054218077%; --time:2.9097640827709688s; --delay:-3.881495669650134s;"></div>
    <div class="bubble" style="--size:4.133608840716578rem; --distance:6.103589294426379rem; --position:2.420981943239056%; --time:3.910002920422129s; --delay:-3.3247893570712783s;"></div>
    <div class="bubble" style="--size:2.6606552444884928rem; --distance:7.745515786899667rem; --position:10.848062244950235%; --time:2.9490778913468154s; --delay:-2.093331417450725s;"></div>
    <div class="bubble" style="--size:5.537947924608905rem; --distance:9.836883120362451rem; --position:86.89608019130421%; --time:3.8908521703783094s; --delay:-2.899456580140471s;"></div>
    <div class="bubble" style="--size:5.799041960430866rem; --distance:8.586752007831713rem; --position:73.0420300440996%; --time:2.6954329695387163s; --delay:-3.3572896133124965s;"></div>
    <div class="bubble" style="--size:5.374802178273061rem; --distance:6.795284883371302rem; --position:69.07650012679228%; --time:2.1969126534704113s; --delay:-3.776833852978848s;"></div>
    <div class="bubble" style="--size:2.9318355358584878rem; --distance:9.437063223135262rem; --position:22.641432139469607%; --time:2.261701042602879s; --delay:-2.208052750248958s;"></div>
    <div class="bubble" style="--size:2.872277759113116rem; --distance:6.1394487128032456rem; --position:58.05662328615087%; --time:3.2581403808206404s; --delay:-2.3732433584051886s;"></div>
    <div class="bubble" style="--size:2.6052134790759407rem; --distance:7.360159573039692rem; --position:54.194540590947675%; --time:2.5775941825746873s; --delay:-3.837520098959798s;"></div>
    <div class="bubble" style="--size:4.998040672430183rem; --distance:6.153251821429558rem; --position:73.62933759656833%; --time:2.799085104354997s; --delay:-3.772288131002761s;"></div>
    <div class="bubble" style="--size:3.2805093925099422rem; --distance:7.297280252325025rem; --position:91.7518207924657%; --time:2.3212853923464833s; --delay:-3.7627978712194006s;"></div>
    <div class="bubble" style="--size:4.800029984787498rem; --distance:6.204256712475838rem; --position:50.127173283052315%; --time:2.324403439528467s; --delay:-3.4516770989760626s;"></div>
    <div class="bubble" style="--size:2.643255102432593rem; --distance:6.669232715266057rem; --position:99.31955619440079%; --time:3.6449432471960206s; --delay:-2.738085149044126s;"></div>
    <div class="bubble" style="--size:4.6689825768464965rem; --distance:7.9133565702730895rem; --position:52.615068823444815%; --time:2.4773322953666668s; --delay:-2.6654620004219036s;"></div>
    <div class="bubble" style="--size:3.555919192039944rem; --distance:9.693759372220576rem; --position:81.06290350165295%; --time:3.8755199501652084s; --delay:-3.6171643646834872s;"></div>
    <div class="bubble" style="--size:3.58218067078524rem; --distance:9.016537865070354rem; --position:70.18503243935358%; --time:3.9224702360975545s; --delay:-2.2320233037198403s;"></div>
    <div class="bubble" style="--size:5.5816874776163115rem; --distance:9.805054685208887rem; --position:60.701531311196305%; --time:3.2298939135393914s; --delay:-2.5069204023171863s;"></div>
    <div class="bubble" style="--size:4.495788697535408rem; --distance:7.797943436134427rem; --position:42.90057738297223%; --time:3.147370232934057s; --delay:-3.4500225225834296s;"></div>
    <div class="bubble" style="--size:5.268550862388449rem; --distance:8.48408411127977rem; --position:10.428446113103671%; --time:2.2020324810898013s; --delay:-3.9974998883763107s;"></div>
    <div class="bubble" style="--size:3.1980160081154896rem; --distance:9.996338510463938rem; --position:92.22452460282452%; --time:2.371833371088238s; --delay:-2.5543269022925754s;"></div>
    <div class="bubble" style="--size:2.0373274889986135rem; --distance:9.320271761919077rem; --position:66.39365651906955%; --time:2.990298521335672s; --delay:-3.516227747279979s;"></div>
    <div class="bubble" style="--size:2.6317065148352112rem; --distance:6.601790333151703rem; --position:94.2722094660504%; --time:3.7861997693424714s; --delay:-3.377650943740932s;"></div>
    <div class="bubble" style="--size:3.306309713853417rem; --distance:9.697831659384928rem; --position:30.891742909984465%; --time:2.7075061552503077s; --delay:-2.658421126481844s;"></div>
    <div class="bubble" style="--size:4.202404264801686rem; --distance:6.897375527521035rem; --position:18.31954916292524%; --time:2.9816876524571927s; --delay:-3.1227924268064484s;"></div>
    <div class="bubble" style="--size:4.4828240516851166rem; --distance:9.290086157168457rem; --position:92.03970129544078%; --time:3.1285254091095s; --delay:-2.37060245758821s;"></div>
    <div class="bubble" style="--size:2.1137612915763677rem; --distance:8.554955742644175rem; --position:90.05539684469889%; --time:3.780252603243947s; --delay:-3.134342595779058s;"></div>
    <div class="bubble" style="--size:2.391503535001444rem; --distance:6.3482473463931415rem; --position:87.51694355323036%; --time:3.317454913298134s; --delay:-3.1381971671871067s;"></div>
    <div class="bubble" style="--size:3.505696939882201rem; --distance:7.760988476404876rem; --position:70.99689350588112%; --time:3.422738662417781s; --delay:-3.1462055635311654s;"></div>
    <div class="bubble" style="--size:2.7196812828024584rem; --distance:7.070385441598336rem; --position:87.03703178203921%; --time:3.056534787218166s; --delay:-3.087098086410524s;"></div>
    <div class="bubble" style="--size:3.7503020691109237rem; --distance:6.328279461944905rem; --position:64.16381776959993%; --time:2.7750746819727277s; --delay:-2.182783563294783s;"></div>
    <div class="bubble" style="--size:5.39590629381142rem; --distance:7.202477221893356rem; --position:58.25216923152696%; --time:3.8063180977046147s; --delay:-2.1606782382011787s;"></div>
    <div class="bubble" style="--size:2.216193196262526rem; --distance:9.018237993919744rem; --position:12.223585648677584%; --time:2.1033363081727874s; --delay:-2.5100558739175134s;"></div>
    <div class="bubble" style="--size:3.530069913009852rem; --distance:7.449644797276111rem; --position:4.618941378388456%; --time:2.006887981921429s; --delay:-2.750107637144359s;"></div>
    <div class="bubble" style="--size:2.3587276751015613rem; --distance:8.766403093893329rem; --position:41.11327623604287%; --time:3.5909989047521975s; --delay:-3.319785840904954s;"></div>
    <div class="bubble" style="--size:4.6159099417292335rem; --distance:8.670491526696345rem; --position:46.92036788213062%; --time:2.201643252800518s; --delay:-2.6083748757566654s;"></div>
    <div class="bubble" style="--size:4.963285881488321rem; --distance:6.593080441556486rem; --position:5.078584135976438%; --time:2.591452711454693s; --delay:-3.786317997052335s;"></div>
    <div class="bubble" style="--size:2.14731247443295rem; --distance:6.727964765138021rem; --position:75.64998354394561%; --time:3.781272755149173s; --delay:-3.3762576427268396s;"></div>
    <div class="bubble" style="--size:4.953136401553332rem; --distance:9.612325150703594rem; --position:76.97225193754022%; --time:3.6640595319115308s; --delay:-2.0316098762615855s;"></div>
    <div class="bubble" style="--size:3.812047308404117rem; --distance:6.323895162508697rem; --position:97.21158022425392%; --time:2.084278572047434s; --delay:-3.6953523737295626s;"></div>
    <div class="bubble" style="--size:5.554278464418762rem; --distance:9.325083700403091rem; --position:52.18967399354718%; --time:3.504830018882207s; --delay:-3.8440295844916346s;"></div>
    <div class="bubble" style="--size:5.070638612044997rem; --distance:8.768344688468623rem; --position:103.16122067513483%; --time:2.3282762473104923s; --delay:-2.8247758673337624s;"></div>
    <div class="bubble" style="--size:4.491823131077235rem; --distance:9.386743631507379rem; --position:5.764877879512337%; --time:2.0585748615664774s; --delay:-3.073787829849765s;"></div>
  </div>`;

var Ar_NavTemplate = `
  <div id="Upper_NavBar_Ar" class="Flex_Direction_Ar">
    <a class="ARC_Logo" href=".${IMAGESpath}/Home.html"><img class="NavBar_Logos" src=".${IMAGESpath}/Images/AERI-ARC-Logo_-removebg .png" alt="Agriculture Engineering Institute Logo"></a>
    <p id="NavBar_P_Ar">معهد بحوث الهندسة الزراعية</p>
    ${LangBtnEn}
  </div>
  <div id="navbar">
    <div id="Lower_NavBar">
      <div id = "Nav_Links_Container_Ar">
          <a onmouseover="Mouse_Over(this); Mouse_Over_Special(this);" onmouseout="Mouse_Leave(this); Mouse_Leave_Special(this);" class="Nav_Links Nav_Links_Ar" href=".${IMAGESpath}/Home.html">الرئيسية</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Institute_Sections.html">الأقسام</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Helping_Units.html">وحدات مساعدة</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Institute_Branches.html">فروع المعهد</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Patents.html">التطبيقات التكنولوجية</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Permanent_Exhibition.html">المعرض الدائم</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Research_Projects.html">مشاريع بحثية</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Overview.html">نبذة</a>
          <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_Ar" href="./${HTMLpath}Contact_Us.html">الإتصال بنا</a>
      </div>
    </div>
  </div>
`;

var En_NavTemplate = `
<div id="Upper_NavBar_En" class="Flex_Direction_En">
<a class="ARC_Logo" href=".${IMAGESpath}/Home.html"><img class="NavBar_Logos" src=".${IMAGESpath}/Images/AERI-ARC-Logo_-removebg .png" alt="Agriculture Engineering Institute Logo"></a>

<p id="NavBar_P_En">Agriculture Engineering Research Institute</p>
${LangBtnAr}
</div>
<div id="navbar">
        <div id="Lower_NavBar">
        <div id = "Nav_Links_Container_En">
                <a onmouseover="Mouse_Over(this); Mouse_Over_Special(this);" onmouseout="Mouse_Leave(this); Mouse_Leave_Special(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Contact_Us.html">Contact Us</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Overview.html">Overview</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Research_Projects.html">Research Projects</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Permanent_Exhibition.html">Permanent Exhibition</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Patents.html">Technological Applications</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Institute_Branches.html">Institute Branches</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Helping_Units.html">Helping Units</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href="./${HTMLpath}Institute_Sections.html">Institute Sections</a>
                <a onmouseover="Mouse_Over(this);" onmouseout="Mouse_Leave(this);" class="Nav_Links Nav_Links_En" href=".${IMAGESpath}/Home.html">Home</a>
            </div>
          </div>
        </div>
    `;
    // <a id = "Footer_Logo" class="ARC_Logo image" href=".${IMAGESpath}/Home.html" ><img class="NavBar_Logos" src=".${IMAGESpath}/Images/AERI-ARC-Logo_-removebg .png" alt="Agriculture Engineering Institute Logo"></a>
    // <div><b>Eldew</b><a href="#">Secuce</a><a href="#">Drupand</a><a href="#">Oceash</a><a href="#">Ugefe</a><a href="#">Babed</a></div>
    // <div><b>Spotha</b><a href="#">Miskasa</a><a href="#">Agithe</a><a href="#">Scesha</a><a href="#">Lulle</a></div>
    // <div><b>Chashakib</b><a href="#">Chogauw</a><a href="#">Phachuled</a><a href="#">Tiebeft</a><a href="#">Ocid</a><a href="#">Izom</a><a href="#">Ort</a></div>
    // <div><b>Athod</b><a href="#">Pamuz</a><a href="#">Vapert</a><a href="#">Neesk</a><a href="#">Omemanen</a></div>
var Ar_FooterTemplate = `
    ${Bubbles}
<div class="content">

    <div id = "Navigation_Links_Footer_Div_Ar">
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفوsssssssssssssssssssن</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفوsssssssssssssssssssن</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفوsssssssssssssssssssن</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفوsssssssssssssssssssن</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفوsssssssssssssssssssن</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفوsssssssssssssssssssن</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفوsssssssssssssssssssن</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفوsssssssssssssssssssن</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفوsssssssssssssssssssن</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفوsssssssssssssssssssن</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_Ar" href="#">التليفون</a>
    </div>
    <div id = "Upper_Footer_Left_Ar">
      <div id = "Footer_ContactInfo_Ar">
          <h2 id = "Footer_Contact_Us_Heading_Ar">تواصل معنا</h2>
          <div class = "Single_Contact_Info Single_Contact_Info_Ar">
              <img width = "43px" src = ".${IMAGESpath}/Images/noun-address-2048877.png" alt = "Email Address Icon">
              <span id = "Address_Div_Ar"> شارع نادى الصيد - الدقى - الجيزة - ص ب ٢٥٦</span>
              <span>: العنوان</span>
          </div>
          <div class = "Single_Contact_Info Single_Contact_Info_Ar">
              <img width = "50px" src = ".${IMAGESpath}/Images/noun-phone-2632790.png" alt = "Email Address Icon">
              <span id = "Land_Line_Span_Ar">(٢٠٢) ٣٧٤٨٧٢۱۲ - ٣٣٣٧٥٨٥٣ </span>
              <span> : التليفون</span>
          </div>
          <div class = "Single_Contact_Info Single_Contact_Info_Ar">
              <img width = "45px" src = ".${IMAGESpath}/Images/noun-email-6924545.png" alt = "Email Address Icon">
              <a id = "Contact_Email" href="mailto:aenri@aenri.org?&subject=Mail from xyz.com&body=Dear AENRI.org" target="_blank">aenri@aenri.org</a>
              <span id = "Contact_Email_Span">: البريد الالكتروني</span>
          </div>
          <div class = "Single_Contact_Info Single_Contact_Info_Ar">
              <img width = "40px" src = ".${IMAGESpath}/Images/noun-fax-6924549.png" alt = "Email Address Icon">
              <span id = "Fax_Span_Ar">٢٣٣٥٦٨٦ (٢٠٢)</span>
              <span> : الفاكس</span>
      </div>
    </div>
  </div>
</div>
  <div id = "Lower_Footer_Ar">
      <div id = "Footer_Btns_Div">
        ${Footer_LangBtnEn}
        ${TopBtnAr}
        </div>
        <p id = "Footer_P_Ar">معهد بحوث الهندسة الزراعية ٢٠٢٤ ©</p>
        </div>
        `;
        // <a id = "Contact_Email_En" href="mailto:adhamsherif7261@gmail.com?&subject=Mail from xyz.com&body=Dear AENRI.org" target="_blank">aenri@aenri.org</a>
        // <a id = "Footer_Logo" class="ARC_Logo image" href=".${IMAGESpath}/Home.html" ><img class="NavBar_Logos" src=".${IMAGESpath}/Images/AERI-ARC-Logo_-removebg .png" alt="Agriculture Engineering Institute Logo"></a>
var En_FooterTemplate = `
      ${Bubbles}
  <div class="content">
      <div id = "Upper_Footer_Left_En">
        <div id = "Footer_ContactInfo_En">
            <h2 id = "Footer_Contact_Us_Heading_Ar">Contact Us</h2>
            <div class = "Single_Contact_Info Single_Contact_Info_En">
                <span>Address:</span>
                <div id = "Address_Div_En">
                    <span>
                      El-Said Club Street - 
                    </span>
                    <span>
                      Dokki - Giza - MailBox : 256
                    </span>
                </div>
                <img width = "45px" src = ".${IMAGESpath}/Images/noun-address-2048877.png" alt = "Email Address Icon">
            </div>
            <div class = "Single_Contact_Info Single_Contact_Info_En">
                <span>Land Line: (202)</span>
                <span id = "Land_Line_Span_En">37487212 - 33375853</span>
                <img width = "50px" src = ".${IMAGESpath}/Images/noun-phone-2632790.png" alt = "Email Address Icon">
            </div>
            <div class = "Single_Contact_Info Single_Contact_Info_En">
            <span>Email:</span>
                <a id = "Contact_Email_En" href="mailto:aenri@aenri.org?&subject=Mail from xyz.com&body=Dear AENRI.org" target="_blank">aenri@aenri.org</a>
                <img width = "45px" src = ".${IMAGESpath}/Images/noun-email-6924545.png" alt = "Email Address Icon">
            </div>
            <div class = "Single_Contact_Info Single_Contact_Info_En">
                <span>Fax : </span>
                <span id = "Fax_Span_En">(202) 2335686</span>
                <img width = "40px" src = ".${IMAGESpath}/Images/noun-fax-6924549.png" alt = "Email Address Icon">
            </div>
      </div>
  </div>
    <div id = "Navigation_Links_Footer_Div_En">
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Linkssssssssssssssssss</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
        <a onmouseover="Mouse_Over_Footer(this);" onmouseout="Mouse_Leave_Footer(this);" class = "Nav_Link_Footer Nav_Link_Footer_En" href="#">Link</a>
    </div>
      </div>
      <div id = "Lower_Footer_En">
        <p id = "Footer_P_En">©2024 Agriculture Engineering Research Institute</p>
        <div id = "Footer_Btns_Div">
          ${TopBtnEn}
          ${Footer_LangBtnAr}
        </div>
      </div>
      `;
      // <a class="image" href="https://codepen.io/z-" target="_blank" style="background-image: url(&quot;https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg&quot;)"></a>
    function To_Top() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
      function Mouse_Over_Special(Special_Anchor){
  $(Special_Anchor).css({
    color: "white",
    marginLeft: "-6%",
  });
}
function Mouse_Leave_Special(Special_Anchor){
  $(Special_Anchor).css({
    color: "Black",
    marginLeft: "0px",
  });
}

function Mouse_Over_Footer(anchor) {
  $(anchor).siblings().css({
    transition: "0.5s",
    opacity: "0.2",
    filter: "blur(5px)",
  });
  $(anchor).css({
    fontSize: "35px",
    color: "rgb(0, 0, 120)",
    // width: innerWidth,
    height: anchor.innerHeight,
  });
}
function Mouse_Over(anchor){
  if(window.innerWidth > 1485){

    En_Nav.style.height = "382px"
    Ar_Nav.style.height = "345px"
  }
  
  $(anchor)
  .siblings()
  .css({ 
    transition:"0.5s",
    opacity:"0.2",
    filter:"blur(5px)",
  });
  $(anchor).css({
    fontSize: "33px",
    color: "white",
  });
}
function Mouse_Leave_Footer(anchor){
  $(anchor).siblings().css({
    transition: "0.5s",
    opacity: "1",
    filter: "blur(0px)",
  });
  $(".Nav_Link_Footer_En").css({
    width: "min-content",
    height: "fit-content",
    fontSize: "16px",
    color: "Black",
  });
  $(".Nav_Link_Footer_Ar").css({
    width: "fit-content",
    height: "fit-content",
    fontSize: "16px",
    color: "Black",
  });
}
function Mouse_Leave(anchor){
  if(window.innerWidth > 1485){
    En_Nav.style.height = "330px";
    Ar_Nav.style.height = "300px";
  }
  $(anchor)
  .siblings()
  .css({ 
    transition:"0.5s",
    opacity:"1",
    filter:"blur(0px)",
  });
  $(".Nav_Links_En").css({
    width: "min-content",
    height: "fit-content",
    fontSize: "25px",
    color: "Black",
  });
  $(".Nav_Links_Ar").css({
    width: "fit-content",
    height: "fit-content",
    fontSize: "25px",
    color: "Black",
  });
}
    // function Str_Random(length) {
    //   let result = "";
    //   const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    //   for (let i = 0; i < length; i++) {
    //     const randomInd = Math.floor(Math.random() * characters.length);
    //     result += characters.charAt(randomInd);
    //   }
    //   return result;
    // }

    // const password = Str_Random(100);
    // alert(`The Password Is ::\t\n ${password}`);

    // async function encryptData(password, data) {
    //   try {
    //     const passwordEncoder = new TextEncoder();
    //     const passwordBytes = passwordEncoder.encode(password);
    //     const salt = crypto.getRandomValues(new Uint8Array(16));
    //     const passwordKey = await crypto.subtle.importKey(
    //       "raw",
    //       passwordBytes,
    //       { name: "PBKDF2" },
    //       false,
    //       ["deriveKey"]
    //     );
    //     const key = await crypto.subtle.deriveKey(
    //       { name: "PBKDF2", salt: salt, iterations: 1000, hash: "SHA-256" },
    //       passwordKey,
    //       { name: "AES-CBC", length: 256 },
    //       true,
    //       ["encrypt"]
    //     );
    //     const iv = crypto.getRandomValues(new Uint8Array(16));
    //     const encryptedData = await crypto.subtle.encrypt(
    //       {
    //         name: "AES-CBC",
    //         iv: iv,
    //       },
    //       key,
    //       passwordEncoder.encode(data)
    //     );
    //     const encryptedBytes = new Uint8Array(encryptedData);
    //     const encryptedString = Array.from(encryptedBytes)
    //       .map((x) => `00${x.toString(16)}`.slice(-2))
    //       .join("");

    //     // Generate padding strings
    //     const paddingLength = encryptedBytes.length;
    //     const padding1 = crypto.getRandomValues(new Uint8Array(paddingLength));
    //     const padding2 = crypto.getRandomValues(new Uint8Array(paddingLength));

    //     const paddingString1 = Array.from(padding1)
    //       .map((x) => `00${x.toString(16)}`.slice(-2))
    //       .join("");
    //     const paddingString2 = Array.from(padding2)
    //       .map((x) => `00${x.toString(16)}`.slice(-2))
    //       .join("");

    //     // Concatenate encrypted string with padding strings
    //     const paddedEncryptedString =
    //       encryptedString + paddingString1 + paddingString2;

    //     return {
    //       iv: Array.from(iv),
    //       salt: Array.from(salt),
    //       encryptedData: paddedEncryptedString,
    //     };
    //   } catch (error) {
    //     console.error("Error during encryption:", error);
    //   }
    // }

    // var Decrypted_Lang_Value = "ssss";

    // async function decryptData(password) {
    //   try {
    //     const passwordEncoder = new TextEncoder();
    //     const passwordBytes = passwordEncoder.encode(password);

    //     const encryptedDataString = localStorage.getItem("Permenant_Language");
    //     if (!encryptedDataString) {
    //       console.error(
    //         'No data found in localStorage with key "Permenant_Language".'
    //       );
    //       return;
    //     }

    //     const encryptedData = JSON.parse(encryptedDataString);
    //     const iv = new Uint8Array(encryptedData.iv);
    //     const salt = new Uint8Array(encryptedData.salt);
    //     const paddedEncryptedString = encryptedData.encryptedData;

    //     // Calculate the length of the original encrypted data
    //     const thirdLength = Math.floor(paddedEncryptedString.length / 3);
    //     const encryptedString = paddedEncryptedString.slice(0, thirdLength);

    //     const encryptedBytes = Array.from(encryptedString.match(/.{2}/g)).map(
    //       (x) => parseInt(x, 16)
    //     );
    //     const encryptedDataBuffer = new Uint8Array(encryptedBytes);

    //     const passwordKey = await crypto.subtle.importKey(
    //       "raw",
    //       passwordBytes,
    //       {
    //         name: "PBKDF2",
    //       },
    //       false,
    //       ["deriveKey"]
    //     );

    //     const key = await crypto.subtle.deriveKey(
    //       {
    //         name: "PBKDF2",
    //         salt: salt,
    //         iterations: 1000,
    //         hash: "SHA-256",
    //       },
    //       passwordKey,
    //       {
    //         name: "AES-CBC",
    //         length: 256,
    //       },
    //       true,
    //       ["decrypt"]
    //     );

    //     const decryptedData = await crypto.subtle.decrypt(
    //       {
    //         name: "AES-CBC",
    //         iv: iv,
    //       },
    //       key,
    //       encryptedDataBuffer
    //     );

    //     const decryptedString = new TextDecoder().decode(decryptedData);
    //     console.log("Decrypted data:", decryptedString);
    //     alert(`Decrypted Language: ${decryptedString}`);
    //     // Decrypted_Lang_Value = decryptedString;
    //     return decryptedString;
    //   } catch (error) {
    //     console.error("Error during decryption:", error);
    //   }
    // }


    // async function decryptData(password) {
    //   try {
    //     const passwordEncoder = new TextEncoder();
    //     const passwordBytes = passwordEncoder.encode(password);

    //     // Retrieve and parse the stored data from localStorage
    //     const encryptedDataString = localStorage.getItem("Permenant_Language");
    //     if (!encryptedDataString) {
    //       console.error(
    //         'No data found in localStorage with key "Permenant_Language".'
    //       );
    //       return null; // Return null if no data is found
    //     }

    //     const encryptedData = JSON.parse(encryptedDataString);
    //     const iv = new Uint8Array(encryptedData.iv);
    //     const salt = new Uint8Array(encryptedData.salt);
    //     const paddedEncryptedString = encryptedData.encryptedData;

    //     // Calculate the length of the original encrypted data
    //     const thirdLength = Math.floor(paddedEncryptedString.length / 3);
    //     const encryptedString = paddedEncryptedString.slice(0, thirdLength);

    //     // Convert the encrypted string back to bytes
    //     const encryptedBytes = Array.from(encryptedString.match(/.{2}/g)).map(
    //       (x) => parseInt(x, 16)
    //     );
    //     const encryptedDataBuffer = new Uint8Array(encryptedBytes);

    //     // Import the password key
    //     const passwordKey = await crypto.subtle.importKey(
    //       "raw",
    //       passwordBytes,
    //       { name: "PBKDF2" },
    //       false,
    //       ["deriveKey"]
    //     );

    //     // Derive the AES key
    //     const key = await crypto.subtle.deriveKey(
    //       {
    //         name: "PBKDF2",
    //         salt: salt,
    //         iterations: 1000,
    //         hash: "SHA-256",
    //       },
    //       passwordKey,
    //       { name: "AES-CBC", length: 256 },
    //       true,
    //       ["decrypt"]
    //     );

    //     // Decrypt the data
    //     const decryptedData = await crypto.subtle.decrypt(
    //       { name: "AES-CBC", iv: iv },
    //       key,
    //       encryptedDataBuffer
    //     );

    //     // Decode the decrypted data
    //     const decryptedString = new TextDecoder().decode(decryptedData);
    //     return decryptedString; // Return the decrypted string
    //     // console.log("Decrypted data:", decryptedString);
    //   } 
    //   catch (error) {
    //     console.error("Error during decryption:", error);
    //     return null; // Return null if an error occurs
    //   }
    // }

// var Encrypted_Lang_Value = JSON.parse(localStorage.getItem("Permenant_Language")).encryptedData;
// console.log(Encrypted_Lang_Value);
// async function Get_Decrypted_Language(){
//   var Decrypted_Lang_Value = await decryptData(password)
//   // var Decrypted_Lang_Value = decryptData(password)
//   console.log(Decrypted_Lang_Value);
//   if (Decrypted_Lang_Value === "English") {
//     NavIsEn();
//   }
//   if (Decrypted_Lang_Value === "عربي") {
//     NavIsAR();
//   }
//   return Decrypted_Lang_Value
// }

//  setTimeout(()=>{
//   var z =  Get_Decrypted_Language();
//   // console.log("ZZZZZZzz ==== " + JSON.stringify(z.));
//  },[300])

// Parsed_Lang_Value = decryptData(password)
// console.log(Decrypted_Lang_Value);

if (localStorage.getItem("Permenant_Language") === "English") {
  NavIsEn();
}
if (localStorage.getItem("Permenant_Language") === "عربي") {
  NavIsAR();
}
  function NavIsAR() {
    Ar_Nav.innerHTML = Ar_NavTemplate;
    Main_Footer[0].innerHTML = Ar_FooterTemplate;
    En_Nav.classList.add("D_None");
    Ar_Nav.classList.remove("D_None");
  }
  function NavIsEn(){
    En_Nav.innerHTML = En_NavTemplate;
    Main_Footer[0].innerHTML = En_FooterTemplate;
    Ar_Nav.classList.add("D_None");
    En_Nav.classList.remove("D_None");
}

En_Nav.classList.add("Text_Direction_En");
Ar_Nav.classList.add("Text_Direction_Ar");

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //   document.getElementById("Arabic_NavBar").style.padding = "10px 10px";
  //   document.getElementById("English_NavBar").style.padding = "10px 10px";
  // } else {
  //   document.getElementById("Arabic_NavBar").style.padding = "30px 10px";
  //   document.getElementById("English_NavBar").style.padding = "30px 10px";
  // }
}