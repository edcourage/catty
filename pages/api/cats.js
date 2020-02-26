import fetch from 'isomorphic-unfetch';

export default (req, res) => {

  fetch('https://api.thecatapi.com/v1/images/search', {
    method: 'GET', // or 'PUT'
    headers: {
      'x-api-key': 'c18871a9-ef0d-4aa3-9f81-758928c0ce67'
    }})
    .then((response) => {
      return response.json();
    }).then((cat) => {
    res.status(200).json({
      cat
    });
  })
  //
  //
  // })





};
