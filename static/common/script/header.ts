import { Component } from '@/common/interface/component'
import { appInstance } from "./app";
import { platformInstance, Language } from "./platform";

 class Header  implements Component {
    private readonly _el: HTMLHeadingElement;
    constructor() {
        this._el = $(`.${appInstance.cssPrefix}-header`) && $(`.${appInstance.cssPrefix}-header`)[0]
    }

    public bootstrap(): void {
        if (this._el !== null) {
            // 设置导航栏的样式和点击事件
            const menus = $(this._el).find(`.${appInstance.cssPrefix}-menus li`);
            let prevMenu: HTMLLIElement = menus && menus[0];
            menus.each((index, node) => {
                $(node).on('click', (e: Event) => {
                    if (prevMenu !== null) {
                        $(prevMenu).removeClass('cur');
                    }
                    prevMenu = node;
                    $(node).addClass('cur')
                })
            })

            // 设置语言选择样式和点击事件
            const languages = $(this._el).find(".lang-downlist li");
            let prevNode: HTMLLIElement = languages && languages[0];
            languages.each((index, node) => {
                if( Number.parseInt($(node).attr('data-langType')) === platformInstance.lang) {
                    $(node).addClass('cur');
                }
                $(node).on('click', (e: Event) => {
                    if (prevNode !== null) {
                        $(prevNode).removeClass('cur');
                    }
                    prevNode = node;
                    $(node).addClass('cur')

                    platformInstance.changeLang(Number.parseInt($(node).attr('data-langType')));
                })
            })
        }
    }

    get  el(): HTMLHeadingElement {
        return this._el;
    }
}

const headerInstance: Header =  new Header();

export {Header, headerInstance}