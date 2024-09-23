import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: "Hello!",
            name: "Saed Mughari",
            job: "Digital Marketing",
            description: "I help brands grow by optimizing their online presence and running high-converting ad campaigns. Let's unlock your brand's potential and achieve your goals together",
            downloadCv: "Download CV",
            contactMe: "Contact Me",
            aboutMe: "About Me",
            quote: "I help businesses build their digital presence and generate more leads",
            informationAboutMe: "A passionate digital marketing specialist with expertise in social media marketing, social media management, brand development, Google ads, content writing, email marketing, and social media ads.",
            projectTitle: "My Projects",
            sneakPeek:"sneak peek of my recent projects",
            testimonials:"Testimonials",
            testimonialsQuote:" What the clients say?",

            

        }
    },
    ar: {
        translation: {
            welcome: "مرحبا، أنا",
            name: "سائد مغاري",
            job: "التسويق الرقمي",
            description: "أساعد العلامات التجارية على النمو من خلال تحسين حضورها عبر الإنترنت وتشغيل حملات إعلانية عالية التحويل. دعنا نطلق العنان لإمكانات علامتك التجارية ونحقق أهدافك معًا",
            downloadCv: "تحميل السيرة الذاتية",
            contactMe: "اتصل بي",
            aboutMe: "نبذة عني",
            quote: "أساعد الشركات في بناء حضورها الرقمي وتوليد المزيد من العملاء المحتملين",
            informationAboutMe: "متخصص متحمس في التسويق الرقمي يتمتع بخبرة في تسويق وسائل التواصل الاجتماعي وإدارة وسائل التواصل الاجتماعي وتطوير العلامة التجارية وإعلانات Google وكتابة المحتوى والتسويق عبر البريد الإلكتروني وإعلانات وسائل التواصل الاجتماعي.",
            projectTitle: "مشاريعي",
            sneakPeek:"نظرة خاطفة على مشاريعي الأخيرة",
            testimonials:"اراء العملاء",
            testimonialsQuote:"ماذا يقولون العملاء",

        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    }
});

export default i18n;
