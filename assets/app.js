const IMG_A="assets/images/apex-floor-spring-7315az.webp";
const IMG_B="assets/images/apex-floor-spring-7300.webp";
const products=[
 {slug:"ah-60",model:"AH-60",label:"Compact",weight:"95 kg",width:"≤ 900 mm",size:"280 × 97 × 42 mm",image:IMG_A},
 {slug:"ah-200",model:"AH-200",label:"Everyday",weight:"90 kg",width:"≤ 900 mm",size:"248 × 100 × 50 mm",image:IMG_A},
 {slug:"ah-7315az",model:"AH-7315AZ",label:"Versatile",weight:"120 kg",width:"≤ 1,000 mm",size:"240 × 108 × 55 mm",image:IMG_A},
 {slug:"ah-7300",model:"AH-7300",label:"Heavy duty",weight:"160 kg",width:"≤ 1,200 mm",size:"273 × 122 × 65 mm",image:IMG_B}
];
const langs=[["en","English"],["zh","简体中文"],["es","Español"],["ar","العربية"],["fr","Français"],["de","Deutsch"],["pt","Português"],["ru","Русский"],["it","Italiano"],["nl","Nederlands"],["tr","Türkçe"],["ko","한국어"],["ja","日本語"],["hi","हिन्दी"],["th","ไทย"],["vi","Tiếng Việt"],["id","Bahasa Indonesia"],["ms","Bahasa Melayu"],["pl","Polski"],["uk","Українська"],["fa","فارسی"],["he","עברית"],["bn","বাংলা"],["ur","اردو"],["tl","Filipino"],["sw","Kiswahili"]];
const en={products:"Products",engineering:"Engineering",quality:"Quality",location:"Location",quote:"Get a quote",eyebrow:"Hydraulic floor springs",hero:"Invisible control.<br>Remarkable movement.",sub:"Precision door control for glass, timber and metal doors — engineered for quiet, confident motion.",explore:"Explore the range ↓",compare:"Compare models ↗",precision:"Power, made precise.",precisionSub:"Two-stage speed control. Stable at every opening. Built for high-traffic architecture.",range:"Four strengths. One standard.",rangeSub:"Choose by door weight and width.",locationTitle:"Find us in Zhaoqing.",mapsButton:"View on Google Maps ↗"};
const tr={
 zh:{products:"产品",engineering:"技术",quality:"品质",location:"位置",quote:"获取报价",eyebrow:"液压地弹簧",hero:"隐于地面。<br>掌控每一次开合。",sub:"适用于玻璃门、木门和金属门的精密门控系统，安静、稳定、可靠。",explore:"查看全系列 ↓",compare:"对比型号 ↗",precision:"力量，精准掌控。",precisionSub:"两段速度调节，为高频使用的建筑空间而生。",range:"四种承重，同一标准。",rangeSub:"按门重和门宽选择适合的型号。",locationTitle:"在肇庆找到我们。",mapsButton:"在 Google 地图中查看 ↗"},
 es:{products:"Productos",engineering:"Ingeniería",quote:"Solicitar precio",eyebrow:"Cierrapuertas hidráulicos",hero:"Control invisible.<br>Movimiento extraordinario.",sub:"Control de precisión para puertas de vidrio, madera y metal.",explore:"Ver la gama ↓",compare:"Comparar modelos ↗"},
 ar:{products:"المنتجات",engineering:"الهندسة",quote:"اطلب عرضاً",eyebrow:"مفصلات أرضية هيدروليكية",hero:"تحكم غير مرئي.<br>حركة استثنائية.",sub:"تحكم دقيق للأبواب الزجاجية والخشبية والمعدنية.",explore:"اكتشف المجموعة ↓",compare:"قارن الموديلات ↗"},
 fr:{products:"Produits",engineering:"Ingénierie",quote:"Demander un devis",eyebrow:"Pivots de sol hydrauliques",hero:"Contrôle invisible.<br>Mouvement remarquable.",sub:"Contrôle précis des portes en verre, bois et métal.",explore:"Découvrir la gamme ↓",compare:"Comparer ↗"},
 de:{products:"Produkte",engineering:"Technik",quote:"Angebot anfragen",eyebrow:"Hydraulische Bodentürschließer",hero:"Unsichtbare Kontrolle.<br>Außergewöhnliche Bewegung.",sub:"Präzise Türsteuerung für Glas-, Holz- und Metalltüren.",explore:"Serie entdecken ↓",compare:"Modelle vergleichen ↗"},
 pt:{products:"Produtos",engineering:"Engenharia",quote:"Pedir cotação",hero:"Controle invisível.<br>Movimento notável.",sub:"Controle preciso para portas de vidro, madeira e metal."},
 ru:{products:"Продукция",engineering:"Технологии",quote:"Получить цену",hero:"Невидимый контроль.<br>Безупречное движение.",sub:"Точное управление стеклянными, деревянными и металлическими дверями."},
 it:{products:"Prodotti",engineering:"Ingegneria",quote:"Richiedi offerta",hero:"Controllo invisibile.<br>Movimento straordinario."},
 nl:{products:"Producten",engineering:"Techniek",quote:"Offerte aanvragen",hero:"Onzichtbare controle.<br>Opmerkelijke beweging."},
 tr:{products:"Ürünler",engineering:"Mühendislik",quote:"Teklif alın",hero:"Görünmez kontrol.<br>Olağanüstü hareket."},
 ko:{products:"제품",engineering:"기술",quote:"견적 요청",hero:"보이지 않는 제어.<br>놀라운 움직임."},
 ja:{products:"製品",engineering:"技術",quote:"見積もり",hero:"見えない制御。<br>際立つ動き。"},
 hi:{products:"उत्पाद",engineering:"इंजीनियरिंग",quote:"कोटेशन लें",hero:"अदृश्य नियंत्रण।<br>असाधारण गति।"},
 th:{products:"สินค้า",engineering:"วิศวกรรม",quote:"ขอใบเสนอราคา",hero:"ควบคุมอย่างแนบเนียน<br>การเคลื่อนไหวที่โดดเด่น"},
 vi:{products:"Sản phẩm",engineering:"Kỹ thuật",quote:"Nhận báo giá",hero:"Điều khiển vô hình.<br>Chuyển động ấn tượng."},
 id:{products:"Produk",engineering:"Rekayasa",quote:"Minta penawaran",hero:"Kontrol tak terlihat.<br>Gerakan luar biasa."},
 ms:{products:"Produk",engineering:"Kejuruteraan",quote:"Minta sebut harga",hero:"Kawalan tersembunyi.<br>Pergerakan luar biasa."},
 pl:{products:"Produkty",engineering:"Technologia",quote:"Poproś o wycenę",hero:"Niewidoczna kontrola.<br>Wyjątkowy ruch."},
 uk:{products:"Продукція",engineering:"Інженерія",quote:"Отримати ціну",hero:"Невидимий контроль.<br>Досконалий рух."},
 fa:{products:"محصولات",engineering:"مهندسی",quote:"دریافت قیمت",hero:"کنترل نامرئی.<br>حرکتی چشمگیر."},
 he:{products:"מוצרים",engineering:"הנדסה",quote:"קבלת הצעה",hero:"שליטה בלתי נראית.<br>תנועה יוצאת דופן."},
 bn:{products:"পণ্য",engineering:"প্রকৌশল",quote:"মূল্য নিন",hero:"অদৃশ্য নিয়ন্ত্রণ।<br>অসাধারণ গতি।"},
 ur:{products:"مصنوعات",engineering:"انجینئرنگ",quote:"قیمت حاصل کریں",hero:"نظر نہ آنے والا کنٹرول۔<br>شاندار حرکت۔"},
 tl:{products:"Mga Produkto",engineering:"Inhinyeriya",quote:"Humingi ng presyo",hero:"Nakatagong kontrol.<br>Kahanga-hangang galaw."},
 sw:{products:"Bidhaa",engineering:"Uhandisi",quote:"Pata bei",hero:"Udhibiti usioonekana.<br>Mwendo wa kipekee."}
};
function renderProducts(){const grid=document.querySelector("#product-grid"),cmp=document.querySelector("#comparison"),tabs=document.querySelector("#model-tabs");products.forEach((p,i)=>{grid.insertAdjacentHTML("beforeend",`<article class="card"><div class="top"><span>${p.label}</span><small>0${i+1}</small></div><img src="${p.image}" alt="${p.model} floor spring"><h3>${p.model}</h3><div class="spec"><span>Max. door weight</span><b>${p.weight}</b></div><div class="spec"><span>Door width</span><b>${p.width}</b></div><a class="more" href="products/${p.slug}.html"><span>View details</span><span>↗</span></a></article>`);cmp.insertAdjacentHTML("beforeend",`<div><strong>${p.model}</strong><span>${p.weight}</span><span>${p.width}</span><span>${p.size}</span></div>`);const b=document.createElement("button");b.textContent=p.model;b.className=i===3?"active":"";b.onclick=()=>selectProduct(i,b);tabs.appendChild(b)})}
function selectProduct(i,b){const p=products[i];document.querySelectorAll("#model-tabs button").forEach(x=>x.classList.remove("active"));b.classList.add("active");document.querySelector("#stage-label").textContent=p.label;document.querySelector("#stage-model").textContent=p.model;document.querySelector("#stage-spec").textContent=`${p.weight} · ${p.width}`;const img=document.querySelector("#stage-image");img.src=p.image;img.alt=`${p.model} hydraulic floor spring`}
function setLanguage(code){const c={...en,...(tr[code]||{})};document.documentElement.dir=["ar","fa","he","ur"].includes(code)?"rtl":"ltr";document.documentElement.lang=code;document.querySelectorAll("[data-t]").forEach(el=>{const v=c[el.dataset.t];if(v)el.innerHTML=v});localStorage.setItem("apex-lang",code)}
document.addEventListener("DOMContentLoaded",()=>{renderProducts();const s=document.querySelector("#language");langs.forEach(([v,n])=>s.add(new Option(n,v)));s.value=localStorage.getItem("apex-lang")||"en";setLanguage(s.value);s.addEventListener("change",e=>setLanguage(e.target.value))});
