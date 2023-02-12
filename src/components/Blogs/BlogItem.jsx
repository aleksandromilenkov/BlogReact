import React from "react";
import Category from "../Category/Category";
const BlogItem = ({
  cover,
  category,
  title,
  description,
  authorAvatar,
  authorName,
  createdAt,
  id,
}) => {
  return (
    <div className="blog-item">
      <img src={cover} alt="cover" className="blog-item-cover" />
      <Category label={category} />
      <h3>{title}</h3>
      <p className="blog-item-desc">{description}</p>
      <footer>
        <div className="blog-item-author">
          <img src={authorAvatar} alt="Author" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <a href={`/blog/${id}`} className="blog-item-link">
          ➝
        </a>
      </footer>
    </div>
  );
};

export default BlogItem;
