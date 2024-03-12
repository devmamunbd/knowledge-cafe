
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'

function App() {


  const [bookmarks, setbookmarks] = useState([]);

  const handleBookMarks = blog => {
    console.log('commin soon bookmarks')
  }


  return (
    <>
      <Header></Header>

      <div className='md:flex gap-9  px-4'>

      <Blogs handleBookMarks={handleBookMarks}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    
    </>
  )
}

export default App
