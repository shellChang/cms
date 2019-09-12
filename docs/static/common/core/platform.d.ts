export declare enum Device {
    PC = 1,
    PHONE = 2,
    IPAD = 3,
    length = 3
}
export declare enum Language {
    ENGLISH = 0,
    CHINESE = 1
}
export declare class PlatformError extends Error {
    constructor(message?: string);
}
import { Header, Body } from '@interface';
export declare class Platform implements EventTarget {
    private listeners;
    private _clientWidth;
    private _clientHeight;
    private _lang;
    private _device;
    private _origin;
    private _header;
    private _body;
    body: Body;
    origin: string;
    device: Device;
    header: Header;
    readonly lang: Language;
    readonly clientWidth: number;
    readonly clientHeight: number;
    constructor();
    changeDeviceBySrcollWeight(): void;
    changeLang(value: Language): void;
    langName(): string;
    deviceName(): string;
    private swithEnvironment;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}
export declare const platformInstance: Platform;
