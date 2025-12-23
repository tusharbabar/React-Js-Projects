import React from "react";


export default class Viewproduct extends React.Component{
    render(){
        return<>
 <Container className="text-white">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 className="display-4 fw-bold">Welcome to Product Manager</h1>
          <p className="lead mt-3">
            This application helps you to manage, view, and search your product inventory easily.
          </p>
          <div className="mt-4">
            <Button variant="primary" className="me-2" href="/add">
              Add New Product
            </Button>
            <Button variant="outline-light" href="/view">
              View All Products
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
        
        
        </>
    }





}
