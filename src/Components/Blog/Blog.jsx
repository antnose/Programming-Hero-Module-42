import PropTypes from "prop-types";
import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className=" mb-20 ">
      <img src={cover} className="w-full" alt="" />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14 mb-8" src={author_img} alt="" />
          <div className="ml-6">
            <p className="text-2xl"> {author} </p>
            <p className="text-2xl"> {posted_date} </p>
          </div>
        </div>

        <div>
          <span> {reading_time} minute read </span>
          <button
            className="ml-2 mt-2 text-2xl"
            onClick={() => handleAddToBookmark()}
          >
            <CiBookmarkPlus />
          </button>
        </div>
      </div>
      <p className="text-4xl"> {title} </p>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}> {hash} </span>
        ))}
      </p>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
