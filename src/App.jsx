import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    console.log("Book mark adding soon");
  };

  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto ">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
