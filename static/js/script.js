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
    TRANSLATIONS
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

            verseReference: "HEBREWS 11:6",
            openingVerse:
                "“And without faith it is impossible to please him, for whoever would draw near to God must believe that he exists and that he rewards those who seek him.”",

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

            prayerQuote:
                "“Call to me, and I will answer you.”",

            prayerReference:
                "— JEREMIAH 33:3",

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

            youtubeCategory:
                "YOUTUBE MESSAGES",

            latestMessages:
                "Watch Our Latest Messages",

            latestMessagesText:
                "Explore messages, sermons and teachings from PJ Stephen Paul Ministries on YouTube.",

            watchMessages:
                "WATCH MESSAGES",

            liveLabel:
                "LIVE SERVICES",

            liveTitle:
                "Join Us Live",

            liveText:
                "Worship with us and join our services online.",

            liveStatus:
                "● LIVE SERVICES",

            liveHeading:
                "PJ Stephen Paul Ministries",

            liveDescription:
                "When a live service is available, it can be watched directly through our YouTube channel.",

            watchYouTube:
                "WATCH LIVE ON YOUTUBE",

            testimoniesLabel:
                "TESTIMONIES",

            testimoniesTitle:
                "Stories of God's Faithfulness",

            testimoniesText:
                "Every testimony is a reminder of God's grace, faithfulness and transforming power.",

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

            ministry1Title:
                "pjspaul foundation",

            ministry1Text:
                 "He who has pity on the poor lends to the LORD, And He will pay back what he has given. — Proverbs 19:17",

            ministry2Title:
                "children ministry",

            ministry2Text:
                 "All your children shall be taught by the LORD, And great shall be the peace of your children. — Isaiah 54:13",
            ministry3Title:
                "youth ministry",

            ministry3Text:
                    "I have written to you, young men, Because you are strong, and the word of God abides in you, And you have overcome the wicked one. — 1 John 2:14", 
            learnMinistry:
                "LEARN MORE",

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
            navMinistries: "పరిచర్యలు",
            navMessages: "సందేశాలు",
            navPromise: "దిన వాగ్దానం",
            navLive: "లైవ్",
            navTestimonies: "సాక్ష్యాలు",
            navLocations: "ప్రదేశాలు",
            navContact: "సంప్రదించండి",

            prayerButton: "ప్రార్థన అభ్యర్థన",

            verseReference: "హెబ్రీయులకు 11:6",

            openingVerse:
                "“విశ్వాసము లేకుండా దేవునికి ఇష్టులుగా ఉండుట అసాధ్యము. దేవుని యొద్దకు వచ్చువాడు ఆయన ఉన్నాడనియు, తనను వెదకువారికి ప్రతిఫలము దయచేయువాడనియు నమ్మవలెను.”",

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

            prayerQuote:
                "“నన్ను పిలువుము, నేను నీకు ఉత్తరమిచ్చెదను.”",

            prayerReference:
                "— యిర్మీయా 33:3",

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

            youtubeCategory:
                "యూట్యూబ్ సందేశాలు",

            latestMessages:
                "మా తాజా సందేశాలను చూడండి",

            latestMessagesText:
                "పీ.జే. స్టీఫెన్ పాల్ మినిస్ట్రీస్ యొక్క సందేశాలు, ప్రసంగాలు మరియు బోధనలను యూట్యూబ్‌లో చూడండి.",

            watchMessages:
                "సందేశాలను చూడండి",

            liveLabel:
                "లైవ్ సేవలు",

            liveTitle:
                "మాతో లైవ్‌లో కలవండి",

            liveText:
                "మాతో ఆరాధించండి మరియు ఆన్‌లైన్‌లో మా సేవల్లో పాల్గొనండి.",

            liveStatus:
                "● లైవ్ సేవలు",

            liveHeading:
                "పీ.జే. స్టీఫెన్ పాల్ మినిస్ట్రీస్",

            liveDescription:
                "లైవ్ సేవ అందుబాటులో ఉన్నప్పుడు మా యూట్యూబ్ ఛానల్ ద్వారా నేరుగా చూడవచ్చు.",

            watchYouTube:
                "యూట్యూబ్‌లో లైవ్ చూడండి",

            testimoniesLabel:
                "సాక్ష్యాలు",

            testimoniesTitle:
                "దేవుని విశ్వసనీయతకు సాక్ష్యాలు",

            testimoniesText:
                "ప్రతి సాక్ష్యం దేవుని కృప, విశ్వసనీయత మరియు మార్పుచేసే శక్తికి ఒక జ్ఞాపకం.",

            shareTestimony:
                "మీ సాక్ష్యాన్ని పంచుకోండి",

            sendWhatsApp:
                "వాట్సాప్ ద్వారా పంపండి",

            ministriesLabel:
                "పరిచర్యలు",

            ministriesTitle:
                "కార్యరూపంలో పరిచర్య",

            ministriesText:
                "ప్రజలకు సేవ చేయడం, కుటుంబాలను బలపరచడం మరియు క్రీస్తు ప్రేమతో సమాజాలను చేరుకోవడం.",

            ministry1Title:
                "పీ.జే.ఎస్. పాల్ ఫౌండేషన్",

            ministry1Text:
                  "దరిద్రులయెడల కనికరించువాడు యెహోవాకు అప్పిచ్చువాడు; అతడు చేసిన ఉపకారమునకు ఆయన తిరిగి చెల్లించును. — సామెతలు 19:17",


            ministry2Title:
                "పిల్లల పరిచర్య",

            ministry2Text:
                 "నీ పిల్లలందరు యెహోవాచేత బోధింపబడుదురు; నీ పిల్లలకు గొప్ప సమాధానము కలుగును. — యెషయా 54:13",

            ministry3Title:
                 "యువజన పరిచర్య",

            ministry3Text:
                "యువకులారా, మీరు బలవంతులు, దేవుని వాక్యము మీలో నిలిచియున్నది, మీరు దుష్టుని జయించియున్నారు. — 1 యోహాను 2:14",

            learnMinistry:
                "మరింత తెలుసుకోండి",

            ministriesCount:
                "24 పరిచర్యలు",

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

            verseReference: "इब्रानियों 11:6",

            openingVerse:
                "“विश्वास के बिना परमेश्वर को प्रसन्न करना असम्भव है; क्योंकि जो परमेश्वर के पास आता है, उसे विश्वास करना चाहिए कि वह है, और अपने खोजनेवालों को प्रतिफल देता है।”",

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

            prayerQuote:
                "“मुझे पुकार और मैं तुझे उत्तर दूँगा।”",

            prayerReference:
                "— यिर्मयाह 33:3",

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

            youtubeCategory:
                "यूट्यूब संदेश",

            latestMessages:
                "हमारे नवीनतम संदेश देखें",

            latestMessagesText:
                "पी.जे. स्टीफन पॉल मिनिस्ट्रीज़ के संदेश, उपदेश और शिक्षाएँ यूट्यूब पर देखें।",

            watchMessages:
                "संदेश देखें",

            liveLabel:
                "लाइव सेवाएँ",

            liveTitle:
                "हमसे लाइव जुड़ें",

            liveText:
                "हमारे साथ आराधना करें और ऑनलाइन हमारी सेवाओं में शामिल हों।",

            liveStatus:
                "● लाइव सेवाएँ",

            liveHeading:
                "पी.जे. स्टीफन पॉल मिनिस्ट्रीज़",

            liveDescription:
                "जब लाइव सेवा उपलब्ध होगी, तो उसे हमारे यूट्यूब चैनल के माध्यम से सीधे देखा जा सकेगा।",

            watchYouTube:
                "यूट्यूब पर लाइव देखें",

            testimoniesLabel:
                "गवाहियाँ",

            testimoniesTitle:
                "परमेश्वर की विश्वासयोग्यता की गवाहियाँ",

            testimoniesText:
                "हर गवाही परमेश्वर के अनुग्रह, विश्वासयोग्यता और बदलने वाली सामर्थ्य की याद दिलाती है।",

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

            ministry1Title:
                "पी.जे.एस. पॉल फाउंडेशन",

            ministry1Text:
                "जो कंगाल पर अनुग्रह करता है, वह यहोवा को उधार देता है, और वह अपनी भलाई का फल पाएगा। — नीतिवचन 19:17",


            ministry2Title:
                "बच्चों की सेवकाई",

            ministry2Text:
                 "तेरे सब बच्चे यहोवा के सिखाए हुए होंगे, और तेरे बच्चों को बड़ी शान्ति मिलेगी। — यशायाह 54:13",

            ministry3Title:
                "युवा सेवकाई",

            ministry3Text:
                 "हे जवानों, तुम बलवन्त हो, और परमेश्वर का वचन तुम में बना रहता है, और तुम ने उस दुष्ट पर जय पाई है। — 1 यूहन्ना 2:14",

            learnMinistry:
                "और जानें",

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
    HELPER
    =========================================================
    */

    function setText(selector, text) {

        const element = document.querySelector(selector);

        if (element && text !== undefined) {
            element.textContent = text;
        }

    }


    function setAllText(selector, text) {

        if (text === undefined) {
            return;
        }

        document
            .querySelectorAll(selector)
            .forEach((element) => {
                element.textContent = text;
            });

    }


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


        /* NAVIGATION */

        setText('.nav-links a[href="#home"]', data.navHome);
        setText('.nav-links a[href="#about"]', data.navAbout);
        setText('.nav-links a[href="#ministries"]', data.navMinistries);
        setText('.nav-links a[href="#messages"]', data.navMessages);
        setText('.nav-links a[href="#daily-promise"]', data.navPromise);
        setText('.nav-links a[href="#live"]', data.navLive);
        setText('.nav-links a[href="#testimonies"]', data.navTestimonies);
        setText('.nav-links a[href="/locations"]', data.navLocations);
        setText('.nav-links a[href="#contact"]', data.navContact);

        setText(".prayer-button", data.prayerButton);


        /* OPENING VERSE */

        setText(".opening-verse .verse-reference", data.verseReference);
        setText(".opening-verse blockquote", data.openingVerse);


        /* HERO */

        setText(".hero-eyebrow", data.heroEyebrow);
        setText(".hero h1", data.heroTitle);
        setText(".hero-tagline", data.heroTagline);

        setText(".hero .button-primary", data.watchLive);
        setText(".hero .button-secondary", data.explore);


        /* ABOUT */

        setText(
            ".about-section .section-label",
            data.aboutLabel
        );

        setText(
            ".about-section h2",
            data.aboutTitle
        );

        setText(
            ".about-section .section-intro",
            data.aboutText
        );

        setText(
            ".about-section .text-button",
            data.learnMore
        );


        /* DAILY PROMISE */

        setText(
            ".daily-promise-section .section-label",
            data.promiseLabel
        );

        setText(
            ".daily-promise-section h2",
            data.promiseTitle
        );

        setText(
            ".daily-promise-section .section-intro",
            data.promiseText
        );

        setText(
            ".daily-promise-section .button",
            data.promiseButton
        );


        /* PRAYER */

        setText(
            ".prayer-section blockquote",
            data.prayerQuote
        );

        setText(
            ".prayer-section .verse-reference",
            data.prayerReference
        );

        setText(
            ".prayer-section p",
            data.prayerText
        );

        setText(
            ".prayer-section .button",
            data.prayerButtonText
        );


        /* MESSAGES */

        setText(
            ".messages-section .section-label",
            data.messagesLabel
        );

        setText(
            ".messages-section h2",
            data.messagesTitle
        );

        setText(
            ".messages-section .section-intro",
            data.messagesText
        );

        setText(
            ".youtube-feature .card-category",
            data.youtubeCategory
        );

        setText(
            ".youtube-feature h3",
            data.latestMessages
        );

        setText(
            ".youtube-feature p",
            data.latestMessagesText
        );

        setText(
            ".youtube-feature .button",
            data.watchMessages
        );


        /* LIVE */

        setText(
            ".live-section .section-label",
            data.liveLabel
        );

        setText(
            ".live-section h2",
            data.liveTitle
        );

        setText(
            ".live-section .section-intro",
            data.liveText
        );

        setText(
            ".live-status",
            data.liveStatus
        );

        setText(
            ".live-content h3",
            data.liveHeading
        );

        setText(
            ".live-content p",
            data.liveDescription
        );

        setText(
            ".live-content .button",
            data.watchYouTube
        );


        /* TESTIMONIES */

        setText(
            ".testimonies-section .section-label",
            data.testimoniesLabel
        );

        setText(
            ".testimonies-section h2",
            data.testimoniesTitle
        );

        setText(
            ".testimonies-section .section-intro",
            data.testimoniesText
        );

        setText(
            ".testimonies-section .button-primary",
            data.shareTestimony
        );

        setText(
            ".testimonies-section .button-secondary",
            data.sendWhatsApp
        );


        /* MINISTRIES */

        setText(
            ".ministries-section .section-label",
            data.ministriesLabel
        );

        setText(
            ".ministries-section h2",
            data.ministriesTitle
        );

        setText(
            ".ministries-section .section-intro",
            data.ministriesText
        );


        const ministryCards =
            document.querySelectorAll(".ministry-card");


        if (ministryCards.length >= 3) {

            setText(
                ".ministry-card:nth-child(1) h3",
                data.ministry1Title
            );

            setText(
                ".ministry-card:nth-child(1) p",
                data.ministry1Text
            );

            setText(
                ".ministry-card:nth-child(2) h3",
                data.ministry2Title
            );

            setText(
                ".ministry-card:nth-child(2) p",
                data.ministry2Text
            );

            setText(
                ".ministry-card:nth-child(3) h3",
                data.ministry3Title
            );

            setText(
                ".ministry-card:nth-child(3) p",
                data.ministry3Text
            );

        }


        setAllText(
            ".ministry-card a",
            data.learnMinistry
        );

        setText(
            ".ministries-count",
            data.ministriesCount
        );


        /* FOOTER */

        setText(
            ".youtube-channel-button",
            data.footerYouTube
        );

        setText(
            ".footer-brand p",
            data.footerTagline
        );

        setText(
            ".footer-bottom p",
            data.copyright
        );


        /* FOOTER LINKS */

        document
            .querySelectorAll(".footer-links a")
            .forEach((link) => {

                const href =
                    link.getAttribute("href");

                const footerMap = {

                    "#home":
                        data.navHome,

                    "#about":
                        data.navAbout,

                    "#ministries":
                        data.navMinistries,

                    "#messages":
                        data.navMessages,

                    "#daily-promise":
                        data.navPromise,

                    "#live":
                        data.navLive,

                    "#testimonies":
                        data.navTestimonies,

                    "/locations":
                        data.navLocations,

                    "#prayer":
                        data.prayerButtonText,

                    "#contact":
                        data.navContact

                };

                if (footerMap[href]) {
                    link.textContent =
                        footerMap[href];
                }

            });


        /* LANGUAGE BUTTON */

        if (languageSelector) {

            languageSelector.childNodes[0].textContent =
                language === "en"
                    ? "ENGLISH "
                    : language === "te"
                        ? "తెలుగు "
                        : "हिन्दी ";

        }


        /* HTML LANGUAGE */

        document.documentElement.lang =
            language === "en"
                ? "en"
                : language === "te"
                    ? "te"
                    : "hi";


        /* SAVE LANGUAGE */

        localStorage.setItem(
            "preferredLanguage",
            language
        );

    }


    /*
    =========================================================
    LANGUAGE MENU
    =========================================================
    */

    if (languageSelector && languageMenu) {

        languageSelector.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                const isOpen =
                    languageMenu.classList.toggle("show");

                languageSelector.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                languageMenu.setAttribute(
                    "aria-hidden",
                    String(!isOpen)
                );

            }
        );


        languageMenu
            .querySelectorAll("[data-language]")
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    (event) => {

                        event.stopPropagation();

                        const language =
                            button.getAttribute(
                                "data-language"
                            );

                        changeLanguage(language);

                        languageMenu.classList.remove(
                            "show"
                        );

                        languageSelector.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        languageMenu.setAttribute(
                            "aria-hidden",
                            "true"
                        );

                    }
                );

            });

    }


    /*
    =========================================================
    MOBILE MENU
    =========================================================
    */

    if (mobileMenuButton && navLinks) {

        mobileMenuButton.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                const isOpen =
                    navLinks.classList.toggle(
                        "mobile-open"
                    );

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                mobileMenuButton.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                );

            }
        );


        /* CLOSE MENU AFTER CLICKING A LINK */

        navLinks
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        navLinks.classList.remove(
                            "mobile-open"
                        );

                        mobileMenuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        mobileMenuButton.setAttribute(
                            "aria-label",
                            "Open navigation menu"
                        );

                    }
                );

            });

    }


    /*
    =========================================================
    CLICK OUTSIDE
    =========================================================
    */

    document.addEventListener(
        "click",
        (event) => {

            if (
                languageMenu &&
                languageSelector &&
                !languageMenu.contains(event.target) &&
                !languageSelector.contains(event.target)
            ) {

                languageMenu.classList.remove(
                    "show"
                );

                languageSelector.setAttribute(
                    "aria-expanded",
                    "false"
                );

                languageMenu.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }


            if (
                navLinks &&
                mobileMenuButton &&
                !navLinks.contains(event.target) &&
                !mobileMenuButton.contains(event.target)
            ) {

                navLinks.classList.remove(
                    "mobile-open"
                );

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileMenuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        }
    );


    /*
    =========================================================
    LOAD SAVED LANGUAGE
    =========================================================
    */

    const savedLanguage =
        localStorage.getItem(
            "preferredLanguage"
        );

    if (
        savedLanguage &&
        translations[savedLanguage]
    ) {

        changeLanguage(savedLanguage);

    }

});

