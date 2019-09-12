import { Header } from '@/common/interface';
declare class PcHeader implements Header {
    private readonly _el;
    constructor();
    bootstrap(params?: object): void;
    readonly el: HTMLElement;
}
export { PcHeader };
