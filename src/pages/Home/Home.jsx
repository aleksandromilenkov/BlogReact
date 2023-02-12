import React from "react";
import Blogs from "../../components/Blogs/Blogs";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import { allBlogs } from "../../config/blogs";
import { useState, useContext } from "react";
import Emptylist from "../../components/Emptylist/Emptylist";
import Context from "../../context/context";
const Home = () => {
  // const [searchedTerm, setSearchedTerm] = useState("");
  // const [blogs, setBlogs] = useState(allBlogs);
  // const searchHandler = () => {
  //   setBlogs((prevState) => {
  //     if (searchedTerm.trim().length === 0) {
  //       setBlogs(allBlogs);
  //     }
  //     const filteredBlogs = allBlogs.filter((blog) => {
  //       return blog.category
  //         .toLowerCase()
  //         .includes(searchedTerm.trim().toLowerCase());
  //     });

  //     return filteredBlogs;
  //   });
  // };
  // const changeHandler = (term) => {
  //   if (term.length === 0) {
  //     setBlogs(allBlogs);
  //   }
  //   setSearchedTerm(term);
  // };
  // const removeHandler = () => {
  //   setSearchedTerm("");
  //   setBlogs(allBlogs);
  // };

  const ctx = useContext(Context);
  return (
    <>
      <Header />
      <SearchBar
        onSubmit={ctx.setBlogs}
        onRemove={ctx.removeTerm}
        onChange={ctx.addSearchedTerm}
      />
      {ctx.blogs.length > 0 ? <Blogs blogs={ctx.blogs} /> : <Emptylist />}
    </>
  );
};

export default Home;
