import { Component } from '@/common/interface/component';
declare class Header implements Component {
    private readonly _el;
    constructor();
    bootstrap(): void;
    readonly el: HTMLElement;
}
declare const headerInstance: Header;
export { Header, headerInstance };
