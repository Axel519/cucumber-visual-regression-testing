/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');

exports.config = {
	autoCompileOpts: {
		autoCompile: true,
		tsNodeOpts: {
				transpileOnly: true,
				project: 'tsconfig.json'
		},
		tsConfigPathsOpts: {
			baseUrl: 'src/**/*'
		}
	},
	runner: 'local',
	specs: [
			'test/features/**/*.feature'
	],
	exclude: [
			// 'path/to/excluded/files'
	],
	maxInstances: 10,
	capabilities: [{
			maxInstances: 5,
			browserName: 'chrome',
			acceptInsecureCerts: true,
	}],
	logLevel: 'info',
	bail: 0,
	baseUrl: 'https://enroutesystems.com',
	waitforTimeout: 10000,
	connectionRetryTimeout: 120000,
	connectionRetryCount: 3,
	services: [
		'chromedriver',
		'devtools',
		['image-comparison',
			{
				baselineFolder: join(process.cwd(), 'baseLine/'),
				formatImageName: '{tag}-{logName}-{width}x{height}',
				screenshotPath: join(process.cwd(), '.tmp/'),
				savePerInstance: true,
				autoSaveBaseline: true,
				blockOutStatusBar: true,
				blockOutToolBar: true,
				isHybridApp: false,
				tabbableOptions:{
						circle:{
								size: 18,
								fontSize: 18,
						},
						line:{
								color: '#ff221a', // hex-code or for example words like `red|black|green`
								width: 3,
						},
				}
			}
		]
	],
	framework: 'cucumber',
	reporters: ['spec','dot',['allure', {outputDir: 'allure-results'}]],
	cucumberOpts: {
			require: ['test/steps-definitions/**/*.step.ts'],
			backtrace: false,
			requireModule: [],
			dryRun: false,
			failFast: false,
			format: ['pretty'],
			snippets: true,
			source: true,
			profile: [],
			strict: false,
			tagExpression: '',
			timeout: 60000,
			ignoreUndefinedDefinitions: false
	},
	before () {
		require('expect-webdriverio')
	},
}
