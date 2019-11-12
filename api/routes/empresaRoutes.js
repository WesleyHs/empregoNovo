var controllerEmpresa = require('../controllers/empresaControllers.js');


app.get('/empresa/cadastroEmpresa', controllerEmpresa.empresaCadastro);
