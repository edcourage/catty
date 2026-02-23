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
    console.error('Cat API error, using mock data:', err.message)
    // Return mock cat data when API is unavailable
    const mockCats = [
      {
        url: "https://placekitten.com/400/300",
        breeds: [{name: "Tabby", description: "A classic and friendly cat breed."}]
      },
      {
        url: "https://placekitten.com/401/301",
        breeds: []
      },
      {
        url: "https://placekitten.com/402/302",
        breeds: [{name: "Siamese", description: "An elegant and vocal cat breed."}]
      },
      {
        url: "https://placekitten.com/403/303",
        breeds: [{name: "Persian", description: "A long-haired, gentle cat breed."}]
      },
      {
        url: "https://placekitten.com/404/304",
        breeds: []
      },
      {
        url: "https://placekitten.com/405/305",
        breeds: [{name: "Maine Coon", description: "A large and friendly cat breed."}]
      }
    ];
    const mockCat = mockCats[Math.floor(Math.random() * mockCats.length)];
    res.status(200).json({
      cat: [mockCat]
    });
  })
  //
  //
  // })





};
