const assert = require('chai').assert;
const counter = require('../counter');
//Results
counterResult = counter.counter();

describe('task testing counter', () => {
    describe('counter()', () => {
        it('counter should return typof number', () => {
            assert.typeof(counterResult, 'number')
        })
    })
})