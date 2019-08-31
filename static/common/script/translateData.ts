import { platformInstance, Language } from '@/common'

const zh_language = {
    introduce: '公司简介'
 };

 const en_language = {
    introduce: 'Company Introduce'
 }

export const getTranslateData = function(lang: Language): object {
    if(lang === Language.CHINESE) {
        return zh_language 
     } else if (lang === Language.ENGLISH) {
        return en_language;
     }
}
