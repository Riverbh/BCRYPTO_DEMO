const express = require('express')
const cors = require('cors')


const app = express()

//middleware
app.use(express.json())
app.use(cors())

//endpoints

const { createMessage } = require('./controller')

app.post('/api/messages', createMessage)



app.listen(4004, () => console.log('Server is running on 4004'))
