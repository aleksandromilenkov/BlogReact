import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { allBlogs } from "../../config/blogs";
import "./Blog.css";
import { useEffect } from "react";
import Category from "../../components/Category/Category";
import Emptylist from "../../components/Emptylist/Emptylist";
import Sun from "../../components/Sun/Sun";
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    const theBlog = allBlogs.find((blog) => blog.id === +id);
    if (theBlog) {
      setBlog(theBlog);
    }
  }, [id]);
  return (
    <>
      <Link className="blog-goBack" to="/">
        <span>&#8592;</span> <span>Go Back</span>
      </Link>
      <Sun />
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-data">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog?.subCategory.map((cat, id) => (
                <div key={id}>
                  <Category label={cat} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <Emptylist />
      )}
    </>
  );
};

export default Blog;
