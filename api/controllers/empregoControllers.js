const empregoController = require('../models/indexModels.js');

module.exports = {
  
    empregoCadastro

}  


function empregoCadastro(req, res) {
  res.render('emprego/frm_empregoCadastro.ejs', {
    title: 'Empregos',
    rota: req.originalUrl

  });      
}
