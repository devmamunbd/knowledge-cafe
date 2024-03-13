import { PropTypes } from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
  return (
    <div className='bg-slate-200 mb-4 p-3 rounded-md'>
        <h1 className='text-3xl'>{title}</h1>
    </div>
  )
}


Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark