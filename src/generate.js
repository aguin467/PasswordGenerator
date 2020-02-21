/* eslint-disable no-unused-vars */
import crypto from 'crypto';

const firDict = {
    myAlph: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
};

var characters = firDict.myAlph;
var charactersLength = characters.length;
let hash = crypto.getHashes();
let hashPwd = crypto.createHash('sha1').update(characters).digest('hex');

export {firDict, characters, charactersLength};



function passwordGenerator(length) {
    var result = '';
	
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(passwordGenerator(1000));

