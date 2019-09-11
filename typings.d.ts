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

interface ScrollRevealOptions {
  delay?: number,
	distance?: string,
	duration?: number,
	easing?: string,
	interval?: number,
	opacity?: number,
	origin?: string,
	rotate?: {x: number, y: number, z: number},
	scale?: number,
	cleanup?: boolean,
	container: Element,
	desktop?: boolean,
	mobile?: boolean,
	reset?: boolean,
	useDelay?: string,
	viewFactor?: number,
	viewOffset?: {
		top?: number,
		right?: number,
		bottom?: number,
		left?: number
	},
	afterReset?: () => any,
	afterReveal?: () => any,
	beforeReset?: () => any,
	beforeReveal?: () => any
}

interface FullPageOptions {
   navigation?: boolean, //是否显示导航（小圆点）
   navigationPosition?: 'left' | 'right', //设置小圆点位置 left right
   verticalCentered?: boolean,     // 每一页的内容是否垂直居中
   lockAnchors?: boolean,
   scrollOverflow?: boolean,       // 超出是否显示滚动条
   dragAndMove?: boolean,
   controlArrows?: boolean,
   sectionsColor?: string[], //   定义背景颜色
   autoScrolling?: boolean,
   paddingTop?: string,
   continuousVertical?: boolean,
   css3?: boolean,
   parallax?: boolean,
   fixedElements?: string,
   //是否包含滚动条，设为true，则浏览器自带的滚动条会出现，页面还是按页滚动，但是浏览器滚动条默认行为也有效
   scrollBar?: boolean,
   onLeave?: (from, to ) => void
}

interface NodeRequire extends WebpackRequire {}

declare var require: NodeRequire;
declare var System: any;
declare var $: (selector : string|Element|Document|Window) => any;
declare var fullPage: (containerSelector: string, options: FullPageOptions) => void;
declare var ScrollReveal: (options: ScrollRevealOptions) => any;
declare var mui: any;
declare var plus: any;


