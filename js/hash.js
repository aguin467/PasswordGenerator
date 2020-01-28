/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import require from 'requirejs';
const crypto = require('crypto');

const firDict = {
	myAlph: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
};

var characters = firDict.myAlph;
var charactersLength = characters.length;
let hash = crypto.getHashes();
let hashPwd = crypto.createHash('sha1').update(characters).digest('hex');

export {firDict, characters, charactersLength};




//const crypto = require('crypto');
//
//
//let hash = crypto.getHashes();
//
//
//let x = 'Geek';
//
//
//let hashPwd = crypto.createHash('sha1').update(x).digest('hex');
//
//console.log(hashPwd);