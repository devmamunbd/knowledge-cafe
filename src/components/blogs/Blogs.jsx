
import { useEffect, useState } from "react"
import Blog from "../blog/Blog"


const Blogs = ({handleBookMarks}) => {

    const [blogs, setblogs] = useState([])

    useEffect(() => {
            fetch('blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data))

    }, [])

  return (
    <div className="w-2/3">
      <h1>Blogs: {blogs.length}</h1>
      <div>
        {
          blogs.map(blog => <Blog key={blog.id} handleBookMarks={handleBookMarks} blog={blog}></Blog>)
        }
      </div>
    </div>
  )
}

export default Blogs