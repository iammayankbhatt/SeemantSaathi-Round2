

const TRANSLATIONS = {
    en: {

        nav_home: "Home",
        nav_checker: "Symptom Checker",
        nav_doctors: "Find Doctors",
        btn_login: "Get OTP",
        btn_verify: "Verify",
        btn_book_appt: "Book Appointment",
        nav_hospital: "Hospitals",
        nav_contact: "Contact",
        nav_for_doctors: "For Doctors",
        nav_about_us: "About Us",


        tab_login: "Login",
        tab_about: "About Website",


        brand_name: "SeemantSaathi",
        header_tagline: "Doctor tak seedha raasta | Predict. Connect. Care",


        emergency_text: "EMERGENCY: 108",
        header_welcome_prefix: "Welcome, ",


        hero_title: "Connecting Every Village <br> To Better Health",
        hero_subtitle: "Bridging the gap between rural communities and expert medical care with compassion.",


        login_title: "Patient Login",
        login_subtitle: "Access your digital health records",
        full_name: "Patient Name",
        mobile_num: "Mobile Number",
        enter_otp: "Enter OTP",


        coe_title: "Centers of Excellence",
        coe_subtitle: "Bringing specialized medical expertise to your doorstep.",

        card_symptom_title: "Symptom Checker",
        card_symptom_desc: "Instant analysis of your health symptoms using advanced AI technology specific to rural health needs.",
        card_symptom_btn: "CHECK NOW",

        card_doctor_title: "Find Doctors",
        card_doctor_desc: "Locate the nearest government hospitals, private clinics, and specialists in Bhimtal.",
        card_doctor_btn: "FIND DOCTOR",

        card_community_title: "Community Health",
        card_community_desc: "Dedicated programs for maternal care, vaccination drives, and seasonal disease prevention.",
        card_community_btn: "LEARN MORE",


        stories_title: "Patient Stories",
        stories_subtitle: "Hear from the people of Bhimtal who trust us.",
        story_1_text: "I was worried about my father's chest pain. SeemantSaathi guided us immediately to the right cardiologist nearby. It saved precious time.",
        story_1_role: "Farmer, Bhimtal",
        story_2_text: "The symptom checker works in Hindi! It helped me understand that I just had a viral fever and not something worse. Very relieving.",
        story_2_role: "Teacher, Bhimtal",


        footer_about: "About SeemantSaathi",
        footer_quick: "Quick Links",
        footer_desc: "Connecting rural India with expert healthcare. Predict symptoms, find doctors, and get first aid instantly.",
        footer_about_desc: "SeemantSaathi is a health companion for every rural family, bridging the doctor-patient gap with technology.",
        footer_core_stack: "Core Stack:",
        footer_stack_list: "Leaflet Maps, OpenStreetMap, Vanilla JS",
        footer_features_title: "Unique Features",
        feat_rural: "Rural-First Design (Works on 2G/3G)",
        feat_ai: "AI That Understands India",
        feat_govt: "Government Integration Ready",
        feat_privacy: "Privacy & Trust Focused",
        footer_impact_title: "Real-World Impact",
        impact_patient: "For Patients: Save time & money",
        impact_doctor: "For Doctors: Reach more patients",
        impact_govt: "For Government: Better health insights",
        footer_copyright: "&copy; 2025 SeemantSaathi - AI-Powered Rural Symptom Checker with Telemedicine Routing",
        footer_centers_title: "Our Centers",
        center_bhimtal: "Bhimtal",


        symptom_page_title: "AI Symptom Analysis",
        symptom_page_desc: "Select your symptoms below to get an instant preliminary health assessment.",
        label_feeling: "What are you feeling?",
        label_notes: "Additional Notes (Optional)",
        placeholder_notes: "Describe pain location or duration...",
        btn_analyze: "ANALYZE SYMPTOMS",
        report_title: "Analysis Report",
        btn_find_now: "Find a Doctor Now",


        doctor_page_title: "Specialists Near You",
        doctor_page_desc: "Locate trusted hospitals and clinics in your vicinity.",
        search_summary: "Found {count} doctors/clinics near you (Bhimtal, Uttarakhand)",
        available_now: "Available Today",
        available_247: "Open 24/7",
        available_video: "Available Now",
        closed: "Closed",
        label_wait_time: "Wait Time",
        label_consultation: "Consultation",
        label_distance: "Distance",
        label_video_consult: "Video Consultation",
        btn_call: "Call Now",
        btn_book: "Book Appointment",
        btn_visit: "Visit Directly",
        btn_telemedicine: "Telemedicine",
        btn_start_video: "Start Video Call",
        btn_book_now: "Book Now",
        currency_symbol: "₹",
        free_text: "Free",


        nav_firstaid: "First Aid Guide",
        fa_title: "First Aid Guide",
        fa_cuts_title: "1. Cuts and Wounds",
        fa_cuts_1: "Wash hands before touching the wound.",
        fa_cuts_2: "Clean with clean water.",
        fa_cuts_3: "Apply antiseptic.",
        fa_cuts_4: "Cover with a sterile bandage.",
        fa_burns_title: "2. Burns",
        fa_burns_1: "Cool the burn under running water (10-20 min).",
        fa_burns_2: "Do not apply ice, oil, or toothpaste.",
        fa_burns_3: "Cover loosely with a clean cloth.",
        fa_burns_4: "Seek medical help for severe burns.",
        fa_bleeding_title: "3. Bleeding",
        fa_bleeding_1: "Apply direct pressure using a clean cloth.",
        fa_bleeding_2: "Elevate the injured part if possible.",
        fa_bleeding_3: "Do not remove deeply embedded objects.",
        fa_bleeding_4: "Get medical help if bleeding doesn’t stop.",
        fa_diarrhea_title: "4. Diarrhea",
        fa_diarrhea_1: "Drink ORS solution.",
        fa_diarrhea_2: "Avoid solid food initially.",
        fa_diarrhea_3: "Stay hydrated with clear fluids.",
        fa_diarrhea_4: "Consult a doctor if it lasts more than 24h.",
        fa_sprains_title: "5. Sprains and Strains",
        fa_sprains_1: "Rest the injured part.",
        fa_sprains_2: "Apply ice for 20 min every 2-3 hours.",
        fa_sprains_3: "Compress with an elastic bandage.",
        fa_sprains_4: "Elevate the injured limb.",
        fa_fractures_title: "6. Fractures",
        fa_fractures_1: "Do not move the injured part.",
        fa_fractures_2: "Support with a splint or cloth.",
        fa_fractures_3: "Apply ice pack wrapped in cloth.",
        fa_fractures_4: "Take the person to a hospital.",
        fa_fainting_title: "7. Fainting",
        fa_fainting_1: "Lay the person down.",
        fa_fainting_2: "Raise legs slightly.",
        fa_fainting_3: "Loosen tight clothing.",
        fa_fainting_4: "Sprinkle water on face if needed.",
        fa_choking_title: "8. Choking",
        fa_choking_1: "Encourage coughing if mild.",
        fa_choking_2: "For severe: perform abdominal thrusts.",
        fa_choking_3: "Call emergency services if unsuccessful.",
        fa_fever_title: "9. Fever",
        fa_fever_1: "Give plenty of fluids.",
        fa_fever_2: "Use a cool compress.",
        fa_fever_3: "Do not overdress the person.",
        fa_fever_4: "Consult a doctor if fever persists.",
        fa_snake_title: "10. Snake Bite",
        fa_snake_1: "Keep the person calm and still.",
        fa_snake_2: "Immobilize the bitten limb.",
        fa_snake_3: "Do NOT cut, suck, or apply tourniquet.",
        fa_snake_4: "Rush to the nearest hospital.",
        fa_nose_title: "11. Nosebleed",
        fa_nose_1: "Sit upright and lean forward.",
        fa_nose_2: "Pinch the nose for 10 minutes.",
        fa_nose_3: "Do not tilt head backward.",
        fa_nose_4: "Seek medical care if bleeding continues.",
        fa_heat_title: "12. Heat Stroke",
        fa_heat_1: "Move person to a cool place.",
        fa_heat_2: "Remove excess clothing.",
        fa_heat_3: "Apply cool water or wet cloth.",
        fa_heat_4: "Seek emergency medical help.",
        nav_hospital: "Hospitals",
        nav_contact: "Contact",
        nav_for_doctors: "For Doctors",
        nav_about_us: "About Us",


        fa_dos_title: "Important Do’s",
        fa_donts_title: "Don’ts",
        fa_emergency_title: "Emergency Numbers (India)",
        fa_do_1: "Stay calm",
        fa_do_2: "Call emergency services when needed",
        fa_do_3: "Use clean materials",
        fa_do_4: "Reassure the person",
        fa_dont_1: "Don’t give food or drink to unconscious person",
        fa_dont_2: "Don’t move a person with spinal injury",
        fa_dont_3: "Don’t apply home remedies to serious injuries",


        logout_btn: "Logout",
        login_welcome: "Welcome Back",
        no_account: "New here?",
        create_account: "Create Account",
        otp_sent_to: "OTP sent to",
        btn_verify_login: "Verify & Login",
        story_author_1: "Rajesh Kumar",
        story_author_2: "Sunita Devi",
        story_author_2: "Sunita Devi",
        emergency_108: "Ambulance: <strong>108</strong>",
        emergency_112: "Emergency: <strong>112</strong>",
        modal_attention: "Attention",
        modal_severity_body: "Your symptoms indicate a condition that may require immediate attention.",
        btn_consult_now: "Consult Doctor Now",
        msg_call_applied: "Call Applied Successfully!",
        msg_appt_booked: "Appointment Booked Successfully!",
        msg_otp_sent: "OTP sent to {mobile} (Default: 1234)",
        msg_login_success: "Login Successful!",
        msg_invalid_otp: "Invalid OTP",
        msg_logout_success: "Logged out successfully",
        welcome_back: "Welcome",
        welcome_helper: "SeemantSaathi is here to help you, today and always.",
        welcome_quote: "Your well-being is our primary mission. Together, we're bringing expert healthcare to the heart of Bhimtal, ensuring a healthier and happier future for you and your family.",


        btn_confirm: "Confirm",
        msg_select_symptom: "Please select at least one symptom.",
        map_your_location: "Your Location",
        label_distance_prefix: "Distance",
        placeholder_name_example: "e.g. Ram Singh",
        placeholder_mobile_example: "98765 43210",
        placeholder_otp_example: "1234"
    },
    hi: {

        nav_home: "मुखपृष्ठ",
        nav_checker: "लक्षण जाँच",
        nav_doctors: "डॉक्टर खोजें",
        btn_login: "ओटीपी भेजें",
        btn_verify: "सत्यापित करें",
        btn_book_appt: "अपॉइंटमेंट बुक करें",
        nav_hospital: "अस्पताल",
        nav_contact: "संपर्क",
        nav_for_doctors: "डॉक्टरों के लिए",
        nav_about_us: "हमारे बारे में",


        tab_login: "लॉगिन",
        tab_about: "वेबसाइट के बारे में",


        brand_name: "सीमांतसाथी",
        header_tagline: "डॉक्टर तक सीधा रास्ता | प्रीडिक्ट। कनेक्ट। केयर",


        emergency_text: "आपातकालीन: 108",
        header_welcome_prefix: "नमस्ते, ",
        nav_hospital: "अस्पताल",
        nav_contact: "संपर्क",
        nav_for_doctors: "डॉक्टरों के लिए",
        nav_about_us: "हमारे बारे में",


        hero_title: "हर गाँव को <br> बेहतर स्वास्थ्य से जोड़ना",
        hero_subtitle: "ग्रामीण समुदायों और विशेषज्ञ चिकित्सा देखभाल के बीच की दूरी को करुणा के साथ पाटना।",


        login_title: "रोगी लॉगिन",
        login_subtitle: "अपने डिजिटल स्वास्थ्य रिकॉर्ड तक पहुँचें",
        full_name: "रोगी का नाम",
        mobile_num: "मोबाइल नंबर",
        enter_otp: "ओटीपी दर्ज करें",


        coe_title: "उत्कृष्टता के केंद्र",
        coe_subtitle: "विशेष चिकित्सा विशेषज्ञता आपके द्वार पर ला रहे हैं।",

        card_symptom_title: "लक्षण चेकर",
        card_symptom_desc: "ग्रामीण स्वास्थ्य आवश्यकताओं के लिए उन्नत एआई तकनीक का उपयोग करके आपके स्वास्थ्य लक्षणों का तत्काल विश्लेषण।",
        card_symptom_btn: "अभी जांचें",

        card_doctor_title: "डॉक्टर खोजें",
        card_doctor_desc: "भीमताल में निकटतम सरकारी अस्पतालों, निजी क्लीनिकों और विशेषज्ञों का पता लगाएं।",
        card_doctor_btn: "डॉक्टर खोजें",

        card_community_title: "सामुदायिक स्वास्थ्य",
        card_community_desc: "मातृत्व देखभाल, टीकाकरण अभियान और मौसमी बीमारी की रोकथाम के लिए समर्पित कार्यक्रम।",
        card_community_btn: "और जानें",


        stories_title: "रोगियों की कहानियाँ",
        stories_subtitle: "भीमताल के उन लोगों से सुनें जो हम पर भरोसा करते हैं।",
        story_1_text: "मैं अपने पिता के सीने में दर्द को लेकर चिंतित था। सीमांतसाथी ने हमें तुरंत पास के सही हृदय रोग विशेषज्ञ के पास निर्देशित किया। इसने कीमती समय बचाया।",
        story_1_role: "किसान, भीमताल",
        story_2_text: "लक्षण चेकर हिंदी में काम करता है! इसने मुझे यह समझने में मदद की कि मुझे सिर्फ वायरल बुखार था और कुछ भी बुरा नहीं। बहुत राहत मिली।",
        story_2_role: "शिक्षक, भीमताल",


        footer_about: "सीमांतसाथी के बारे में",
        footer_quick: "त्वरित लिंक",
        footer_desc: "ग्रामीण भारत को विशेषज्ञ स्वास्थ्य सेवा से जोड़ना। लक्षणों का पूर्वानुमान लगाएं, डॉक्टर खोजें और तुरंत प्राथमिक चिकित्सा प्राप्त करें।",
        footer_about_desc: "सीमांतसाथी हर ग्रामीण परिवार के लिए एक स्वास्थ्य साथी है, जो तकनीक के साथ डॉक्टर-रोगी की दूरी को कम करता है।",
        footer_core_stack: "कोर स्टैक:",
        footer_stack_list: "HTML/CSS/JS, Node.js, Python, PostgreSQL",
        footer_features_title: "अनूठी विशेषताएं",
        feat_rural: "ग्रामीण-प्रथम डिज़ाइन (2G/3G पर काम करता है)",
        feat_ai: "AI जो भारत को समझता है",
        feat_govt: "सरकारी एकीकरण के लिए तैयार",
        feat_privacy: "गोपनीयता और विश्वास केंद्रित",
        footer_impact_title: "वास्तविक दुनिया का प्रभाव",
        impact_patient: "रोगियों के लिए: समय और पैसा बचाएं",
        impact_doctor: "डॉक्टरों के लिए: अधिक रोगियों तक पहुंचें",
        impact_govt: "सरकार के लिए: बेहतर स्वास्थ्य अंतर्दृष्टि",
        footer_copyright: "&copy; 2025 सीमांतसाथी - एआई-संचालित ग्रामीण लक्षण चेकर और टेलीमेडिसिन रूटिंग",
        footer_centers_title: "हमारे केंद्र",
        center_bhimtal: "भीमताल",


        symptom_page_title: "एआई लक्षण विश्लेषण",
        symptom_page_desc: "तत्काल प्रारंभिक स्वास्थ्य मूल्यांकन प्राप्त करने के लिए नीचे अपने लक्षणों का चयन करें।",
        label_feeling: "आप कैसा महसूस कर रहे हैं?",
        label_notes: "अतिरिक्त नोट्स (वैकल्पिक)",
        placeholder_notes: "दर्द का स्थान या अवधि बताएं...",
        btn_analyze: "लक्षणों का विश्लेषण करें",
        report_title: "विश्लेषण रिपोर्ट",
        btn_find_now: "अभी डॉक्टर खोजें",


        doctor_page_title: "आपके पास विशेषज्ञ",
        doctor_page_desc: "अपने आसपास के विश्वसनीय अस्पतालों और क्लीनिकों का पता लगाएं।",
        search_summary: "{count} डॉक्टर/क्लीनिक आपके पास मिले (भीमताल, उत्तराखंड)",
        available_now: "आज उपलब्ध है",
        available_247: "24/7 खुला है",
        available_video: "अभी उपलब्ध है",
        closed: "बंद है",
        label_wait_time: "प्रतीक्षा समय",
        label_consultation: "परामर्श शुल्क",
        label_distance: "दूरी",
        label_video_consult: "वीडियो परामर्श",
        btn_call: "अभी कॉल करें",
        btn_book: "अपॉइंटमेंट बुक करें",
        btn_visit: "सीधे जाएं",
        btn_telemedicine: "टेलीमेडिसिन",
        btn_start_video: "वीडियो कॉल शुरू करें",
        btn_book_now: "अभी बुक करें",
        currency_symbol: "₹",
        free_text: "निःशुल्क",


        nav_firstaid: "प्राथमिक चिकित्सा",
        fa_title: "प्राथमिक चिकित्सा गाइड",
        fa_cuts_title: "1. कट और घाव",
        fa_cuts_1: "साबुन और पानी से साफ करें",
        fa_cuts_2: "रक्तस्राव रोकने के लिए दबाव डालें",
        fa_cuts_3: "एंटीसेप्टिक क्रीम का प्रयोग करें",
        fa_cuts_4: "साफ पट्टी से ढकें",
        fa_burns_title: "2. मामूली जलन",
        fa_burns_1: "जले हुए स्थान को बहते पानी से ठंडा करें",
        fa_burns_2: "कीटाणुरहित धुंध (Gauze) से ढकें",
        fa_burns_3: "सीधे बर्फ न लगाएं",
        fa_burns_4: "फोले न फोड़ें",
        fa_bleeding_title: "3. रक्तस्राव",
        fa_bleeding_1: "एक साफ कपड़े का उपयोग करके सीधा दबाव डालें।",
        fa_bleeding_2: "यदि संभव हो तो घायल हिस्से को ऊपर उठाएं।",
        fa_bleeding_3: "गहराई से धंसे हुए वस्तुओं को न निकालें।",
        fa_bleeding_4: "यदि रक्तस्राव नहीं रुकता है तो चिकित्सा सहायता लें।",
        fa_diarrhea_title: "4. दस्त",
        fa_diarrhea_1: "ओआरएस घोल पिएं",
        fa_diarrhea_2: "शुरुआत में ठोस भोजन से बचें",
        fa_diarrhea_3: "साफ तरल पदार्थों से हाइड्रेटेड रहें",
        fa_diarrhea_4: "24 घंटे से अधिक होने पर डॉक्टर से मिलें",
        fa_sprains_title: "5. मोच और तनाव",
        fa_sprains_1: "चोट वाले हिस्से को आराम दें",
        fa_sprains_2: "हर 2-3 घंटे में 20 मिनट के लिए बर्फ लगाएं",
        fa_sprains_3: "इलास्टिक बैंडेज से कंप्रेस करें",
        fa_sprains_4: "चोट वाले अंग को ऊपर उठाएं",
        fa_fractures_title: "6. हड्डी टूटना (फ्रैक्चर)",
        fa_fractures_1: "घायल हिस्से को न हिलाएं।",
        fa_fractures_2: "स्प्लिंट या कपड़े से सहारा दें।",
        fa_fractures_3: "कपड़े में लपेटा हुआ बर्फ का पैक लगाएं।",
        fa_fractures_4: "व्यक्ति को अस्पताल ले जाएं।",
        fa_fainting_title: "7. बेहोशी",
        fa_fainting_1: "व्यक्ति को लिटा दें।",
        fa_fainting_2: "पैरों को थोड़ा ऊपर उठाएं।",
        fa_fainting_3: "तंग कपड़े ढीले करें।",
        fa_fainting_4: "यदि आवश्यक हो तो चेहरे पर पानी छिड़कें।",
        fa_choking_title: "8. गला घोंटना (Choking)",
        fa_choking_1: "हल्का होने पर खांसने के लिए प्रोत्साहित करें।",
        fa_choking_2: "गंभीर: पेट के बल धक्का (एब्डोमिनल थ्रस्ट) दें।",
        fa_choking_3: "असफल होने पर आपातकालीन सेवाओं को कॉल करें।",
        fa_fever_title: "9. बुखार प्रबंधन",
        fa_fever_1: "खूब तरल पदार्थ पिएं",
        fa_fever_2: "निर्देशानुसार पैरासिटामोल लें",
        fa_fever_3: "माथे पर ठंडी पट्टी का प्रयोग करें",
        fa_fever_4: "आराम करें और परिश्रम से बचें",
        fa_snake_title: "10. सांप का काटना",
        fa_snake_1: "व्यक्ति को शांत और स्थिर रखें।",
        fa_snake_2: "काटे गए अंग को हिलाएं-डुलाएं नहीं।",
        fa_snake_3: "काटें, चूसें या टूर्निकेट (कसकर पट्टी) न बांधें।",
        fa_snake_4: "तुरंत नजदीकी अस्पताल ले जाएं।",
        fa_nose_title: "11. नकसीर (नाक से खून आना)",
        fa_nose_1: "सीधे बैठें और आगे की ओर झुकें।",
        fa_nose_2: "10 मिनट के लिए नाक को पिंच करें।",
        fa_nose_3: "सिर को पीछे न झुकाएं।",
        fa_nose_4: "यदि रक्तस्राव जारी रहता है तो चिकित्सा देखभाल लें।",
        fa_heat_title: "12. लू लगना (Heat Stroke)",
        fa_heat_1: "ठंडी जगह पर जाएं",
        fa_heat_2: "अतिरिक्त कपड़े हटा दें",
        fa_heat_3: "ठंडे गीले कपड़ों का प्रयोग करें",
        fa_heat_4: "धीरे-धीरे ठंडा पानी पिएं",


        fa_dos_title: "क्या करें (Do's)",
        fa_donts_title: "क्या न करें (Don'ts)",
        fa_do_1: "शांत रहें",
        fa_do_2: "जरूरत पड़ने पर आपातकालीन सेवाओं को कॉल करें",
        fa_do_3: "साफ सामग्री का उपयोग करें",
        fa_do_4: "घायल व्यक्ति को ढाढ़स बंधाएं",
        fa_dont_1: "बेहोश व्यक्ति को खाना या पानी न दें",
        fa_dont_2: "रीढ़ की हड्डी में चोट वाले व्यक्ति को न हिलाएं",
        fa_dont_3: "गंभीर चोटों पर घरेलू नुस्खे न आजमाएं",


        fa_emergency_title: "आपातकालीन नंबर (भारत)",


        logout_btn: "लॉगआउट",
        login_welcome: "नमस्ते, स्वागत है",
        no_account: "यहाँ नए हैं?",
        create_account: "खाता बनाएँ",
        otp_sent_to: "ओटीपी भेजा गया",
        btn_verify_login: "सत्यापित करें और लॉगिन करें",
        story_author_1: "राजेश कुमार",
        story_author_2: "सुनीता देवी",
        story_author_2: "सुनीता देवी",
        emergency_108: "एम्बुलेंस: <strong>108</strong>",
        emergency_112: "आपातकालीन: <strong>112</strong>",
        modal_attention: "सावधान",
        modal_severity_body: "आपके लक्षण एक गंभीर स्थिति का संकेत देते हैं।",
        btn_consult_now: "अभी डॉक्टर से मिलें",
        msg_call_applied: "कॉल सफलतापूर्वक लगाया गया!",
        msg_appt_booked: "अपॉइंटमेंट सफलतापूर्वक बुक किया गया!",
        msg_otp_sent: "ओटीपी {mobile} पर भेजा गया (डिफ़ॉल्ट: 1234)",
        msg_login_success: "लॉगिन सफल!",
        msg_invalid_otp: "अमान्य ओटीपी",
        msg_logout_success: "सफलतापूर्वक लॉग आउट किया गया",
        welcome_back: "स्वागत है",
        welcome_helper: "सीमांतसाथी आज और हमेशा आपकी मदद के लिए यहाँ है।",
        welcome_quote: "आपका कल्याण हमारा प्राथमिक मिशन है। साथ मिलकर, हम भीमताल के हृदय में विशेषज्ञ स्वास्थ्य सेवा ला रहे हैं, यह सुनिश्चित करते हुए कि आपके और आपके परिवार के लिए एक स्वस्थ और सुखी भविष्य हो।",


        btn_confirm: "पुष्टि करें",
        msg_select_symptom: "कृपया कम से कम एक लक्षण चुनें।",
        map_your_location: "आपकी स्थिति",
        label_distance_prefix: "दूरी",
        placeholder_name_example: "जैसे राम सिंह",
        placeholder_mobile_example: "98765 43210",
        placeholder_otp_example: "1234"
    }
};


