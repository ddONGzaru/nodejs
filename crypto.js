/**
 * Created by taewo_000 on 2014-05-01.
 */

var crypto = require('crypto');

var sha256 = crypto.createHash('sha256');
var sha1 = crypto.createHash('sha1');

sha256.update('ddongzaru');
sha1.update('ddongzaru');

console.log(sha256.digest('hex'));
console.log(sha1.digest('hex'));


var key = '아무도 알지 못하는 나만의 키';
var input = 'PASSWORD';

var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

console.log('원래 문자열: ' + input);
console.log('암호화: ' + cipheredOutput);
console.log('복호화 문자열: ' + decipheredOutput);
