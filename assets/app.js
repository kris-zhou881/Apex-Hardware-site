document.documentElement.classList.add("js");

const LANGUAGES = [
  ["en", "English"],
  ["zh", "简体中文"],
  ["es", "Español"],
  ["ar", "العربية"],
  ["fr", "Français"],
  ["de", "Deutsch"],
  ["pt", "Português"],
  ["ru", "Русский"],
  ["it", "Italiano"],
  ["nl", "Nederlands"],
  ["tr", "Türkçe"],
  ["ko", "한국어"],
  ["ja", "日本語"],
  ["hi", "हिन्दी"],
  ["th", "ไทย"],
  ["vi", "Tiếng Việt"],
  ["id", "Bahasa Indonesia"],
  ["ms", "Bahasa Melayu"],
  ["pl", "Polski"],
  ["uk", "Українська"],
  ["fa", "فارسی"],
  ["he", "עברית"],
  ["bn", "বাংলা"],
  ["ur", "اردو"],
  ["tl", "Filipino"],
  ["sw", "Kiswahili"],
];

const RTL_LANGUAGES = new Set(["ar", "fa", "he", "ur"]);

const STRINGS = {
  en: {
    products: "Products",
    engineering: "Engineering",
    quality: "Quality",
    location: "Location",
    quote: "Get a quote",
    eyebrow: "Hydraulic floor springs",
    hero: "Invisible control.<br>Remarkable movement.",
    sub: "Precision door control for glass, timber and metal doors — engineered for quiet, confident motion.",
    explore: "Explore the range",
    compare: "Compare models",
    maxWeight: "Maximum door weight",
    openingAngle: "Opening capability",
    productRange: "Product models",
    temperature: "Operating range",
    precision: "Power, made precise.",
    precisionSub:
      "Two-stage speed control. Stable at every opening. Built for high-traffic architecture.",
    range: "Four strengths.<br>One standard.",
    rangeSub: "Choose by door weight and width.",
    rangeNote:
      "Need help specifying a model? Send us the door weight, width and material.",
    qualityTitle: "Engineering you feel.<br>Hardware you don’t.",
    compareTitle: "Built for the door you specify.",
    compareSub:
      "Start with door weight and width. We’ll help confirm the correct spindle, hold-open angle and cover finish.",
    contactTitle: "Tell us about your door.",
    contactSub: "OEM / ODM · Samples available · Global supply",
    emailUs: "Email us",
    locationTitle: "Find us in Zhaoqing.",
    mapsButton: "View on Google Maps",
    doorWidth: "Door width",
    viewDetails: "View details",
    model: "Model",
    dimensions: "Dimensions",
    comparisonAria: "Floor spring model comparison",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
  },
  zh: {
    products: "产品",
    engineering: "技术",
    quality: "品质",
    location: "位置",
    quote: "获取报价",
    eyebrow: "液压地弹簧",
    hero: "隐于地面。<br>掌控每一次开合。",
    sub: "适用于玻璃门、木门和金属门的精密门控系统，安静、稳定、可靠。",
    explore: "查看全系列",
    compare: "对比型号",
    maxWeight: "最大门重",
    openingAngle: "最大开启角度",
    productRange: "产品型号",
    temperature: "工作温度",
    precision: "力量，精准掌控。",
    precisionSub: "两段速度调节，每次开启都稳定可靠，适合高频使用的建筑入口。",
    range: "四种承重。<br>同一标准。",
    rangeSub: "按门重和门宽选择适合的型号。",
    rangeNote: "需要帮助选择型号？请提供门重、门宽和门体材质。",
    qualityTitle: "感受得到的工程。<br>看不见的五金。",
    compareTitle: "为你的门选择合适规格。",
    compareSub: "从门重和门宽开始，我们会协助确认主轴、定位角度和盖板表面。",
    contactTitle: "告诉我们你的门体需求。",
    contactSub: "OEM / ODM · 可提供样品 · 全球供应",
    emailUs: "发送邮件",
    locationTitle: "在肇庆找到我们。",
    mapsButton: "在 Google 地图中查看",
    doorWidth: "门宽",
    viewDetails: "查看详情",
    model: "型号",
    dimensions: "尺寸",
    comparisonAria: "地弹簧型号对比",
    menuOpen: "打开导航菜单",
    menuClose: "关闭导航菜单",
  },
  es: {
    products: "Productos",
    engineering: "Ingeniería",
    quality: "Calidad",
    location: "Ubicación",
    quote: "Solicitar precio",
    eyebrow: "Cierrapuertas hidráulicos de suelo",
    hero: "Control invisible.<br>Movimiento extraordinario.",
    sub: "Control preciso para puertas de vidrio, madera y metal, diseñado para un movimiento silencioso y seguro.",
    explore: "Explorar la gama",
    compare: "Comparar modelos",
    maxWeight: "Peso máximo de puerta",
    openingAngle: "Ángulo de apertura",
    productRange: "Modelos de producto",
    temperature: "Rango de trabajo",
    precision: "Potencia con precisión.",
    precisionSub:
      "Control de velocidad en dos etapas, estable en cada apertura y preparado para zonas de alto tránsito.",
    range: "Cuatro capacidades.<br>Un solo estándar.",
    rangeSub: "Elija según el peso y el ancho de la puerta.",
    rangeNote:
      "¿Necesita ayuda? Envíenos el peso, el ancho y el material de la puerta.",
    qualityTitle: "Ingeniería que se siente.<br>Herrajes que no se ven.",
    compareTitle: "Creado para la puerta que especifica.",
    compareSub:
      "Empiece por el peso y el ancho; le ayudaremos a confirmar eje, retención y acabado.",
    contactTitle: "Cuéntenos sobre su puerta.",
    contactSub: "OEM / ODM · Muestras disponibles · Suministro global",
    emailUs: "Escríbanos",
    locationTitle: "Encuéntrenos en Zhaoqing.",
    mapsButton: "Ver en Google Maps",
  },
  ar: {
    products: "المنتجات",
    engineering: "الهندسة",
    quality: "الجودة",
    location: "الموقع",
    quote: "اطلب عرض سعر",
    eyebrow: "مفصلات أرضية هيدروليكية",
    hero: "تحكم غير مرئي.<br>حركة استثنائية.",
    sub: "تحكم دقيق للأبواب الزجاجية والخشبية والمعدنية، مصمم لحركة هادئة وواثقة.",
    explore: "استكشف المجموعة",
    compare: "قارن الموديلات",
    maxWeight: "أقصى وزن للباب",
    openingAngle: "زاوية الفتح",
    productRange: "موديلات المنتج",
    temperature: "نطاق التشغيل",
    precision: "قوة بدقة عالية.",
    precisionSub:
      "تحكم بالسرعة على مرحلتين وثبات عند كل فتح، مناسب للمداخل كثيرة الاستخدام.",
    range: "أربع قدرات.<br>معيار واحد.",
    rangeSub: "اختر حسب وزن الباب وعرضه.",
    rangeNote: "تحتاج مساعدة؟ أرسل وزن الباب وعرضه ومادته.",
    qualityTitle: "هندسة تشعر بها.<br>عتاد لا تراه.",
    compareTitle: "مصمم للباب الذي تحدده.",
    compareSub:
      "ابدأ بوزن الباب وعرضه وسنساعدك في تأكيد المحور وزاوية التثبيت والتشطيب.",
    contactTitle: "أخبرنا عن بابك.",
    contactSub: "OEM / ODM · عينات متاحة · توريد عالمي",
    emailUs: "راسلنا",
    locationTitle: "اعثر علينا في تشاوتشينغ.",
    mapsButton: "عرض على خرائط Google",
  },
  fr: {
    products: "Produits",
    engineering: "Ingénierie",
    quality: "Qualité",
    location: "Adresse",
    quote: "Demander un devis",
    eyebrow: "Pivots de sol hydrauliques",
    hero: "Contrôle invisible.<br>Mouvement remarquable.",
    sub: "Contrôle précis des portes en verre, bois et métal, conçu pour un mouvement silencieux et maîtrisé.",
    explore: "Découvrir la gamme",
    compare: "Comparer les modèles",
    maxWeight: "Poids maximal de porte",
    openingAngle: "Angle d’ouverture",
    productRange: "Modèles disponibles",
    temperature: "Plage de service",
    precision: "La puissance, avec précision.",
    precisionSub:
      "Réglage de vitesse en deux phases, stable à chaque ouverture et conçu pour les passages intensifs.",
    range: "Quatre puissances.<br>Un seul standard.",
    rangeSub: "Choisissez selon le poids et la largeur de la porte.",
    rangeNote:
      "Besoin d’aide ? Envoyez-nous le poids, la largeur et le matériau de la porte.",
    qualityTitle: "Une ingénierie perceptible.<br>Une quincaillerie invisible.",
    compareTitle: "Conçu pour la porte que vous spécifiez.",
    compareSub:
      "Commencez par le poids et la largeur ; nous confirmerons l’axe, l’arrêt et la finition.",
    contactTitle: "Parlez-nous de votre porte.",
    contactSub: "OEM / ODM · Échantillons disponibles · Livraison mondiale",
    emailUs: "Nous écrire",
    locationTitle: "Retrouvez-nous à Zhaoqing.",
    mapsButton: "Voir sur Google Maps",
  },
  de: {
    products: "Produkte",
    engineering: "Technik",
    quality: "Qualität",
    location: "Standort",
    quote: "Angebot anfragen",
    eyebrow: "Hydraulische Bodentürschließer",
    hero: "Unsichtbare Kontrolle.<br>Außergewöhnliche Bewegung.",
    sub: "Präzise Türsteuerung für Glas-, Holz- und Metalltüren – leise, sicher und zuverlässig.",
    explore: "Produktreihe ansehen",
    compare: "Modelle vergleichen",
    maxWeight: "Maximales Türgewicht",
    openingAngle: "Öffnungswinkel",
    productRange: "Produktmodelle",
    temperature: "Betriebsbereich",
    precision: "Kraft, präzise gesteuert.",
    precisionSub:
      "Zweistufige Geschwindigkeitsregelung, stabil bei jeder Öffnung und für stark frequentierte Eingänge gebaut.",
    range: "Vier Stärken.<br>Ein Standard.",
    rangeSub: "Auswahl nach Türgewicht und Türbreite.",
    rangeNote:
      "Benötigen Sie Hilfe? Senden Sie uns Gewicht, Breite und Material der Tür.",
    qualityTitle: "Technik, die man spürt.<br>Beschläge, die man nicht sieht.",
    compareTitle: "Für Ihre spezifizierte Tür gebaut.",
    compareSub:
      "Beginnen Sie mit Gewicht und Breite; wir bestätigen Spindel, Feststellwinkel und Oberfläche.",
    contactTitle: "Erzählen Sie uns von Ihrer Tür.",
    contactSub: "OEM / ODM · Muster verfügbar · Weltweite Lieferung",
    emailUs: "E-Mail senden",
    locationTitle: "Sie finden uns in Zhaoqing.",
    mapsButton: "Auf Google Maps ansehen",
  },
  pt: {
    products: "Produtos",
    engineering: "Engenharia",
    quality: "Qualidade",
    location: "Localização",
    quote: "Pedir cotação",
    eyebrow: "Molas de piso hidráulicas",
    hero: "Controle invisível.<br>Movimento notável.",
    sub: "Controle preciso para portas de vidro, madeira e metal, criado para um movimento silencioso e seguro.",
    explore: "Explorar a linha",
    compare: "Comparar modelos",
    maxWeight: "Peso máximo da porta",
    openingAngle: "Ângulo de abertura",
    productRange: "Modelos de produto",
    temperature: "Faixa de operação",
    precision: "Potência com precisão.",
    precisionSub:
      "Controle de velocidade em dois estágios, estável em cada abertura e pronto para alto tráfego.",
    range: "Quatro capacidades.<br>Um padrão.",
    rangeSub: "Escolha pelo peso e pela largura da porta.",
    rangeNote:
      "Precisa de ajuda? Envie o peso, a largura e o material da porta.",
    qualityTitle: "Engenharia que você sente.<br>Ferragens que não vê.",
    compareTitle: "Feito para a porta que você especifica.",
    compareSub:
      "Comece pelo peso e largura; ajudaremos a confirmar eixo, retenção e acabamento.",
    contactTitle: "Conte-nos sobre sua porta.",
    contactSub: "OEM / ODM · Amostras disponíveis · Fornecimento global",
    emailUs: "Enviar e-mail",
    locationTitle: "Encontre-nos em Zhaoqing.",
    mapsButton: "Ver no Google Maps",
  },
  ru: {
    products: "Продукция",
    engineering: "Технологии",
    quality: "Качество",
    location: "Адрес",
    quote: "Получить предложение",
    eyebrow: "Гидравлические напольные доводчики",
    hero: "Невидимый контроль.<br>Безупречное движение.",
    sub: "Точное управление стеклянными, деревянными и металлическими дверями для тихого и уверенного движения.",
    explore: "Смотреть линейку",
    compare: "Сравнить модели",
    maxWeight: "Максимальный вес двери",
    openingAngle: "Угол открытия",
    productRange: "Модели продукции",
    temperature: "Рабочий диапазон",
    precision: "Сила под точным контролем.",
    precisionSub:
      "Двухступенчатая регулировка скорости, стабильная работа и готовность к высокой нагрузке.",
    range: "Четыре уровня.<br>Один стандарт.",
    rangeSub: "Выбирайте по весу и ширине двери.",
    rangeNote: "Нужна помощь? Пришлите вес, ширину и материал двери.",
    qualityTitle:
      "Инженерия, которую чувствуешь.<br>Фурнитура, которой не видно.",
    compareTitle: "Создано для вашей двери.",
    compareSub:
      "Начните с веса и ширины; мы уточним шпиндель, угол фиксации и отделку.",
    contactTitle: "Расскажите нам о вашей двери.",
    contactSub: "OEM / ODM · Доступны образцы · Поставки по всему миру",
    emailUs: "Написать нам",
    locationTitle: "Мы находимся в Чжаоцине.",
    mapsButton: "Открыть в Google Maps",
  },
  it: {
    products: "Prodotti",
    engineering: "Ingegneria",
    quality: "Qualità",
    location: "Sede",
    quote: "Richiedi un preventivo",
    eyebrow: "Chiudiporta idraulici a pavimento",
    hero: "Controllo invisibile.<br>Movimento straordinario.",
    sub: "Controllo preciso per porte in vetro, legno e metallo, progettato per un movimento silenzioso e sicuro.",
    explore: "Scopri la gamma",
    compare: "Confronta i modelli",
    maxWeight: "Peso massimo porta",
    openingAngle: "Angolo di apertura",
    productRange: "Modelli disponibili",
    temperature: "Intervallo operativo",
    precision: "Potenza resa precisa.",
    precisionSub:
      "Controllo della velocità a due stadi, stabile a ogni apertura e adatto ad alto traffico.",
    range: "Quattro capacità.<br>Un unico standard.",
    rangeSub: "Scegli in base a peso e larghezza della porta.",
    rangeNote: "Serve aiuto? Inviaci peso, larghezza e materiale della porta.",
    qualityTitle: "Ingegneria che senti.<br>Ferramenta che non vedi.",
    compareTitle: "Creato per la porta che specifichi.",
    compareSub:
      "Parti da peso e larghezza; confermeremo perno, fermo e finitura.",
    contactTitle: "Parlaci della tua porta.",
    contactSub: "OEM / ODM · Campioni disponibili · Fornitura globale",
    emailUs: "Scrivici",
    locationTitle: "Siamo a Zhaoqing.",
    mapsButton: "Vedi su Google Maps",
  },
  nl: {
    products: "Producten",
    engineering: "Techniek",
    quality: "Kwaliteit",
    location: "Locatie",
    quote: "Offerte aanvragen",
    eyebrow: "Hydraulische vloerveren",
    hero: "Onzichtbare controle.<br>Opvallende beweging.",
    sub: "Nauwkeurige deurregeling voor glas, hout en metaal, ontworpen voor stille en zekere beweging.",
    explore: "Bekijk het assortiment",
    compare: "Modellen vergelijken",
    maxWeight: "Maximaal deurgewicht",
    openingAngle: "Openingshoek",
    productRange: "Productmodellen",
    temperature: "Werkbereik",
    precision: "Kracht, nauwkeurig geregeld.",
    precisionSub:
      "Tweetraps snelheidsregeling, stabiel bij elke opening en gebouwd voor intensief gebruik.",
    range: "Vier sterktes.<br>Eén standaard.",
    rangeSub: "Kies op deurgewicht en deurbreedte.",
    rangeNote:
      "Hulp nodig? Stuur ons gewicht, breedte en materiaal van de deur.",
    qualityTitle: "Techniek die je voelt.<br>Beslag dat je niet ziet.",
    compareTitle: "Gebouwd voor uw gespecificeerde deur.",
    compareSub:
      "Begin met gewicht en breedte; wij bevestigen spil, vastzethoek en afwerking.",
    contactTitle: "Vertel ons over uw deur.",
    contactSub: "OEM / ODM · Monsters beschikbaar · Wereldwijde levering",
    emailUs: "E-mail ons",
    locationTitle: "Vind ons in Zhaoqing.",
    mapsButton: "Bekijk op Google Maps",
  },
  tr: {
    products: "Ürünler",
    engineering: "Mühendislik",
    quality: "Kalite",
    location: "Konum",
    quote: "Teklif alın",
    eyebrow: "Hidrolik zemin yayları",
    hero: "Görünmez kontrol.<br>Olağanüstü hareket.",
    sub: "Cam, ahşap ve metal kapılar için sessiz ve güvenli hareket sağlayan hassas kontrol.",
    explore: "Seriyi keşfedin",
    compare: "Modelleri karşılaştırın",
    maxWeight: "Maksimum kapı ağırlığı",
    openingAngle: "Açılma açısı",
    productRange: "Ürün modelleri",
    temperature: "Çalışma aralığı",
    precision: "Güç, hassas kontrol.",
    precisionSub:
      "İki kademeli hız kontrolü, her açılışta kararlılık ve yoğun kullanıma uygun yapı.",
    range: "Dört güç.<br>Tek standart.",
    rangeSub: "Kapı ağırlığı ve genişliğine göre seçin.",
    rangeNote:
      "Yardıma mı ihtiyacınız var? Kapı ağırlığını, genişliğini ve malzemesini gönderin.",
    qualityTitle: "Hissettiğiniz mühendislik.<br>Görmediğiniz donanım.",
    compareTitle: "Belirttiğiniz kapı için üretildi.",
    compareSub:
      "Ağırlık ve genişlikle başlayın; mil, sabitleme açısı ve yüzeyi teyit edelim.",
    contactTitle: "Kapınızı bize anlatın.",
    contactSub: "OEM / ODM · Numune mevcut · Küresel tedarik",
    emailUs: "E-posta gönderin",
    locationTitle: "Bizi Zhaoqing’de bulun.",
    mapsButton: "Google Maps'te görüntüle",
  },
  ko: {
    products: "제품",
    engineering: "엔지니어링",
    quality: "품질",
    location: "위치",
    quote: "견적 요청",
    eyebrow: "유압 플로어 스프링",
    hero: "보이지 않는 제어.<br>탁월한 움직임.",
    sub: "유리·목재·금속 도어를 위한 정밀 제어로 조용하고 안정적인 움직임을 제공합니다.",
    explore: "제품군 보기",
    compare: "모델 비교",
    maxWeight: "최대 도어 중량",
    openingAngle: "개방 각도",
    productRange: "제품 모델",
    temperature: "작동 범위",
    precision: "정밀하게 제어되는 힘.",
    precisionSub:
      "2단 속도 제어와 안정적인 작동으로 사용량이 많은 출입구에 적합합니다.",
    range: "네 가지 강도.<br>하나의 기준.",
    rangeSub: "도어 중량과 폭에 따라 선택하세요.",
    rangeNote: "선정 도움이 필요하신가요? 도어 중량, 폭, 재질을 보내주세요.",
    qualityTitle: "느껴지는 엔지니어링.<br>보이지 않는 하드웨어.",
    compareTitle: "지정한 도어에 맞춘 설계.",
    compareSub:
      "중량과 폭을 알려주시면 스핀들, 고정 각도, 마감을 확인해 드립니다.",
    contactTitle: "도어 요구사항을 알려주세요.",
    contactSub: "OEM / ODM · 샘플 제공 · 글로벌 공급",
    emailUs: "이메일 보내기",
    locationTitle: "자오칭에서 만나보세요.",
    mapsButton: "Google 지도에서 보기",
  },
  ja: {
    products: "製品",
    engineering: "技術",
    quality: "品質",
    location: "所在地",
    quote: "見積もり依頼",
    eyebrow: "油圧式フロアヒンジ",
    hero: "見えない制御。<br>際立つ動き。",
    sub: "ガラス・木・金属ドアのための精密制御。静かで確かな動きを実現します。",
    explore: "製品を見る",
    compare: "モデルを比較",
    maxWeight: "最大ドア重量",
    openingAngle: "開き角度",
    productRange: "製品モデル",
    temperature: "使用温度範囲",
    precision: "力を、精密に。",
    precisionSub:
      "2段階速度調整と安定した動作で、人通りの多い入口に対応します。",
    range: "4つの強度。<br>ひとつの基準。",
    rangeSub: "ドア重量と幅から選択してください。",
    rangeNote: "選定にお困りですか？重量、幅、材質をお知らせください。",
    qualityTitle: "感じるエンジニアリング。<br>見えないハードウェア。",
    compareTitle: "指定されたドアのための設計。",
    compareSub: "重量と幅を基に、軸、保持角度、仕上げを確認します。",
    contactTitle: "ドアの仕様をお聞かせください。",
    contactSub: "OEM / ODM · サンプル対応 · グローバル供給",
    emailUs: "メールする",
    locationTitle: "肇慶にあります。",
    mapsButton: "Google マップで見る",
  },
  hi: {
    products: "उत्पाद",
    engineering: "इंजीनियरिंग",
    quality: "गुणवत्ता",
    location: "स्थान",
    quote: "कोटेशन लें",
    eyebrow: "हाइड्रोलिक फ्लोर स्प्रिंग",
    hero: "अदृश्य नियंत्रण।<br>असाधारण गति।",
    sub: "काँच, लकड़ी और धातु के दरवाज़ों के लिए शांत और भरोसेमंद सटीक नियंत्रण।",
    explore: "उत्पाद देखें",
    compare: "मॉडल तुलना",
    maxWeight: "अधिकतम दरवाज़ा भार",
    openingAngle: "खुलने का कोण",
    productRange: "उत्पाद मॉडल",
    temperature: "कार्य सीमा",
    precision: "शक्ति, सटीक नियंत्रण में।",
    precisionSub:
      "दो-चरण गति नियंत्रण, हर बार स्थिर संचालन और व्यस्त प्रवेशों के लिए तैयार।",
    range: "चार क्षमताएँ।<br>एक मानक।",
    rangeSub: "दरवाज़े के भार और चौड़ाई से चुनें।",
    rangeNote: "चयन में मदद चाहिए? भार, चौड़ाई और सामग्री भेजें।",
    qualityTitle: "इंजीनियरिंग जिसे महसूस करें।<br>हार्डवेयर जो दिखाई न दे।",
    compareTitle: "आपके निर्दिष्ट दरवाज़े के लिए बनाया गया।",
    compareSub:
      "भार और चौड़ाई से शुरू करें; हम स्पिंडल, होल्ड एंगल और फिनिश की पुष्टि करेंगे।",
    contactTitle: "अपने दरवाज़े के बारे में बताएं।",
    contactSub: "OEM / ODM · नमूने उपलब्ध · वैश्विक आपूर्ति",
    emailUs: "ईमेल करें",
    locationTitle: "हमें झाओकिंग में खोजें।",
    mapsButton: "Google Maps पर देखें",
  },
  th: {
    products: "สินค้า",
    engineering: "วิศวกรรม",
    quality: "คุณภาพ",
    location: "ที่ตั้ง",
    quote: "ขอใบเสนอราคา",
    eyebrow: "โช้คประตูฝังพื้นไฮดรอลิก",
    hero: "การควบคุมที่แนบเนียน<br>การเคลื่อนไหวที่โดดเด่น",
    sub: "ควบคุมประตูกระจก ไม้ และโลหะอย่างแม่นยำ เพื่อการเคลื่อนไหวที่เงียบและมั่นใจ",
    explore: "ดูผลิตภัณฑ์",
    compare: "เปรียบเทียบรุ่น",
    maxWeight: "น้ำหนักประตูสูงสุด",
    openingAngle: "มุมเปิด",
    productRange: "รุ่นผลิตภัณฑ์",
    temperature: "ช่วงการทำงาน",
    precision: "พลังที่ควบคุมอย่างแม่นยำ",
    precisionSub:
      "ปรับความเร็วสองระดับ ทำงานเสถียร และเหมาะกับพื้นที่ใช้งานสูง",
    range: "สี่ระดับกำลัง<br>หนึ่งมาตรฐาน",
    rangeSub: "เลือกตามน้ำหนักและความกว้างของประตู",
    rangeNote: "ต้องการความช่วยเหลือ? ส่งน้ำหนัก ความกว้าง และวัสดุประตูให้เรา",
    qualityTitle: "วิศวกรรมที่สัมผัสได้<br>ฮาร์ดแวร์ที่มองไม่เห็น",
    compareTitle: "สร้างมาเพื่อประตูที่คุณกำหนด",
    compareSub:
      "เริ่มจากน้ำหนักและความกว้าง แล้วเราจะช่วยยืนยันแกน มุมค้าง และผิวงาน",
    contactTitle: "บอกเราเกี่ยวกับประตูของคุณ",
    contactSub: "OEM / ODM · มีตัวอย่าง · จัดส่งทั่วโลก",
    emailUs: "ส่งอีเมล",
    locationTitle: "พบเราได้ที่จ้าวชิ่ง",
    mapsButton: "ดูใน Google Maps",
  },
  vi: {
    products: "Sản phẩm",
    engineering: "Kỹ thuật",
    quality: "Chất lượng",
    location: "Địa chỉ",
    quote: "Nhận báo giá",
    eyebrow: "Bản lề sàn thủy lực",
    hero: "Điều khiển vô hình.<br>Chuyển động ấn tượng.",
    sub: "Điều khiển chính xác cho cửa kính, gỗ và kim loại, vận hành êm và ổn định.",
    explore: "Khám phá sản phẩm",
    compare: "So sánh mẫu",
    maxWeight: "Trọng lượng cửa tối đa",
    openingAngle: "Góc mở",
    productRange: "Mẫu sản phẩm",
    temperature: "Phạm vi hoạt động",
    precision: "Sức mạnh được kiểm soát chính xác.",
    precisionSub:
      "Điều chỉnh tốc độ hai giai đoạn, ổn định và phù hợp lối vào có lưu lượng cao.",
    range: "Bốn mức tải.<br>Một tiêu chuẩn.",
    rangeSub: "Chọn theo trọng lượng và chiều rộng cửa.",
    rangeNote: "Cần hỗ trợ? Hãy gửi trọng lượng, chiều rộng và vật liệu cửa.",
    qualityTitle: "Kỹ thuật bạn cảm nhận.<br>Phụ kiện bạn không nhìn thấy.",
    compareTitle: "Thiết kế cho cánh cửa bạn yêu cầu.",
    compareSub:
      "Bắt đầu với trọng lượng và chiều rộng; chúng tôi sẽ xác nhận trục, góc giữ và bề mặt.",
    contactTitle: "Hãy cho chúng tôi biết về cửa của bạn.",
    contactSub: "OEM / ODM · Có mẫu · Cung ứng toàn cầu",
    emailUs: "Gửi email",
    locationTitle: "Tìm chúng tôi tại Triệu Khánh.",
    mapsButton: "Xem trên Google Maps",
  },
  id: {
    products: "Produk",
    engineering: "Rekayasa",
    quality: "Kualitas",
    location: "Lokasi",
    quote: "Minta penawaran",
    eyebrow: "Floor spring hidraulik",
    hero: "Kontrol tak terlihat.<br>Gerakan luar biasa.",
    sub: "Kontrol presisi untuk pintu kaca, kayu, dan logam dengan gerakan yang tenang dan mantap.",
    explore: "Jelajahi produk",
    compare: "Bandingkan model",
    maxWeight: "Berat pintu maksimum",
    openingAngle: "Sudut bukaan",
    productRange: "Model produk",
    temperature: "Rentang operasi",
    precision: "Tenaga yang presisi.",
    precisionSub:
      "Kontrol kecepatan dua tahap, stabil setiap kali dibuka, dan siap untuk lalu lintas tinggi.",
    range: "Empat kekuatan.<br>Satu standar.",
    rangeSub: "Pilih berdasarkan berat dan lebar pintu.",
    rangeNote:
      "Butuh bantuan? Kirim berat, lebar, dan bahan pintu kepada kami.",
    qualityTitle: "Rekayasa yang terasa.<br>Perangkat yang tidak terlihat.",
    compareTitle: "Dibuat untuk pintu yang Anda tentukan.",
    compareSub:
      "Mulai dari berat dan lebar; kami bantu memastikan spindle, sudut tahan, dan hasil akhir.",
    contactTitle: "Ceritakan pintu Anda.",
    contactSub: "OEM / ODM · Sampel tersedia · Pasokan global",
    emailUs: "Kirim email",
    locationTitle: "Temui kami di Zhaoqing.",
    mapsButton: "Lihat di Google Maps",
  },
  ms: {
    products: "Produk",
    engineering: "Kejuruteraan",
    quality: "Kualiti",
    location: "Lokasi",
    quote: "Minta sebut harga",
    eyebrow: "Floor spring hidraulik",
    hero: "Kawalan tersembunyi.<br>Pergerakan luar biasa.",
    sub: "Kawalan tepat untuk pintu kaca, kayu dan logam dengan pergerakan senyap dan yakin.",
    explore: "Terokai produk",
    compare: "Bandingkan model",
    maxWeight: "Berat maksimum pintu",
    openingAngle: "Sudut bukaan",
    productRange: "Model produk",
    temperature: "Julat operasi",
    precision: "Kuasa yang tepat.",
    precisionSub:
      "Kawalan kelajuan dua peringkat, stabil setiap bukaan dan sesuai untuk trafik tinggi.",
    range: "Empat kekuatan.<br>Satu standard.",
    rangeSub: "Pilih mengikut berat dan lebar pintu.",
    rangeNote:
      "Perlukan bantuan? Hantar berat, lebar dan bahan pintu kepada kami.",
    qualityTitle:
      "Kejuruteraan yang dirasai.<br>Perkakasan yang tidak kelihatan.",
    compareTitle: "Dibina untuk pintu yang anda tentukan.",
    compareSub:
      "Mulakan dengan berat dan lebar; kami sahkan spindle, sudut tahan dan kemasan.",
    contactTitle: "Ceritakan tentang pintu anda.",
    contactSub: "OEM / ODM · Sampel tersedia · Bekalan global",
    emailUs: "E-mel kami",
    locationTitle: "Temui kami di Zhaoqing.",
    mapsButton: "Lihat di Google Maps",
  },
  pl: {
    products: "Produkty",
    engineering: "Technologia",
    quality: "Jakość",
    location: "Lokalizacja",
    quote: "Poproś o wycenę",
    eyebrow: "Hydrauliczne zawiasy podłogowe",
    hero: "Niewidoczna kontrola.<br>Wyjątkowy ruch.",
    sub: "Precyzyjne sterowanie drzwiami szklanymi, drewnianymi i metalowymi — cicho i pewnie.",
    explore: "Poznaj ofertę",
    compare: "Porównaj modele",
    maxWeight: "Maksymalna masa drzwi",
    openingAngle: "Kąt otwarcia",
    productRange: "Modele produktów",
    temperature: "Zakres pracy",
    precision: "Moc pod precyzyjną kontrolą.",
    precisionSub:
      "Dwustopniowa regulacja prędkości, stabilna praca i gotowość do intensywnego użytkowania.",
    range: "Cztery moce.<br>Jeden standard.",
    rangeSub: "Wybierz według masy i szerokości drzwi.",
    rangeNote: "Potrzebujesz pomocy? Podaj masę, szerokość i materiał drzwi.",
    qualityTitle: "Inżynieria, którą czujesz.<br>Okucia, których nie widać.",
    compareTitle: "Stworzone dla wskazanych drzwi.",
    compareSub:
      "Zacznij od masy i szerokości; potwierdzimy trzpień, kąt blokady i wykończenie.",
    contactTitle: "Opowiedz nam o swoich drzwiach.",
    contactSub: "OEM / ODM · Dostępne próbki · Dostawy globalne",
    emailUs: "Napisz do nas",
    locationTitle: "Znajdź nas w Zhaoqing.",
    mapsButton: "Zobacz w Google Maps",
  },
  uk: {
    products: "Продукція",
    engineering: "Інженерія",
    quality: "Якість",
    location: "Адреса",
    quote: "Отримати пропозицію",
    eyebrow: "Гідравлічні підлогові доводчики",
    hero: "Невидимий контроль.<br>Досконалий рух.",
    sub: "Точне керування скляними, дерев’яними та металевими дверима для тихого й упевненого руху.",
    explore: "Переглянути лінійку",
    compare: "Порівняти моделі",
    maxWeight: "Максимальна вага дверей",
    openingAngle: "Кут відкривання",
    productRange: "Моделі продукції",
    temperature: "Робочий діапазон",
    precision: "Сила під точним контролем.",
    precisionSub:
      "Двоступеневе регулювання швидкості, стабільна робота та готовність до високого навантаження.",
    range: "Чотири рівні.<br>Один стандарт.",
    rangeSub: "Обирайте за вагою та шириною дверей.",
    rangeNote: "Потрібна допомога? Надішліть вагу, ширину та матеріал дверей.",
    qualityTitle: "Інженерія, яку відчуваєш.<br>Фурнітура, якої не видно.",
    compareTitle: "Створено для ваших дверей.",
    compareSub:
      "Почніть із ваги та ширини; ми уточнимо шпиндель, кут фіксації й оздоблення.",
    contactTitle: "Розкажіть нам про ваші двері.",
    contactSub: "OEM / ODM · Доступні зразки · Постачання по світу",
    emailUs: "Написати нам",
    locationTitle: "Ми знаходимося в Чжаоціні.",
    mapsButton: "Відкрити в Google Maps",
  },
  fa: {
    products: "محصولات",
    engineering: "مهندسی",
    quality: "کیفیت",
    location: "موقعیت",
    quote: "دریافت قیمت",
    eyebrow: "لولای زمینی هیدرولیک",
    hero: "کنترل نامرئی.<br>حرکتی چشمگیر.",
    sub: "کنترل دقیق برای درهای شیشه‌ای، چوبی و فلزی با حرکت آرام و مطمئن.",
    explore: "مشاهده محصولات",
    compare: "مقایسه مدل‌ها",
    maxWeight: "حداکثر وزن در",
    openingAngle: "زاویه بازشو",
    productRange: "مدل‌های محصول",
    temperature: "محدوده کاری",
    precision: "قدرت با کنترل دقیق.",
    precisionSub:
      "کنترل سرعت دو مرحله‌ای، عملکرد پایدار و مناسب ورودی‌های پرتردد.",
    range: "چهار توان.<br>یک استاندارد.",
    rangeSub: "بر اساس وزن و عرض در انتخاب کنید.",
    rangeNote: "به راهنمایی نیاز دارید؟ وزن، عرض و جنس در را بفرستید.",
    qualityTitle: "مهندسی که حس می‌کنید.<br>یراق‌آلاتی که نمی‌بینید.",
    compareTitle: "ساخته‌شده برای در موردنظر شما.",
    compareSub:
      "از وزن و عرض شروع کنید؛ محور، زاویه نگهدارنده و پوشش را تأیید می‌کنیم.",
    contactTitle: "درباره در خود بگویید.",
    contactSub: "OEM / ODM · نمونه موجود · تأمین جهانی",
    emailUs: "ایمیل بزنید",
    locationTitle: "ما را در ژائوکینگ بیابید.",
    mapsButton: "نمایش در Google Maps",
  },
  he: {
    products: "מוצרים",
    engineering: "הנדסה",
    quality: "איכות",
    location: "מיקום",
    quote: "קבלת הצעת מחיר",
    eyebrow: "צירי רצפה הידראוליים",
    hero: "שליטה בלתי נראית.<br>תנועה יוצאת דופן.",
    sub: "שליטה מדויקת לדלתות זכוכית, עץ ומתכת, לתנועה שקטה ובטוחה.",
    explore: "הצגת המוצרים",
    compare: "השוואת דגמים",
    maxWeight: "משקל דלת מרבי",
    openingAngle: "זווית פתיחה",
    productRange: "דגמי מוצר",
    temperature: "טווח עבודה",
    precision: "עוצמה בשליטה מדויקת.",
    precisionSub: "בקרת מהירות דו-שלבית, פעולה יציבה והתאמה לכניסות עמוסות.",
    range: "ארבע עוצמות.<br>תקן אחד.",
    rangeSub: "בחירה לפי משקל ורוחב הדלת.",
    rangeNote: "צריכים עזרה? שלחו את משקל, רוחב וחומר הדלת.",
    qualityTitle: "הנדסה שמרגישים.<br>פרזול שלא רואים.",
    compareTitle: "נבנה לדלת שתגדירו.",
    compareSub: "התחילו במשקל וברוחב; נאשר ציר, זווית עצירה וגימור.",
    contactTitle: "ספרו לנו על הדלת שלכם.",
    contactSub: "OEM / ODM · דוגמאות זמינות · אספקה עולמית",
    emailUs: "שלחו דוא״ל",
    locationTitle: "מצאו אותנו בג׳אוצ׳ינג.",
    mapsButton: "הצגה ב-Google Maps",
  },
  bn: {
    products: "পণ্য",
    engineering: "প্রকৌশল",
    quality: "গুণমান",
    location: "অবস্থান",
    quote: "মূল্য নিন",
    eyebrow: "হাইড্রোলিক ফ্লোর স্প্রিং",
    hero: "অদৃশ্য নিয়ন্ত্রণ।<br>অসাধারণ গতি।",
    sub: "কাচ, কাঠ ও ধাতব দরজার জন্য নীরব ও নির্ভরযোগ্য সুনির্দিষ্ট নিয়ন্ত্রণ।",
    explore: "পণ্য দেখুন",
    compare: "মডেল তুলনা",
    maxWeight: "সর্বোচ্চ দরজার ওজন",
    openingAngle: "খোলার কোণ",
    productRange: "পণ্যের মডেল",
    temperature: "কাজের সীমা",
    precision: "শক্তি, সুনির্দিষ্ট নিয়ন্ত্রণে।",
    precisionSub:
      "দুই ধাপের গতি নিয়ন্ত্রণ, স্থিতিশীল কার্যক্রম এবং ব্যস্ত প্রবেশপথের উপযোগী।",
    range: "চারটি ক্ষমতা।<br>একটি মান।",
    rangeSub: "দরজার ওজন ও প্রস্থ অনুযায়ী বেছে নিন।",
    rangeNote: "সহায়তা দরকার? দরজার ওজন, প্রস্থ ও উপাদান পাঠান।",
    qualityTitle: "যে প্রকৌশল অনুভব করেন।<br>যে হার্ডওয়্যার দেখা যায় না।",
    compareTitle: "আপনার নির্ধারিত দরজার জন্য তৈরি।",
    compareSub:
      "ওজন ও প্রস্থ দিয়ে শুরু করুন; আমরা স্পিন্ডল, হোল্ড কোণ ও ফিনিশ নিশ্চিত করব।",
    contactTitle: "আপনার দরজা সম্পর্কে বলুন।",
    contactSub: "OEM / ODM · নমুনা পাওয়া যায় · বিশ্বব্যাপী সরবরাহ",
    emailUs: "ইমেইল করুন",
    locationTitle: "ঝাওছিং-এ আমাদের খুঁজুন।",
    mapsButton: "Google Maps-এ দেখুন",
  },
  ur: {
    products: "مصنوعات",
    engineering: "انجینئرنگ",
    quality: "معیار",
    location: "مقام",
    quote: "قیمت حاصل کریں",
    eyebrow: "ہائیڈرولک فلور اسپرنگ",
    hero: "پوشیدہ کنٹرول۔<br>شاندار حرکت۔",
    sub: "شیشے، لکڑی اور دھات کے دروازوں کے لیے خاموش اور پراعتماد درست کنٹرول۔",
    explore: "مصنوعات دیکھیں",
    compare: "ماڈل کا موازنہ",
    maxWeight: "زیادہ سے زیادہ دروازہ وزن",
    openingAngle: "کھلنے کا زاویہ",
    productRange: "پروڈکٹ ماڈل",
    temperature: "آپریٹنگ رینج",
    precision: "طاقت، درست کنٹرول میں۔",
    precisionSub:
      "دو مرحلے کی رفتار، مستحکم کارکردگی اور مصروف داخلی راستوں کے لیے موزوں۔",
    range: "چار طاقتیں۔<br>ایک معیار۔",
    rangeSub: "دروازے کے وزن اور چوڑائی کے مطابق منتخب کریں۔",
    rangeNote: "مدد چاہیے؟ دروازے کا وزن، چوڑائی اور مواد بھیجیں۔",
    qualityTitle: "انجینئرنگ جو محسوس ہو۔<br>ہارڈویئر جو نظر نہ آئے۔",
    compareTitle: "آپ کے منتخب دروازے کے لیے بنایا گیا۔",
    compareSub:
      "وزن اور چوڑائی سے شروع کریں؛ ہم اسپنڈل، ہولڈ زاویہ اور فنش کی تصدیق کریں گے۔",
    contactTitle: "اپنے دروازے کے بارے میں بتائیں۔",
    contactSub: "OEM / ODM · نمونے دستیاب · عالمی فراہمی",
    emailUs: "ای میل کریں",
    locationTitle: "ہمیں ژاؤچنگ میں تلاش کریں۔",
    mapsButton: "Google Maps پر دیکھیں",
  },
  tl: {
    products: "Mga Produkto",
    engineering: "Inhinyeriya",
    quality: "Kalidad",
    location: "Lokasyon",
    quote: "Humingi ng presyo",
    eyebrow: "Hydraulic floor spring",
    hero: "Nakatagong kontrol.<br>Kahanga-hangang galaw.",
    sub: "Eksaktong kontrol para sa salamin, kahoy at metal na pinto, para sa tahimik at tiyak na galaw.",
    explore: "Tingnan ang mga produkto",
    compare: "Ihambing ang mga modelo",
    maxWeight: "Pinakamataas na bigat ng pinto",
    openingAngle: "Anggulo ng pagbukas",
    productRange: "Mga modelo ng produkto",
    temperature: "Saklaw ng operasyon",
    precision: "Lakas na eksaktong kontrolado.",
    precisionSub:
      "Dalawang antas ng bilis, matatag na operasyon at handa para sa mataong pasukan.",
    range: "Apat na lakas.<br>Isang pamantayan.",
    rangeSub: "Pumili ayon sa bigat at lapad ng pinto.",
    rangeNote:
      "Kailangan ng tulong? Ipadala ang bigat, lapad at materyal ng pinto.",
    qualityTitle: "Inhinyeriyang nararamdaman.<br>Hardware na hindi nakikita.",
    compareTitle: "Ginawa para sa pintong tinukoy mo.",
    compareSub:
      "Magsimula sa bigat at lapad; tutulungan naming kumpirmahin ang spindle, hold angle at finish.",
    contactTitle: "Ikuwento ang tungkol sa iyong pinto.",
    contactSub: "OEM / ODM · May sample · Pandaigdigang supply",
    emailUs: "Mag-email sa amin",
    locationTitle: "Hanapin kami sa Zhaoqing.",
    mapsButton: "Tingnan sa Google Maps",
  },
  sw: {
    products: "Bidhaa",
    engineering: "Uhandisi",
    quality: "Ubora",
    location: "Mahali",
    quote: "Pata bei",
    eyebrow: "Floor spring za haidroliki",
    hero: "Udhibiti usioonekana.<br>Mwendo wa kipekee.",
    sub: "Udhibiti sahihi kwa milango ya kioo, mbao na chuma, kwa mwendo tulivu na wa kuaminika.",
    explore: "Tazama bidhaa",
    compare: "Linganisha modeli",
    maxWeight: "Uzito wa juu wa mlango",
    openingAngle: "Pembe ya kufungua",
    productRange: "Modeli za bidhaa",
    temperature: "Kiwango cha uendeshaji",
    precision: "Nguvu yenye udhibiti sahihi.",
    precisionSub:
      "Udhibiti wa kasi wa hatua mbili, utendaji thabiti na tayari kwa maeneo yenye matumizi mengi.",
    range: "Nguvu nne.<br>Kiwango kimoja.",
    rangeSub: "Chagua kwa uzito na upana wa mlango.",
    rangeNote: "Unahitaji msaada? Tuma uzito, upana na nyenzo ya mlango.",
    qualityTitle: "Uhandisi unaouhisi.<br>Vifaa usivyoviona.",
    compareTitle: "Imetengenezwa kwa mlango unaobainisha.",
    compareSub:
      "Anza na uzito na upana; tutathibitisha spindle, pembe ya kushikilia na umaliziaji.",
    contactTitle: "Tuambie kuhusu mlango wako.",
    contactSub: "OEM / ODM · Sampuli zinapatikana · Usambazaji duniani",
    emailUs: "Tutumie barua pepe",
    locationTitle: "Tupate Zhaoqing.",
    mapsButton: "Tazama kwenye Google Maps",
  },
};

