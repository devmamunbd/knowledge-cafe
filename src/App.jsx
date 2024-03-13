
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'

function App() {


  const [bookmarks, setbookmarks] = useState([]);

  const handleBookMarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setbookmarks(newBookmarks)
  }


  return (
    <>
      <Header></Header>

      <div className='md:flex gap-9  px-4'>

      <Blogs handleBookMarks={handleBookMarks}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    
    </>
  )
}

export default App
