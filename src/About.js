import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import girl from './Image/girl.jpg';
import "./About.css"

export default function About() {
    const history = useHistory();
    return (
        <>
            <i onClick={history.goBack} style={{ fontSize: "30px" }} class="fas fa-arrow-left"></i>
            <Container className="aboutContainer">
                <table>
                    <tbody>
                        <tr>
                            <td className="colText">
                                <h3>PRIYA DHARSHINI . R</h3>
                                I have completed a Bachelor of Technology (B.E)
                                in the stream of Electronics and communication engineering (ECE) in Narasu's Sarathy Institute of Technology.
                            </td>
                            <td>
                                <img src={girl} alt="girl" height="490" width="350"></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </>
    )
}