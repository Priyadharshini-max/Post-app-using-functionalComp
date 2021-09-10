import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { useHistory, useParams } from "react-router";

export default function Getuser() {
    const [state, setState] = useState({
        user: []
    });

    const params = useParams();
    const history = useHistory();

    // Get Id and fetch user data from API
    const handleShow = async () => {
        const id = params.userId;
        try {
            var { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setState({ ...state, user: data });
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleShow();
    }, []);

    return (

        <>
            <i onClick={history.goBack} style={{ fontSize: "30px" }} className="fas fa-arrow-left"></i>
            <Container>
                <Table className="getusertable">
                    <h1>User Details</h1>
                    <tbody>
                        <tr><strong>Name : </strong>{state.user.name}</tr>
                        <tr><strong>Email : </strong>{state.user.email}</tr>
                        <tr><strong>Address : </strong>{state.user.address?.street}</tr>
                        <tr><strong>City : </strong>{state.user.address?.city}</tr>
                        <tr><strong>Phone : </strong>{state.user.phone}</tr>
                        <tr><strong>Website : </strong>{state.user.website}</tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}