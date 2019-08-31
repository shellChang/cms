/*
 * @Description: TODO 网站的运行环境
 * @Author: zb
 * @Date: 2019-08-30 19:23:04
 * @LastEditors: zb
 * @LastEditTime: 2019-08-30 21:11:41
 */
//  设备类型
export enum Device {
    PC = 1,
    PHONE = 2,
    IPAD = 3
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

    // constructor(lang?: Language, device?: Device) {
    //         this._lang = lang;
    //         this._device = device;       
    // }

    public constructor() {
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

    }

    private _lang: Language = Language.ENGLISH;  // 语言

    private _device: Device; // 设备

    public get lang(): Language {
        return this._lang;
    }

    
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