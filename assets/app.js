(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const EN = {
    navProducts: "Products",
    navFloorSprings: "Floor Springs",
    engineering: "Engineering",
    quality: "Quality",
    location: "Location",
    quote: "Get a quote",
    heroEyebrow: "APEX HARDWARE · PRECISION DOOR CONTROL",
    heroLineOne: "Invisible control.",
    heroLineTwo: "Remarkable movement.",
    heroSub:
      "Hydraulic door control designed to make every opening feel smooth, quiet and dependable.",
    heroCta: "Explore Floor Springs",
    seriesEyebrow: "PRECISION DOOR CONTROL",
    seriesTitle: "Floor Springs",
    seriesSub:
      "Hydraulic control engineered for smooth, quiet and dependable door movement.",
    seriesCta: "Explore Floor Springs",
    controlEyebrow: "SMOOTH HYDRAULIC CONTROL",
    controlTitle: "Movement, refined.",
    controlSub:
      "A controlled opening. A measured return. Hardware that works below the surface so the architecture stays clear.",
    controlFeatureOne: "Controlled opening and closing",
    controlFeatureTwo: "Quiet, composed movement",
    controlFeatureThree: "Built for glass, timber and metal doors",
    weightEyebrow: "CHOOSE BY DOOR WEIGHT",
    weightTitle: "A clear way to choose.",
    weightSub:
      "Start with the maximum door weight, then confirm width and application on the series page.",
    weightCta: "View all capacities",
    motionEyebrow: "QUIET AND CONTROLLED",
    motionTitle: "Made to be felt, not heard.",
    motionSub:
      "Hydraulic control helps the door move with a calm, consistent rhythm through everyday use.",
    qualityEyebrow: "QUALITY AND MATERIALS",
    qualityTitle: "Built around the door.",
    qualitySub:
      "Compact bodies, durable covers and carefully specified operating ranges support dependable architectural applications.",
    qualityCardOne: "Designed to disappear",
    qualityCardOneText:
      "The mechanism sits below the finished floor, keeping the doorway visually clean.",
    qualityCardTwo: "Precise movement",
    qualityCardTwoText:
      "Hydraulic control supports a composed opening and return.",
    qualityCardThree: "Application ready",
    qualityCardThreeText:
      "Options for different door weights, widths and materials.",
    oemEyebrow: "OEM / ODM",
    oemTitle: "Built for your project.",
    oemSub:
      "Discuss model selection, finishes and project requirements directly with Apex Hardware.",
    contactEyebrow: "PROJECT INQUIRIES",
    contactTitle: "Let’s specify the right floor spring.",
    contactSub:
      "Share your door weight, width and application. We will help you identify a suitable model.",
    emailUs: "Email us",
    whatsapp: "WhatsApp",
    locationEyebrow: "APEX HARDWARE · GUANGDONG, CHINA",
    locationTitle: "Find us in Zhaoqing.",
    mapsButton: "View on Google Maps",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
    seriesPageEyebrow: "APEX FLOOR SPRINGS",
    seriesPageTitle: "Floor Springs",
    seriesPageSub:
      "Choose the right floor spring by door weight, width and application.",
    chooseWeight: "Choose by door weight",
    allCapacities: "All capacities",
    viewDetails: "View details",
    addCompare: "Compare",
    removeCompare: "Remove",
    comparisonTitle: "Compare floor springs",
    comparisonEmpty: "Select two or more products to compare specifications.",
    model: "Model",
    maxWeight: "Maximum door weight",
    doorWidth: "Recommended door width",
    openingAngle: "Opening angle",
    dimensions: "Body dimensions",
    coverMaterial: "Cover material",
    application: "Recommended application",
    backToSeries: "Back to Floor Springs",
    detailEyebrow: "HYDRAULIC FLOOR SPRING",
    floorSpring: "Floor Spring",
    keyFeatures: "Key Features",
    technicalSpecs: "Technical Specifications",
    suitableApplications: "Suitable Applications",
    operatingTemperature: "Operating temperature",
    netWeight: "Net weight",
    emailQuote: "Email quotation",
    projectInquiry: "PROJECT INQUIRY",
    detailContactTitle: "Specify this floor spring.",
    detailContactSub:
      "Send the model and your door requirements to Apex Hardware for a quotation.",
    selectLanguage: "Select language",
    productImageAlt: "Apex Hardware hydraulic floor spring",
  };

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

  const STRINGS = {
    en: EN,
    zh: {
      navProducts: "产品",
      navFloorSprings: "地弹簧",
      engineering: "工程技术",
      quality: "品质",
      location: "公司地址",
      quote: "获取报价",
      heroEyebrow: "APEX HARDWARE · 精密门控",
      heroLineOne: "隐于地面。",
      heroLineTwo: "精准掌控每次\u200b开合。",
      heroSub: "为每一次平稳、安静、可靠的开合而设计的液压门控系统。",
      heroCta: "查看地弹簧系列",
      seriesEyebrow: "精密门控",
      seriesTitle: "地弹簧系列",
      seriesSub: "为玻璃门、木门和金属门提供平稳、安静、可靠的液压门控体验。",
      seriesCta: "查看地弹簧系列",
      controlEyebrow: "平稳液压控制",
      controlTitle: "让运动更从容。",
      controlSub: "受控开启，平稳回位。五金隐藏于地面，让建筑空间保持简洁。",
      controlFeatureOne: "平稳控制开启与闭合",
      controlFeatureTwo: "安静、从容的运动",
      controlFeatureThree: "适用于玻璃门、木门和金属门",
      weightEyebrow: "按门重选择",
      weightTitle: "更清晰的选择方式。",
      weightSub: "先选择最大门重，再到系列页确认门宽和使用场景。",
      weightCta: "查看全部承重",
      motionEyebrow: "安静且可控",
      motionTitle: "感受得到，几乎听不到。",
      motionSub: "液压控制让门在日常使用中保持平稳、一致的运动节奏。",
      qualityEyebrow: "品质与材料",
      qualityTitle: "围绕门体而设计。",
      qualitySub: "紧凑机身、耐用盖板和明确的使用范围，为建筑门控提供可靠支持。",
      qualityCardOne: "隐于地面",
      qualityCardOneText: "机构安装于完成面以下，让门区视觉保持简洁。",
      qualityCardTwo: "精准运动",
      qualityCardTwoText: "液压控制带来从容的开启与回位。",
      qualityCardThree: "适配应用",
      qualityCardThreeText: "按不同门重、门宽和门体材料提供选择。",
      oemEyebrow: "OEM / ODM",
      oemTitle: "为您的项目而做。",
      oemSub: "直接与 Apex Hardware 沟通型号选择、表面处理和项目需求。",
      contactEyebrow: "项目咨询",
      contactTitle: "一起确定合适的地弹簧。",
      contactSub: "告诉我们门重、门宽和应用场景，我们会协助您选择合适型号。",
      emailUs: "发送邮件",
      whatsapp: "WhatsApp",
      locationEyebrow: "APEX HARDWARE · 中国广东",
      locationTitle: "在肇庆找到我们。",
      mapsButton: "在 Google 地图中查看",
      menuOpen: "打开导航",
      menuClose: "关闭导航",
      seriesPageEyebrow: "APEX 地弹簧",
      seriesPageTitle: "地弹簧",
      seriesPageSub: "根据门重、门宽和使用场景选择合适的地弹簧。",
      chooseWeight: "按门重选择",
      allCapacities: "全部承重",
      viewDetails: "查看详情",
      addCompare: "加入比较",
      removeCompare: "移出比较",
      comparisonTitle: "比较地弹簧",
      comparisonEmpty: "选择两个或以上产品以比较技术参数。",
      model: "型号",
      maxWeight: "最大门重",
      doorWidth: "建议门宽",
      openingAngle: "开启角度",
      dimensions: "机身尺寸",
      coverMaterial: "盖板材料",
      application: "建议应用",
      backToSeries: "返回地弹簧系列",
      detailEyebrow: "液压地弹簧",
      floorSpring: "地弹簧",
      keyFeatures: "核心特点",
      technicalSpecs: "技术参数",
      suitableApplications: "适用场景",
      operatingTemperature: "使用温度",
      netWeight: "净重",
      emailQuote: "邮件询价",
      projectInquiry: "项目咨询",
      detailContactTitle: "询价这款地弹簧。",
      detailContactSub: "将型号和门体要求发送给 Apex Hardware 获取报价。",
      selectLanguage: "选择语言",
      productImageAlt: "Apex Hardware 液压地弹簧",
    },
    es: {
      navProducts: "Productos",
      navFloorSprings: "Muelles de suelo",
      engineering: "Ingeniería",
      quality: "Calidad",
      location: "Ubicación",
      quote: "Solicitar presupuesto",
      heroEyebrow: "APEX HARDWARE · CONTROL DE PUERTAS",
      heroLineOne: "Control invisible.",
      heroLineTwo: "Movimiento extraordinario.",
      heroSub: "Control hidráulico para una apertura suave, silenciosa y fiable.",
      heroCta: "Explorar muelles de suelo",
      seriesEyebrow: "CONTROL DE PRECISIÓN",
      seriesTitle: "Muelles de suelo",
      seriesSub: "Control hidráulico para un movimiento suave, silencioso y fiable.",
      seriesCta: "Explorar la serie",
      controlEyebrow: "CONTROL HIDRÁULICO SUAVE",
      controlTitle: "Movimiento perfeccionado.",
      controlSub: "Apertura controlada, retorno medido y arquitectura visualmente limpia.",
      controlFeatureOne: "Apertura y cierre controlados",
      controlFeatureTwo: "Movimiento silencioso y estable",
      controlFeatureThree: "Para puertas de vidrio, madera y metal",
      weightEyebrow: "ELEGIR POR PESO",
      weightTitle: "Una elección más clara.",
      weightSub: "Empiece por el peso máximo y confirme el ancho y la aplicación.",
      weightCta: "Ver todas las capacidades",
      motionEyebrow: "SILENCIOSO Y CONTROLADO",
      motionTitle: "Se siente, no se oye.",
      motionSub: "El control hidráulico mantiene un ritmo uniforme en el uso diario.",
      qualityEyebrow: "CALIDAD Y MATERIALES",
      qualityTitle: "Diseñado alrededor de la puerta.",
      qualitySub: "Cuerpos compactos y cubiertas duraderas para aplicaciones arquitectónicas.",
      qualityCardOne: "Diseñado para desaparecer",
      qualityCardOneText: "El mecanismo queda bajo el suelo y mantiene limpio el acceso.",
      qualityCardTwo: "Movimiento preciso",
      qualityCardTwoText: "El control hidráulico ofrece una apertura y retorno serenos.",
      qualityCardThree: "Listo para cada uso",
      qualityCardThreeText: "Opciones según peso, ancho y material de la puerta.",
      oemEyebrow: "OEM / ODM",
      oemTitle: "Hecho para su proyecto.",
      oemSub: "Consulte modelos, acabados y requisitos con Apex Hardware.",
      contactEyebrow: "CONSULTAS DE PROYECTO",
      contactTitle: "Especifiquemos el muelle adecuado.",
      contactSub: "Comparta peso, ancho y aplicación de la puerta.",
      emailUs: "Enviar correo",
      whatsapp: "WhatsApp",
      locationEyebrow: "APEX HARDWARE · GUANGDONG, CHINA",
      locationTitle: "Encuéntrenos en Zhaoqing.",
      mapsButton: "Ver en Google Maps",
      menuOpen: "Abrir navegación",
      menuClose: "Cerrar navegación",
      seriesPageEyebrow: "MUELLES DE SUELO APEX",
      seriesPageTitle: "Muelles de suelo",
      seriesPageSub: "Elija según el peso, el ancho y la aplicación de la puerta.",
      chooseWeight: "Elegir por peso",
      allCapacities: "Todas las capacidades",
      viewDetails: "Ver detalles",
      addCompare: "Comparar",
      removeCompare: "Quitar",
      comparisonTitle: "Comparar muelles",
      comparisonEmpty: "Seleccione dos o más productos para comparar.",
      model: "Modelo",
      maxWeight: "Peso máximo",
      doorWidth: "Ancho recomendado",
      openingAngle: "Ángulo de apertura",
      dimensions: "Dimensiones",
      coverMaterial: "Material de cubierta",
      application: "Aplicación recomendada",
      backToSeries: "Volver a la serie",
      detailEyebrow: "MUELLE HIDRÁULICO",
      floorSpring: "Muelle de suelo",
      keyFeatures: "Características clave",
      technicalSpecs: "Especificaciones técnicas",
      suitableApplications: "Aplicaciones adecuadas",
      operatingTemperature: "Temperatura de uso",
      netWeight: "Peso neto",
      emailQuote: "Presupuesto por correo",
      projectInquiry: "CONSULTA DE PROYECTO",
      detailContactTitle: "Especifique este muelle.",
      detailContactSub: "Envíe el modelo y los requisitos a Apex Hardware.",
      selectLanguage: "Seleccionar idioma",
      productImageAlt: "Muelle hidráulico Apex Hardware",
    },
    ar: {
      navProducts: "المنتجات",
      navFloorSprings: "مفصلات أرضية",
      engineering: "الهندسة",
      quality: "الجودة",
      location: "الموقع",
      quote: "اطلب عرضاً",
      heroEyebrow: "APEX HARDWARE · تحكم دقيق بالأبواب",
      heroLineOne: "تحكم غير مرئي.",
      heroLineTwo: "حركة استثنائية.",
      heroSub: "تحكم هيدروليكي لحركة أبواب سلسة وهادئة وموثوقة.",
      heroCta: "استكشف المفصلات الأرضية",
      seriesEyebrow: "تحكم دقيق بالأبواب",
      seriesTitle: "المفصلات الأرضية",
      seriesSub: "تحكم هيدروليكي مصمم لحركة سلسة وهادئة وموثوقة.",
      seriesCta: "استكشف المجموعة",
      controlEyebrow: "تحكم هيدروليكي سلس",
      controlTitle: "حركة أكثر دقة.",
      controlSub: "فتح مضبوط وعودة متوازنة مع بقاء المكونات أسفل السطح.",
      controlFeatureOne: "فتح وإغلاق مضبوط",
      controlFeatureTwo: "حركة هادئة ومتزنة",
      controlFeatureThree: "للأبواب الزجاجية والخشبية والمعدنية",
      weightEyebrow: "اختر حسب وزن الباب",
      weightTitle: "طريقة أوضح للاختيار.",
      weightSub: "ابدأ بالوزن الأقصى ثم تحقق من العرض والاستخدام.",
      weightCta: "عرض جميع السعات",
      motionEyebrow: "هادئ ومضبوط",
      motionTitle: "حركة تشعر بها ولا تسمعها.",
      motionSub: "يحافظ التحكم الهيدروليكي على حركة هادئة ومتسقة.",
      qualityEyebrow: "الجودة والمواد",
      qualityTitle: "مصمم حول الباب.",
      qualitySub: "أجسام مدمجة وأغطية متينة لتطبيقات معمارية موثوقة.",
      qualityCardOne: "مصمم ليختفي",
      qualityCardOneText: "تستقر الآلية أسفل الأرضية ليبقى المدخل نظيفاً.",
      qualityCardTwo: "حركة دقيقة",
      qualityCardTwoText: "يوفر التحكم الهيدروليكي فتحاً وعودة متزنين.",
      qualityCardThree: "جاهز للتطبيق",
      qualityCardThreeText: "خيارات لأوزان وعروض ومواد أبواب مختلفة.",
      oemEyebrow: "OEM / ODM",
      oemTitle: "مصمم لمشروعك.",
      oemSub: "ناقش الطراز والتشطيب ومتطلبات المشروع مع Apex Hardware.",
      contactEyebrow: "استفسارات المشاريع",
      contactTitle: "لنحدد المفصلة الأرضية المناسبة.",
      contactSub: "شارك وزن الباب وعرضه واستخدامه لنساعدك في الاختيار.",
      emailUs: "راسلنا",
      whatsapp: "واتساب",
      locationEyebrow: "APEX HARDWARE · غوانغدونغ، الصين",
      locationTitle: "اعثر علينا في تشاوتشينغ.",
      mapsButton: "عرض على خرائط Google",
      menuOpen: "فتح التنقل",
      menuClose: "إغلاق التنقل",
      seriesPageEyebrow: "مفصلات APEX الأرضية",
      seriesPageTitle: "المفصلات الأرضية",
      seriesPageSub: "اختر حسب وزن الباب وعرضه واستخدامه.",
      chooseWeight: "اختر حسب وزن الباب",
      allCapacities: "جميع السعات",
      viewDetails: "عرض التفاصيل",
      addCompare: "مقارنة",
      removeCompare: "إزالة",
      comparisonTitle: "مقارنة المفصلات",
      comparisonEmpty: "اختر منتجين أو أكثر للمقارنة.",
      model: "الطراز",
      maxWeight: "أقصى وزن للباب",
      doorWidth: "عرض الباب الموصى به",
      openingAngle: "زاوية الفتح",
      dimensions: "أبعاد الجسم",
      coverMaterial: "مادة الغطاء",
      application: "الاستخدام الموصى به",
      backToSeries: "العودة إلى المجموعة",
      detailEyebrow: "مفصلة أرضية هيدروليكية",
      floorSpring: "مفصلة أرضية",
      keyFeatures: "الميزات الرئيسية",
      technicalSpecs: "المواصفات الفنية",
      suitableApplications: "الاستخدامات المناسبة",
      operatingTemperature: "درجة حرارة التشغيل",
      netWeight: "الوزن الصافي",
      emailQuote: "عرض سعر بالبريد",
      projectInquiry: "استفسار مشروع",
      detailContactTitle: "حدد هذه المفصلة.",
      detailContactSub: "أرسل الطراز ومتطلبات الباب إلى Apex Hardware.",
      selectLanguage: "اختر اللغة",
      productImageAlt: "مفصلة أرضية هيدروليكية من Apex Hardware",
    },
    fr: {
      navProducts: "Produits",
      navFloorSprings: "Pivots de sol",
      engineering: "Ingénierie",
      quality: "Qualité",
      location: "Adresse",
      quote: "Demander un devis",
      heroEyebrow: "APEX HARDWARE · CONTRÔLE DE PORTE",
      heroLineOne: "Contrôle invisible.",
      heroLineTwo: "Mouvement remarquable.",
      heroSub: "Un contrôle hydraulique pour un mouvement fluide, silencieux et fiable.",
      heroCta: "Découvrir les pivots de sol",
      seriesEyebrow: "CONTRÔLE DE PRÉCISION",
      seriesTitle: "Pivots de sol",
      seriesSub: "Contrôle hydraulique conçu pour un mouvement fluide, silencieux et fiable.",
      seriesCta: "Découvrir la gamme",
      controlEyebrow: "CONTRÔLE HYDRAULIQUE FLUIDE",
      controlTitle: "Le mouvement, perfectionné.",
      controlSub: "Ouverture maîtrisée, retour mesuré et architecture visuellement épurée.",
      controlFeatureOne: "Ouverture et fermeture maîtrisées",
      controlFeatureTwo: "Mouvement silencieux et stable",
      controlFeatureThree: "Pour portes en verre, bois et métal",
      weightEyebrow: "CHOISIR PAR POIDS",
      weightTitle: "Un choix plus clair.",
      weightSub: "Commencez par le poids maximal, puis vérifiez largeur et application.",
      weightCta: "Voir toutes les capacités",
      motionEyebrow: "SILENCIEUX ET MAÎTRISÉ",
      motionTitle: "Une présence qui ne s’entend pas.",
      motionSub: "Le contrôle hydraulique maintient un rythme calme et constant.",
      qualityEyebrow: "QUALITÉ ET MATÉRIAUX",
      qualityTitle: "Conçu autour de la porte.",
      qualitySub: "Corps compacts et capots durables pour les applications architecturales.",
      qualityCardOne: "Conçu pour disparaître",
      qualityCardOneText: "Le mécanisme reste sous le sol pour une entrée visuellement nette.",
      qualityCardTwo: "Mouvement précis",
      qualityCardTwoText: "Le contrôle hydraulique assure une ouverture et un retour sereins.",
      qualityCardThree: "Prêt pour l’application",
      qualityCardThreeText: "Des options selon le poids, la largeur et le matériau.",
      oemEyebrow: "OEM / ODM",
      oemTitle: "Conçu pour votre projet.",
      oemSub: "Discutez modèles, finitions et exigences avec Apex Hardware.",
      contactEyebrow: "DEMANDES PROJET",
      contactTitle: "Définissons le bon pivot de sol.",
      contactSub: "Indiquez le poids, la largeur et l’application de votre porte.",
      emailUs: "Nous écrire",
      whatsapp: "WhatsApp",
      locationEyebrow: "APEX HARDWARE · GUANGDONG, CHINE",
      locationTitle: "Retrouvez-nous à Zhaoqing.",
      mapsButton: "Voir sur Google Maps",
      menuOpen: "Ouvrir la navigation",
      menuClose: "Fermer la navigation",
      seriesPageEyebrow: "PIVOTS DE SOL APEX",
      seriesPageTitle: "Pivots de sol",
      seriesPageSub: "Choisissez selon le poids, la largeur et l’application de la porte.",
      chooseWeight: "Choisir par poids",
      allCapacities: "Toutes les capacités",
      viewDetails: "Voir les détails",
      addCompare: "Comparer",
      removeCompare: "Retirer",
      comparisonTitle: "Comparer les pivots",
      comparisonEmpty: "Sélectionnez au moins deux produits à comparer.",
      model: "Modèle",
      maxWeight: "Poids maximal",
      doorWidth: "Largeur recommandée",
      openingAngle: "Angle d’ouverture",
      dimensions: "Dimensions du corps",
      coverMaterial: "Matériau du capot",
      application: "Application recommandée",
      backToSeries: "Retour à la gamme",
      detailEyebrow: "PIVOT DE SOL HYDRAULIQUE",
      floorSpring: "Pivot de sol",
      keyFeatures: "Points forts",
      technicalSpecs: "Caractéristiques techniques",
      suitableApplications: "Applications adaptées",
      operatingTemperature: "Température d’utilisation",
      netWeight: "Poids net",
      emailQuote: "Devis par e-mail",
      projectInquiry: "DEMANDE PROJET",
      detailContactTitle: "Spécifiez ce pivot.",
      detailContactSub: "Envoyez le modèle et vos exigences à Apex Hardware.",
      selectLanguage: "Choisir la langue",
      productImageAlt: "Pivot de sol hydraulique Apex Hardware",
    },
    de: {
      navProducts: "Produkte",
      navFloorSprings: "Bodentürschließer",
      engineering: "Technik",
      quality: "Qualität",
      location: "Standort",
      quote: "Angebot anfragen",
      heroEyebrow: "APEX HARDWARE · PRÄZISE TÜRKONTROLLE",
      heroLineOne: "Unsichtbare Kontrolle.",
      heroLineTwo: "Bemerkenswerte Bewegung.",
      heroSub: "Hydraulische Kontrolle für sanfte, leise und zuverlässige Türbewegung.",
      heroCta: "Bodentürschließer entdecken",
      seriesEyebrow: "PRÄZISE TÜRKONTROLLE",
      seriesTitle: "Bodentürschließer",
      seriesSub: "Hydraulische Kontrolle für sanfte, leise und zuverlässige Bewegung.",
      seriesCta: "Serie entdecken",
      controlEyebrow: "SANFTE HYDRAULIK",
      controlTitle: "Bewegung, verfeinert.",
      controlSub: "Kontrolliertes Öffnen, gemessene Rückkehr und klare Architektur.",
      controlFeatureOne: "Kontrolliertes Öffnen und Schließen",
      controlFeatureTwo: "Leise, ruhige Bewegung",
      controlFeatureThree: "Für Glas-, Holz- und Metalltüren",
      weightEyebrow: "NACH TÜRGEWICHT WÄHLEN",
      weightTitle: "Ein klarer Auswahlweg.",
      weightSub: "Mit dem Höchstgewicht beginnen, dann Breite und Anwendung prüfen.",
      weightCta: "Alle Tragfähigkeiten",
      motionEyebrow: "LEISE UND KONTROLLIERT",
      motionTitle: "Spürbar, nicht hörbar.",
      motionSub: "Die Hydraulik sorgt im Alltag für einen gleichmäßigen Bewegungsablauf.",
      qualityEyebrow: "QUALITÄT UND MATERIALIEN",
      qualityTitle: "Rund um die Tür entwickelt.",
      qualitySub: "Kompakte Gehäuse und haltbare Abdeckungen für Architekturprojekte.",
      qualityCardOne: "Zum Verschwinden entworfen",
      qualityCardOneText: "Der Mechanismus liegt unter dem Boden und hält den Eingang klar.",
      qualityCardTwo: "Präzise Bewegung",
      qualityCardTwoText: "Hydraulische Kontrolle unterstützt ruhiges Öffnen und Schließen.",
      qualityCardThree: "Anwendungsbereit",
      qualityCardThreeText: "Optionen für verschiedene Gewichte, Breiten und Materialien.",
      oemEyebrow: "OEM / ODM",
      oemTitle: "Für Ihr Projekt.",
      oemSub: "Modelle, Oberflächen und Anforderungen direkt mit Apex Hardware abstimmen.",
      contactEyebrow: "PROJEKTANFRAGEN",
      contactTitle: "Den richtigen Bodentürschließer bestimmen.",
      contactSub: "Nennen Sie Türgewicht, Breite und Anwendung.",
      emailUs: "E-Mail senden",
      whatsapp: "WhatsApp",
      locationEyebrow: "APEX HARDWARE · GUANGDONG, CHINA",
      locationTitle: "Sie finden uns in Zhaoqing.",
      mapsButton: "In Google Maps ansehen",
      menuOpen: "Navigation öffnen",
      menuClose: "Navigation schließen",
      seriesPageEyebrow: "APEX BODENTÜRSCHLIESSER",
      seriesPageTitle: "Bodentürschließer",
      seriesPageSub: "Wählen Sie nach Türgewicht, Breite und Anwendung.",
      chooseWeight: "Nach Türgewicht wählen",
      allCapacities: "Alle Tragfähigkeiten",
      viewDetails: "Details ansehen",
      addCompare: "Vergleichen",
      removeCompare: "Entfernen",
      comparisonTitle: "Bodentürschließer vergleichen",
      comparisonEmpty: "Wählen Sie mindestens zwei Produkte für den Vergleich.",
      model: "Modell",
      maxWeight: "Maximales Türgewicht",
      doorWidth: "Empfohlene Türbreite",
      openingAngle: "Öffnungswinkel",
      dimensions: "Gehäusemaße",
      coverMaterial: "Abdeckmaterial",
      application: "Empfohlene Anwendung",
      backToSeries: "Zurück zur Serie",
      detailEyebrow: "HYDRAULISCHER BODENTÜRSCHLIESSER",
      floorSpring: "Bodentürschließer",
      keyFeatures: "Hauptmerkmale",
      technicalSpecs: "Technische Daten",
      suitableApplications: "Geeignete Anwendungen",
      operatingTemperature: "Betriebstemperatur",
      netWeight: "Nettogewicht",
      emailQuote: "Angebot per E-Mail",
      projectInquiry: "PROJEKTANFRAGE",
      detailContactTitle: "Diesen Bodentürschließer spezifizieren.",
      detailContactSub: "Senden Sie Modell und Türanforderungen an Apex Hardware.",
      selectLanguage: "Sprache wählen",
      productImageAlt: "Hydraulischer Bodentürschließer von Apex Hardware",
    },
    pt: {
      navProducts: "Produtos",
      navFloorSprings: "Molas de piso",
      engineering: "Engenharia",
      quality: "Qualidade",
      location: "Localização",
      quote: "Solicitar orçamento",
      heroEyebrow: "APEX HARDWARE · CONTROLO DE PORTAS",
      heroLineOne: "Controlo invisível.",
      heroLineTwo: "Movimento notável.",
      heroSub: "Controlo hidráulico para movimentos suaves, silenciosos e fiáveis.",
      heroCta: "Explorar molas de piso",
      seriesEyebrow: "CONTROLO DE PRECISÃO",
      seriesTitle: "Molas de piso",
      seriesSub: "Controlo hidráulico para um movimento suave, silencioso e fiável.",
      seriesCta: "Explorar a série",
      controlEyebrow: "CONTROLO HIDRÁULICO SUAVE",
      controlTitle: "Movimento aperfeiçoado.",
      controlSub: "Abertura controlada, retorno medido e arquitetura visualmente limpa.",
      controlFeatureOne: "Abertura e fecho controlados",
      controlFeatureTwo: "Movimento silencioso e estável",
      controlFeatureThree: "Para portas de vidro, madeira e metal",
      weightEyebrow: "ESCOLHER POR PESO",
      weightTitle: "Uma escolha mais clara.",
      weightSub: "Comece pelo peso máximo e confirme largura e aplicação.",
      weightCta: "Ver todas as capacidades",
      motionEyebrow: "SILENCIOSO E CONTROLADO",
      motionTitle: "Sente-se, não se ouve.",
      motionSub: "O controlo hidráulico mantém um ritmo calmo e consistente.",
      qualityEyebrow: "QUALIDADE E MATERIAIS",
      qualityTitle: "Criado em torno da porta.",
      qualitySub: "Corpos compactos e capas duráveis para aplicações arquitetónicas.",
      qualityCardOne: "Criado para desaparecer",
      qualityCardOneText: "O mecanismo fica sob o piso e mantém a entrada limpa.",
      qualityCardTwo: "Movimento preciso",
      qualityCardTwoText: "O controlo hidráulico oferece uma abertura e retorno serenos.",
      qualityCardThree: "Pronto para aplicação",
      qualityCardThreeText: "Opções para diferentes pesos, larguras e materiais.",
      oemEyebrow: "OEM / ODM",
      oemTitle: "Feito para o seu projeto.",
      oemSub: "Fale sobre modelos, acabamentos e requisitos com a Apex Hardware.",
      contactEyebrow: "CONSULTAS DE PROJETO",
      contactTitle: "Vamos especificar a mola certa.",
      contactSub: "Partilhe o peso, a largura e a aplicação da porta.",
      emailUs: "Enviar e-mail",
      whatsapp: "WhatsApp",
      locationEyebrow: "APEX HARDWARE · GUANGDONG, CHINA",
      locationTitle: "Encontre-nos em Zhaoqing.",
      mapsButton: "Ver no Google Maps",
      menuOpen: "Abrir navegação",
      menuClose: "Fechar navegação",
      seriesPageEyebrow: "MOLAS DE PISO APEX",
      seriesPageTitle: "Molas de piso",
      seriesPageSub: "Escolha de acordo com o peso, largura e aplicação da porta.",
      chooseWeight: "Escolher por peso",
      allCapacities: "Todas as capacidades",
      viewDetails: "Ver detalhes",
      addCompare: "Comparar",
      removeCompare: "Remover",
      comparisonTitle: "Comparar molas",
      comparisonEmpty: "Selecione dois ou mais produtos para comparar.",
      model: "Modelo",
      maxWeight: "Peso máximo",
      doorWidth: "Largura recomendada",
      openingAngle: "Ângulo de abertura",
      dimensions: "Dimensões",
      coverMaterial: "Material da capa",
      application: "Aplicação recomendada",
      backToSeries: "Voltar à série",
      detailEyebrow: "MOLA DE PISO HIDRÁULICA",
      floorSpring: "Mola de piso",
      keyFeatures: "Características principais",
      technicalSpecs: "Especificações técnicas",
      suitableApplications: "Aplicações adequadas",
      operatingTemperature: "Temperatura de funcionamento",
      netWeight: "Peso líquido",
      emailQuote: "Orçamento por e-mail",
      projectInquiry: "CONSULTA DE PROJETO",
      detailContactTitle: "Especifique esta mola.",
      detailContactSub: "Envie o modelo e os requisitos para a Apex Hardware.",
      selectLanguage: "Selecionar idioma",
      productImageAlt: "Mola de piso hidráulica Apex Hardware",
    },
    ru: {
      navProducts: "Продукция",
      navFloorSprings: "Напольные доводчики",
      engineering: "Инженерия",
      quality: "Качество",
      location: "Адрес",
      quote: "Запросить цену",
      heroEyebrow: "APEX HARDWARE · ТОЧНОЕ УПРАВЛЕНИЕ",
      heroLineOne: "Невидимый контроль.",
      heroLineTwo: "Выразительное движение.",
      heroSub: "Гидравлическое управление для плавного, тихого и надёжного движения.",
      heroCta: "Смотреть напольные доводчики",
      seriesEyebrow: "ТОЧНОЕ УПРАВЛЕНИЕ ДВЕРЬЮ",
      seriesTitle: "Напольные доводчики",
      seriesSub: "Гидравлическое управление для плавного, тихого и надёжного движения.",
      seriesCta: "Смотреть серию",
      controlEyebrow: "ПЛАВНАЯ ГИДРАВЛИКА",
      controlTitle: "Отточенное движение.",
      controlSub: "Контролируемое открытие, размеренный возврат и чистая архитектура.",
      controlFeatureOne: "Контролируемое открытие и закрытие",
      controlFeatureTwo: "Тихое, уверенное движение",
      controlFeatureThree: "Для стеклянных, деревянных и металлических дверей",
      weightEyebrow: "ВЫБОР ПО ВЕСУ",
      weightTitle: "Понятный выбор.",
      weightSub: "Начните с максимального веса, затем уточните ширину и применение.",
      weightCta: "Все нагрузки",
      motionEyebrow: "ТИХО И КОНТРОЛИРУЕМО",
      motionTitle: "Ощутимо, но не слышно.",
      motionSub: "Гидравлика поддерживает спокойный, стабильный ритм движения.",
      qualityEyebrow: "КАЧЕСТВО И МАТЕРИАЛЫ",
      qualityTitle: "Разработано вокруг двери.",
      qualitySub: "Компактные корпуса и прочные крышки для архитектурных проектов.",
      qualityCardOne: "Создан, чтобы исчезнуть",
      qualityCardOneText: "Механизм скрыт под полом, сохраняя вход визуально чистым.",
      qualityCardTwo: "Точное движение",
      qualityCardTwoText: "Гидравлика обеспечивает спокойное открытие и возврат.",
      qualityCardThree: "Готов к применению",
      qualityCardThreeText: "Варианты для разного веса, ширины и материала дверей.",
      oemEyebrow: "OEM / ODM",
      oemTitle: "Для вашего проекта.",
      oemSub: "Обсудите модели, отделку и требования с Apex Hardware.",
      contactEyebrow: "ЗАПРОСЫ ПО ПРОЕКТАМ",
      contactTitle: "Подберём подходящий доводчик.",
      contactSub: "Сообщите вес, ширину и назначение двери.",
      emailUs: "Написать",
      whatsapp: "WhatsApp",
      locationEyebrow: "APEX HARDWARE · ГУАНДУН, КИТАЙ",
      locationTitle: "Мы находимся в Чжаоцине.",
      mapsButton: "Открыть Google Maps",
      menuOpen: "Открыть меню",
      menuClose: "Закрыть меню",
      seriesPageEyebrow: "НАПОЛЬНЫЕ ДОВОДЧИКИ APEX",
      seriesPageTitle: "Напольные доводчики",
      seriesPageSub: "Выберите по весу, ширине и применению двери.",
      chooseWeight: "Выбрать по весу",
      allCapacities: "Все нагрузки",
      viewDetails: "Подробнее",
      addCompare: "Сравнить",
      removeCompare: "Убрать",
      comparisonTitle: "Сравнение доводчиков",
      comparisonEmpty: "Выберите два или более продукта для сравнения.",
      model: "Модель",
      maxWeight: "Максимальный вес двери",
      doorWidth: "Рекомендуемая ширина",
      openingAngle: "Угол открытия",
      dimensions: "Размеры корпуса",
      coverMaterial: "Материал крышки",
      application: "Рекомендуемое применение",
      backToSeries: "Назад к серии",
      detailEyebrow: "ГИДРАВЛИЧЕСКИЙ ДОВОДЧИК",
      floorSpring: "Напольный доводчик",
      keyFeatures: "Ключевые особенности",
      technicalSpecs: "Технические характеристики",
      suitableApplications: "Подходящие применения",
      operatingTemperature: "Рабочая температура",
      netWeight: "Вес нетто",
      emailQuote: "Запрос по e-mail",
      projectInquiry: "ЗАПРОС ПО ПРОЕКТУ",
      detailContactTitle: "Запросить этот доводчик.",
      detailContactSub: "Отправьте модель и требования в Apex Hardware.",
      selectLanguage: "Выбрать язык",
      productImageAlt: "Гидравлический напольный доводчик Apex Hardware",
    },
  };

  const basicTranslations = {
    it: ["Chiudiporta a pavimento", "Ingegneria", "Qualità", "Posizione", "Richiedi un preventivo"],
    nl: ["Vloerveren", "Techniek", "Kwaliteit", "Locatie", "Offerte aanvragen"],
    tr: ["Yer yayları", "Mühendislik", "Kalite", "Konum", "Teklif alın"],
    ko: ["플로어 힌지", "엔지니어링", "품질", "위치", "견적 요청"],
    ja: ["フロアヒンジ", "エンジニアリング", "品質", "所在地", "見積もり"],
    hi: ["फ्लोर स्प्रिंग", "इंजीनियरिंग", "गुणवत्ता", "स्थान", "कोटेशन लें"],
    th: ["โช๊คอัพฝังพื้น", "วิศวกรรม", "คุณภาพ", "ที่ตั้ง", "ขอใบเสนอราคา"],
    vi: ["Bản lề sàn", "Kỹ thuật", "Chất lượng", "Vị trí", "Yêu cầu báo giá"],
    id: ["Floor spring", "Rekayasa", "Kualitas", "Lokasi", "Minta penawaran"],
    ms: ["Spring lantai", "Kejuruteraan", "Kualiti", "Lokasi", "Minta sebut harga"],
    pl: ["Samozamykacze podłogowe", "Inżynieria", "Jakość", "Lokalizacja", "Zapytaj o cenę"],
    uk: ["Підлогові доводчики", "Інженерія", "Якість", "Адреса", "Запитати ціну"],
    fa: ["لولاهای کف", "مهندسی", "کیفیت", "موقعیت", "درخواست قیمت"],
    he: ["מחזירי דלת רצפתיים", "הנדסה", "איכות", "מיקום", "בקשת הצעת מחיר"],
    bn: ["ফ্লোর স্প্রিং", "প্রকৌশল", "গুণমান", "অবস্থান", "মূল্য জানুন"],
    ur: ["فلور اسپرنگ", "انجینئرنگ", "معیار", "مقام", "قیمت حاصل کریں"],
    tl: ["Floor spring", "Engineering", "Kalidad", "Lokasyon", "Humingi ng presyo"],
    sw: ["Vifunga vya sakafu", "Uhandisi", "Ubora", "Mahali", "Omba bei"],
  };

  Object.entries(basicTranslations).forEach(([code, values]) => {
    STRINGS[code] = {
      navProducts: "Products",
      navFloorSprings: values[0],
      seriesTitle: values[0],
      seriesPageTitle: values[0],
      engineering: values[1],
      quality: values[2],
      location: values[3],
      quote: values[4],
    };
  });

  const homepageCopy = {
    en: {
      heroTitleOne: "Door hardware.", heroTitleTwo: "Specified for your project.",
      heroProjectSub: "Start with door weight, width and application. Review 40 distinct priority models, then send one clear project inquiry.",
      heroFeaturedCta: "Explore Featured 40", heroInquiryCta: "Send project requirements",
      heroProofWeight: "Selection by door weight", heroProofSpecs: "Model-specific specifications", heroProofWhatsapp: "Direct WhatsApp quotation",
      trustEyebrow: "VERIFIABLE CATALOG & LOCAL SUPPORT", trustTitle: "Specification support from Zhaoqing, Guangdong.",
      trustSub: "We use the facts already documented in the reviewed catalog. No unverified certification, production-capacity or customer-logo claims.",
      trustRecords: "reviewed catalog records", trustCategories: "architectural hardware categories", trustModels: "distinct priority models",
      trustRegion: "Guangdong", trustRegionSub: "listed in Gaoyao District, Zhaoqing",
      homeDoorClosers: "Door Closers", homeShowerHardware: "Shower Hardware", homeAluminumFencing: "Aluminum Fencing",
      homeContactTitle: "Get a project-ready quotation.",
      homeContactSub: "Share the model, quantity, door weight, width and delivery region. The form prepares a structured WhatsApp message so fewer details are missed.",
      homeContactEmail: "Prefer email? Write to us", footerTagline: "Precision door control for architectural projects worldwide.",
    },
    zh: {
      heroTitleOne: "门控五金。", heroTitleTwo: "为您的项目精准选型。",
      heroProjectSub: "从门重、门宽和应用场景开始，查看 40 个不重复的重点型号，再一次性发送清晰的项目询价。",
      heroFeaturedCta: "查看精选 40", heroInquiryCta: "发送项目要求",
      heroProofWeight: "按门重选型", heroProofSpecs: "型号专属参数", heroProofWhatsapp: "WhatsApp 直接询价",
      trustEyebrow: "可核实目录与本地支持", trustTitle: "来自广东肇庆的规格支持。",
      trustSub: "我们只采用已审核目录中有依据的信息，不展示未经核实的认证、产能或客户标识。",
      trustRecords: "条已审核产品记录", trustCategories: "个建筑五金类别", trustModels: "个不重复重点型号",
      trustRegion: "广东", trustRegionSub: "登记地址位于肇庆市高要区",
      homeDoorClosers: "闭门器", homeShowerHardware: "淋浴房五金", homeAluminumFencing: "铝合金围栏",
      homeContactTitle: "获取可用于项目推进的报价。",
      homeContactSub: "请提供型号、数量、门重、门宽和交付地区。表单会整理为结构化 WhatsApp 消息，减少遗漏。",
      homeContactEmail: "更喜欢邮件？写信给我们", footerTagline: "服务全球建筑项目的精密门控五金。",
    },
    es: {
      heroTitleOne: "Herrajes para puertas.", heroTitleTwo: "Especificados para su proyecto.",
      heroProjectSub: "Empiece por el peso, el ancho y la aplicación de la puerta. Revise 40 modelos prioritarios distintos y envíe una consulta de proyecto clara.",
      heroFeaturedCta: "Explorar los 40 destacados", heroInquiryCta: "Enviar requisitos del proyecto",
      heroProofWeight: "Selección por peso de puerta", heroProofSpecs: "Especificaciones por modelo", heroProofWhatsapp: "Cotización directa por WhatsApp",
      trustEyebrow: "CATÁLOGO VERIFICABLE Y SOPORTE LOCAL", trustTitle: "Soporte de especificaciones desde Zhaoqing, Guangdong.",
      trustSub: "Utilizamos los datos ya documentados en el catálogo revisado, sin afirmaciones no verificadas sobre certificaciones, capacidad o logotipos de clientes.",
      trustRecords: "registros de catálogo revisados", trustCategories: "categorías de herrajes arquitectónicos", trustModels: "modelos prioritarios distintos",
      trustRegion: "Guangdong", trustRegionSub: "ubicación indicada en Gaoyao, Zhaoqing",
      homeDoorClosers: "Cierrapuertas", homeShowerHardware: "Herrajes para ducha", homeAluminumFencing: "Cercas de aluminio",
      homeContactTitle: "Obtenga una cotización lista para su proyecto.",
      homeContactSub: "Comparta modelo, cantidad, peso y ancho de puerta y región de entrega. El formulario prepara un mensaje estructurado de WhatsApp.",
      homeContactEmail: "¿Prefiere correo? Escríbanos", footerTagline: "Control de puertas de precisión para proyectos arquitectónicos en todo el mundo.",
    },
    ar: {
      heroTitleOne: "تجهيزات أبواب.", heroTitleTwo: "محددة لمشروعك.",
      heroProjectSub: "ابدأ بوزن الباب وعرضه ونوع التطبيق. راجع 40 موديلًا مميزًا وغير مكرر، ثم أرسل استفسار مشروع واضحًا.",
      heroFeaturedCta: "استعرض أفضل 40 منتجاً", heroInquiryCta: "أرسل متطلبات المشروع",
      heroProofWeight: "اختيار حسب وزن الباب", heroProofSpecs: "مواصفات خاصة بكل موديل", heroProofWhatsapp: "عرض سعر مباشر عبر WhatsApp",
      trustEyebrow: "كتالوج قابل للتحقق ودعم محلي", trustTitle: "دعم المواصفات من تشاوتشينغ، غوانغدونغ.",
      trustSub: "نستخدم المعلومات الموثقة في الكتالوج المراجع فقط، من دون ادعاءات غير مؤكدة عن الشهادات أو الطاقة الإنتاجية أو شعارات العملاء.",
      trustRecords: "سجل منتج تمت مراجعته", trustCategories: "فئة تجهيزات معمارية", trustModels: "موديلًا مميزًا وغير مكرر",
      trustRegion: "غوانغدونغ", trustRegionSub: "الموقع المدرج في حي غاوياو، تشاوتشينغ",
      homeDoorClosers: "غوالق الأبواب", homeShowerHardware: "تجهيزات غرف الاستحمام", homeAluminumFencing: "أسوار الألومنيوم",
      homeContactTitle: "احصل على عرض سعر جاهز لمشروعك.",
      homeContactSub: "شارك الموديل والكمية ووزن الباب وعرضه ومنطقة التسليم. يجهز النموذج رسالة WhatsApp منظمة لتقليل التفاصيل الناقصة.",
      homeContactEmail: "تفضل البريد الإلكتروني؟ راسلنا", footerTagline: "تحكم دقيق بالأبواب للمشاريع المعمارية حول العالم.",
    },
    fr: {
      heroTitleOne: "Quincaillerie de porte.", heroTitleTwo: "Spécifiée pour votre projet.",
      heroProjectSub: "Commencez par le poids, la largeur et l’application de la porte. Consultez 40 modèles prioritaires distincts, puis envoyez une demande claire.",
      heroFeaturedCta: "Découvrir les 40 modèles", heroInquiryCta: "Envoyer les exigences du projet",
      heroProofWeight: "Sélection par poids de porte", heroProofSpecs: "Spécifications par modèle", heroProofWhatsapp: "Devis direct sur WhatsApp",
      trustEyebrow: "CATALOGUE VÉRIFIABLE ET SUPPORT LOCAL", trustTitle: "Support de spécification depuis Zhaoqing, Guangdong.",
      trustSub: "Nous utilisons les données déjà documentées dans le catalogue vérifié, sans allégations non confirmées sur les certifications, la capacité ou les logos clients.",
      trustRecords: "fiches catalogue vérifiées", trustCategories: "catégories de quincaillerie architecturale", trustModels: "modèles prioritaires distincts",
      trustRegion: "Guangdong", trustRegionSub: "adresse indiquée à Gaoyao, Zhaoqing",
      homeDoorClosers: "Ferme-portes", homeShowerHardware: "Quincaillerie de douche", homeAluminumFencing: "Clôtures en aluminium",
      homeContactTitle: "Obtenez un devis prêt pour votre projet.",
      homeContactSub: "Indiquez le modèle, la quantité, le poids et la largeur de porte ainsi que la région de livraison. Le formulaire prépare un message WhatsApp structuré.",
      homeContactEmail: "Vous préférez l’e-mail ? Écrivez-nous", footerTagline: "Contrôle de porte de précision pour les projets architecturaux du monde entier.",
    },
    de: {
      heroTitleOne: "Türbeschläge.", heroTitleTwo: "Für Ihr Projekt spezifiziert.",
      heroProjectSub: "Beginnen Sie mit Türgewicht, Breite und Anwendung. Prüfen Sie 40 verschiedene Schwerpunktmodelle und senden Sie eine klare Projektanfrage.",
      heroFeaturedCta: "Featured 40 entdecken", heroInquiryCta: "Projektanforderungen senden",
      heroProofWeight: "Auswahl nach Türgewicht", heroProofSpecs: "Modellspezifische Daten", heroProofWhatsapp: "Direktes WhatsApp-Angebot",
      trustEyebrow: "PRÜFBARER KATALOG UND LOKALER SUPPORT", trustTitle: "Spezifikationssupport aus Zhaoqing, Guangdong.",
      trustSub: "Wir verwenden nur bereits im geprüften Katalog dokumentierte Fakten und keine unbestätigten Angaben zu Zertifikaten, Kapazität oder Kundenlogos.",
      trustRecords: "geprüfte Katalogeinträge", trustCategories: "Kategorien für Architekturbeschläge", trustModels: "verschiedene Schwerpunktmodelle",
      trustRegion: "Guangdong", trustRegionSub: "angegebener Standort in Gaoyao, Zhaoqing",
      homeDoorClosers: "Türschließer", homeShowerHardware: "Duschbeschläge", homeAluminumFencing: "Aluminiumzäune",
      homeContactTitle: "Erhalten Sie ein projektfertiges Angebot.",
      homeContactSub: "Nennen Sie Modell, Menge, Türgewicht, Breite und Lieferregion. Das Formular erstellt eine strukturierte WhatsApp-Nachricht.",
      homeContactEmail: "Lieber per E-Mail? Schreiben Sie uns", footerTagline: "Präzise Türkontrolle für Architekturprojekte weltweit.",
    },
    pt: {
      heroTitleOne: "Ferragens para portas.", heroTitleTwo: "Especificadas para o seu projeto.",
      heroProjectSub: "Comece pelo peso, largura e aplicação da porta. Reveja 40 modelos prioritários distintos e envie uma consulta de projeto clara.",
      heroFeaturedCta: "Explorar os 40 destaques", heroInquiryCta: "Enviar requisitos do projeto",
      heroProofWeight: "Seleção por peso da porta", heroProofSpecs: "Especificações por modelo", heroProofWhatsapp: "Cotação direta por WhatsApp",
      trustEyebrow: "CATÁLOGO VERIFICÁVEL E SUPORTE LOCAL", trustTitle: "Suporte de especificação a partir de Zhaoqing, Guangdong.",
      trustSub: "Usamos apenas factos já documentados no catálogo revisto, sem alegações não verificadas sobre certificações, capacidade ou logótipos de clientes.",
      trustRecords: "registos de catálogo revistos", trustCategories: "categorias de ferragens arquitetónicas", trustModels: "modelos prioritários distintos",
      trustRegion: "Guangdong", trustRegionSub: "localização indicada em Gaoyao, Zhaoqing",
      homeDoorClosers: "Molas aéreas", homeShowerHardware: "Ferragens para duche", homeAluminumFencing: "Vedações de alumínio",
      homeContactTitle: "Obtenha uma cotação pronta para o projeto.",
      homeContactSub: "Partilhe modelo, quantidade, peso e largura da porta e região de entrega. O formulário prepara uma mensagem estruturada no WhatsApp.",
      homeContactEmail: "Prefere e-mail? Escreva-nos", footerTagline: "Controlo de portas de precisão para projetos arquitetónicos em todo o mundo.",
    },
    ru: {
      heroTitleOne: "Дверная фурнитура.", heroTitleTwo: "Подобрана для вашего проекта.",
      heroProjectSub: "Начните с веса, ширины и назначения двери. Изучите 40 разных приоритетных моделей и отправьте один понятный запрос по проекту.",
      heroFeaturedCta: "Смотреть 40 моделей", heroInquiryCta: "Отправить требования проекта",
      heroProofWeight: "Выбор по весу двери", heroProofSpecs: "Характеристики каждой модели", heroProofWhatsapp: "Предложение напрямую в WhatsApp",
      trustEyebrow: "ПРОВЕРЯЕМЫЙ КАТАЛОГ И ЛОКАЛЬНАЯ ПОДДЕРЖКА", trustTitle: "Поддержка спецификаций из Чжаоцина, Гуандун.",
      trustSub: "Мы используем только факты из проверенного каталога без неподтверждённых заявлений о сертификатах, мощностях или логотипах клиентов.",
      trustRecords: "проверенных записей каталога", trustCategories: "категорий архитектурной фурнитуры", trustModels: "разных приоритетных моделей",
      trustRegion: "Гуандун", trustRegionSub: "указанный адрес в районе Гаояо, Чжаоцин",
      homeDoorClosers: "Дверные доводчики", homeShowerHardware: "Фурнитура для душевых", homeAluminumFencing: "Алюминиевые ограждения",
      homeContactTitle: "Получите предложение, готовое для проекта.",
      homeContactSub: "Укажите модель, количество, вес и ширину двери и регион доставки. Форма подготовит структурированное сообщение WhatsApp.",
      homeContactEmail: "Предпочитаете почту? Напишите нам", footerTagline: "Точное управление дверями для архитектурных проектов по всему миру.",
    },
  };

  const homepageEssentials = {
    it: { heroTitleOne: "Ferramenta per porte.", heroTitleTwo: "Specificata per il tuo progetto.", trustTitle: "Supporto tecnico da Zhaoqing, Guangdong.", homeContactTitle: "Richiedi un preventivo pronto per il progetto.", footerTagline: "Controllo di precisione delle porte per progetti in tutto il mondo." },
    nl: { heroTitleOne: "Deurbeslag.", heroTitleTwo: "Gespecificeerd voor uw project.", trustTitle: "Specificatieondersteuning vanuit Zhaoqing, Guangdong.", homeContactTitle: "Ontvang een projectklare offerte.", footerTagline: "Nauwkeurige deurcontrole voor architectuurprojecten wereldwijd." },
    tr: { heroTitleOne: "Kapı donanımı.", heroTitleTwo: "Projeniz için belirlendi.", trustTitle: "Zhaoqing, Guangdong’dan teknik şartname desteği.", homeContactTitle: "Projenize hazır bir teklif alın.", footerTagline: "Dünya çapındaki mimari projeler için hassas kapı kontrolü." },
    ko: { heroTitleOne: "도어 하드웨어.", heroTitleTwo: "프로젝트에 맞춘 사양.", trustTitle: "광둥성 자오칭의 사양 지원.", homeContactTitle: "프로젝트용 견적을 받아보세요.", footerTagline: "전 세계 건축 프로젝트를 위한 정밀 도어 제어." },
    ja: { heroTitleOne: "ドアハードウェア。", heroTitleTwo: "プロジェクトに合った仕様選定。", trustTitle: "広東省肇慶からの仕様サポート。", homeContactTitle: "プロジェクトに使える見積もりを取得。", footerTagline: "世界の建築プロジェクトに精密なドア制御を。" },
    hi: { heroTitleOne: "डोर हार्डवेयर।", heroTitleTwo: "आपके प्रोजेक्ट के लिए चयनित।", trustTitle: "झाओछिंग, ग्वांगडोंग से विनिर्देश सहायता।", homeContactTitle: "प्रोजेक्ट के लिए तैयार कोटेशन पाएँ।", footerTagline: "दुनिया भर की वास्तु परियोजनाओं के लिए सटीक डोर कंट्रोल।" },
    th: { heroTitleOne: "อุปกรณ์ประตู", heroTitleTwo: "กำหนดสเปกเพื่อโครงการของคุณ", trustTitle: "การสนับสนุนด้านสเปกจากจ้าวชิ่ง กวางตุ้ง", homeContactTitle: "รับใบเสนอราคาที่พร้อมสำหรับโครงการ", footerTagline: "ระบบควบคุมประตูที่แม่นยำสำหรับโครงการทั่วโลก" },
    vi: { heroTitleOne: "Phụ kiện cửa.", heroTitleTwo: "Được chọn theo dự án của bạn.", trustTitle: "Hỗ trợ thông số từ Triệu Khánh, Quảng Đông.", homeContactTitle: "Nhận báo giá sẵn sàng cho dự án.", footerTagline: "Kiểm soát cửa chính xác cho các dự án kiến trúc toàn cầu." },
    id: { heroTitleOne: "Perangkat pintu.", heroTitleTwo: "Ditentukan untuk proyek Anda.", trustTitle: "Dukungan spesifikasi dari Zhaoqing, Guangdong.", homeContactTitle: "Dapatkan penawaran siap proyek.", footerTagline: "Kontrol pintu presisi untuk proyek arsitektur di seluruh dunia." },
    ms: { heroTitleOne: "Perkakasan pintu.", heroTitleTwo: "Ditentukan untuk projek anda.", trustTitle: "Sokongan spesifikasi dari Zhaoqing, Guangdong.", homeContactTitle: "Dapatkan sebut harga sedia projek.", footerTagline: "Kawalan pintu tepat untuk projek seni bina di seluruh dunia." },
    pl: { heroTitleOne: "Okucia drzwiowe.", heroTitleTwo: "Dobrane do Twojego projektu.", trustTitle: "Wsparcie specyfikacji z Zhaoqing w Guangdong.", homeContactTitle: "Uzyskaj ofertę gotową do projektu.", footerTagline: "Precyzyjne sterowanie drzwiami dla projektów na całym świecie." },
    uk: { heroTitleOne: "Дверна фурнітура.", heroTitleTwo: "Підібрана для вашого проєкту.", trustTitle: "Підтримка специфікацій із Чжаоціна, Гуандун.", homeContactTitle: "Отримайте готову для проєкту пропозицію.", footerTagline: "Точне керування дверима для архітектурних проєктів у всьому світі." },
    fa: { heroTitleOne: "یراق‌آلات در.", heroTitleTwo: "متناسب با پروژه شما.", trustTitle: "پشتیبانی مشخصات از ژائوکینگ، گوانگ‌دونگ.", homeContactTitle: "پیشنهاد قیمت آماده پروژه دریافت کنید.", footerTagline: "کنترل دقیق در برای پروژه‌های معماری سراسر جهان." },
    he: { heroTitleOne: "פרזול לדלתות.", heroTitleTwo: "מותאם לפרויקט שלך.", trustTitle: "תמיכה במפרטים מג׳אוצ׳ינג, גואנגדונג.", homeContactTitle: "קבלו הצעת מחיר מוכנה לפרויקט.", footerTagline: "בקרת דלתות מדויקת לפרויקטים אדריכליים ברחבי העולם." },
    bn: { heroTitleOne: "দরজার হার্ডওয়্যার।", heroTitleTwo: "আপনার প্রকল্পের জন্য নির্বাচিত।", trustTitle: "ঝাওছিং, গুয়াংডং থেকে স্পেসিফিকেশন সহায়তা।", homeContactTitle: "প্রকল্পের উপযোগী মূল্য প্রস্তাব নিন।", footerTagline: "বিশ্বজুড়ে স্থাপত্য প্রকল্পের জন্য নির্ভুল দরজা নিয়ন্ত্রণ।" },
    ur: { heroTitleOne: "دروازے کا ہارڈویئر۔", heroTitleTwo: "آپ کے پروجیکٹ کے لیے منتخب۔", trustTitle: "ژاؤچنگ، گوانگ ڈونگ سے تفصیلات کی معاونت۔", homeContactTitle: "پروجیکٹ کے لیے تیار قیمت حاصل کریں۔", footerTagline: "دنیا بھر کے تعمیراتی منصوبوں کے لیے درست دروازہ کنٹرول۔" },
    tl: { heroTitleOne: "Door hardware.", heroTitleTwo: "Pinili para sa iyong proyekto.", trustTitle: "Suporta sa specification mula Zhaoqing, Guangdong.", homeContactTitle: "Kumuha ng quotation na handa sa proyekto.", footerTagline: "Tumpak na door control para sa mga proyektong arkitektural sa buong mundo." },
    sw: { heroTitleOne: "Vifaa vya milango.", heroTitleTwo: "Vimechaguliwa kwa mradi wako.", trustTitle: "Msaada wa vipimo kutoka Zhaoqing, Guangdong.", homeContactTitle: "Pata bei iliyo tayari kwa mradi.", footerTagline: "Udhibiti sahihi wa milango kwa miradi ya usanifu duniani." },
  };

  Object.entries({ ...homepageCopy, ...homepageEssentials }).forEach(([code, values]) => {
    if (code === "en") Object.assign(EN, values);
    STRINGS[code] = { ...(STRINGS[code] || {}), ...values };
  });

  const RTL_LANGUAGES = new Set(["ar", "fa", "he", "ur"]);
  const socialLinks = [
    ["Facebook", "https://www.facebook.com/profile.php?id=100083240988881"],
    ["Instagram", "https://www.instagram.com/98.506460/"],
  ];

  document.querySelectorAll(".footer-inner").forEach((footer) => {
    if (footer.querySelector(".footer-social")) return;
    const social = document.createElement("div");
    social.className = "footer-social";
    socialLinks.forEach(([label, href]) => {
      const link = document.createElement("a");
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.append(label);
      const arrow = document.createElement("span");
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "↗";
      link.append(arrow);
      social.append(link);
    });
    footer.insertBefore(social, footer.lastElementChild);
  });

  const select = document.getElementById("language");
  let currentLanguage = "en";

  function getCopy(language = currentLanguage) {
    return { ...EN, ...(STRINGS[language] || {}) };
  }

  function applyLanguage(language, save = true) {
    const supported = LANGUAGES.some(([code]) => code === language);
    currentLanguage = supported ? language : "en";
    const copy = getCopy(currentLanguage);

    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : currentLanguage;
    document.documentElement.dir = RTL_LANGUAGES.has(currentLanguage) ? "rtl" : "ltr";

    document.querySelectorAll("[data-t]").forEach((element) => {
      const key = element.dataset.t;
      if (copy[key]) {
        element.textContent = copy[key];
      }
    });

    document.querySelectorAll("[data-t-aria]").forEach((element) => {
      const key = element.dataset.tAria;
      if (copy[key]) {
        element.setAttribute("aria-label", copy[key]);
      }
    });

    if (select) {
      select.value = currentLanguage;
      select.setAttribute("aria-label", copy.selectLanguage);
    }

    if (save) {
      try {
        localStorage.setItem("apex-lang", currentLanguage);
      } catch (_) {
        // Language persistence is optional when storage is unavailable.
      }
    }

    window.dispatchEvent(
      new CustomEvent("apex:languagechange", {
        detail: { language: currentLanguage, copy },
      }),
    );
  }

  if (select) {
    select.replaceChildren();
    LANGUAGES.forEach(([code, label]) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = label;
      select.append(option);
    });
    select.addEventListener("change", () => applyLanguage(select.value));
  }

  let savedLanguage = "en";
  try {
    savedLanguage = localStorage.getItem("apex-lang") || "en";
  } catch (_) {
    savedLanguage = "en";
  }
  applyLanguage(savedLanguage, false);

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  function setMenu(open) {
    if (!menuToggle || !mobileMenu) return;
    const copy = getCopy();
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? copy.menuClose : copy.menuOpen);
    mobileMenu.hidden = !open;
    document.body.classList.toggle("menu-open", open);
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });
    document.addEventListener("click", (event) => {
      if (
        menuToggle.getAttribute("aria-expanded") === "true" &&
        !mobileMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        setMenu(false);
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenu(false);
        menuToggle.focus();
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 900) setMenu(false);
    });
    setMenu(false);
  }

  const revealElements = [...document.querySelectorAll(".reveal")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (
    reducedMotion.matches ||
    !("IntersectionObserver" in window) ||
    revealElements.length === 0
  ) {
    revealElements.forEach((element) => element.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    revealElements.forEach((element) => observer.observe(element));
  }

  const progress = document.querySelector(".scroll-progress");
  if (progress) {
    let ticking = false;
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, percent / 100))})`;
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(updateProgress);
          ticking = true;
        }
      },
      { passive: true },
    );
    updateProgress();
  }

  const videos = [...document.querySelectorAll("video[data-viewport-play]")];
  if (videos.length && !reducedMotion.matches && "IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play().catch(() => {});
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.45 },
    );
    videos.forEach((video) => videoObserver.observe(video));
  }

  window.APEX_LANGUAGES = LANGUAGES;
  window.APEX_STRINGS = STRINGS;
  window.getApexCopy = getCopy;
})();
