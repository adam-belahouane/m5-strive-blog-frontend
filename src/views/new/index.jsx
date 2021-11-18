import React, { Component, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
const NewBlogPost = () => {
  const [newBlogPost, setNewBlogPost] = useState({
    category: "ARTICLE CATEGORY",
    title: "",
    cover: "ARTICLE COVER (IMAGE LINK)",
    readTime: {
      value: 2,
      unit: "minute",
    },
    comments: [],
    author: {
      name: "AUTHOR AVATAR NAME",
      email: "",
      avatar: "https://cdn.fakercloud.com/avatars/mhesslow_128.jpg",
    },
    content: "",
  });
  
  const[email, setEmail] = useState("")

  const emailNewBlogPost = async () => {
    try {
      let response = await fetch(process.env.REACT_APP_BE + "blogPosts/blogPostMade",
      {
        method: "POST",
        body: JSON.stringify(email),
        "Content-type": "application/json",
      })
    } catch (error) {
      
    }

  }

  const handleInput = (propertyName, value) => {
    setNewBlogPost({
      ...newBlogPost,
      [propertyName]: value,
    });
  };

  const handleInputAuthor = (propertyName, value) => {
    setNewBlogPost({
      ...newBlogPost,
      author: {
        [propertyName]: value,
      },
    });
  };

  return (
    <Container className="new-blog-container">
      <Form className="mt-5">
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Title"
            onChange={(e) => handleInput("title", e.target.value)}
            value={newBlogPost.title}
          />
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            size="lg"
            as="select"
            onChange={(e) => handleInput("category", e.target.value)}
            value={newBlogPost.category}
          >
            <option>Category1</option>
            <option>Category2</option>
            <option>Category3</option>
            <option>Category4</option>
            <option>Category5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Blog Content</Form.Label>
          <ReactQuill
            value={newBlogPost.content}
            onChange={(e) => handleInput("content", e)}
            className="new-blog-content"
          />
        </Form.Group>
        <Form.Group controlId="blog-author" className="mt-3">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Name"
            onChange={(e) => handleInputAuthor("name", e.target.value)}
            value={newBlogPost.author.name}
          />
        </Form.Group>
        <Form.Group controlId="blog-authoremail" className="mt-3">
          <Form.Label>Author email</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Name"
            onChange={setEmail()}
            value={email}
          />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{ marginLeft: "1em" }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlogPost;
