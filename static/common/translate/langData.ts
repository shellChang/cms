/*
 * @Description: TODO 各语言的数据
 * @Author: zb
 * @Date: 2019-08-31 18:57:40
 * @LastEditors: zb
 * @LastEditTime: 2019-09-01 11:13:36
 */
import { platformInstance, Language } from '@/common'

const zh_language = {
    key_1: '公司简介',
    key_2: '成功案例展示',
    key_3: '公司风采',
    key_4: '联系我们'
 };

 const en_language = {
   key_1: 'Company Introduce',
   key_2: 'Demonstration of Success Cases',
   key_3: 'Company elegance',
   key_4: 'Contact us'
 }

export const getLangData = function(lang: Language): object {
    if(lang === Language.CHINESE) {
        return zh_language 
     } else if (lang === Language.ENGLISH) {
        return en_language;
     }
}
