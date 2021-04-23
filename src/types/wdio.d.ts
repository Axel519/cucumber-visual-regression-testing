/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	declare function $(selector: string | Function): WebdriverIO.Element;

	/**
	* find multiple elements on the page.
	*/
 declare function $$(selector: string | Function): WebdriverIO.ElementArray;
// declare global {
// 	namespace WebdriverIO {
// 		interface Browser {
// 			/**
// 			 * Scroll element into view and save element into baseline folder.
// 			 */
// 			scrollIntoViewAndSaveElement: (locator: string, imgName: string) => Element;

// 			/**
// 			 * Scroll element into view and validate it against baseline
// 			 */
// 			scrollIntoViewAndCheckElement: (locator: string, imgName: string) => Element;
// 		}
// 	}
// }
declare module "@wdio/sync" {
	export = WebdriverIO
}
