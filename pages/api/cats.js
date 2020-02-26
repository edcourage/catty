export default (req, res) => {
  res.status(200).json({
    quote: 'If this returns your on for a winner!',
    author: 'Eddy'
  });
};
