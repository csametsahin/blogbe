import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  Id: {
    type: Number,
    required: true,
    unique: true,
    primaryKey: true,
    },
    UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
    },
  title: {
    type: String,
 
  },
  content: {
    type: String,
 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
