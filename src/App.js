import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import axios from "axios";

function App() {
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = response.data;
    console.log(JSON.stringify(data));
  };
  fetchData();

  return (
    <div className="App">
      <Header title="ReactQuill Chronicles" />
      <DataProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/post" Component={NewPost} />
            <Route path="/edit/:id" Component={EditPost} />
            <Route path="/post/:id" Component={PostPage} />
            <Route path="/about" Component={About} />
            <Route path="*" Component={Missing} />
          </Routes>
        </Router>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
