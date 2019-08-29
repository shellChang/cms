// import { Component } from './../interface/component';
import { Component } from '@/common/interface/component'

export class Header implements Component {
    private readonly el: HTMLElement;
    constructor() {
        this.el = $('.ke-nuo-header') && $('.ke-nuo-header')[0]
    }

    public bootstrap(): void {
        if (this.el !== null) {
            const lis = $(this.el).find("li");
            let prevNode: HTMLLIElement = null;
            lis.each((index, node) => {
                $(node).on('click', (e: Event) => {
                    if (prevNode !== null) {
                        $(prevNode).removeClass('cur');
                    }
                    prevNode = node;
                    $(node).addClass('cur')
                })
            })
        }
    }
}