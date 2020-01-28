/* eslint-disable no-mixed-spaces-and-tabs */

const firDict = {
	myAlph: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
};

function passwordGenerator(length) {
	 var result = '';
	 var characters = firDict.myAlph;
	 var charactersLength = characters.length;
	 for(var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	 return result;

}
console.log(passwordGenerator(1000));