let currentLang = localStorage.getItem('preferredLang') || 'en';


window.switchTab = function (tabName) {
    const loginView = document.getElementById('view-login');
    const welcomeView = document.getElementById('view-welcome');
    const aboutView = document.getElementById('view-about');
    const navHome = document.getElementById('nav-link-home');
    const navAbout = document.getElementById('nav-link-about');
    const isAuth = localStorage.getItem('user_authenticated') === 'true';

    if (tabName === 'login') {
        if (aboutView) aboutView.style.display = 'none';
        if (navHome) navHome.classList.add('active');
        if (navAbout) navAbout.classList.remove('active');


        if (isAuth) {
            if (loginView) loginView.style.display = 'none';
            if (welcomeView) welcomeView.style.display = 'block';
        } else {
            if (loginView) loginView.style.display = 'block';
            if (welcomeView) welcomeView.style.display = 'none';
        }
    } else {
        if (loginView) loginView.style.display = 'none';
        if (welcomeView) welcomeView.style.display = 'none';
        if (aboutView) aboutView.style.display = 'block';
        if (navHome) navHome.classList.remove('active');
        if (navAbout) navAbout.classList.add('active');
    }
};



const SYMPTOMS = [
    { id: 'fever', name: 'Fever', name_hi: 'बुखार' },
    { id: 'cough', name: 'Cough', name_hi: 'खांसी' },
    { id: 'headache', name: 'Headache', name_hi: 'सिरदर्द' },
    { id: 'fatigue', name: 'Fatigue', name_hi: 'थकान' },
    { id: 'body_pain', name: 'Body Pain', name_hi: 'बदन दर्द' },
    { id: 'nausea', name: 'Nausea', name_hi: 'जी मिचलाना' },
    { id: 'dizziness', name: 'Dizziness', name_hi: 'चक्कर आना' },
    { id: 'short_breath', name: 'Shortness of Breath', name_hi: 'सांस की तकलीफ' },
    { id: 'sore_throat', name: 'Sore Throat', name_hi: 'गले में खराश' },
    { id: 'chills', name: 'Chills', name_hi: 'ठंड लगना' }
];

