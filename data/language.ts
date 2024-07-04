import { Language } from "@/types/languages";

// data/language.ts
const Languages : Language[]= [
  {
    language_code: "en",
    language_name: "English",
    is_default: true,
  },
  {
    language_code: "es",
    language_name: "Spanish",
    is_default: false,
  },
  {
    language_code: "fr",
    language_name: "French",
    is_default: false,
  },
  {
    language_code: "de",
    language_name: "German",
    is_default: false,
  },
  // Add more languages as needed
];

export default Languages;
