import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react'

import Unsplash from '../api/unsplash'
import ImageList from '../components/ImageList'
import { NavBar }  from '../components'
import  { getRandomInt } from '../helpers'

const SEARCH_QUERY = ['inspiration','mountains','waves','hawaii','grand canyon']
const MAX_PAGES = 30

const Wrapper = styled.div``

class GrabQuote extends Component {
  state = {
    images: []
  }

  grabRandomImage = async(term) => {
    const response = await Unsplash.get('/search/photos', {
      params: {
        query: SEARCH_QUERY[getRandomInt(SEARCH_QUERY.length-1)],
        page: getRandomInt(50), //keep page range small ( 1- 100)
        per_page: MAX_PAGES //MAX
      }
    })
    this.setState({ images: response.data.results})
  }

render() {
    return (
      <Wrapper className="quote-wrapper">
          <div className="quote-container">
            <NavBar grabRandomImage={this.grabRandomImage} />
            <ImageList images={this.state.images}/>
          </div>
      </Wrapper>
    )
  }
}

export default GrabQuote