const DOCTORS = [
    {
        id: 1,
        name: "Dr. Ramesh Sharma",
        name_hi: "डॉ. रमेश शर्मा",
        specialization: "General Physician",
        specialization_hi: "सामान्य चिकित्सक",
        distance: "5km",
        lat: 29.3475,
        lng: 79.5530,
        available: true,
        availability_key: 'available_now',
        wait_time: "15 mins",
        fee: "200",
        phone: "05942-234567",
        actions: ['call', 'book']
    },
    {
        id: 2,
        name: "Bhimtal Community Health Centre",
        name_hi: "भीमताल सामुदायिक स्वास्थ्य केंद्र",
        specialization: "Government Hospital",
        specialization_hi: "सरकारी अस्पताल",
        distance: "8km",
        lat: 29.3500,
        lng: 79.5600,
        available: true,
        availability_key: 'available_247',
        wait_time: "45 mins",
        fee: "0",
        phone: "05942-123456",
        actions: ['call', 'visit', 'telemedicine']
    },
    {
        id: 3,
        name: "Dr. Priya Verma",
        name_hi: "डॉ. प्रिया वर्मा",
        specialization: "Telemedicine Specialist",
        specialization_hi: "टेलीमेडिसिन विशेषज्ञ",
        distance: "12km",
        lat: 29.3400,
        lng: 79.5400,
        available: true,
        availability_key: 'available_video',
        wait_time: "0 mins",
        fee: "150",
        phone: "05942-987654",
        is_video: true,
        actions: ['video', 'book_now']
    }
];

