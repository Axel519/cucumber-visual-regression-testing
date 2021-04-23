import Page from './page';


//	ToDo: Object for needed locators.

/**
 * Locators from Home page screen.
 */
export const locators = {
	dataEngineeringImg: '.thumbnail[src*=Data]',
	softwareDevelopmentImg: '.thumbnail[src*=Software]',
	qualityEngineeringImg: '.thumbnail[src*=QA]'
}


// Cannot use classes for locators since there's an issue with image loading,
// using object instead to get selectors for visual regression.
class HomePage extends Page {

	open() {
		return super.open('')
	}
}


export default new HomePage();
