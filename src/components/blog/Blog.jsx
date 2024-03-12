import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog, handleBookMarks}) => {
    // console.log(blog)

    const {title, cover, author_img, reading_time, author, posted_date, hashtag} = blog;

  return (
    <div className='mb-20'>
        <img src={cover} alt="" />

        <div className='flex justify-between'>

        <div className='flex items-center gap-3'>
            <img className='rounded-full w-10 h-10' src={author_img} alt="" />
            <div>
                <h2>{author}</h2>
                <p>{posted_date}</p>
            </div>
        </div>

        <div>
    <span>{reading_time} min read</span>
    <button onClick={handleBookMarks} className='ml-2'><FaBookmark></FaBookmark></button>
        </div>


        </div>

        <h1>{title}</h1>

        <p>
            {
                hashtag.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
            }
        </p>

    </div>
  )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Blog