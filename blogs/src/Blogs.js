import React from "react";
import { arrBlogs } from "./mock_blogs";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div style={styles.container}>
      {arrBlogs.map((blog, index) => {
        return (
          <Link
            key={index}
            to={{
              pathname: `/detail/${blog.blogID}`,
              id: blog.blogID,
              item: blog,
            }}
          >
            <div style={styles.card}>
              <h5>{`#${blog.blogID}`}</h5>
              <p>{blog.blogName}</p>
              <p>{blog.blogDetail}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    padding: "1rem",
  },
  card: {
    textDecoration: "none",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "0 1rem",
    margin: "1rem 0",
  },
};

export default Blog;
