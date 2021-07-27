import React, { Component } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
class Getuser extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
        }
    }

    handleShow = async (props) => {
        const history = this.props;
        const id = history.match.params.userId;
        try {
            var { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            this.setState({ user: data });
            console.log(this.state.user);
            console.log(this.state.user.address.street);
        }

        catch (err) {
            console.log(err);
        }
    }

    componentDidMount = () => {
        this.handleShow();
    }
    render() {
        const { history } = this.props;

        return (
            <>
                <i onClick={history.goBack} style={{ fontSize: "30px" }} class="fas fa-arrow-left"></i>
                <Container>
                    <Table  className="getusertable">
                    <h1>User Details</h1>
                        <tbody>
                            <tr><strong>Name : </strong>{this.state.user.name}</tr>
                            <tr><strong>Email : </strong>{this.state.user.email}</tr>
                            <tr><strong>Address : </strong>{this.state.user.address?.street}</tr>
                            <tr><strong>City : </strong>{this.state.user.address?.city}</tr>
                            <tr><strong>Phone : </strong>{this.state.user.phone}</tr>
                            <tr><strong>Website : </strong>{this.state.user.website}</tr>
                        </tbody>
                    </Table>
                    </Container>
            </>
        )
    }
}


export default Getuser;

