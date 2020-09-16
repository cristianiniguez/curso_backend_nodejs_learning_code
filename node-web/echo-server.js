const http = require('http')
const moment = require('./moment')

const server = http.createServer()

server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url === '/birthdate') {
    let body = []
    req.on('data', chunk => {
      body.push(chunk)
    })
    .on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plane' })
      body = Buffer.concat(body).toString()
      const dayOfWeek = moment(body, 'DD-MM-YYYY').format('dddd')
      res.end(dayOfWeek)
    })
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(8001)
console.log('Servidor en la url http://localhost:8001')