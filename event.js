/**
 * Created by taewo_000 on 2014-05-01.
 */

/*process.on('exit', function() {
    console.log('안녕히 가거라~');
});*/

/*process.on('uncaughtException', function(err) {
    console.log(err);
    console.log('에러가 발생~');
});

var count = 0;

var id = setInterval;

id(function() {

    console.log(count);

    //error.error.error();

    test();


    if (count == 3) {
        clearInterval(id);
    }

    count++;
}, 1000);*/


/*var onUncaughtException = function(err) {
    console.log(err);
    console.log('이번에는 봐주마...');
}

process.on('uncaughtException', onUncaughtException);

setInterval(function() {
    console.log('임시 메시지');
    //error123.error.error();
}, 1000);*/

/*
process.on('exit', function() {
    console.log('안녕히 가거라~');
});

process.on('exit2', function() {
    console.log('안녕히 가거라~2');
});

process.emit('exit2');
process.emit('exit2');

console.log('exit');*/

var custom = new process.EventEmitter;

custom.on('zaru', function() {
    console.log('zaru evente started...');
})

custom.emit('zaru');


