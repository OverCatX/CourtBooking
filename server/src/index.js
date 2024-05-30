const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())
app.use(express.json());

app.use('/users', require('./routes/userRoute'))
app.use('/court', require('./routes/courtRoute'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})