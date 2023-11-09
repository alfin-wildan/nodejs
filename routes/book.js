const express = require('express')
const router = express.Router()
const {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
} = require('../controllers/BookController')

//untuk menampilkan data
router.get('/',getBooks)

//untuk mengirim data 
router.post('/', addBook)

//untuk menampilkan data sesuai id buku
router.get('/:id', getBook)

// unruk memperbarui/update data
router.put('/:id', updateBook)

//untuk menghapus data
router.delete('/:id', deleteBook)

module.exports = router