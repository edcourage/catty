import fetch from 'isomorphic-unfetch';

export default (req, res) => {

  fetch(`https://api.thecatapi.com/v1/images/search`, {
    method: 'GET', // or 'PUT'
    headers: {
      'x-api-key': process.env.CAT_API_KEY
    }})
    .then((response) => {
      return response.json();
    })
    .then((cat) => {
    res.status(200).json({
      cat
    });
  })
  .catch(err => {
    console.error(err)
  })
  //
  //
  // })





};
