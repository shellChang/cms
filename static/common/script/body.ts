/*
 * @Description: TODO 获取页面的body
 * @Author: zb
 * @Date: 2019-08-30 23:13:40
 * @LastEditors: zb
 * @LastEditTime: 2019-08-31 02:43:44
 */
import { Component } from '@/common/interface/component'

import { compile } from "./templateCompile";

export class Body implements Component {
    private readonly _el: HTMLBodyElement;
    constructor() {
        this._el = $('body') && $('body')[0];
    }

    public bootstrap(): void {
        if (this._el !== null) {

        }
    }

    get el(): HTMLBodyElement {
        return this._el;
    }

    /**
     * @description: 翻译body的html
     * @param {type} 
     * @return: 
     */
    public translate(data?: object) {
        if (this._el) {
            const html: Element = this._el.querySelector('main') 
            if (typeof html === 'string') {
                const div: HTMLDivElement = document.createElement('div');
                div.innerHTML = compile(html, data);
                const dFragment: DocumentFragment = document.createDocumentFragment()
                while (div.firstChild) {
                    dFragment.appendChild(div.firstChild)
                }
                this._el.replaceChild(dFragment, this._el.querySelector('main'));
            } else {
                compile(html, data);
            }
        }
    }
}
