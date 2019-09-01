/*
 * @Description: TODO 中文说明  ts变量声明
 * @Author: zb
 * @Date: 2019-08-26 22:32:17
 * @LastEditors: zb
 * @LastEditTime: 2019-09-01 12:43:26
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
declare var $: (selector : string|Element|Document|Window) => any;
declare var fullPage: (containerSelector: string, options: object) => void