const CONDITIONS = {
    'fever,cough,headache': { name: 'Viral Fever', name_hi: 'वायरल बुखार', severity: 'Medium', probability: '85%' },
    'fever,body_pain,chills': { name: 'Malaria', name_hi: 'मलेरिया', severity: 'High', probability: '70%' },
    'cough,short_breath': { name: 'Respiratory Infection', name_hi: 'श्वसन संक्रमण', severity: 'High', probability: '60%' },
    'default': { name: 'General Fatigue', name_hi: 'सामान्य थकान', severity: 'Low', probability: '50%' }
};

const firstAidList = [
    { key: 'cuts', icon: 'medkit' },
    { key: 'burns', icon: 'flame' },
    { key: 'bleeding', icon: 'water' },
    { key: 'diarrhea', icon: 'leaf' },
    { key: 'sprains', icon: 'accessibility' },
    { key: 'fractures', icon: 'body' },
    { key: 'fainting', icon: 'eye-off' },
    { key: 'choking', icon: 'hand-left' },
    { key: 'fever', icon: 'thermometer' },
    { key: 'snake', icon: 'alert-circle' },
    { key: 'nose', icon: 'water' },
    { key: 'heat', icon: 'sunny' }
];

document.addEventListener('DOMContentLoaded', () => {

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        const langText = currentLang === 'en' ? 'English' : 'Hindi';
        const langTextSpan = document.getElementById('lang-text');

        if (langTextSpan) {
            langTextSpan.textContent = langText;
        } else {
            langBtn.innerHTML = `<ion-icon name="globe-outline" style="vertical-align: middle;"></ion-icon> ${langText}`;
        }

        updateLanguage();

        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'hi' : 'en';
            localStorage.setItem('preferredLang', currentLang);
            const newLangText = currentLang === 'en' ? 'English' : 'Hindi';
            if (langTextSpan) {
                langTextSpan.textContent = newLangText;
            } else {
                langBtn.innerHTML = `<ion-icon name="globe-outline" style="vertical-align: middle;"></ion-icon> ${newLangText}`;
            }
            updateLanguage();
            if (document.getElementById('symptom-grid')) renderSymptoms();
            if (document.getElementById('doctor-list')) renderDoctors();
            if (document.querySelector('.first-aid-grid')) renderFirstAid();
            checkAuth();
        });
    }

    function renderFirstAid() {
        const grid = document.querySelector('.first-aid-grid');
        if (!grid) return;

        grid.innerHTML = firstAidList.map(item => {
            let listItems = '';
            for (let i = 1; i <= 4; i++) {
                const key = `fa_${item.key}_${i}`;
                if (TRANSLATIONS['en'][key]) {
                    listItems += `<li data-lang-key="${key}"></li>`;
                }
            }
            return `
            <div class="fa-card">
                <div class="fa-content">
                    <h4 class="fa-card-title">
                        <ion-icon name="${item.icon}"></ion-icon> 
                        <span data-lang-key="fa_${item.key}_title"></span>
                    </h4>
                    <ul class="fa-list">
                        ${listItems}
                    </ul>
                </div>
            </div>`;
        }).join('');
        updateLanguage();
    }


    function updateLanguage() {
        if (TRANSLATIONS[currentLang].brand_name) {
            document.title = TRANSLATIONS[currentLang].brand_name + " | " + (currentLang === 'hi' ? 'ग्रामीण स्वास्थ्य सहायक' : 'Rural Health Assistant');
        }
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (TRANSLATIONS[currentLang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = TRANSLATIONS[currentLang][key];
                } else {
                    const content = TRANSLATIONS[currentLang][key];
                    const icon = el.querySelector('ion-icon');
                    if (icon) {
                        const iconClone = icon.cloneNode(true);
                        el.innerHTML = content;
                        if (key.includes('btn') || key.includes('link') || key.includes('nav')) {
                            el.appendChild(document.createTextNode(' '));
                            el.appendChild(iconClone);
                        } else {
                            el.prepend(iconClone);
                            el.prepend(document.createTextNode(' '));
                        }
                    } else {
                        el.innerHTML = content;
                    }
                }
            }
        });
    }

    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active-mobile');
            if (nav.classList.contains('active-mobile')) {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.background = 'white';
                nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                nav.style.padding = '20px';
                nav.style.zIndex = '1000';
            } else {
                nav.style.display = '';
            }
        });
    }

    const symptomGrid = document.getElementById('symptom-grid');
    const symptomForm = document.getElementById('symptom-form');
    function renderSymptoms() {
        if (!symptomGrid) return;
        const selectedValues = Array.from(document.querySelectorAll('.symptom-btn.active')).map(btn => btn.dataset.value);
        symptomGrid.innerHTML = '';
        SYMPTOMS.forEach(sym => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'symptom-btn';
            btn.dataset.value = sym.id;
            const displayName = currentLang === 'hi' ? sym.name_hi : sym.name;
            btn.textContent = displayName;
            if (selectedValues.includes(sym.id)) btn.classList.add('active');
            btn.addEventListener('click', () => btn.classList.toggle('active'));
            symptomGrid.appendChild(btn);
        });
    }

    if (symptomForm) {
        renderSymptoms();
        symptomForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const selectedIds = Array.from(document.querySelectorAll('.symptom-btn.active')).map(btn => btn.dataset.value);
            const resultsDiv = document.getElementById('symptom-results') || document.getElementById('results');
            const conditionsContainer = document.getElementById('conditions-list') || document.getElementById('conditions-container');
            if (selectedIds.length === 0) {
                alert(TRANSLATIONS[currentLang].msg_select_symptom);
                return;
            }
            let diagnosis = CONDITIONS['default'];
            for (const [k, v] of Object.entries(CONDITIONS)) {
                const kProps = k.split(',');
                const matchCount = kProps.filter(prop => selectedIds.includes(prop)).length;
                if (matchCount >= 2 || (kProps.length === 1 && matchCount === 1)) {
                    diagnosis = v;
                    break;
                }
            }
            const diagName = currentLang === 'hi' ? diagnosis.name_hi : diagnosis.name;
            const adviceText = currentLang === 'hi' ?
                (diagnosis.severity === 'High' ? 'हम तुरंत डॉक्टर से मिलने की सलाह देते हैं।' : 'कृपया हाइड्रेटेड रहें और आराम करें।') :
                (diagnosis.severity === 'High' ? 'We recommend visiting a doctor immediately.' : 'Please stay hydrated and rest.');

            if (diagnosis.severity === 'High') {
                const modal = document.getElementById('high-severity-modal');
                if (modal) {
                    const modalTitle = document.getElementById('modal-title');
                    const modalBody = document.getElementById('modal-body');
                    const modalBtn = document.getElementById('modal-action-btn');
                    if (modalTitle) modalTitle.innerText = currentLang === 'hi' ? 'सावधान' : 'Attention';
                    if (modalBody) modalBody.innerText = currentLang === 'hi' ?
                        `आपके लक्षण एक गंभीर स्थिति का संकेत देते हैं: ${diagName}। हम तत्काल डॉक्टर से परामर्श की सलाह देते हैं।` :
                        `Your symptoms indicate a condition that may require immediate attention: ${diagName}. We recommend consulting a doctor immediately.`;
                    modal.classList.add('active');
                    const closeBtn = modal.querySelector('.close-modal');
                    if (closeBtn) closeBtn.onclick = () => modal.classList.remove('active');
                    if (modalBtn) modalBtn.onclick = () => window.location.href = 'doctors.html';
                }
            }

            if (conditionsContainer) {
                conditionsContainer.innerHTML = `<div class="result-card" style="padding:15px; border-radius:8px; background:#f8fafc; border-left:4px solid ${diagnosis.severity === 'High' ? '#ef4444' : '#10b981'};">
                    <h4 style="margin-bottom:5px;">${diagName}</h4>
                    <p style="font-size:14px; color:#666;">${currentLang === 'hi' ? 'संभावना' : 'Probability'}: <strong>${diagnosis.probability}</strong></p>
                    <p style="margin-top:10px; font-size:14px;">${adviceText}</p>
                </div>`;
            }
            if (resultsDiv) {
                resultsDiv.style.display = 'block';
                resultsDiv.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const mapElement = document.getElementById('map');
    if (mapElement) {
        if (!window.leafletMap) {
            window.leafletMap = L.map('map').setView([29.3475, 79.5530], 14);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
                maxZoom: 19
            }).addTo(window.leafletMap);
            window.markersLayer = L.layerGroup().addTo(window.leafletMap);
            const personIcon = L.divIcon({
                html: `<div class="map-marker-user"><ion-icon name="person"></ion-icon><div class="pulse-marker"></div></div>`,
                className: '', iconSize: [40, 40], iconAnchor: [20, 20]
            });
            L.marker([29.3475, 79.5530], { icon: personIcon }).addTo(window.leafletMap)
                .bindPopup(`<strong>${TRANSLATIONS[currentLang].map_your_location}</strong><br>Bhimtal`).openPopup();
        }
        renderDoctors();
    }

    function renderDoctors() {
        const doctorList = document.getElementById('doctor-list');
        if (!doctorList) return;
        doctorList.innerHTML = '';
        if (window.markersLayer) window.markersLayer.clearLayers();

        const gIcon = L.divIcon({ html: `<div class="map-marker-hospital gov"><ion-icon name="business"></ion-icon></div>`, className: '', iconSize: [36, 36], iconAnchor: [18, 18] });
        const pIcon = L.divIcon({ html: `<div class="map-marker-hospital private"><ion-icon name="medkit"></ion-icon></div>`, className: '', iconSize: [36, 36], iconAnchor: [18, 18] });

        DOCTORS.forEach(doc => {
            if (window.markersLayer) {
                L.marker([doc.lat, doc.lng], { icon: doc.specialization === 'Government Hospital' ? gIcon : pIcon })
                    .addTo(window.markersLayer)
                    .bindPopup(`<strong>${currentLang === 'hi' ? doc.name_hi : doc.name}</strong><br>${currentLang === 'hi' ? doc.specialization_hi : doc.specialization}`);
            }
            const card = document.createElement('div');
            card.className = 'doctor-card';
            const displayDistance = currentLang === 'hi' ? doc.distance.replace('km', ' किमी') : doc.distance;
            card.innerHTML = `
                <div class="card-header">
                    <h3>${currentLang === 'hi' ? doc.name_hi : doc.name}</h3>
                    <div class="dist-badge">${displayDistance}</div>
                </div>
                <p>${currentLang === 'hi' ? doc.specialization_hi : doc.specialization}</p>
                <div class="doc-actions">
                    <button class="btn-call" onclick="alert('${TRANSLATIONS[currentLang].msg_call_applied}: ${doc.phone}')"><ion-icon name="call"></ion-icon> ${TRANSLATIONS[currentLang].btn_call}</button>
                    <button class="btn-book" onclick="alert('${TRANSLATIONS[currentLang].msg_appt_booked}')"><ion-icon name="calendar"></ion-icon> ${TRANSLATIONS[currentLang].btn_book}</button>
                </div>
            `;
            doctorList.appendChild(card);
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const mobile = document.getElementById('mobile-input').value;
            const otpMsg = TRANSLATIONS[currentLang].msg_otp_sent.replace('{mobile}', mobile);
            alert(otpMsg);
            document.getElementById('step-mobile').style.display = 'none';
            document.getElementById('step-otp').style.display = 'block';
        });

        const verifyBtn = document.getElementById('verify-btn');
        if (verifyBtn) {
            verifyBtn.addEventListener('click', () => {
                const otpInput = document.getElementById('otp-input').value;
                const nameInput = document.getElementById('name-input').value;
                if (otpInput === '1234') {
                    alert(TRANSLATIONS[currentLang].msg_login_success);
                    localStorage.setItem('user_authenticated', 'true');
                    localStorage.setItem('user_name', nameInput || 'Patient');
                    checkAuth();
                    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('SeemantSaathi/')) {
                        switchTab('login');
                    } else {
                        window.location.href = 'index.html';
                    }
                } else {
                    alert(TRANSLATIONS[currentLang].msg_invalid_otp);
                }
            });
        }
    }

    function checkAuth() {
        const isAuth = localStorage.getItem('user_authenticated') === 'true';
        const userName = localStorage.getItem('user_name') || (currentLang === 'hi' ? 'रोगी' : 'Patient');
        const protectedEls = document.querySelectorAll('.auth-required');
        const loginView = document.getElementById('view-login');
        const welcomeView = document.getElementById('view-welcome');
        const headerWelcome = document.getElementById('header-user-welcome');
        const navAbout = document.getElementById('nav-link-about');

        protectedEls.forEach(el => {
            if (isAuth) {
                el.style.setProperty('display', 'inline-flex', 'important');
                if (el.tagName === 'BUTTON') el.style.setProperty('display', 'inline-block', 'important');
            } else {
                el.style.setProperty('display', 'none', 'important');
            }
        });

        if (headerWelcome) headerWelcome.textContent = (TRANSLATIONS[currentLang].header_welcome_prefix) + userName;

        const isAboutTab = navAbout && navAbout.classList.contains('active');
        if (loginView && welcomeView && !isAboutTab) {
            if (isAuth) {
                loginView.style.display = 'none';
                welcomeView.style.display = 'block';
                const welcomeTitle = document.getElementById('welcome-message-text');
                if (welcomeTitle) welcomeTitle.innerHTML = `${TRANSLATIONS[currentLang].welcome_back}, <span style="color: var(--secondary); text-transform: capitalize;">${userName}</span>!`;
            } else {
                loginView.style.display = 'block';
                welcomeView.style.display = 'none';
                if (document.getElementById('step-mobile')) document.getElementById('step-mobile').style.display = 'block';
                if (document.getElementById('step-otp')) document.getElementById('step-otp').style.display = 'none';
            }
        } else if (loginView && welcomeView && isAboutTab) {
            loginView.style.display = 'none';
            welcomeView.style.display = 'none';
        }
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('tab') === 'about') {
        switchTab('about');
    } else {
        checkAuth();
    }

    if (document.querySelector('.first-aid-grid')) renderFirstAid();

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('user_authenticated');
            localStorage.removeItem('user_name');
            alert(TRANSLATIONS[currentLang].msg_logout_success);
            window.location.href = 'index.html';
        });
    }

    const faModal = document.getElementById('first-aid-modal');
    const faLink = document.getElementById('nav-link-firstaid');
    if (faModal && faLink) {
        const closeSpan = document.getElementById('fa-close-btn') || faModal.querySelector('.close-modal');
        faLink.addEventListener('click', (e) => { e.preventDefault(); faModal.classList.add('active'); });
        if (closeSpan) closeSpan.addEventListener('click', () => faModal.classList.remove('active'));
        window.addEventListener('click', (e) => { if (e.target == faModal) faModal.classList.remove('active'); });
    }

});
