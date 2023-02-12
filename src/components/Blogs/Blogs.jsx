import React from "react";
import { useContext } from "react";
import BlogItem from "./BlogItem";
import "./Blogs.css";
import Context from "../../context/context";
const Blogs = ({ blogs }) => {
  const ctx = useContext(Context);
  return (
    <div className="blogs-wrapper">
      {ctx.blogs?.map((blog) => {
        return <BlogItem {...blog} key={blog.id} />;
      })}
    </div>
  );
};

export default Blogs;
