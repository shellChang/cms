/**
 * @description: 中文说明  ts变量声明
 * @author: zb
 * @update: zb
 * @Date: 2019-07-24 09:16:55
 * @LastEditors: zb
 * @LastEditTime: 2019-07-24 17:21:57
 */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface WebpackRequire {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}

interface NodeRequire extends WebpackRequire {}

declare var require: NodeRequire;
declare var System: any;
declare var $: (selector : string|Element|Document) => any;
declare var fullPage: (containerSelector: string, options: object) => void

