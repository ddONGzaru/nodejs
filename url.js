/**
 * Created by taewo_000 on 2014-05-01.
 */

var url = require('url');
var querystr = require('querystring');

var parseObj = url.parse('http://www.naver.com/abc?test=123&e=12');
var parseObj2 = url.parse('http://www.naver.com/abc/test/123');

console.log(parseObj);
console.log('\n');
console.log(parseObj2);
console.log(parseObj.query.split('&'));

var queryArray = parseObj.query.split('&');

console.log(queryArray[0]);

console.log(querystr.parse(parseObj.query));

var queryObj = querystr.parse(parseObj.query);

console.log(queryObj.test);

queryObj.test = '456';

console.log(queryObj.test);
