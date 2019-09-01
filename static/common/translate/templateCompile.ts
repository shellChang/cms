
/*
 * @Description: TODO 编译模板的函数
 * @Author: zb
 * @Date: 2019-08-30 23:14:05
 * @LastEditors: zb
 * @LastEditTime: 2019-08-31 21:31:56
 */
const getVariable: RegExp = /(\{\{)\s*(\S+\.?)+\s*(\}\})/g

const compile = function (): Function {
    //  是否首次解析
    let isInit = true; 
    const textNodes: Map<string, Node> = new Map<string, Node>()
    return function (html: Node, data?: object): any {
        if (isInit) {
            const nodes: Node[] = [];
            nodes.push(html)
            let index = 0;
            while (index < nodes.length) {
                if (nodes[index].hasChildNodes()) {
                    nodes[index].childNodes.forEach(node => {
                        if (node.nodeType === 3) {
                            if (getVariable.test(node.textContent)) {
                                textNodes.set(node.textContent, node)
                                node.textContent = node.textContent && node.textContent.replace(getVariable, replace(data))
                            }
                        } else if (node.nodeType === 1) {
                            nodes.push(node);
                        }
                    })
                }
                index++;
            }
            isInit = false
        } else {
            textNodes.forEach((n, key) => {
                n.textContent = key.replace(getVariable, replace(data))
            })
        }
    }
}

/**
 * @description: 获取编译节点的函数
 * @param {type} 
 * @return: 
 */
export const compileHtml: Function = compile()

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