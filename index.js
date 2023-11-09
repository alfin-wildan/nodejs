const express = require('express')
const mysql = require('mysql2')
const bookRoutes = require('./routes/book')
const authorRoutes = require('./routes/author')
const dbConfig = require('./config/database')
const pool = mysql.createPool(dbConfig)


pool.on('error', (err) => {
    console.log(err)
})

const app = express()
const PORT = 8000

app.use(express.json())
app.use(express.urlencoded({
     extended: true
}))

//Membuat parameter harus diawali : awal
app.get('/contohparameter/:username/:jurusan/:rombel', (req,res) => {
    res.json(req.params)
})

app.get('/contohparam', (req,res) => {
    res.json(req.query)
})

app.get('/',(req,res) => 
{res.write('hellow world'); 
res.end()})

app.use('/book', bookRoutes)
app.use('/author', authorRoutes)

app.listen(PORT, () => {
    console.log(`server berjalan di http://localhost:${PORT}`)
})
