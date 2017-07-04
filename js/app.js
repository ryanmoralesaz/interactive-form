// Set focus on the first text field
const firstInput = document.querySelector('input');
firstInput.focus();
  // remove other job role input if javascript is active
htmlJobRole = document.getElementById('other-title');
htmlJobRole.parentNode.removeChild(htmlJobRole);
const firstField = document.querySelector('fieldset'); // select first fieldset with job role
const otherJob = document.createElement('input'); // create other job input
otherJob.setAttribute('id', 'other-title'); // give other job an id of other-title
otherJob.setAttribute('placeholder', 'Your Job Role'); // give other job a placeholder
const optionsList = document.getElementById("title").options; // select job options list
document.getElementById("title").addEventListener('change', (e) => {
	// if other job is selected append input
	if (e.target.value === "other") {
		firstField.appendChild(otherJob)
	} else {
		firstField.removeChild(otherJob)
	}
});
// hide js puns if first design option selected
if (document.getElementById("design").options[0].selected) {
	document.querySelector('#colors-js-puns').style.display = "none"

};
const colorSelect = document.querySelector('#color');
// only display the information for each t-shirt color selected
document.getElementById("design").addEventListener('change', (e) => {
	if (e.target.value === "js puns") {
		for (i = 0; i<colorSelect.length; i++) {
			if (i == 0 || i == 1 || i == 2) {
				colorSelect[i].style.display = "block";
			} else {
				colorSelect[i].style.display = "none";
			}
		}
		document.querySelector('#colors-js-puns').style.display = "block";	
		colorSelect[0].selected = "selected";
	} 
	else if (e.target.value === "heart js") {
		for (i = 0; i<colorSelect.length; i++) {
			if (i == 0 || i == 1 || i == 2) {
				colorSelect[i].style.display = "none";
			} else {
				colorSelect[i].style.display = "block";
			}
		}
		colorSelect[3].selected = "selected";
		document.querySelector('#colors-js-puns').style.display = "block";	
	} else {
		for (i = 0; i<colorSelect.length; i++) {
			colorSelect[i].style.display = "none";
		}
		colorSelect[0].selected = "selected";
		document.querySelector('#colors-js-puns').style.display = "none";	
	}
});
let activitiesBox = document.querySelectorAll('input[type=checkbox]'); // place all checkboxes in array
let activitySum = 0; // a counter for workshop costs
const totalBox = document.createElement('p'); // an element to show $ total of workshops
let boxChecked = false; // a variable to check if a box is checked
// create a function to test which checkboxes are checked
activitiesBox.forEach( (element) => {
	element.addEventListener('change', () => {
		activeField = document.querySelector('fieldset[class="activities"]'); // select the activities field
		parentText = element.parentElement.textContent;
		dollarPlace = element.parentElement.textContent.indexOf('$'); // get the index of the dollar sign in the label text
		amount = parseInt(parentText.substring(dollarPlace + 1, dollarPlace + 4)); // get the dollar amount of the activity label description	
		if (element.checked) {
			boxChecked = true; // set a variable for form validation
			activitySum += amount; // add the activity costs
			totalBox.textContent = 'TOTAL: $' + activitySum; // print the activity cost 
			activeField.appendChild(totalBox); // append the cost
			  // set up logic for disabling checkboxes that include the same times as box already checked
			if (element.parentElement.textContent.includes('Tuesday 9am')) {
					for (i=0; i<activitiesBox.length; i++) {
						if (activitiesBox[i].parentElement.textContent.includes('Tuesday 9am')) {
								activitiesBox[i].disabled = true;
								element.disabled = false;
						}
					}
			}
			if (element.parentElement.textContent.includes('Tuesday 1pm')) {
					for (i=0; i<activitiesBox.length; i++) {
						if (activitiesBox[i].parentElement.textContent.includes('Tuesday 1pm')) {
								activitiesBox[i].disabled = true;
								element.disabled = false;
						}
					}
			}
			if (element.parentElement.textContent.includes('Wednesday 9am')) {
					for (i=0; i<activitiesBox.length; i++) {
						if (activitiesBox[i].parentElement.textContent.includes('Wednesday 9am')) {
								activitiesBox[i].disabled = true;
								element.disabled = false;
						}
					}
			}
			if (element.parentElement.textContent.includes('Wednesday 1pm')) {
					for (i=0; i<activitiesBox.length; i++) {
						if (activitiesBox[i].parentElement.textContent.includes('Wednesday 1pm')) {
								activitiesBox[i].disabled = true;
								element.disabled = false;
						}
					}
			}
		} else {
			boxChecked = false; // set variable to false for form validation
			activitySum -= amount; // decrement the activties sum if box is unchecked
			totalBox.textContent = 'TOTAL: $' + activitySum;
			if (element.parentElement.textContent.includes('Tuesday 9am')) {
					for (i=0; i<activitiesBox.length; i++) {
						if (activitiesBox[i].parentElement.textContent.includes('Tuesday 9am')) {
								activitiesBox[i].disabled = false;
								element.disabled = false;
						}
					}
			}
			if (element.parentElement.textContent.includes('Tuesday 1pm')) {
					for (i=0; i<activitiesBox.length; i++) {
						if (activitiesBox[i].parentElement.textContent.includes('Tuesday 1pm')) {
								activitiesBox[i].disabled = false;
								element.disabled = false;
						}
					}
			}
			if (element.parentElement.textContent.includes('Wednesday 9am')) {
					for (i=0; i<activitiesBox.length; i++) {
						if (activitiesBox[i].parentElement.textContent.includes('Wednesday 9am')) {
								activitiesBox[i].disabled = false;
								element.disabled = false;
						}
					}
			}
			if (element.parentElement.textContent.includes('Wednesday 1pm')) {
					for (i=0; i<activitiesBox.length; i++) {
						if (activitiesBox[i].parentElement.textContent.includes('Wednesday 1pm')) {
								activitiesBox[i].disabled = false;
								element.disabled = false;
						}
					}
			}
		}
	})
})
// set credit card to be the default payment option on page load
document.querySelector('option[value="credit card"]').selected = 'selected';
const fieldSets = document.querySelectorAll('fieldset');
fieldSets[3].querySelector('div:nth-of-type(1)').style.display = 'display';
fieldSets[3].querySelectorAll('p')[0].style.display = 'none';
fieldSets[3].querySelectorAll('p')[1].style.display = 'none';
const paymentSelect = document.querySelector('#payment');
 // on payment selection, display or hide the information for selected/unselected options
