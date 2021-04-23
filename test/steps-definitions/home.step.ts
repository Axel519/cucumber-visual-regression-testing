import { Given, When, Then } from '@cucumber/cucumber';
import HomePage, { locators } from '../page-objects/home.page'

import {
	scrollIntoViewAndCheckElement,
	scrollIntoViewAndSaveElement
} from '../../commons/hooks/hooks';

const pages = {
	homepage: HomePage
}

const solutionImages = {
	Data: locators.dataEngineeringImg,
	Software: locators.softwareDevelopmentImg,
	QA: locators.qualityEngineeringImg
}

Given(/^I open the (\w+) of Enroute$/, (page: string) => {
	pages[page].open('');
});

When(/^I want to see the image of (.+)$/, (img: string) => {
	scrollIntoViewAndSaveElement(solutionImages[img], img);
});

Then(/^I should verify that the image: (.+) is the same as baseline image$/, (img: string) => {
	scrollIntoViewAndCheckElement(solutionImages[img], img)
});

