const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('@pusher/chatkit-server');

const app = express()

const chatkit = new Chatkit.default({
  instanceLocator : 'v1:us1:f78c2c86-aedd-4031-83fe-6f61caca6947',
  key :'d1d71e87-3e93-4541-9731-7926b5e92af9:uRPFqcwy/IbsrVUvlyTO+qmRUHPoRKeTqvzLvappYhc='
})



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req, res) => {
  const { username } = req.body

  chatkit 
    .createUser({
      name : username, 
      id : username
    })
    .then(() => res.sendStatus(201))
    .catch(error => {
      if(error.error_type === 'services/chatkit/user/user_already_exists'){
        res.sendStatus(200)
      }else{
        res.status(error.statusCode).json(error)
      }
    })
})

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
