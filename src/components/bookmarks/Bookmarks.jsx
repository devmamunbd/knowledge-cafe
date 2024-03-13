import { PropTypes } from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks, markAsRead}) => {
  return (

    <div className="md:w-1/3 bg-slate-500 p-5">

      <div>
        <h2 className='text-2xl text-center text-white mb-4'>Reding Time: {markAsRead} minutes</h2>
      </div>

        <h1 className="text-3xl mb-5 text-center text-white">BookMarks Blogs: {bookmarks.length}</h1>
        {
          bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
        }
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.objcet,
  markAsRead: PropTypes.number
}


export default Bookmarks