const products = Array.isArray(window.APEX_PRODUCTS)
  ? window.APEX_PRODUCTS
  : [];
let selectedProductIndex = Math.max(products.length - 1, 0);
let currentCopy = STRINGS.en;

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem("apex-lang");
    return STRINGS[saved] ? saved : "en";
  } catch {
    return "en";
  }
}

function saveLanguage(code) {
  try {
    localStorage.setItem("apex-lang", code);
  } catch {
    // The site remains usable when storage is blocked.
  }
}

function productImagePath(product) {
  return `assets/images/${product.image}`;
}

function selectProduct(index, button) {
  const product = products[index];
  const stageImage = document.querySelector("#stage-image");
  if (!product || !stageImage) return;

  selectedProductIndex = index;
  document.querySelectorAll("#model-tabs button").forEach((tab) => {
    const isActive = tab === button;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });

  const label = document.querySelector("#stage-label");
  const model = document.querySelector("#stage-model");
  const spec = document.querySelector("#stage-spec");
  if (label) label.textContent = product.label;
  if (model) model.textContent = product.model;
  if (spec) spec.textContent = `${product.weight} · ${product.width}`;

  stageImage.classList.add("is-switching");
  stageImage.src = productImagePath(product);
  stageImage.alt = `${product.model} hydraulic floor spring`;
  const finishSwitch = () => stageImage.classList.remove("is-switching");
  if (stageImage.complete) finishSwitch();
  else stageImage.addEventListener("load", finishSwitch, { once: true });
}

