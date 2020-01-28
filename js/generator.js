/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import {firDict,characters, charactersLength} from './hash';

function passwordGenerator(length) {
	var result = '';
	
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
console.log(passwordGenerator(10));
