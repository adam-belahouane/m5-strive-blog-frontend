import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";

const Home = () => {

  const[posts, setPosts] = useState([])
  

 
    const fetchPost = async() => {
      try {
        let response = await fetch(process.env.REACT_APP_BE + "blogPosts" )
        let data = await response.json()
        setPosts(data)
        console.log(data)
      } catch (error) {
        
      }
    }
    
  

  useEffect(()=> (
    fetchPost()

  ), [])
  
    return (
      <Container fluid="sm">
        <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        <BlogList posts={posts} />
      </Container>
    );
  
}
export default Home