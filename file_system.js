/**
 * Created by taewo_000 on 2014-05-01.
 */

var fs = require('fs');

var text = fs.readFileSync('testfile.txt', 'utf8');

console.log('파일읽기 동기: ' + text);


fs.readFile('testfile.txt', 'utf8', function(err, data) {
    console.log('파일읽기 비동기: ' + data);
});


fs.writeFile('testfile_write.txt', text, 'utf8', function(err) {
    if (err) throw err;
    console.log('파일 쓰기 안료.');
});

fs.writeFileSync('testfile_write2.txt', text, 'utf8');


try {
    fs.readFileSync('~testfile.txt', 'utf8');
} catch (err) {
    console.error('파일읽기 동기 에러: ' + err);
}