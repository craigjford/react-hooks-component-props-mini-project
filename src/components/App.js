import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";
import logo from "../assets/logo.svg"

console.log(blogData);

function App() {
  return (
    <div className="App">
        <Header name={blogData.name} />
        <About about={blogData.about} image={logo} />
        <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
