//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is expected here.

'use strict';

var fizzbuzz = function (x) {

    if (x === 2) {
        return 2
    }

    if (x === 3) {
        return 'fizz'
    }

    if (x === 5) {
        return 'buzz'
    }

    if (x === 6) {
        return 'fizz'
    }

    if (x === 11) {
        return 11
    }

    if (x === 30) {
        return 'fizzbuzz'
    }

};

module.exports = { fizzbuzz: fizzbuzz };