paymentSelect.addEventListener('change', () => {
	if (paymentSelect.options[paymentSelect.selectedIndex].value == 'bitcoin') {
		fieldSets[3].querySelector('div:nth-of-type(1)').style.display = 'none'
		fieldSets[3].querySelectorAll('p')[0].style.display = 'none'
		fieldSets[3].querySelectorAll('p')[1].style = 'display: display'
	}
	if (paymentSelect.options[paymentSelect.selectedIndex].value == 'paypal') {
		fieldSets[3].querySelector('div:nth-of-type(1)').style.display = 'none'
		fieldSets[3].querySelectorAll('p')[0].style = 'display: display'
		fieldSets[3].querySelectorAll('p')[1].style.display = 'none'

	}
	if (paymentSelect.options[paymentSelect.selectedIndex].value == 'credit card') {
		fieldSets[3].querySelector('div:nth-of-type(1)').style = 'display: display'
		fieldSets[3].querySelectorAll('p')[0].style.display = 'none'
		fieldSets[3].querySelectorAll('p')[1].style.display = 'none'

	}
});
 // set up a paragraph that gives info to the user as they enter a name in input
const userName = document.querySelector('input[name="user_name"]');
const nameInfo = document.createElement('p');
nameInfo.style.position = 'absolute';
nameInfo.style.top = '200px';
nameInfo.style.width = "300px";
nameInfo.style.height = "100px";
nameInfo.style.padding = "20px";
nameInfo.style.background = "grey";
  // test the name input for two words in the name
