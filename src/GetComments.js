import React, { Component } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

class GetComments extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    }
  }
  GetComments = async (props) => {
    const history = this.props;
    const postId = history.match.params.userId;
    console.log("userId2", postId);

    try {
      var { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      this.setState({ comments: data })
      console.log(data);
      console.log(this.state.comments);
    } catch (err) {
      console.log(err);
    }
    console.log("GetComments");
  }

  componentDidMount = () => {
    this.GetComments();
  }

  render() {
    const { history } = this.props
    return (
      <>
        <i onClick={history.goBack} style={{ float: "left", fontSize: "30px" }} className="fas fa-arrow-left"></i>
        <Container>
          <h1>Comments</h1>
          {this.state.comments.map((comment, index) => {
            return (
              <Table  striped bordered hover>
                <thead>
                  <tr key={index}><strong>{index+1})  Name : </strong>{comment.name}<br />
                  <strong>Email : </strong>{comment.email}<br />
                  <strong>Body : </strong>{comment.body}
                   </tr>                  
                </thead>
              </Table>
            )
          })}
        </Container>
      </>
    )
  }
}


export default GetComments;