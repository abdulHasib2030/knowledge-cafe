
import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

    return (
        <div className='bg-gray-200 rounded-xl p-5 m-3'>
            <h2 className='text-3xl'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;



