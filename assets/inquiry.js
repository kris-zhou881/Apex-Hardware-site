(() => {
  "use strict";

  const whatsappNumber = "8618027164672";
  const animationDuration = 2700;
  const supplierTarget = 3000;
  const supportedLanguages = new Set([
    "en", "zh", "es", "ar", "fr", "de", "pt", "ru", "it", "nl", "tr", "ko", "ja",
    "hi", "th", "vi", "id", "ms", "pl", "uk", "fa", "he", "bn", "ur", "tl", "sw",
  ]);
  const rtlLanguages = new Set(["ar", "fa", "he", "ur"]);

  const COPY = {
    en: { milestoneEyebrow: "APEX HARDWARE · GLOBAL REACH", milestoneLabel: "suppliers served", name: "Name", company: "Company", country: "Country / region", quantity: "Estimated quantity", product: "Product / model", door: "Door weight / width", requirements: "Project requirements", submit: "Send inquiry via WhatsApp", note: "Your details are only transferred when WhatsApp opens.", status: "Your inquiry is ready in WhatsApp. Please press Send to complete it.", hello: "Hello Apex Hardware, I would like a quotation.", socialAria: "Apex Hardware social media", socialOpen: "Open Apex Hardware on", whatsappAria: "Contact Apex Hardware on WhatsApp" },
    zh: { milestoneEyebrow: "APEX HARDWARE · 全球合作", milestoneLabel: "家供应商已获得服务", name: "姓名", company: "公司", country: "国家 / 地区", quantity: "预计数量", product: "产品 / 型号", door: "门重 / 门宽", requirements: "项目要求", submit: "通过 WhatsApp 发送询价", note: "仅在 WhatsApp 打开后才会传输您的信息。", status: "询价内容已在 WhatsApp 中准备好，请点击发送完成询价。", hello: "您好 Apex Hardware，我想获取报价。", socialAria: "Apex Hardware 社交媒体", socialOpen: "在以下平台打开 Apex Hardware：", whatsappAria: "通过 WhatsApp 联系 Apex Hardware" },
    es: { milestoneEyebrow: "APEX HARDWARE · ALCANCE GLOBAL", milestoneLabel: "proveedores atendidos", name: "Nombre", company: "Empresa", country: "País / región", quantity: "Cantidad estimada", product: "Producto / modelo", door: "Peso / ancho de puerta", requirements: "Requisitos del proyecto", submit: "Enviar consulta por WhatsApp", note: "Sus datos solo se transfieren cuando se abre WhatsApp.", status: "La consulta está lista en WhatsApp. Pulse Enviar para completarla.", hello: "Hola Apex Hardware, quisiera solicitar un presupuesto.", socialAria: "Redes sociales de Apex Hardware", socialOpen: "Abrir Apex Hardware en", whatsappAria: "Contactar con Apex Hardware por WhatsApp" },
    ar: { milestoneEyebrow: "APEX HARDWARE · حضور عالمي", milestoneLabel: "مورّدًا تمّت خدمتهم", name: "الاسم", company: "الشركة", country: "الدولة / المنطقة", quantity: "الكمية المتوقعة", product: "المنتج / الموديل", door: "وزن الباب / عرضه", requirements: "متطلبات المشروع", submit: "إرسال الاستفسار عبر WhatsApp", note: "لا تُنقل بياناتك إلا عند فتح WhatsApp.", status: "استفسارك جاهز في WhatsApp. اضغط إرسال لإكماله.", hello: "مرحبًا Apex Hardware، أود الحصول على عرض سعر.", socialAria: "وسائل التواصل الاجتماعي لـ Apex Hardware", socialOpen: "افتح Apex Hardware على", whatsappAria: "تواصل مع Apex Hardware عبر WhatsApp" },
    fr: { milestoneEyebrow: "APEX HARDWARE · PRÉSENCE MONDIALE", milestoneLabel: "fournisseurs accompagnés", name: "Nom", company: "Société", country: "Pays / région", quantity: "Quantité estimée", product: "Produit / modèle", door: "Poids / largeur de porte", requirements: "Exigences du projet", submit: "Envoyer la demande via WhatsApp", note: "Vos informations ne sont transférées qu’à l’ouverture de WhatsApp.", status: "Votre demande est prête dans WhatsApp. Appuyez sur Envoyer pour terminer.", hello: "Bonjour Apex Hardware, je souhaite recevoir un devis.", socialAria: "Réseaux sociaux Apex Hardware", socialOpen: "Ouvrir Apex Hardware sur", whatsappAria: "Contacter Apex Hardware sur WhatsApp" },
    de: { milestoneEyebrow: "APEX HARDWARE · GLOBALE REICHWEITE", milestoneLabel: "betreute Lieferanten", name: "Name", company: "Unternehmen", country: "Land / Region", quantity: "Geschätzte Menge", product: "Produkt / Modell", door: "Türgewicht / -breite", requirements: "Projektanforderungen", submit: "Anfrage per WhatsApp senden", note: "Ihre Angaben werden erst beim Öffnen von WhatsApp übertragen.", status: "Ihre Anfrage ist in WhatsApp vorbereitet. Bitte drücken Sie zum Abschluss auf Senden.", hello: "Hallo Apex Hardware, ich möchte ein Angebot anfordern.", socialAria: "Soziale Medien von Apex Hardware", socialOpen: "Apex Hardware öffnen auf", whatsappAria: "Apex Hardware über WhatsApp kontaktieren" },
    pt: { milestoneEyebrow: "APEX HARDWARE · ALCANCE GLOBAL", milestoneLabel: "fornecedores atendidos", name: "Nome", company: "Empresa", country: "País / região", quantity: "Quantidade estimada", product: "Produto / modelo", door: "Peso / largura da porta", requirements: "Requisitos do projeto", submit: "Enviar consulta pelo WhatsApp", note: "Os seus dados só são transferidos quando o WhatsApp é aberto.", status: "A sua consulta está pronta no WhatsApp. Prima Enviar para concluir.", hello: "Olá Apex Hardware, gostaria de solicitar um orçamento.", socialAria: "Redes sociais da Apex Hardware", socialOpen: "Abrir Apex Hardware no", whatsappAria: "Contactar a Apex Hardware pelo WhatsApp" },
    ru: { milestoneEyebrow: "APEX HARDWARE · МЕЖДУНАРОДНЫЙ ОХВАТ", milestoneLabel: "поставщиков получили поддержку", name: "Имя", company: "Компания", country: "Страна / регион", quantity: "Ориентировочное количество", product: "Продукт / модель", door: "Вес / ширина двери", requirements: "Требования проекта", submit: "Отправить запрос в WhatsApp", note: "Ваши данные передаются только после открытия WhatsApp.", status: "Запрос готов в WhatsApp. Нажмите «Отправить», чтобы завершить.", hello: "Здравствуйте, Apex Hardware. Я хотел(а) бы получить предложение.", socialAria: "Социальные сети Apex Hardware", socialOpen: "Открыть Apex Hardware в", whatsappAria: "Связаться с Apex Hardware в WhatsApp" },
    it: { milestoneEyebrow: "APEX HARDWARE · PRESENZA GLOBALE", milestoneLabel: "fornitori serviti", name: "Nome", company: "Azienda", country: "Paese / regione", quantity: "Quantità stimata", product: "Prodotto / modello", door: "Peso / larghezza porta", requirements: "Requisiti del progetto", submit: "Invia richiesta via WhatsApp", note: "I dati vengono trasferiti solo all’apertura di WhatsApp.", status: "La richiesta è pronta in WhatsApp. Premi Invia per completarla.", hello: "Buongiorno Apex Hardware, vorrei ricevere un preventivo.", socialAria: "Social media Apex Hardware", socialOpen: "Apri Apex Hardware su", whatsappAria: "Contatta Apex Hardware su WhatsApp" },
    nl: { milestoneEyebrow: "APEX HARDWARE · WERELDWIJD BEREIK", milestoneLabel: "leveranciers ondersteund", name: "Naam", company: "Bedrijf", country: "Land / regio", quantity: "Geschatte hoeveelheid", product: "Product / model", door: "Deurgewicht / -breedte", requirements: "Projectvereisten", submit: "Aanvraag via WhatsApp verzenden", note: "Uw gegevens worden pas overgedragen wanneer WhatsApp wordt geopend.", status: "Uw aanvraag staat klaar in WhatsApp. Druk op Verzenden om af te ronden.", hello: "Hallo Apex Hardware, ik ontvang graag een offerte.", socialAria: "Sociale media van Apex Hardware", socialOpen: "Open Apex Hardware op", whatsappAria: "Neem contact op met Apex Hardware via WhatsApp" },
    tr: { milestoneEyebrow: "APEX HARDWARE · KÜRESEL ERİŞİM", milestoneLabel: "tedarikçiye hizmet", name: "Ad", company: "Şirket", country: "Ülke / bölge", quantity: "Tahmini miktar", product: "Ürün / model", door: "Kapı ağırlığı / genişliği", requirements: "Proje gereksinimleri", submit: "Talebi WhatsApp ile gönder", note: "Bilgileriniz yalnızca WhatsApp açıldığında aktarılır.", status: "Talebiniz WhatsApp’ta hazır. Tamamlamak için Gönder’e basın.", hello: "Merhaba Apex Hardware, fiyat teklifi almak istiyorum.", socialAria: "Apex Hardware sosyal medya", socialOpen: "Apex Hardware’ı şurada aç:", whatsappAria: "Apex Hardware ile WhatsApp’tan iletişime geç" },
    ko: { milestoneEyebrow: "APEX HARDWARE · 글로벌 네트워크", milestoneLabel: "개 공급업체 지원", name: "이름", company: "회사", country: "국가 / 지역", quantity: "예상 수량", product: "제품 / 모델", door: "도어 중량 / 폭", requirements: "프로젝트 요구사항", submit: "WhatsApp으로 문의 보내기", note: "WhatsApp이 열릴 때만 정보가 전송됩니다.", status: "문의 내용이 WhatsApp에 준비되었습니다. 보내기를 눌러 완료하세요.", hello: "안녕하세요 Apex Hardware, 견적을 받고 싶습니다.", socialAria: "Apex Hardware 소셜 미디어", socialOpen: "다음에서 Apex Hardware 열기:", whatsappAria: "WhatsApp으로 Apex Hardware에 문의" },
    ja: { milestoneEyebrow: "APEX HARDWARE · グローバルネットワーク", milestoneLabel: "社以上のサプライヤーに対応", name: "お名前", company: "会社名", country: "国 / 地域", quantity: "予定数量", product: "製品 / 型番", door: "ドア重量 / 幅", requirements: "プロジェクト要件", submit: "WhatsAppで問い合わせを送信", note: "情報はWhatsAppを開いた時点でのみ転送されます。", status: "問い合わせ内容をWhatsAppに用意しました。送信を押して完了してください。", hello: "Apex Hardwareへ、見積もりを希望します。", socialAria: "Apex Hardwareのソーシャルメディア", socialOpen: "Apex Hardwareを開く：", whatsappAria: "WhatsAppでApex Hardwareに連絡" },
    hi: { milestoneEyebrow: "APEX HARDWARE · वैश्विक पहुंच", milestoneLabel: "आपूर्तिकर्ताओं को सेवा", name: "नाम", company: "कंपनी", country: "देश / क्षेत्र", quantity: "अनुमानित मात्रा", product: "उत्पाद / मॉडल", door: "दरवाज़े का वजन / चौड़ाई", requirements: "परियोजना आवश्यकताएँ", submit: "WhatsApp से पूछताछ भेजें", note: "आपकी जानकारी केवल WhatsApp खुलने पर भेजी जाती है।", status: "आपकी पूछताछ WhatsApp में तैयार है। पूरा करने के लिए भेजें दबाएँ।", hello: "नमस्ते Apex Hardware, मुझे कोटेशन चाहिए।", socialAria: "Apex Hardware सोशल मीडिया", socialOpen: "Apex Hardware खोलें:", whatsappAria: "WhatsApp पर Apex Hardware से संपर्क करें" },
    th: { milestoneEyebrow: "APEX HARDWARE · เครือข่ายทั่วโลก", milestoneLabel: "ซัพพลายเออร์ที่ได้รับบริการ", name: "ชื่อ", company: "บริษัท", country: "ประเทศ / ภูมิภาค", quantity: "จำนวนโดยประมาณ", product: "สินค้า / รุ่น", door: "น้ำหนัก / ความกว้างประตู", requirements: "ความต้องการของโครงการ", submit: "ส่งคำถามผ่าน WhatsApp", note: "ข้อมูลจะถูกส่งต่อเมื่อเปิด WhatsApp เท่านั้น", status: "คำถามของคุณพร้อมใน WhatsApp แล้ว โปรดกดส่งเพื่อเสร็จสิ้น", hello: "สวัสดี Apex Hardware ฉันต้องการใบเสนอราคา", socialAria: "โซเชียลมีเดีย Apex Hardware", socialOpen: "เปิด Apex Hardware บน", whatsappAria: "ติดต่อ Apex Hardware ทาง WhatsApp" },
    vi: { milestoneEyebrow: "APEX HARDWARE · KẾT NỐI TOÀN CẦU", milestoneLabel: "nhà cung cấp đã được phục vụ", name: "Họ tên", company: "Công ty", country: "Quốc gia / khu vực", quantity: "Số lượng dự kiến", product: "Sản phẩm / mẫu", door: "Trọng lượng / chiều rộng cửa", requirements: "Yêu cầu dự án", submit: "Gửi yêu cầu qua WhatsApp", note: "Thông tin chỉ được chuyển khi WhatsApp mở.", status: "Yêu cầu đã sẵn sàng trong WhatsApp. Nhấn Gửi để hoàn tất.", hello: "Xin chào Apex Hardware, tôi muốn nhận báo giá.", socialAria: "Mạng xã hội Apex Hardware", socialOpen: "Mở Apex Hardware trên", whatsappAria: "Liên hệ Apex Hardware qua WhatsApp" },
    id: { milestoneEyebrow: "APEX HARDWARE · JANGKAUAN GLOBAL", milestoneLabel: "pemasok telah dilayani", name: "Nama", company: "Perusahaan", country: "Negara / wilayah", quantity: "Perkiraan jumlah", product: "Produk / model", door: "Berat / lebar pintu", requirements: "Kebutuhan proyek", submit: "Kirim pertanyaan via WhatsApp", note: "Data Anda hanya diteruskan saat WhatsApp dibuka.", status: "Pertanyaan Anda siap di WhatsApp. Tekan Kirim untuk menyelesaikan.", hello: "Halo Apex Hardware, saya ingin meminta penawaran.", socialAria: "Media sosial Apex Hardware", socialOpen: "Buka Apex Hardware di", whatsappAria: "Hubungi Apex Hardware melalui WhatsApp" },
    ms: { milestoneEyebrow: "APEX HARDWARE · JANGKAUAN GLOBAL", milestoneLabel: "pembekal telah dilayani", name: "Nama", company: "Syarikat", country: "Negara / wilayah", quantity: "Anggaran kuantiti", product: "Produk / model", door: "Berat / lebar pintu", requirements: "Keperluan projek", submit: "Hantar pertanyaan melalui WhatsApp", note: "Maklumat hanya dipindahkan apabila WhatsApp dibuka.", status: "Pertanyaan anda sedia dalam WhatsApp. Tekan Hantar untuk melengkapkan.", hello: "Helo Apex Hardware, saya ingin mendapatkan sebut harga.", socialAria: "Media sosial Apex Hardware", socialOpen: "Buka Apex Hardware di", whatsappAria: "Hubungi Apex Hardware melalui WhatsApp" },
    pl: { milestoneEyebrow: "APEX HARDWARE · GLOBALNY ZASIĘG", milestoneLabel: "obsłużonych dostawców", name: "Imię i nazwisko", company: "Firma", country: "Kraj / region", quantity: "Szacowana ilość", product: "Produkt / model", door: "Waga / szerokość drzwi", requirements: "Wymagania projektu", submit: "Wyślij zapytanie przez WhatsApp", note: "Dane są przekazywane dopiero po otwarciu WhatsApp.", status: "Zapytanie jest gotowe w WhatsApp. Naciśnij Wyślij, aby zakończyć.", hello: "Dzień dobry Apex Hardware, proszę o ofertę.", socialAria: "Media społecznościowe Apex Hardware", socialOpen: "Otwórz Apex Hardware w", whatsappAria: "Skontaktuj się z Apex Hardware przez WhatsApp" },
    uk: { milestoneEyebrow: "APEX HARDWARE · ГЛОБАЛЬНЕ ОХОПЛЕННЯ", milestoneLabel: "постачальників отримали підтримку", name: "Ім’я", company: "Компанія", country: "Країна / регіон", quantity: "Орієнтовна кількість", product: "Продукт / модель", door: "Вага / ширина дверей", requirements: "Вимоги проєкту", submit: "Надіслати запит у WhatsApp", note: "Дані передаються лише після відкриття WhatsApp.", status: "Запит готовий у WhatsApp. Натисніть «Надіслати», щоб завершити.", hello: "Вітаю, Apex Hardware. Я хочу отримати пропозицію.", socialAria: "Соціальні мережі Apex Hardware", socialOpen: "Відкрити Apex Hardware у", whatsappAria: "Зв’язатися з Apex Hardware у WhatsApp" },
    fa: { milestoneEyebrow: "APEX HARDWARE · گستره جهانی", milestoneLabel: "تأمین‌کننده خدمت‌گرفته", name: "نام", company: "شرکت", country: "کشور / منطقه", quantity: "تعداد تقریبی", product: "محصول / مدل", door: "وزن / عرض در", requirements: "نیازهای پروژه", submit: "ارسال درخواست با WhatsApp", note: "اطلاعات شما فقط هنگام باز شدن WhatsApp منتقل می‌شود.", status: "درخواست شما در WhatsApp آماده است. برای تکمیل، ارسال را بزنید.", hello: "سلام Apex Hardware، برای دریافت قیمت پیام می‌دهم.", socialAria: "شبکه‌های اجتماعی Apex Hardware", socialOpen: "باز کردن Apex Hardware در", whatsappAria: "تماس با Apex Hardware در WhatsApp" },
    he: { milestoneEyebrow: "APEX HARDWARE · פעילות גלובלית", milestoneLabel: "ספקים שקיבלו שירות", name: "שם", company: "חברה", country: "מדינה / אזור", quantity: "כמות משוערת", product: "מוצר / דגם", door: "משקל / רוחב הדלת", requirements: "דרישות הפרויקט", submit: "שליחת פנייה ב-WhatsApp", note: "הפרטים מועברים רק כאשר WhatsApp נפתח.", status: "הפנייה מוכנה ב-WhatsApp. יש ללחוץ על שליחה כדי להשלים.", hello: "שלום Apex Hardware, אשמח לקבל הצעת מחיר.", socialAria: "הרשתות החברתיות של Apex Hardware", socialOpen: "פתיחת Apex Hardware ב-", whatsappAria: "יצירת קשר עם Apex Hardware ב-WhatsApp" },
    bn: { milestoneEyebrow: "APEX HARDWARE · বৈশ্বিক সংযোগ", milestoneLabel: "সরবরাহকারীকে সেবা", name: "নাম", company: "কোম্পানি", country: "দেশ / অঞ্চল", quantity: "আনুমানিক পরিমাণ", product: "পণ্য / মডেল", door: "দরজার ওজন / প্রস্থ", requirements: "প্রকল্পের প্রয়োজনীয়তা", submit: "WhatsApp-এ জিজ্ঞাসা পাঠান", note: "WhatsApp খোলার পরেই আপনার তথ্য পাঠানো হয়।", status: "আপনার জিজ্ঞাসা WhatsApp-এ প্রস্তুত। সম্পূর্ণ করতে পাঠান চাপুন।", hello: "নমস্কার Apex Hardware, আমি একটি মূল্য প্রস্তাব চাই।", socialAria: "Apex Hardware সামাজিক মাধ্যম", socialOpen: "Apex Hardware খুলুন:", whatsappAria: "WhatsApp-এ Apex Hardware-এর সাথে যোগাযোগ" },
    ur: { milestoneEyebrow: "APEX HARDWARE · عالمی رسائی", milestoneLabel: "سپلائرز کو خدمات فراہم کی گئیں", name: "نام", company: "کمپنی", country: "ملک / خطہ", quantity: "متوقع مقدار", product: "پروڈکٹ / ماڈل", door: "دروازے کا وزن / چوڑائی", requirements: "پروجیکٹ کی ضروریات", submit: "WhatsApp کے ذریعے انکوائری بھیجیں", note: "آپ کی معلومات صرف WhatsApp کھلنے پر منتقل ہوتی ہیں۔", status: "آپ کی انکوائری WhatsApp میں تیار ہے۔ مکمل کرنے کے لیے بھیجیں دبائیں۔", hello: "سلام Apex Hardware، مجھے قیمت درکار ہے۔", socialAria: "Apex Hardware سوشل میڈیا", socialOpen: "Apex Hardware یہاں کھولیں:", whatsappAria: "WhatsApp پر Apex Hardware سے رابطہ کریں" },
    tl: { milestoneEyebrow: "APEX HARDWARE · PANDAIGDIGANG ABOT", milestoneLabel: "supplier na napagsilbihan", name: "Pangalan", company: "Kumpanya", country: "Bansa / rehiyon", quantity: "Tinatayang dami", product: "Produkto / modelo", door: "Bigat / lapad ng pinto", requirements: "Mga kailangan ng proyekto", submit: "Ipadala sa WhatsApp", note: "Maililipat lang ang detalye kapag binuksan ang WhatsApp.", status: "Handa na ang inquiry sa WhatsApp. Pindutin ang Send para matapos.", hello: "Hello Apex Hardware, nais kong humingi ng quotation.", socialAria: "Social media ng Apex Hardware", socialOpen: "Buksan ang Apex Hardware sa", whatsappAria: "Makipag-ugnayan sa Apex Hardware sa WhatsApp" },
    sw: { milestoneEyebrow: "APEX HARDWARE · HUDUMA DUNIANI", milestoneLabel: "wasambazaji waliohudumiwa", name: "Jina", company: "Kampuni", country: "Nchi / eneo", quantity: "Kiasi kinachokadiriwa", product: "Bidhaa / modeli", door: "Uzito / upana wa mlango", requirements: "Mahitaji ya mradi", submit: "Tuma ombi kupitia WhatsApp", note: "Taarifa zako huhamishwa tu WhatsApp inapofunguliwa.", status: "Ombi lako liko tayari WhatsApp. Bonyeza Tuma ili kukamilisha.", hello: "Habari Apex Hardware, ningependa kupata bei.", socialAria: "Mitandao ya kijamii ya Apex Hardware", socialOpen: "Fungua Apex Hardware kwenye", whatsappAria: "Wasiliana na Apex Hardware kupitia WhatsApp" },
  };

  function languageCode(value = document.documentElement.lang) {
    const code = String(value || "en").toLowerCase().split("-")[0];
    return supportedLanguages.has(code) ? code : "en";
  }

  let currentLanguage = languageCode();

  function copy() {
    return { ...COPY.en, ...(COPY[currentLanguage] || {}) };
  }

  function addRequiredMarker(label, input, value) {
    label.textContent = `${value}${input.required ? " *" : ""}`;
  }

  function localizeForms() {
    const text = copy();
    document.querySelectorAll(".inquiry-form").forEach((form) => {
      ["name", "company", "country", "quantity", "product", "door", "requirements"].forEach((field) => {
        const input = form.elements.namedItem(field);
        const label = input?.closest("label")?.querySelector(":scope > span");
        if (input && label) addRequiredMarker(label, input, text[field]);
        if (input && input.type !== "hidden") input.setAttribute("placeholder", text[field]);
      });

      const button = form.querySelector('button[type="submit"]');
      if (button) {
        button.textContent = text.submit;
        const arrow = document.createElement("span");
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = rtlLanguages.has(currentLanguage) ? "←" : "→";
        button.append(" ", arrow);
      }

      const note = form.querySelector(".form-note");
      if (note) note.textContent = text.note;
    });

    document.querySelectorAll(".floating-whatsapp").forEach((link) => {
      link.setAttribute("aria-label", text.whatsappAria);
    });
  }

  const socialLinks = [
    ["Facebook", "FB", "https://www.facebook.com/profile.php?id=100083240988881"],
    ["Instagram", "IG", "https://www.instagram.com/98.506460/"],
  ];

  function ensureFloatingSocial() {
    let floatingSocial = document.querySelector(".floating-social");
    if (!floatingSocial) {
      floatingSocial = document.createElement("div");
      floatingSocial.className = "floating-social";
      socialLinks.forEach(([label, shortLabel, href]) => {
        const link = document.createElement("a");
        link.className = `floating-social-link floating-${label.toLowerCase()}`;
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.dataset.socialLabel = label;
        const badge = document.createElement("span");
        badge.setAttribute("aria-hidden", "true");
        badge.textContent = shortLabel;
        const linkText = document.createElement("b");
        linkText.textContent = label;
        link.append(badge, linkText);
        floatingSocial.append(link);
      });
      document.body.append(floatingSocial);
    }

    const text = copy();
    floatingSocial.setAttribute("aria-label", text.socialAria);
    floatingSocial.querySelectorAll("[data-social-label]").forEach((link) => {
      link.setAttribute("aria-label", `${text.socialOpen} ${link.dataset.socialLabel}`);
    });
  }

  function formattedCount(value, plus = false) {
    let result;
    try {
      result = new Intl.NumberFormat(currentLanguage === "zh" ? "zh-CN" : currentLanguage).format(value);
    } catch (_) {
      result = new Intl.NumberFormat("en").format(value);
    }
    return plus ? `${result}+` : result;
  }

  let milestoneNumber;
  let milestoneEyebrow;
  let milestoneLabel;
  let milestoneAccessible;
  let animationStarted = false;
  let animationFinished = false;
  let visibleValue = 0;

  function localizeMilestone() {
    const text = copy();
    if (milestoneEyebrow) milestoneEyebrow.textContent = text.milestoneEyebrow;
    if (milestoneLabel) milestoneLabel.textContent = text.milestoneLabel;
    if (milestoneAccessible) milestoneAccessible.textContent = `${formattedCount(supplierTarget, true)} ${text.milestoneLabel}`;
    if (milestoneNumber) milestoneNumber.textContent = formattedCount(visibleValue, animationFinished);
  }

  function animateMilestone() {
    if (animationStarted || !milestoneNumber) return;
    animationStarted = true;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      visibleValue = supplierTarget;
      animationFinished = true;
      localizeMilestone();
      return;
    }

    const startedAt = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startedAt) / animationDuration, 1);
      visibleValue = Math.min(supplierTarget, Math.floor(supplierTarget * progress));
      milestoneNumber.textContent = formattedCount(visibleValue, progress === 1);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        animationFinished = true;
      }
    };
    requestAnimationFrame(step);
  }

  function ensureMilestone() {
    if (document.querySelector(".supplier-milestone")) return;
    const section = document.createElement("section");
    section.className = "supplier-milestone";
    section.setAttribute("aria-labelledby", "supplier-milestone-title");

    const container = document.createElement("div");
    container.className = "container supplier-milestone-inner";
    milestoneEyebrow = document.createElement("p");
    milestoneEyebrow.className = "eyebrow supplier-milestone-eyebrow";
    const content = document.createElement("div");
    content.className = "supplier-milestone-content";
    milestoneNumber = document.createElement("strong");
    milestoneNumber.className = "supplier-milestone-number";
    milestoneNumber.setAttribute("aria-hidden", "true");
    milestoneNumber.textContent = "0";
    milestoneLabel = document.createElement("h2");
    milestoneLabel.id = "supplier-milestone-title";
    milestoneLabel.className = "supplier-milestone-label";
    milestoneAccessible = document.createElement("span");
    milestoneAccessible.className = "sr-only";
    content.append(milestoneNumber, milestoneLabel, milestoneAccessible);
    container.append(milestoneEyebrow, content);
    section.append(container);

    const footer = document.querySelector(".site-footer");
    if (footer) footer.before(section);
    else document.body.append(section);
    localizeMilestone();

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        animateMilestone();
      }, { threshold: 0.35 });
      observer.observe(section);
    } else {
      animateMilestone();
    }
  }

  ensureFloatingSocial();
  ensureMilestone();
  localizeForms();

  window.addEventListener("apex:languagechange", (event) => {
    currentLanguage = languageCode(event.detail?.language);
    ensureFloatingSocial();
    localizeMilestone();
    localizeForms();
  });

  document.querySelectorAll(".inquiry-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const text = copy();
      const data = new FormData(form);
      const labels = [
        ["product", text.product],
        ["name", text.name],
        ["company", text.company],
        ["country", text.country],
        ["quantity", text.quantity],
        ["door", text.door],
        ["requirements", text.requirements],
      ];
      const lines = [text.hello];
      labels.forEach(([key, label]) => {
        const value = String(data.get(key) || "").trim();
        if (value) lines.push(`${label}: ${value}`);
      });

      window.apexTrack?.("generate_lead", {
        lead_source: "website_rfq",
        product: String(data.get("product") || ""),
        country: String(data.get("country") || ""),
      }, "Lead");
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
      const status = form.querySelector(".form-status");
      if (status) status.textContent = text.status;
    });
  });
})();
