import { useState, useEffect } from 'react'
import BookList from './BookList'
import './App.css'

function App() {
  const [books,setBooks] = useState([])

  useEffect(() => {fetchBooks()},[])

  const fetchBooks = async () => {
    const response = await fetch("http://127.0.0.1:5000/books")
    const data = await response.json()
    setBooks(data.books)
  }

  return (
    <>
      <BookList books={books}></BookList>
    </>
  )
}

export default App
