'use strict'

var express = require('express')
var app = express()
var port = process.env.PORT || 3000

app.set('port', port)
app.set('env', process.env.NODE_ENV)

app.use(express.static(__dirname + '/app'))

app.listen(port, function () {
  console.log('Listening on port ' + port + '...')
})
