/* $ = jQUery! */
// $ = jQuery! (single line comment just for js files)

function askQuestions() {
	var firstName = prompt('What is your first name?').trim();
	var lastName = prompt('What is your last name?').trim();
	var fullName = firstName + ' ' + lastName;

	if (firstName.toLowerCase() == "general" && lastName.toLowerCase() != "assembly") {
		console.log('Greetings General!!!!');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow') {

		$('h1').css('color',faveColour);
	}

	$('h2').text('Hello ' + fullName);

	var userAge = prompt('How old are you, ' + firstName + '?');
	userAge = parseInt(userAge);

	if (userAge >= 18) {
		console.log('User is an adult.');
	} else if (userAge >= 13) {
		console.log('User is a teenager.');
	} else if (userAge >=0) {
		console.log('User is a child.');
	}
}


//When the page has loaded
$(function() {

	// When the user clicks the image, ask questions
	$('img').on('click', askQuestions);

	//Hide all the sectiosn to begin with
	$('h3').next().hide();

	console.log($('h3').length)

	//When the user clicks an h3 (heading 3)
	$('h3').on('click', function() {

			//Toggle the next element. toggle time in ms
			$(this).next().slideToggle(300);
	});

});

//Inspect element in browser> Console tab> Reload page, will show number of errors, file location and line of the error