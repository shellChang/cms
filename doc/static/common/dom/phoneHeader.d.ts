import { Header } from '@/common/interface';
declare class PhoneHeader implements Header {
    private readonly _el;
    constructor();
    bootstrap(): void;
    readonly el: HTMLElement;
}
export { PhoneHeader };
