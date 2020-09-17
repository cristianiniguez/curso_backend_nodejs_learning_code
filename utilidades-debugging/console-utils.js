// %s
// %d
// %j
// console.log('Un %s y un %s', 'perro', 'gato')

// console.info('hello world')
// console.warn('hello world')

// console.assert(42 == '42')
// console.assert(42 === '42')

// console.trace('hello')

const util = require('util')
const debuglog = util.debuglog('foo')

debuglog('hello from foo')