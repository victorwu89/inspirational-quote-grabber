import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import api from '../api'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const Button = styled.button.attrs({
  className: 'button'
})``

class Links extends Component {
    state = { quote: '', author: ''}
    grabQuote = async () => {
      //submit form to grab an image
      await this.props.grabRandomImage()
      await api.getRandomQuote()
      .then( res => {
        this.setState({
          quote: res.data.data[0]['quote'],
          author: res.data.data[0]['author']
        })
      })
      .catch()
    }

    componentDidMount = async () => {

    }

    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Inspirational Quote Grabber
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link onClick={this.grabQuote} to="/quote/list">
                              <Button>Grab a Quote!</Button>
                            </Link>
                        </Item>
                        <Item>
                          <p>{this.state.quote}</p>
                        </Item>
                        <Item>
                          <p>{`-${this.state.author}`}</p>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
