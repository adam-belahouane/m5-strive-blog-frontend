import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./styles.css";
const BlogAuthor = ({ name, avatar, id }) => {

  return (
    <>
    <Row>
      <Col xs={2}>
        <Image className="blog-author" src={avatar} roundedCircle />
      </Col>
      <Col>
        <div>by</div>
        <h6>{name}</h6>
      </Col>
      
    </Row>
    <Col xs={2}>
    <a className="btn btn-primary"href={process.env.REACT_APP_BE + "blogPosts/downloadPDF/" + id }>Download</a>
  </Col>
  </>
  );
};

export default BlogAuthor;
