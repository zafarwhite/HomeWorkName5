const assert = require('chai').assert;
const couter = require('../counter');
//Results


describe('Counter', () => {
    counterResult = counter.counter();
    describe('counter()', () => {
        it('counter should return typof number' () => {
            assert.typeof(counterResult, 'number')
        })
    })
})