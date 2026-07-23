(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const EN = {
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
      navFloorSprings: "地弹簧",
      engineering: "工程技术",
      quality: "品质",
      location: "公司地址",
      quote: "获取报价",
      heroEyebrow: "APEX HARDWARE · 精密门控",
      heroLineOne: "隐于地面。",
      heroLineTwo: "精准掌控每次开合。",
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
      navFloorSprings: values[0],
      seriesTitle: values[0],
      seriesPageTitle: values[0],
      engineering: values[1],
      quality: values[2],
      location: values[3],
      quote: values[4],
    };
  });

  const RTL_LANGUAGES = new Set(["ar", "fa", "he", "ur"]);
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
