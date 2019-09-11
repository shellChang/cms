/*
 * @Description: TODO 头部导航栏组件
 * @Author: zb
 * @Date: 2019-08-31 18:57:40
 * @LastEditors: zb
 * @LastEditTime: 2019-09-05 00:54:22
 */
import { Component } from '@/common/interface/component'
import { appInstance, platformInstance, Language } from "@/common/core";

class Header implements Component {
    private readonly _el: HTMLElement;
    constructor() {
        this._el = $(`.${appInstance.cssPrefix}-header`) && $(`.${appInstance.cssPrefix}-header`)[0]
    }
    public bootstrap(): void {        
        if (this._el !== null && this._el !== undefined ) {
            const langList: HTMLUListElement = $(this._el).find(".lang-downlist") && $(this._el).find(".lang-downlist")[0]
            // 设置导航栏的样式和点击事件
            const menus = $(this._el).find(`.${appInstance.cssPrefix}-menus li`);
            let prevMenu: HTMLLIElement = null;
            
            menus.each((index, node) => {
                const href: string = $(node).find('a')[0] && $(node).find('a')[0].href       
                
                if (location.href.substring(0, location.href.length - 1) === platformInstance.origin && index === 0) {
                    if (prevMenu !== null) {
                        $(prevMenu).removeClass('cur');
                    }
                    $(node).addClass('cur')
                    prevMenu = node;
                } else if (href &&  location.href === href) {
                    if (prevMenu !== null) {
                        $(prevMenu).removeClass('cur');
                    }
                    $(node).addClass('cur')
                    prevMenu = node;
                }
                // $(node).on('click', (e: Event) => {
                //     if (prevMenu !== null) {
                //         $(prevMenu).removeClass('cur');
                //     }
                //     prevMenu = node;
                //     $(node).addClass('cur')
                // })
            })

            // 创建语言选择列表
            const langNum = Object.keys(Language).length / 2
            if (langNum > 0) {
                const fragment: DocumentFragment = document && document.createDocumentFragment();
                for (let i = 0; i < langNum; i++) {
                    const li: HTMLLIElement = document && document.createElement('li');
                    const a: HTMLElement = document && document.createElement('a');
                    a.classList.add('item-link')
                    a.innerText = Language[Language[i]] === Language.CHINESE ? '中' : 'EN';
                    li.appendChild(a)
                    li.classList.add('downlist-item');
                    li.setAttribute('data-langType', Language[Language[i]])
                    if (platformInstance.lang === Number.parseInt(Language[Language[i]])) {
                        li.classList.add('cur');
                        fragment.insertBefore(li, fragment.firstChild)
                    } else {
                        fragment.appendChild(li)
                    }
                }
                langList.appendChild(fragment)
            }

            // 设置语言选择样式和点击事件
            const languages = $(this._el).find(".lang-downlist li");
            let prevNode: HTMLLIElement = languages && languages[0];
            languages.each((index, node) => {
                if (Number.parseInt($(node).attr('data-langType')) === platformInstance.lang) {
                    $(node).addClass('cur');
                }
                $(node).on('click', (e: Event) => {
                    if (prevNode !== null) {
                        $(prevNode).removeClass('cur');
                    }
                    prevNode = node;
                    $(node).addClass('cur')
                    langList.insertBefore(node, langList.firstChild)

                    platformInstance.changeLang(Number.parseInt($(node).attr('data-langType')));
                })
            })
        }
    }

    get el(): HTMLElement {
        return this._el;
    }
}

const headerInstance: Header = new Header();

export { Header, headerInstance }