/*
 * @Description: TODO 编译模板的函数
 * @Author: zb
 * @Date: 2019-08-30 23:14:05
 * @LastEditors: zb
 * @LastEditTime: 2019-08-31 03:03:35
 */
const getVariable: RegExp = /(\{\{)\s*(\S+\.?)+\s*(\}\})/g

export const compile = function (html: string | Element, data?: object): string {
    if (typeof html === 'string') {
        return html && html.replace(getVariable, replace(data))
    } else {
        const nodes: Node[] = [];
        nodes.push(html)
        let index = 0;
        while (index < nodes.length) {
            if (nodes[index].hasChildNodes()) {
                nodes[index].childNodes.forEach(node => {
                    if (node.nodeType === 3) {
                        node.textContent = node.textContent && node.textContent.replace(getVariable, replace(data))
                    } else if (node.nodeType === 1) {
                        nodes.push(node);
                    }
                })
            }
            index++;
        }
    }
}

/**
 * @description: 替换正则表达式匹配的的数据
 * @param {type} 
 * @return: 
 */
const replace = function (data?: object): any {
    return function (match, p1, p2, p3, offset, string) {
        if (!data || p2 === '') {
            return p2
        } else {
            const keys = p2 && p2.split('.');

            for (const key of keys) {
                if (!data[key]) {
                    return p2;
                }
                data = data[key]
            }
            return data
        }
    }
}