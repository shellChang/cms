/*
 * @Description: TODO 头部导航栏组件
 * @Author: zb
 * @Date: 2019-08-31 18:57:40
 * @LastEditors: zb
 * @LastEditTime: 2019-09-13 00:14:44
 */
import { Header } from '@/common/interface'
import { appInstance, platformInstance, Language } from "@/common/core";

class PhoneHeader implements Header {
    private readonly _el: HTMLElement;
    constructor() {
        this._el = $(`aside`) && $(`aside`)[0]
    }
    public bootstrap(): void {        
        if (this._el !== null && this._el !== undefined ) {
            const langList: HTMLSelectElement = $(this._el).find(".language select") && $(this._el).find(".language select")[0]
 
            // 创建语言选择列表
            const langNum = Object.keys(Language).length / 2
            if (langNum > 0) {
                const fragment: DocumentFragment = document && document.createDocumentFragment();
                for (let i = 0; i < langNum; i++) {
                    const option: HTMLOptionElement = document && document.createElement('option');     
                    option.innerText = Language[Language[i]] === Language.CHINESE ? '中' : 'EN';     
                    option.value =  Language[Language[i]];
                    if (platformInstance.lang === Number.parseInt(Language[Language[i]])) {
                        option.selected = true
                        fragment.insertBefore(option, fragment.firstChild)
                    } else {
                        fragment.appendChild(option)
                    }
                }
                langList.appendChild(fragment)
            }

            // 设置语言选择样式和点击事件
            const language: HTMLSelectElement = $(this._el).find(".language select") && $(this._el).find(".language select")[0];

            language.addEventListener('change', (e) => {                
                platformInstance.changeLang(Number.parseInt(language.value));
            })


        }
    }

    get el(): HTMLElement {
        return this._el;
    }
}

export { PhoneHeader }