import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { useHistory, useParams } from "react-router";

export default function GetComments() {
  const [state, setState] = useState({
    comments: []
  });

  const params = useParams();
  const history = useHistory();

  // Get PostId and fetch data from API
  const GetComments = async (props) => {
    const postId = params.userId;
    try {
      var { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      setState({ ...state, comments: data })
    } catch (err) {
      console.log(err);
    }
  }

  //useEffect() - componentDidMount() is invoked immediately after a component is mounted
  useEffect(() => {
    GetComments();
  }, []);

  return (
    <>
      {/* goBack */}
      <i onClick={history.goBack} style={{ float: "left", fontSize: "30px" }} className="fas fa-arrow-left"></i>
      <Container>
        <h1>Comments</h1>
        {state.comments.map((comment, index) => {
          return (
            // Table to display all comments 
            <Table striped bordered hover>
              <thead>
                <tr key={index}><strong>{index + 1})  Name : </strong>{comment.name}<br />
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
