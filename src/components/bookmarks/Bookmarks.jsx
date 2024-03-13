import { PropTypes } from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="md:w-1/3 bg-slate-500 p-5">
        <h1 className="text-3xl mb-5 text-center text-white">BookMarks Blogs: {bookmarks.length}</h1>
        {
          bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.objcet
}


export default Bookmarks

