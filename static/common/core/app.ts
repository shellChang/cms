/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-08-31 18:57:40
 * @LastEditors: zb
 * @LastEditTime: 2019-09-01 11:11:42
 */

class App { 
    private _cssPrefix = 'ke-nuo';

    private _appName: string = '公司网站';

    constructor(appName?: string) {
        this._appName = appName
    }

    public get cssPrefix() {
        return this._cssPrefix;
    }
    public set cssPrefix(value) {
        this._cssPrefix = value;
    }

    public get appName(): string {
        return this._appName;
    }
    public set appName(value: string) {
        this._appName = value;
    }
}

const appInstance: App = new App();

export {App, appInstance}