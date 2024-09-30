import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar:{
        home:"Home",
        about:"About",
        services:"Services",
        projects:"Projects",
        certificates:"Certificates",
        contact:"Contact"
      },
      welcome: "Hello!",
      name: "Saed Mughari",
      job: "Digital Marketing",
      description:
        "I help brands grow by optimizing their online presence and running high-converting ad campaigns. Let's unlock your brand's potential and achieve your goals together",
      downloadCv: "Download CV",
      contactMe: "Contact Me",
      aboutMe: "About Me",
      quote:
        "I help businesses build their digital presence and generate more leads",
      informationAboutMe:
        "A passionate digital marketing specialist with expertise in social media marketing, social media management, brand development, Google ads, content writing, email marketing, and social media ads.",
      projectTitle: "My Projects",
      sneakPeek: "sneak peek of my recent projects",
      certificates: "Certificates",
      testimonialsQuote: " What the clients say?",
      services: {
        servicetitle:"services",

        serviceone:
          "Social Media Advertising Campaigns and Management Conference",
        servicestwo:
          "Helping startups and medium-sized enterprises improve their digital presence and increase their sales.",
        servicesthree: "Marketing Consulting",
        servicesfour: "Marketing plans",
        servicesfive:
          "Launch and manage advertising campaigns on Google platform",
      },
    },
  },
  ar: {
    translation: {
      navbar:{
        home:"الرئيسية",
        about:"عني",
        services:"خدماتي",
        projects:"مشاريعي",
        certificates:"شهاداتي",
        contact:"تواصل"
      },
      welcome: "مرحبا، أنا",
      name: "سائد مغاري",
      job: "التـســـويـق الـرقـمـــي",
      description:
        "أساعد العلامات التجارية على النمو من خلال تحسين حضورها عبر الإنترنت وتشغيل حملات إعلانية عالية التحويل. دعنا نطلق العنان لإمكانات علامتك التجارية ونحقق أهدافك معًا",
      downloadCv: "تحميل السيرة الذاتية",
      contactMe: "اتصل بي",
      aboutMe: "نبذة عني",
      quote:
        "أساعد الشركات في بناء حضورها الرقمي وتوليد المزيد من العملاء المحتملين",
      informationAboutMe:
        "متخصص متحمس في التسويق الرقمي يتمتع بخبرة في تسويق وسائل التواصل الاجتماعي وإدارة وسائل التواصل الاجتماعي وتطوير العلامة التجارية وإعلانات Google وكتابة المحتوى والتسويق عبر البريد الإلكتروني وإعلانات وسائل التواصل الاجتماعي.",
      projectTitle: "مشاريعي",
      sneakPeek: "نظرة خاطفة على مشاريعي الأخيرة",
      certificates: "الشهادات",
      testimonialsQuote: "ماذا يقولون العملاء",
      services: {
        servicetitle:"خدماتي",
        serviceone: "حملات الإعلانات على وسائل التواصل الاجتماعي وإدارة المؤتمرات",
        servicestwo: "مساعدة الشركات الناشئة والمتوسطة الحجم على تحسين حضورها الرقمي وزيادة مبيعاتها.",
        servicesthree: "الاستشارات التسويقية",
        servicesfour: "خطط التسويق",
        servicesfive: "إطلاق وإدارة الحملات الإعلانية على منصة جوجل",
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
