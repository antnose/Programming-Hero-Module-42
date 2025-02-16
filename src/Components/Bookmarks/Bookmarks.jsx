import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-400 ml-4 mt-2 pt-4">
      <div>
        <h3 className="text-4xl">Reading time : {readingTime} </h3>
      </div>
      <p className="text-3xl text-center text-black ">
        Bookmarked Blogs : {bookmarks.length}
      </p>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark bookmark={bookmark} key={idx} />
      ))}
    </div>
  );
};

export default Bookmarks;
