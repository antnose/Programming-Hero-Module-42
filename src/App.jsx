import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex">
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
