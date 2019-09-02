/*
 * @Description: TODO 网站的运行环境
 * @Author: zb
 * @Date: 2019-08-30 19:23:04
 * @LastEditors: zb
 * @LastEditTime: 2019-09-01 23:18:50
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


export class Platform implements EventTarget {

    private listeners: { type?: string, eventListeners?: EventListenerOrEventListenerObject[] } = {}



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

    }

    private _lang: Language = Language.CHINESE;  // 语言

    private _device: Device; // 设备

    private _origin: string; //域名

    
    public get origin(): string {
        return this._origin;
    }
    public set origin(value: string) {
        this._origin = value;
    }

    public get lang(): Language {
        return this._lang;
    }


    //  通过屏幕的大小，设置网站的设备类型
    public changeDeviceBySrcollWeight(): void {
        const width =  document.body.clientWidth
        // window.screen.width || document.documentElement.clientWidth
            if (width < 768) {
                this._device = Device.PHONE
            } else if (width < 1024) {
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

    // public set lang(value: Language) {
    //     this._lang = value;
    // }

    public get device(): Device {
        return this._device;
    }
    public set device(value: Device) {
        this._device = value;
    }

    public langName(): string {
        return this._lang === Language.CHINESE ? '中文' : this._lang === Language.ENGLISH ? '英文' : 'unknow language';
    }

    public deviceName(): string {
        return this._device === Device.PC ? 'pc' : this._device === Device.IPAD ? 'ipad' : this._device === Device.PHONE ? '手机' : 'unknow device';
    }

    private swithEnvironment(): void {
        if(this._device === Device.PC && location.href.startsWith(`${this._origin}/m`)) {
            const url = location.href.substring(this._origin.length + 2, location.href.length)
            location.replace(`${this._origin}${url}`)
            
        } else if ( (this._device === Device.IPAD || this._device === Device.PHONE) && !location.href.startsWith(`${this._origin}/m`) ) {
            const url = location.href.substring(this._origin.length, location.href.length)
            location.replace(`${this._origin}/m${url}`)
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