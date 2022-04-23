const path = require('path')
const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   console.log('got')
//   res.sendFile(path.join(__dirname, '/index.html'))
// })

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.listen(port, () => {
    console.log(`Server running ${port}`)
  })


  