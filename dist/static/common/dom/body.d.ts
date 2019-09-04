import { Component } from '@/common/interface/component';
export declare class Body implements Component {
    private readonly _el;
    private data;
    constructor();
    bootstrap(): void;
    readonly el: HTMLBodyElement;
    translate(data?: object): void;
}
