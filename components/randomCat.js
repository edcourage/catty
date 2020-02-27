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
    })
    .catch(err => {
      console.error(err)
    });
  }


  render() {

    return this.state.cat ? this.state.cat[0].breeds[0] ? (
      <div>
      <h4 id="randomCatTitle">Your Random Cat is {this.state.cat[0].breeds[0].name}!</h4>
      <img src={`${this.state.cat[0].url}`} alt="cat"></img>
      <p id="description">{this.state.cat[0].breeds[0].description}</p>
      </div>

    ) : (  <div>
      <h4 id="randomCatTitle">Your Random Cat!</h4>
      <img src={`${this.state.cat[0].url}`} alt="cat"></img>
  
      </div>) : (
      <div>
      <h4>Loading...</h4>
      </div>
    )
  }
}

export default RandomCat;
