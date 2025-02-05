import { useState, useEffect } from 'react'
import BookList from './BookList'
import './App.css'
import BookForm from './components/BookForm'
import Button from '@mui/joy/Button'

function App() {
  const [books,setBooks] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {fetchBooks()},[])

  const fetchBooks = async () => {
    const response = await fetch("http://127.0.0.1:5000/books")
    const data = await response.json()
    setBooks(data.books)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openAddModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  }

  const onUpdate = () =>{
    closeModal()
    fetchBooks()
  }

  return (
    <>
      <h1>Books</h1>
      <Button onClick={openAddModal} sx={{marginBottom:'1rem'}}>+ Add Book</Button>
      <BookList books={books}></BookList>
      {isModalOpen && <div className='modal'>
        <div className='modal-content'>
          <span className='close' onClick={closeModal}>&times;</span>
          <BookForm/>
        </div>
        </div>}
    </>
  )
}

export default App
