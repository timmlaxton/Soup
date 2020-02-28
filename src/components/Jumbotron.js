import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import soupImage from '../assests/title.png'

const Styles = styled.div``;

const Jumbotron= () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
            <h1>Welcome</h1>
            <p>Learn youtube</p>
            </Container>
        </Jumbo>
    </Styles>

)

export default Jumbotron; 
