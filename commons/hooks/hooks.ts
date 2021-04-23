
// ToDo: Use this hooks into the wdio.d.ts file to declare global on "Browser" interface
export function scrollIntoViewAndSaveElement(locator: string, imgName: string): void  {
	browser.maximizeWindow();
	browser.pause(1000);
	const element = browser.$(locator);
	element.scrollIntoView();
	browser.saveElement(element, imgName);
}

export function scrollIntoViewAndCheckElement(locator: string, imgName: string): any  {
	browser.pause(1000);
	const element = browser.$(locator);
	element.scrollIntoView();
	expect(browser.checkElement(element, imgName)).toEqual(0);
}
