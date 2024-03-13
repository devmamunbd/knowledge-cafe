
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'

function App() {


  const [bookmarks, setbookmarks] = useState([]);
  const [markAsRead, setMarkAdRead] = useState(0)

  const handleBookMarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setbookmarks(newBookmarks)
  }


  const markAsReadTime = (id, time) => {
    const newReadTime = (markAsRead + time)
    setMarkAdRead(newReadTime)

    // console.log('remov', id)
    // remove the read blog from bookmark

    const remainingBokmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setbookmarks(remainingBokmark)



  }

  return (
    <>
      <Header></Header>

      <div className='md:flex gap-9  px-4'>

      <Blogs handleBookMarks={handleBookMarks} markAsReadTime={markAsReadTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarks>
      </div>
    
    </>
  )
}

export default App
