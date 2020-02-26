import React from 'react'
import fetch from 'isomorphic-unfetch';

class RandomCat extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    fetch(`/api/cats`)
    .then(response => response.json())
    .then(result => {
      this.setState({cat:result.cat})
    });
  }


  render() {

    return this.state.cat ? (
      <div>

      <h4>Your Random Cat! {this.state.cat.url} </h4>

      <img src={`${this.state.cat[0].url}`} alt="cat"></img>


      </div>

    ) : (
      <div>
      loading...
      </div>
    )
  }
}

export default RandomCat;
