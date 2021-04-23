@homepage
Feature: Enroute Systems Homepage

	Scenario Outline: As an user, I want to see the images of the Enroute Homepage

		Given I open the homepage of Enroute
		When 	I want to see the image of <enroute_solution>
		Then 	I should verify that the image: <enroute_solution> is the same as baseline image

			Examples:
			| enroute_solution  |
			| Data							|
			| Software					|
			| QA								|
