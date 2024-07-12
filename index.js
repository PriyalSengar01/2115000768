const express = require('express');
const search = require('./first/search');
const calavg = require('./second/avg');

const app = express();
const PORT = 9876;
const WINDOW_SIZE = 10;
let catchnum = [];

app.get('/numbers/:type', async (req, res) => {
  const { type } = req.params;
  const right = ['p', 'f', 'e', 'l'];

  if (!right.includes(type)) {
    return res.status(400).json({ error: 'Invalid type' });
  }

  const no = await search(type);

  // Ensure stored numbers are unique
  catchnum = [...new Set([...catchnum, ...no])];

  // Limit stored numbers to the window size
  if (catchnum.length > WINDOW_SIZE) {
    catchnum = catchnum.slice(-WINDOW_SIZE);
  }

  const half = calavg(catchnum);

  res.json({
    windowPrevState: catchnum.slice(0, -no.length),
    windowCurrState: catchnum,
    no,
    half,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
