
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {

  return (
    <>
      <Header></Header>

      <div className='md:flex px-4'>

      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    
    </>
  )
}

export default App
