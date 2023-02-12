import React from "react";
import { allBlogs } from "../config/blogs";
import Context from "./context";
import { useState } from "react";

export const BlogProvider = (props) => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [blogs, setBlogs] = useState(allBlogs);
  const [theme, setTheme] = useState("light");

  const searchedTermHandler = (term) => {
    if (term.trim().length <= 0) {
      setBlogs(allBlogs);
    }
    setSearchedTerm(term);
  };

  const setBlogsHandler = () => {
    setBlogs((prevState) => {
      if (searchedTerm.trim().length <= 0) {
        setBlogs(allBlogs);
      }
      const filteredBlogs = allBlogs.filter((blog) => {
        return blog.category
          .toLowerCase()
          .includes(searchedTerm.trim().toLowerCase());
      });
      return filteredBlogs;
    });
  };

  const removeSearchHandler = () => {
    setSearchedTerm("");
    setBlogs(allBlogs);
  };

  const setThemeHandler = () => {
    setTheme((prevState) => {
      console.log(prevState);
      if (prevState === "light") {
        return "dark";
      } else return "light";
    });
  };

  const blogContext = {
    blogs: blogs,
    searchedTerm: searchedTerm,
    addSearchedTerm: searchedTermHandler,
    setBlogs: setBlogsHandler,
    removeTerm: removeSearchHandler,
    setTheme: setThemeHandler,
    theme: theme,
  };

  return (
    <Context.Provider value={blogContext}>{props.children}</Context.Provider>
  );
};