function renderProducts(copy) {
  const grid = document.querySelector("#product-grid");
  const comparison = document.querySelector("#comparison");
  const tabs = document.querySelector("#model-tabs");
  if (!grid || !comparison || !tabs || products.length === 0) return;

  grid.replaceChildren();
  comparison.replaceChildren();
  tabs.replaceChildren();

  products.forEach((product, index) => {
    const card = document.createElement("article");
    card.className = "card reveal visible";
    card.innerHTML = `
      <div class="top"><span>${product.label}</span><small>0${index + 1}</small></div>
      <img src="${productImagePath(product)}" alt="${product.model} hydraulic floor spring" width="1000" height="1000" loading="lazy" decoding="async">
      <h3>${product.model}</h3>
      <div class="spec"><span>${copy.maxWeight}</span><b>${product.weight}</b></div>
      <div class="spec"><span>${copy.doorWidth || STRINGS.en.doorWidth}</span><b>${product.width}</b></div>
      <a class="more" href="products/${product.slug}.html"><span>${copy.viewDetails || STRINGS.en.viewDetails}</span><span aria-hidden="true">↗</span></a>`;
    grid.appendChild(card);

    const tab = document.createElement("button");
    tab.type = "button";
    tab.textContent = product.model;
    tab.setAttribute("aria-label", `Show ${product.model}`);
    tab.setAttribute("aria-pressed", "false");
    tab.addEventListener("click", () => selectProduct(index, tab));
    tabs.appendChild(tab);
  });

  const table = document.createElement("table");
  table.setAttribute(
    "aria-label",
    copy.comparisonAria || STRINGS.en.comparisonAria,
  );
  table.innerHTML = `
    <thead><tr><th scope="col">${copy.model || STRINGS.en.model}</th><th scope="col">${copy.maxWeight}</th><th scope="col">${copy.doorWidth || STRINGS.en.doorWidth}</th><th scope="col">${copy.dimensions || STRINGS.en.dimensions}</th></tr></thead>
    <tbody>${products
      .map(
        (product) =>
          `<tr><th scope="row">${product.model}</th><td>${product.weight}</td><td>${product.width}</td><td>${product.size}</td></tr>`,
      )
      .join("")}</tbody>`;
  comparison.appendChild(table);

  const activeTab = tabs.querySelectorAll("button")[selectedProductIndex];
  if (activeTab) selectProduct(selectedProductIndex, activeTab);
}

