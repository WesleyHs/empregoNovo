var controllerEmprego = require('../controllers/empregoControllers.js');


app.get('/emprego/cadastroEmprego', controllerEmprego.empregoCadastro);
