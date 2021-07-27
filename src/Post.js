import React from "react";
import axios from "axios";
import { Container,Table,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

class PostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      id: "",
      userId: "",
      title: "",
      body: "",
      username: [],
      value: "",
      show: false,
      display: false
    };
  }

  componentDidMount = () => {
    this.getPosts();
    this.getUsers();
  };

  getPosts = async () => {

    try {
      const { data } = await axios.get(API_URL);
      this.setState({ posts: data });
    } catch (err) {
      console.error(err);
    }
  };

  createPost = async () => {

    try {
      const { userId, title, body } = this.state;
      const { data } = await axios.post(API_URL, {
        userId,
        title,
        body,
      });
      const posts = [...this.state.posts];
      posts.push(data);
      this.setState({ posts, userId: "", title: "", body: "" });
    } catch (err) {
      console.error(err);
    }
  };

  updatePost = async () => {

    try {
      const { id, userId, title, body, posts } = this.state;
      const { data } = await axios.put(`${API_URL}/${id}`, {
        userId,
        title,
        body,
      });
      const index = posts.findIndex((post) => post.id === id);
      posts[index] = data;

      this.setState({ posts, id: "", userId: "", title: "", body: ""});
    } catch (err) {
      console.log(err);
    }
  };

  deletePost = async (postId) => {

    try {
      await axios.delete(`${API_URL}/${postId}`);

      let posts = [...this.state.posts];
      posts = posts.filter(({ id }) => id !== postId);

      this.setState({ posts });
    } catch (err) {
      console.error(err);
    }
  };

  selectPost = (post) => this.setState({ ...post });

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted...");
    if (this.state.id) {
      this.updatePost();
    } else {
      this.createPost();
    }
  };

  getUsers = async () => {
    try {
      var { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
      this.setState({ username: data })
      console.log("getusers", data)
    }

    catch (err) {
      console.log(err);
    }
  }

  GetID = () => {
    console.log("GetID.......");
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  FetchID = (event) => {
    this.setState({ userId: event.target.value })
    console.log(event.target.value)
  }

  handleClose = () => {
    this.setState({ show: false })
    this.setState({ display: false })
  }
  render() {
 
    const { history } = this.props;
    return (
      <>
      <i onClick={history.goBack} style={{  fontSize: "30px" }} className="fas fa-arrow-left"></i>
        <i onClick={history.goForward} style={{ float: "right", fontSize: "30px" }} className="fas fa-arrow-right"></i>
        <Container className = "PostContainer">
        <form onSubmit={this.handleSubmit}>
          <label>UserName : </label>
          <select onChange={this.FetchID}  className="username">
            <option>Select UserName</option>
            {this.state.username.map((name) => {
              return (
                <option value={name.id}>{name.name}</option>
              )
            })}
          </select><br />

          <label> UserID : </label>
          <input
            type="number"
            name="userId"
            className="userid"
            value={this.state.userId}
            onChange={this.handleChange}
          /><br />
          <label> Title : </label>
          <input
            type="text"
            name="title"
            className="title"
            value={this.state.title}
            onChange={this.handleChange}
          /><br />
          <label> Body : </label>
          <input
            type="text"
            name="body"
            className="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <input type="Submit" />
        </form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <Button size="sm" onClick={() => this.selectPost(post)}>
                      Edit
                    </Button><br />
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => this.deletePost(post.id)}
                    >
                      Delete
                    </Button>
                    <Link to={`/getuser/${post.userId}`}><Button type="button" variant="secondary" size="sm">Getuser</Button></Link>
                    <Link to={`/getcomments/${post.userId}`}><Button type="button" size="sm">GetComments</Button></Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        </Container>
      </>
    );
  }
}

export default PostComponent;


