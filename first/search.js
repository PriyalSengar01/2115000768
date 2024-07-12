const axios = require('axios');

const urls = {
  p: 'http://20.244.56.144/test/primes',
  f: 'http://20.244.56.144/test/fibo',
  e: 'http://20.244.56.144/test/even',
  l: 'http://20.244.56.144/test/rand',
};

const search = async (type) => {
  try {
    const result = await axios.get(urls[type], { timeout: 500 });
    return result.data.numbers;
  } catch (error) {
    console.error('Error fetching numbers:', error.message);
    return [];
  }
};

module.exports = search;
