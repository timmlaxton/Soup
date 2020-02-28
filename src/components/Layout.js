import React from 'react';
import Container from 'react-bootstrap/Container';

const layout = (props) => {
    return (
<Container>
    {props.children}
</Container>
    )
}

export default layout;