function setLanguage(code) {
  const languageCode = STRINGS[code] ? code : "en";
  currentCopy = { ...STRINGS.en, ...STRINGS[languageCode] };
  document.documentElement.lang = languageCode;
  document.documentElement.dir = RTL_LANGUAGES.has(languageCode)
    ? "rtl"
    : "ltr";

  document.querySelectorAll("[data-t]").forEach((element) => {
    const value = currentCopy[element.dataset.t];
    if (typeof value === "string") element.innerHTML = value;
  });

  const selector = document.querySelector("#language");
  if (selector && selector.value !== languageCode)
    selector.value = languageCode;
  renderProducts(currentCopy);
  updateMenuLabel();
  saveLanguage(languageCode);
}

function initLanguageSelector() {
  const selector = document.querySelector("#language");
  if (!selector) return;
  LANGUAGES.forEach(([value, name]) => selector.add(new Option(name, value)));
  selector.addEventListener("change", (event) =>
    setLanguage(event.target.value),
  );
  setLanguage(getSavedLanguage());
}

function updateMenuLabel() {
  const toggle = document.querySelector("#menu-toggle");
  if (!toggle) return;
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute(
    "aria-label",
    isOpen
      ? currentCopy.menuClose || STRINGS.en.menuClose
      : currentCopy.menuOpen || STRINGS.en.menuOpen,
  );
}

function initMobileMenu() {
  const header = document.querySelector("#site-nav");
  const toggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#mobile-menu");
  if (!header || !toggle || !menu) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.classList.toggle("is-open", open);
    header.classList.toggle("menu-open", open);
    menu.hidden = !open;
    document.body.classList.toggle("nav-open", open);
    updateMenuLabel();
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
  document.addEventListener("pointerdown", (event) => {
    if (
      toggle.getAttribute("aria-expanded") === "true" &&
      !header.contains(event.target)
    ) {
      setOpen(false);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) setOpen(false);
  });
}

function initRevealAnimations() {
  const elements = [...document.querySelectorAll(".reveal")];
  if (elements.length === 0) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );
  elements.forEach((element) => observer.observe(element));
}

function initScrollProgress() {
  const progress = document.querySelector(".scroll-progress");
  if (!progress) return;
  let scheduled = false;

  const update = () => {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = distance > 0 ? Math.min(window.scrollY / distance, 1) : 0;
    progress.style.transform = `scaleX(${ratio})`;
    scheduled = false;
  };

  const requestUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSelector();
  initMobileMenu();
  initRevealAnimations();
  initScrollProgress();
});
