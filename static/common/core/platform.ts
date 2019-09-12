/*
 * @Description: TODO 网站的运行环境
 * @Author: zb
 * @Date: 2019-08-30 19:23:04
 * @LastEditors: zb
 * @LastEditTime: 2019-09-12 23:36:31
 */

const config = require('../../../app.config')

//  设备类型
export enum Device {
    PC = 1,
    PHONE = 2,
    IPAD = 3,
    length = 3
}

//  语言类型
export enum Language {
    ENGLISH = 0,
    CHINESE = 1
}

// 获取运行环境时抛出的异常
export class PlatformError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'PlatformError';
    }
}

import { Header, Body } from '@interface'
import { PcHeader, PcBody, PhoneBody, PhoneHeader } from '@dom'


export class Platform implements EventTarget {

    private listeners: { type?: string, eventListeners?: EventListenerOrEventListenerObject[] } = {}

    // 屏幕的宽度
    private _clientWidth: number = document && document.body && document.body.clientWidth;

    //  屏幕的高度
    private _clientHeight: number = document && document.body && document.body.clientHeight;

    private _lang: Language = Language.CHINESE;  // 语言

    private _device: Device; // 设备

    private _origin: string; //域名

    private _header: Header;

    private _body: Body;


    public get body(): Body {
        return this._body;
    }
    public set body(value: Body) {
        this._body = value;
    }

    public get origin(): string {
        return this._origin;
    }
    public set origin(value: string) {
        this._origin = value;
    }

    public get device(): Device {
        return this._device;
    }
    public set device(value: Device) {
        this._device = value;
    }

    public get header(): Header {
        return this._header;
    }
    public set header(value: Header) {
        this._header = value;
    }

    public get lang(): Language {
        return this._lang;
    }
   
    public get clientWidth(): number {
        return this._clientWidth;
    }


    public get clientHeight(): number {
        return this._clientHeight;
    }


    public constructor() {        
        // 根据客户端标记获取运行环境
        if (navigator && navigator.userAgent) {
            const userAgent: string = navigator.userAgent.toLowerCase();
            userAgent.search(/ipad/i) !== -1 ? this._device = Device.IPAD :
                (userAgent.search(/iphone os/i) !== -1 ||
                    userAgent.search(/midp/i) !== -1 ||
                    userAgent.search(/ucweb/i) !== -1 ||
                    userAgent.search(/android/i) !== -1 ||
                    userAgent.search(/windows ce/i) !== -1 ||
                    userAgent.search(/windows mobile/i) !== -1
                ) ? this._device = Device.PHONE : this._device = Device.PC
        } else {
            throw new PlatformError("This is not browser environment!")
        }

        // 获取url的源地址
        if(location && location.origin) {
            this._origin = location.origin
        }

        // 根据页面大小来设定运行环境
        if (config['envirenment'] === 'dev') {
            this.changeDeviceBySrcollWeight()
        } else {
            $(window).resize(e => {
                this.changeDeviceBySrcollWeight()
                this.swithEnvironment()
            })
        }

        $(document).on('DOMContentLoaded',  (e) => {
            this.swithEnvironment()
        })
        // 获取dom 头 和dom 体
        $(window).on('load', (e) => {
            if(this._device === Device.PC ) {
                this._body = new PcBody();
                this._header = new PcHeader();                       
            } else {                
                this._body = new PhoneBody();
                this._header = new PhoneHeader();              
            }
            this._header.bootstrap()
            this._body.bootstrap({lang: this._lang})
            this.dispatchEvent(new CustomEvent('load', { detail: {  } }))        
        })

    }

    //  通过屏幕的大小，设置网站的设备类型
    public changeDeviceBySrcollWeight(): void {
            if (this._clientWidth < 768) {
                this._device = Device.PHONE
            } else if (this._clientWidth < 1024) {
                this._device = Device.IPAD
            } else {
                this._device = Device.PC
        }
    }



    //  改变网站语言，并发射langChange事件
    public changeLang(value: Language): void {
        this._lang = value
        this.dispatchEvent(new CustomEvent('langChange', { detail: { lang: this._lang } }))
    }

    public langName(): string {
        return this._lang === Language.CHINESE ? '中文' : this._lang === Language.ENGLISH ? '英文' : 'unknow language';
    }

    public deviceName(): string {
        return this._device === Device.PC ? 'pc' : this._device === Device.IPAD ? 'ipad' : this._device === Device.PHONE ? '手机' : 'unknow device';
    }

    private swithEnvironment(): void {
        if(this._device === Device.PC && location.href.startsWith(`${this._origin}/m.`)) {
            const url = location.href.substring(this._origin.length + 3, location.href.length)
            location.replace(`${this._origin}/${url}`)
            
        } else if ( (this._device === Device.IPAD || this._device === Device.PHONE) && !location.href.startsWith(`${this._origin}/m.`) ) {
            let url = location.href.substring(this._origin.length, location.href.length).replace('/', '')
            if(url === '') {
                url = 'index.html'
            }
            location.replace(`${this._origin}/m.${url}`)
        }
    }


    public addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void {
        if (!this.listeners.hasOwnProperty(type)) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(listener);
    }

    dispatchEvent(event: Event): boolean {
        if (this.listeners.hasOwnProperty(event.type)) {
            const stack: EventListenerOrEventListenerObject[] = this.listeners[event.type];
            stack.forEach((listener: EventListenerOrEventListenerObject | any) => {
                listener.call(this, event);
            });
            return true;
        } else {
            return false;
        }
    }
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void {
        if (this.listeners.hasOwnProperty(type)) {
            const stack: EventListenerOrEventListenerObject[] = this.listeners[type];
            let index = stack.indexOf(callback);
            while (index !== -1) {
                stack.splice(index, 1);
                index = stack.indexOf(callback);
            }
        }
    }


};

// Platform 单例
export const platformInstance: Platform = new Platform();