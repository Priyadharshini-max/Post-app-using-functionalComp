import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import welcome from "./Image/welcome2.png";
import { Link } from "react-router-dom";
import "./index.css";

class HomeComponent extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Container>
        <i onClick={history.goForward} style={{float: "right" ,fontSize:"30px" }} class="fas fa-arrow-right"></i>
          <table>
            <tbody>
              <tr>
                <td>
                  <img src={welcome} alt="quotes" height={600} width={500}></img>
                </td>
                <td className="Col2">
                  <h1>OPTION</h1>
                  <ul>  
                  <li><Link to="/" style={{textDecoration:"none",paddingLeft : "10px",fontSize : "30px"}}>Home</Link><br /></li>
                  <li> <Link to="/about" style={{textDecoration:"none",paddingLeft : "10px",fontSize : "30px"}}>About</Link><br /></li>
                  <li><Link to="/post" style={{textDecoration:"none",paddingLeft : "10px",fontSize : "30px"}}>Post</Link><br /></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </>
    )
  }
}


export default HomeComponent;