```javascript
document.addEventListener("DOMContentLoaded", () => {

    const languageSelector =
        document.getElementById("languageSelector");

    const languageMenu =
        document.getElementById("languageMenu");

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const navLinks =
        document.querySelector(".nav-links");


    /*
    =========================================================
    LANGUAGE SELECTOR
    =========================================================
    */

    if (languageSelector && languageMenu) {

        languageSelector.addEventListener("click", (event) => {

            event.stopPropagation();

            const isOpen =
                languageMenu.classList.toggle("show");

            languageSelector.setAttribute(
                "aria-expanded",
                isOpen
            );

            languageMenu.setAttribute(
                "aria-hidden",
                !isOpen
            );

        });


        languageMenu
            .querySelectorAll("[data-language]")
            .forEach((button) => {

                button.addEventListener("click", () => {

                    const language =
                        button.getAttribute("data-language");

                    changeLanguage(language);

                    languageMenu.classList.remove("show");

                    languageSelector.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    languageMenu.setAttribute(
                        "aria-hidden",
                        "true"
                    );

                });

            });


        document.addEventListener("click", () => {

            languageMenu.classList.remove("show");

            languageSelector.setAttribute(
                "aria-expanded",
                "false"
            );

            languageMenu.setAttribute(
                "aria-hidden",
                "true"
            );

        });

    }


    /*
    =========================================================
    LANGUAGE DATA
    =========================================================
    */

    const translations = {

        en: {

            navHome: "Home",
            navAbout: "About",
            navMinistries: "Ministries",
            navMessages: "Messages",
            navPromise: "Daily Promise",
            navLive: "Live",
            navTestimonies: "Testimonies",
            navLocations: "Locations",
            navContact: "Contact",

            prayerButton: "PRAYER REQUEST",

            heroEyebrow:
                "PJ STEPHEN PAUL MINISTRIES",

            heroTitle:
                "GOD IS LOVE",

            heroTagline:
                "Love God • Love People",

            watchLive:
                "WATCH LIVE",

            explore:
                "EXPLORE THE MINISTRY",

            aboutLabel:
                "ABOUT THE MINISTRY",

            aboutTitle:
                "A Ministry Built on the Love of God",

            aboutText:
                "PJ Stephen Paul Ministries exists to share the love of Jesus Christ, proclaim the Word of God, strengthen families, and reach people with the hope of the Gospel.",

            learnMore:
                "LEARN MORE",

            promiseLabel:
                "DAILY PROMISE",

            promiseTitle:
                "Start Your Day With God's Word",

            promiseText:
                "Watch the latest Daily Promise from PJ Stephen Paul Ministries.",

            promiseButton:
                "WATCH TODAY'S PROMISE",

            prayerText:
                "If you would like us to pray for you, share your prayer request with us.",

            prayerButtonText:
                "SHARE YOUR PRAYER REQUEST",

            messagesLabel:
                "MESSAGES",

            messagesTitle:
                "Messages That Speak to Life",

            messagesText:
                "Watch biblical messages from PJ Stephen Paul Ministries and grow in God's Word.",

            latestMessages:
                "Latest Messages",

            biblicalTeachings:
                "Biblical Teachings",

            watchGrow:
                "Watch & Grow",

            watchMore:
                "WATCH MORE",

            liveLabel:
                "LIVE SERVICES",

            liveTitle:
                "Join Us Live",

            liveText:
                "Worship with us, hear the Word, and be part of what God is doing through the ministry.",

            liveStatus:
                "● LIVE SERVICES",

            liveDescription:
                "Live services will appear here when a broadcast is available.",

            watchYouTube:
                "WATCH ON YOUTUBE",

            testimoniesLabel:
                "TESTIMONIES",

            testimoniesTitle:
                "Stories of God's Faithfulness",

            testimoniesText:
                "Has God done something in your life? We would love to hear your testimony.",

            shareTestimony:
                "SHARE YOUR TESTIMONY",

            sendWhatsApp:
                "SEND THROUGH WHATSAPP",

            ministriesLabel:
                "MINISTRIES",

            ministriesTitle:
                "Ministry in Action",

            ministriesText:
                "Serving people, strengthening families and reaching communities with the love of Christ.",

            prayerMinistry:
                "Prayer Ministry",

            prayerMinistryText:
                "A ministry dedicated to prayer, intercession and seeking God together.",

            evangelism:
                "Evangelism",

            evangelismText:
                "Sharing the Gospel and the love of Jesus Christ with people and communities.",

            revival:
                "Gospel Revival Meetings",

            revivalText:
                "Reaching people through Gospel meetings, revival and the message of Jesus Christ.",

            ministriesCount:
                "24 MINISTRIES",

            footerYouTube:
                "▶ WATCH US ON YOUTUBE",

            footerTagline:
                "God is Love • Love God • Love People",

            copyright:
                "© PJ Stephen Paul Ministries. All Rights Reserved."

        },


        te: {

            navHome: "హోమ్",
            navAbout: "మా గురించి",
            navMinistries: "మంత్రిత్వ శాఖలు",
            navMessages: "సందేశాలు",
            navPromise: "దిన వాగ్దానం",
            navLive: "లైవ్",
            navTestimonies: "సాక్ష్యాలు",
            navLocations: "ప్రదేశాలు",
            navContact: "సంప్రదించండి",

            prayerButton: "ప్రార్థన అభ్యర్థన",

            heroEyebrow:
                "పీ.జే. స్టీఫెన్ పాల్ మినిస్ట్రీస్",

            heroTitle:
                "దేవుడు ప్రేమ",

            heroTagline:
                "దేవుణ్ణి ప్రేమించండి • ప్రజలను ప్రేమించండి",

            watchLive:
                "లైవ్ చూడండి",

            explore:
                "మినిస్ట్రి గురించి తెలుసుకోండి",

            aboutLabel:
                "మినిస్ట్రి గురించి",

            aboutTitle:
                "దేవుని ప్రేమపై నిర్మించబడిన పరిచర్య",

            aboutText:
                "పీ.జే. స్టీఫెన్ పాల్ మినిస్ట్రీస్ యేసుక్రీస్తు ప్రేమను పంచడానికి, దేవుని వాక్యాన్ని ప్రకటించడానికి, కుటుంబాలను బలపరచడానికి మరియు సువార్త యొక్క నిరీక్షణను ప్రజలకు అందించడానికి ఉంది.",

            learnMore:
                "మరింత తెలుసుకోండి",

            promiseLabel:
                "దిన వాగ్దానం",

            promiseTitle:
                "దేవుని వాక్యంతో మీ రోజును ప్రారంభించండి",

            promiseText:
                "పీ.జే. స్టీఫెన్ పాల్ మినిస్ట్రీస్ నుండి తాజా దిన వాగ్దానాన్ని చూడండి.",

            promiseButton:
                "ఈరోజు వాగ్దానం చూడండి",

            prayerText:
                "మీ కోసం మేము ప్రార్థించాలనుకుంటే, మీ ప్రార్థన అభ్యర్థనను మాతో పంచుకోండి.",

            prayerButtonText:
                "మీ ప్రార్థన అభ్యర్థనను పంచుకోండి",

            messagesLabel:
                "సందేశాలు",

            messagesTitle:
                "జీవితాన్ని తాకే సందేశాలు",

            messagesText:
                "పీ.జే. స్టీఫెన్ పాల్ మినిస్ట్రీస్ నుండి బైబిల్ సందేశాలను విని దేవుని వాక్యంలో ఎదగండి.",

            latestMessages:
                "తాజా సందేశాలు",

            biblicalTeachings:
                "బైబిల్ బోధనలు",

            watchGrow:
                "చూడండి & ఎదగండి",

            watchMore:
                "మరిన్ని చూడండి",

            liveLabel:
                "లైవ్ సేవలు",

            liveTitle:
                "మాతో లైవ్‌లో కలవండి",

            liveText:
                "మాతో ఆరాధించండి, వాక్యాన్ని వినండి మరియు దేవుడు చేస్తున్న కార్యంలో భాగస్వాములు అవ్వండి.",

            liveStatus:
                "● లైవ్ సేవలు",

            liveDescription:
                "లైవ్ ప్రసారం అందుబాటులో ఉన్నప్పుడు ఇక్కడ కనిపిస్తుంది.",

            watchYouTube:
                "యూట్యూబ్‌లో చూడండి",

            testimoniesLabel:
                "సాక్ష్యాలు",

            testimoniesTitle:
                "దేవుని విశ్వసనీయతకు సాక్ష్యాలు",

            testimoniesText:
                "దేవుడు మీ జీవితంలో ఏదైనా చేశాడా? మీ సాక్ష్యాన్ని మాతో పంచుకోవాలని మేము కోరుకుంటున్నాము.",

            shareTestimony:
                "మీ సాక్ష్యాన్ని పంచుకోండి",

            sendWhatsApp:
                "వాట్సాప్ ద్వారా పంపండి",

            ministriesLabel:
                "మంత్రిత్వ శాఖలు",

            ministriesTitle:
                "కార్యరూపంలో పరిచర్య",

            ministriesText:
                "ప్రజలకు సేవ చేయడం, కుటుంబాలను బలపరచడం మరియు క్రీస్తు ప్రేమతో సమాజాలను చేరుకోవడం.",

            prayerMinistry:
                "ప్రార్థనా పరిచర్య",

            prayerMinistryText:
                "ప్రార్థన, మధ్యవర్తిత్వ ప్రార్థన మరియు కలిసి దేవుణ్ణి వెదకడానికి అంకితమైన పరిచర్య.",

            evangelism:
                "సువార్త పరిచర్య",

            evangelismText:
                "ప్రజలకు మరియు సమాజాలకు సువార్తను మరియు యేసుక్రీస్తు ప్రేమను పంచడం.",

            revival:
                "సువార్త పునరుజ్జీవన సమావేశాలు",

            revivalText:
                "సువార్త సమావేశాలు, పునరుజ్జీవనం మరియు యేసుక్రీస్తు సందేశం ద్వారా ప్రజలను చేరుకోవడం.",

            ministriesCount:
                "24 మంత్రిత్వ శాఖలు",

            footerYouTube:
                "▶ యూట్యూబ్‌లో మమ్మల్ని చూడండి",

            footerTagline:
                "దేవుడు ప్రేమ • దేవుణ్ణి ప్రేమించండి • ప్రజలను ప్రేమించండి",

            copyright:
                "© పీ.జే. స్టీఫెన్ పాల్ మినిస్ట్రీస్. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి."

        },


        hi: {

            navHome: "होम",
            navAbout: "हमारे बारे में",
            navMinistries: "सेवकाइयाँ",
            navMessages: "संदेश",
            navPromise: "दैनिक प्रतिज्ञा",
            navLive: "लाइव",
            navTestimonies: "गवाहियाँ",
            navLocations: "स्थान",
            navContact: "संपर्क",

            prayerButton: "प्रार्थना अनुरोध",

            heroEyebrow:
                "पी.जे. स्टीफन पॉल मिनिस्ट्रीज़",

            heroTitle:
                "परमेश्वर प्रेम है",

            heroTagline:
                "परमेश्वर से प्रेम करें • लोगों से प्रेम करें",

            watchLive:
                "लाइव देखें",

            explore:
                "मिनिस्ट्री के बारे में जानें",

            aboutLabel:
                "मिनिस्ट्री के बारे में",

            aboutTitle:
                "परमेश्वर के प्रेम पर बनी सेवकाई",

            aboutText:
                "पी.जे. स्टीफन पॉल मिनिस्ट्रीज़ यीशु मसीह के प्रेम को बाँटने, परमेश्वर के वचन का प्रचार करने, परिवारों को मजबूत करने और लोगों तक सुसमाचार की आशा पहुँचाने के लिए है।",

            learnMore:
                "और जानें",

            promiseLabel:
                "दैनिक प्रतिज्ञा",

            promiseTitle:
                "परमेश्वर के वचन के साथ अपना दिन शुरू करें",

            promiseText:
                "पी.जे. स्टीफन पॉल मिनिस्ट्रीज़ की नवीनतम दैनिक प्रतिज्ञा देखें।",

            promiseButton:
                "आज की प्रतिज्ञा देखें",

            prayerText:
                "यदि आप चाहते हैं कि हम आपके लिए प्रार्थना करें, तो अपना प्रार्थना अनुरोध हमारे साथ साझा करें।",

            prayerButtonText:
                "अपना प्रार्थना अनुरोध साझा करें",

            messagesLabel:
                "संदेश",

            messagesTitle:
                "जीवन को छूने वाले संदेश",

            messagesText:
                "पी.जे. स्टीफन पॉल मिनिस्ट्रीज़ के बाइबल संदेश सुनें और परमेश्वर के वचन में बढ़ें।",

            latestMessages:
                "नवीनतम संदेश",

            biblicalTeachings:
                "बाइबल की शिक्षाएँ",

            watchGrow:
                "देखें और बढ़ें",

            watchMore:
                "और देखें",

            liveLabel:
                "लाइव सेवाएँ",

            liveTitle:
                "हमसे लाइव जुड़ें",

            liveText:
                "हमारे साथ आराधना करें, वचन सुनें और परमेश्वर के कार्य का हिस्सा बनें।",

            liveStatus:
                "● लाइव सेवाएँ",

            liveDescription:
                "जब लाइव प्रसारण उपलब्ध होगा, वह यहाँ दिखाई देगा।",

            watchYouTube:
                "यूट्यूब पर देखें",

            testimoniesLabel:
                "गवाहियाँ",

            testimoniesTitle:
                "परमेश्वर की विश्वासयोग्यता की गवाहियाँ",

            testimoniesText:
                "क्या परमेश्वर ने आपके जीवन में कुछ किया है? हम आपकी गवाही सुनना चाहते हैं।",

            shareTestimony:
                "अपनी गवाही साझा करें",

            sendWhatsApp:
                "व्हाट्सऐप से भेजें",

            ministriesLabel:
                "सेवकाइयाँ",

            ministriesTitle:
                "सेवकाई कार्य में",

            ministriesText:
                "लोगों की सेवा करना, परिवारों को मजबूत करना और मसीह के प्रेम से समुदायों तक पहुँचना।",

            prayerMinistry:
                "प्रार्थना सेवकाई",

            prayerMinistryText:
                "प्रार्थना, मध्यस्थता और मिलकर परमेश्वर को खोजने के लिए समर्पित सेवकाई।",

            evangelism:
                "सुसमाचार प्रचार",

            evangelismText:
                "लोगों और समुदायों के साथ सुसमाचार और यीशु मसीह का प्रेम साझा करना।",

            revival:
                "सुसमाचार पुनरुत्थान सभाएँ",

            revivalText:
                "सुसमाचार सभाओं, पुनरुत्थान और यीशु मसीह के संदेश के द्वारा लोगों तक पहुँचना।",

            ministriesCount:
                "24 सेवकाइयाँ",

            footerYouTube:
                "▶ हमें यूट्यूब पर देखें",

            footerTagline:
                "परमेश्वर प्रेम है • परमेश्वर से प्रेम करें • लोगों से प्रेम करें",

            copyright:
                "© पी.जे. स्टीफन पॉल मिनिस्ट्रीज़। सर्वाधिकार सुरक्षित।"

        }

    };


    /*
    =========================================================
    CHANGE LANGUAGE
    =========================================================
    */

    function changeLanguage(language) {

        const data = translations[language];

        if (!data) {
            return;
        }


        const elements = {

            navHome: document.querySelector(
                '.nav-links a[href="#home"]'
            ),

            navAbout: document.querySelector(
                '.nav-links a[href="#about"]'
            ),

            navMinistries: document.querySelector(
                '.nav-links a[href="#ministries"]'
            ),

            navMessages: document.querySelector(
                '.nav-links a[href="#messages"]'
            ),

            navPromise: document.querySelector(
                '.nav-links a[href="#daily-promise"]'
            ),

            navLive: document.querySelector(
                '.nav-links a[href="#live"]'
            ),

            navTestimonies: document.querySelector(
                '.nav-links a[href="#testimonies"]'
            ),

            navLocations: document.querySelector(
                '.nav-links a[href="/locations"]'
            ),

            navContact: document.querySelector(
                '.nav-links a[href="#contact"]'
            ),

            prayerButton:
                document.querySelector(".prayer-button"),

            heroEyebrow:
                document.querySelector(".hero-eyebrow"),

            heroTitle:
                document.querySelector(".hero h1"),

            heroTagline:
                document.querySelector(".hero-tagline"),

            watchLive:
                document.querySelector(".hero .button-primary"),

            explore:
                document.querySelector(".hero .button-secondary"),

            aboutLabel:
                document.querySelector(".about-section .section-label"),

            aboutTitle:
                document.querySelector(".about-section h2"),

            aboutText:
                document.querySelector(".about-section .section-intro"),

            aboutButton:
                document.querySelector(".about-section .text-button"),

            promiseLabel:
                document.querySelector(".daily-promise-section .section-label"),

            promiseTitle:
                document.querySelector(".daily-promise-section h2"),

            promiseText:
                document.querySelector(".daily-promise-section .section-intro"),

            promiseButton:
                document.querySelector(".daily-promise-section .button"),

            prayerText:
                document.querySelector(".prayer-section p"),

            prayerButtonText:
                document.querySelector(".prayer-section .button"),

            messagesLabel:
                document.querySelector(".messages-section .section-label"),

            messagesTitle:
                document.querySelector(".messages-section h2"),

            messagesText:
                document.querySelector(".messages-section .section-intro"),

            latestMessages:
                document.querySelectorAll(".message-grid .content-card h3")[0],

            biblicalTeachings:
                document.querySelectorAll(".message-grid .content-card h3")[1],

            watchGrow:
                document.querySelectorAll(".message-grid .content-card h3")[2],

            watchMore:
                document.querySelector(".messages-section > .section-container > .button"),

            liveLabel:
                document.querySelector(".live-section .section-label"),

            liveTitle:
                document.querySelector(".live-section h2"),

            liveText:
                document.querySelector(".live-section .section-intro"),

            liveStatus:
                document.querySelector(".live-status"),

            liveDescription:
                document.querySelector("#liveContent p"),

            watchYouTube:
                document.querySelector("#liveContent .button"),

            testimoniesLabel:
                document.querySelector(".testimonies-section .section-label"),

            testimoniesTitle:
                document.querySelector(".testimonies-section h2"),

            testimoniesText:
                document.querySelector(".testimonies-section .section-intro"),

            shareTestimony:
                document.querySelector(".testimonies-section .button-primary"),

            sendWhatsApp:
                document.querySelector(".testimonies-section .button-secondary"),

            ministriesLabel:
                document.querySelector(".ministries-section .section-label"),

            ministriesTitle:
                document.querySelector(".ministries-section h2"),

            ministriesText:
                document.querySelector(".ministries-section .section-intro"),

            prayerMinistry:
                document.querySelectorAll(".ministry-card h3")[0],

            evangelism:
                document.querySelectorAll(".ministry-card h3")[1],

            revival:
                document.querySelectorAll(".ministry-card h3")[2],

            prayerMinistryText:
                document.querySelectorAll(".ministry-card p")[0],

            evangelismText:
                document.querySelectorAll(".ministry-card p")[1],

            revivalText:
                document.querySelectorAll(".ministry-card p")[2],

            ministriesCount:
                document.querySelector(".ministries-count"),

            footerYouTube:
                document.querySelector(".youtube-channel-button"),

            footerTagline:
                document.querySelector(".footer-brand p"),

            copyright:
                document.querySelector(".footer-bottom p")

        };


        Object.keys(elements).forEach((key) => {

            const element = elements[key];

            if (!element) {
                return;
            }

            if (element instanceof NodeList) {
                return;
            }

            element.textContent = data[key];

        });


        document
            .querySelectorAll(".message-grid .card-category")
            .forEach((element) => {

                element.textContent =
                    language === "en"
                        ? "MESSAGE"
                        : language === "te"
                            ? "సందేశం"
                            : "संदेश";

            });


        document
            .querySelectorAll(".ministry-card .ministry-icon")
            .forEach((element, index) => {

                element.textContent =
                    String(index + 1).padStart(2, "0");

            });


        document
            .querySelectorAll(".footer-links a")
            .forEach((link) => {

                const href = link.getAttribute("href");

                const footerMap = {

                    "#home": data.navHome,
                    "#about": data.navAbout,
                    "#ministries": data.navMinistries,
                    "#messages": data.navMessages,
                    "#daily-promise": data.navPromise,
                    "#live": language === "en"
                        ? "Live Services"
                        : language === "te"
                            ? "లైవ్ సేవలు"
                            : "लाइव सेवाएँ",
                    "#testimonies": data.navTestimonies,
                    "/locations": data.navLocations,
                    "#prayer": language === "en"
                        ? "Prayer Request"
                        : language === "te"
                            ? "ప్రార్థన అభ్యర్థన"
                            : "प्रार्थना अनुरोध",
                    "#contact": data.navContact

                };

                if (footerMap[href]) {
                    link.textContent = footerMap[href];
                }

            });


        languageSelector.childNodes[0].textContent =
            language === "en"
                ? "ENGLISH "
                : language === "te"
                    ? "తెలుగు "
                    : "हिन्दी ";


        document.documentElement.lang =
            language === "en"
                ? "en"
                : language === "te"
                    ? "te"
                    : "hi";


        localStorage.setItem(
            "preferredLanguage",
            language
        );

    }


    /*
    =========================================================
    LOAD SAVED LANGUAGE
    =========================================================
    */

    const savedLanguage =
        localStorage.getItem("preferredLanguage");

    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    }


    /*
    =========================================================
    MOBILE MENU
    =========================================================
    */

    if (mobileMenuButton && navLinks) {

        mobileMenuButton.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("mobile-open");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        });

    }

});
```
