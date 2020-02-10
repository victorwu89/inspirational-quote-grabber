import React, { Component } from 'react'
import styled from 'styled-components'

import Links from './Links'

const Container = styled.div.attrs({
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

class NavBar extends Component {

    render() {
        return (
            <Container>
                <Nav>
                    <Links grabRandomImage={this.props.grabRandomImage} />{<br />}
                </Nav>
            </Container>
        )
    }
}

export default NavBar
