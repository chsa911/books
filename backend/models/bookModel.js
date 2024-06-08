import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    eindat: {
      type: Date,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    keyword: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);
