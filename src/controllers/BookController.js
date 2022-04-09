const BookAction = require("../actions/BookAction");

class BookController {
  // [GET] /books
  async findAll(req, res) {
    const bookAction = new BookAction();
    const code = res.statusCode;
    return res.send(await bookAction.findAll(code));
  }
  // [GET] /books/:bookId
  async findOne(req, res) {
    const bookAction = new BookAction();
    const bookId = req.params.bookId;
    const code = res.statusCode;
    return res.send(await bookAction.findOne(bookId, code));
  }
  // [POST] /books
  async create(req, res) {
    const bookAction = new BookAction();
    return res.send(await bookAction.create(req, res));
  }
  // [PUT] /books/:bookId
  async update(req, res) {
    const bookAction = new BookAction();
    return res.send(await bookAction.update(req, res));
  }
  // [DELETE] /books/:bookId
  async delete(req, res) {
    const bookAction = new BookAction();
    const bookId = req.params.bookId;
    const code = res.statusCode;
    return res.send(await bookAction.delete(bookId, code));
  }
}
module.exports = new BookController();
