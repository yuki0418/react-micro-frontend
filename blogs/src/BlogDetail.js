import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { arrBlogs } from "./mock_blogs";
import "./App.css";

function BlogDetail() {
  const [blogDetail, setBlogDetail] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const blogID = parseInt(params.id);
    const blog = arrBlogs.find((blog) => blog.blogID === blogID);
    setBlogDetail(blog);
  }, []);

  return (
    <div style={style.container}>
      <button onClick={() => navigate(-1)} style={style.backBtn}>
        Back
      </button>
      <h1>
        #{blogDetail.blogID} {blogDetail.blogName}
      </h1>
      <p>{blogDetail.blogDetail}</p>
    </div>
  );
}

const style = {
  container: {
    padding: "1rem",
    margin: "1rem 0",
  },
  backBtn: {
    fontSize: "1.2rem",
    border: "none",
    background: "none",
    color: "blue",
    cursor: "pointer",
    textDecorator: "underline",
  },
};

export default BlogDetail;
