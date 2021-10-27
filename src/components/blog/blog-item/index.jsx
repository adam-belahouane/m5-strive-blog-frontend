import React, { Component } from "react";
import { Card } from "react-bootstrap";
import BlogAuthor from "../blog-author";
import { Link } from "react-router-dom";
import "./styles.css";
const BlogItem = ({ title, cover, author, id }) => {
  
  return (
    <div className="blog-link">
      <Card className="blog-card">
        <Link to={`/blog/${id}`}>
          <Card.Img variant="top" src={cover} className="blog-cover" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Link>
        <Card.Footer>
          <BlogAuthor {...author} id={id} />
        </Card.Footer>
      </Card>
    </div>
  );
};
export default BlogItem;
