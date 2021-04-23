export function scrollIntoViewAndSaveElement(locator, imgName)  {
	browser.$(locator).scrollIntoView();
	browser.$(locator).saveElement(locator, imgName);
}

export function scrollIntoViewAndCheckElement(locator, imgName)  {
	browser.$(locator).scrollIntoView();
	browser.$(locator).checkElement(locator, imgName);
}
