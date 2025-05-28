// api/index.js
const mongoose = require('mongoose');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).send('Hello World from Vercel API!');
  } else {
    res.status(405).send({ message: 'Only GET requests allowed' });
  }
}
