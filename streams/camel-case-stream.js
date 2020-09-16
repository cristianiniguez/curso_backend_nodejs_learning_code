const { Transform } = require('stream')

const toCamelCase = str => {
  let words = str.split(/ |-|_/)
  let camelCaseWords = words.map(w => {
    let chars = w.split('')
    return [chars[0].toUpperCase(), ...chars.splice(1).map(c => c.toLowerCase())].join('')
  })
  return camelCaseWords.join('')
}

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(toCamelCase(chunk.toString()))
    callback()
  }
})

process.stdin.pipe(transformStream).pipe(process.stdout)