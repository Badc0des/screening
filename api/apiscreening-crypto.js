// api/screening-crypto.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const api_url = 'https://indodax.com/api/summaries';
    const response = await fetch(api_url);
    const data = await response.json();

    const formattedData = data.map(crypto => ({
      symbol: crypto.symbol,
      last: crypto.last,
      high: crypto.high,
      low: crypto.low,
    }));

    res.status(200).json(formattedData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data from Indodax API.' });
  }
};
