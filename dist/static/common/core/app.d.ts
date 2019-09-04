declare class App {
    private _cssPrefix;
    private _appName;
    constructor(appName?: string);
    cssPrefix: string;
    appName: string;
}
declare const appInstance: App;
export { App, appInstance };
