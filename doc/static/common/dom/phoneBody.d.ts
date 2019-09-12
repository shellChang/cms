import { Body } from '@/common/interface';
declare class PhoneBody implements Body {
    private readonly _el;
    private data;
    constructor();
    bootstrap(params?: object): void;
    readonly el: HTMLBodyElement;
    translate(data?: object): void;
}
export { PhoneBody };
