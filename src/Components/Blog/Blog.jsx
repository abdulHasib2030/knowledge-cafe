import PropTypes from 'prop-types'
import {FaRegBookmark} from 'react-icons/fa';

const Blog = ({blog, handleAddToBookMark, handleMarkAsRead}) => {
    const {title, cover,author, posted_date, reading_time, author_img, hashtags} = blog;
    let time = reading_time;
    let sp = time.split(' ')
    let timee = Number(sp[0])
    // console.log(timee+2)
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div>
                    <img className='w-16 rounded-full' src={author_img} alt="" />
                <div>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={()=>handleAddToBookMark(blog)} className='ml-2 text-2xl'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                hashtags.map((hash, idx) => <span key={idx} className='ml-2'><a>{hash}</a></span>)
                }
            </p>
            <button
            onClick={()=>handleMarkAsRead(timee)}
            className='text-purple-800 font-bold underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookMark:PropTypes.func,
    handleMarkAsRead: PropTypes.func,

}
export default Blog;