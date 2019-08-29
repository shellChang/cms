import { Component } from '@/common/interface/component'

 class Header implements Component {
    private readonly _el: HTMLHeadingElement;
    constructor() {
        this._el = $('.ke-nuo-header') && $('.ke-nuo-header')[0]
    }

    public bootstrap(): void {
        if (this._el !== null) {
            const lis = $(this._el).find("li");
            let prevNode: HTMLLIElement = lis && lis[0];
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

    get  el(): HTMLHeadingElement {
        return this._el;
    }
}

const headerInstance: Header =  new Header();

export {Header, headerInstance}