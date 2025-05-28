// api/users.js
import connectToDatabase from '../lib/mongodb';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    const users = await User.find({});
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).end();
  }
}
