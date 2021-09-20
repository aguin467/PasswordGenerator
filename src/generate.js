/* eslint-disable no-unused-vars */
import crypto from 'crypto';

const firDict = {
    myAlph: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
};

var characters = firDict.myAlph;
var charactersLength = characters.length;
let hash = crypto.getHashes();
let hashPwd = crypto.createHash('sha1').update(characters).digest('hex');

function passwordGenerator(length) {
    var result = '';
	
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('myGen').innerHTML = passwordGenerator(100);
});
console.log(passwordGenerator(1000));

window.passwordGenerator = passwordGenerator;

export default { passwordGenerator };