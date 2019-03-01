const express = require('express')

const app = express()

app.get('/', (req, res) => res.end('Server ready'))

app.listen(4000)
