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
export declare class Platform implements EventTarget {
    private listeners;
    private _clientWidth;
    readonly clientWidth: number;
    private _clientHeight;
    readonly clientHeight: number;
    constructor();
    private _lang;
    private _device;
    private _origin;
    origin: string;
    readonly lang: Language;
    changeDeviceBySrcollWeight(): void;
    changeLang(value: Language): void;
    device: Device;
    langName(): string;
    deviceName(): string;
    private swithEnvironment;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}
export declare const platformInstance: Platform;
