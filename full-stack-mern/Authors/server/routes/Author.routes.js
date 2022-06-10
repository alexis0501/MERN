const AuthorController = require('../controllers/Author.controllers');

module.exports = app => {
    app.get('/api/author', AuthorController.findAllUAuthors); 
    app.get('/api/author/:id', AuthorController.findOneSingleAuthors);
    app.put('/api/author/:id', AuthorController.updateExistingAuthors);
    app.post('/api/author', AuthorController.createNewAuthors);
    app.delete('/api/author/:id', AuthorController.deleteAnExistingAuthors);
}
