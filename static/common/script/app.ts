
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