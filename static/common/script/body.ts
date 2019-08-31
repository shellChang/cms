/*
 * @Description: TODO 获取页面的body
 * @Author: zb
 * @Date: 2019-08-30 23:13:40
 * @LastEditors: zb
 * @LastEditTime: 2019-08-31 02:43:44
 */
import { Component } from '@/common/interface/component'
import { platformInstance } from "./platform";
import { compile } from "./templateCompile";
import { getTranslateData } from "./translateData";

export class Body implements Component {
    private readonly _el: HTMLBodyElement;

    private data: object = {}

    constructor() {
        this._el = $('body') && $('body')[0];
        platformInstance.addEventListener('langChange', (e: CustomEvent) => {
            // if(this.data && Object.keys(this.data).length > 0) {
                const data = getTranslateData(e.detail['lang'])
                this.translate(data)
            // }
        })
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
        Object.assign(this.data, data);

        if (this._el) {
            const html: Element| string = this._el.querySelector('main') 
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
