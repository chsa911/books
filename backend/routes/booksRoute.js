import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for Save a new Book comx
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.eindat ||
      !request.body.entdat ||
      !request.body.verdat ||
      !request.body.enddat ||
      !request.body.autor ||
      !request.body.keyw||
      !request.body.kwp||
      !request.body.verl||
      !request.body.seit||
      !request.body.lesevs||
      !request.body.genre||
      !request.body.gengen||
      !request.body.kont||
      !request.body.land||
      !request.body.them||
      !request.body.them0||
      !request.body.them1||
      !request.body.hauper||
      !request.body.hauper0||
      !request.body.zeit||
      !request.body.amalin||
      !request.body.pos||
      !request.body.mark||
      !request.body.markrang||
      !request.body.topw||
      !request.body.belber||
      !request.body.gesw||
      !request.body.zust
          ) {
      return response.status(400).send({
        message: 'Send all required fields: eingabedatum, autor, keyword, keywordposition, verlag, seiten',
      });
    }
    const newBook = {
           eindat: request.body.eindat,
           entdat: request.body.entdat ,
           verdat: request.body.verdat ,
           enddat: request.body.enddat ,
           autor: request.body.autor ,
           keyw: request.body.keyw,
           kwp: request.body.kwp,
           verl: request.body.verl,
           seit: request.body.seit,
           lesevs: request.body.lesevs,
           genre: request.body.genre,
           gengen: request.body.gengen,
           kont: request.body.kont,
           land: request.body.land,
           them: request.body.them,
           them0: request.body.them0,
           them1: request.body.them1,
           hauper: request.body.hauper,
           hauper0: request.body.hauper0,
           zeit: request.body.zeit,
           amalin: request.body.amalin,
           pos: request.body.pos,
           mark: request.body.mark,
           mark: request.body.markrang,
           topw: request.body.topw,
           belber: request.body.belber,
           gesw: request.body.gesw,
           zust: request.body.zust,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get('/', async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.eindat ||
      !request.body.autor ||
      !request.body.keyw
    ) {
      return response.status(400).send({
        message: 'Send all required fields: eingabedatum, autor, keyword, keywordposition, verlag, seiten',
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
