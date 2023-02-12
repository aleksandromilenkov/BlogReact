import React from "react";
import { allBlogs } from "../config/blogs";
const Context = React.createContext({
  blogs: allBlogs,
  searchedTerm: "",
  addSearchedTerm: () => {},
  setBlogs: () => {},
  removeTerm: () => {},
  setTheme: () => {},
  theme: "light",
});

export default Context;
