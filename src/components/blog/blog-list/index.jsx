import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";
const BlogList = ({ posts }) => {
  useEffect(() => console.log(posts), []);

  return (
    <Row>
      {posts.map((post) => (
        <Col md={4} style={{ marginBottom: 50 }}>
          <BlogItem key={post.title} {...post}/>
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