userName.addEventListener('input', () => {
	
	 // test courtesy of https://stackoverflow.com/questions/25344603/javascript-check-if-value-has-at-least-2-or-more-words
	let values = userName.value.split(' ').filter(function(v){return v!==''});
    nameInfo.textContent = 'Please enter first and last name in this format: First Last';
    if (values.length > 1) {
        nameInfo.textContent = 'Looks Good!'
    } 
	document.body.appendChild(nameInfo)
	console.log('writing ' + userName.value)
})
 // remove information paragraph when name input loses focus
userName.addEventListener('focusout', () => {
		document.body.removeChild(nameInfo)
	})
  // create a function to validate the form

document.querySelector('button').addEventListener('click', (e) => {
	e.preventDefault(); // prevent submission on button 
	warnings = []; // empty array for form warnings
	 // set up variables for input validation
	const nameInput = document.querySelector('input[name="user_name"]'); 
	const userEmail = document.querySelector('input[name="user_email"]')
	const ccOption = document.querySelector('option[value="credit card"]');
	const ccInput = document.querySelector('#cc-num');
	const zipInput = document.querySelector('#zip');
	const cvvInput = document.querySelector('#cvv');
	 // check if inputs are filled in and valid
	if (nameInput.value == '') {
		warnings.push('Enter your name ');
		nameInput.style.border = "2px solid red";
	} else {
		nameInput.style.border = "none";
	}
	if (ccOption.selected) {
		if (ccInput.value == '') {
			warnings.push('Enter a credit card number ');
		} if (ccInput.value.length > 16 || document.querySelector('#cc-num').value.length < 13 ) {
			warnings.push('CC length must be between 13 and 16 numbers ');
		} if (isNaN(ccInput.value)) {
			warnings.push('CC must be a number ');
		} if (ccInput.value == '' || ccInput.value.length > 16 || document.querySelector('#cc-num').value.length < 13 || isNaN(ccInput.value)) {
			ccInput.style.border = "2px solid red";
		} else {
			ccInput.style.border = "none";
		}
		if (zipInput.value == '') {
			warnings.push('Enter a zip code ');
		} if (zipInput.value.length != 5) {
			warnings.push('Zip Code must be 5 numbers long ');
		} if (isNaN(zipInput.value)) {
			warnings.push('Zip Code must be a number ');
		}
		if (zipInput.value == '' || zipInput.value.length != 5 || isNaN(zipInput.value)) {
			zipInput.style.border = "2px solid red";
		} else {
			zipInput.style.border = "none";
		}
		if (cvvInput.value == '') {
			warnings.push('Enter a CVV ');
			cvvInput.style.border = "2px solid red";
		} if (cvvInput.value.length != 3) {
			warnings.push('CVV must be 3 numbers long ');
			cvvInput.style.border = "2px solid red";
		} if (isNaN(cvvInput.value)) {
			warnings.push('CVV must be a number ');
			cvvInput.style.border = "2px solid red";
		}
		if (cvvInput.value == '' || cvvInput.value.length != 3 || isNaN(cvvInput.value)) {
			cvvInput.style.border = "2px solid red";
		} else {
			cvvInput.style.border = "none";
		}
	}
	  // check if any activity boxes are selected and push a warning
	if (!boxChecked) {
   		warnings.push('Select at least one activity ');
   		document.querySelector('fieldset.activities').style.border = "2px solid red";
   	} else {
   		document.querySelector('fieldset.activities').style.border = "none";
   	}
   	  // email validation test courtesy of http://www.w3resource.com/javascript/form/email-validation.php
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.value))  
  	{
  		userEmail.style.border = "none";
  	}  else {
    	warnings.push("Invalid email address ");  
    	userEmail.style.border = "2px solid red";
   	}
   	  // if there are any warnings, alert user
   	if (warnings.length > 0) {
   		alert (warnings); // give user an alert of all warnings
   }
});