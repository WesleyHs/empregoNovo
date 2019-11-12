const inicioController = require('../models/indexModels.js');

module.exports = {
  
    indexControllers

}  


function indexControllers(req, res) {
  res.render('inicio/index.ejs', {
    title: 'Empregos',
    rota: req.originalUrl

  });      
}

