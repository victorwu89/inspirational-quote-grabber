import React from 'react'

class ImageCard extends React.Component {

  constructor(){
    super()
    this.state = { spans: 0 }
    this.imageRef = React.createRef()
  }

  componentDidMount() {

  }

  setSpans = () => {
    const  height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)
    this.setState({ spans })
    console.log(this.state.spans)
  }

  render() {
    const { description, urls } = this.props.image
    return(
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    )
  }
}

export default ImageCard
