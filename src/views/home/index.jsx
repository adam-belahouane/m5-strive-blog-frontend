import React, { Component } from "react";
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";

export default class Home extends Component {

  state = {
    posts: []
  }
  
  componentDidMount() {
    const fetchPost = async() => {
      try {
        let response = await fetch("http://localhost:3001/blogPosts")
        let data = await response.json()
        this.setState({posts: data})
        console.log(data)
      } catch (error) {
        
      }
    }
    fetchPost()
  }
  render() {
    return (
      <Container fluid="sm">
        <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        <BlogList posts={this.state.posts} />
      </Container>
    );
  }
}
