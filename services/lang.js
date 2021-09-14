import { default_lang } from '@/config/lang'
import { fa } from '@/lang/fa'

const languages = {
    'fa': fa,
};

export const tr = () => {
    if (process.browser) {
        let lang = window.localStorage.getItem('lang');

        if (lang == undefined || lang == null || languages[String(lang)] == undefined) {
            window.localStorage.setItem('lang', default_lang);
            return languages[default_lang];
        }

        return languages[String(lang)];
    }
    
    return languages[default_lang];
}
