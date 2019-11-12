const empresaController = require('../models/indexModels.js');

module.exports = {
  
    empresaCadastro

}  


function empresaCadastro(req, res) {
  res.render('empresa/frm_empresaCadastro.ejs', {
    title: 'Empresas',
    rota: req.originalUrl

  });      
}
