/*
	Archivo para definir las rutas de acceso a las peticiones del servidor relacionadas
	con las paginas/funciones de los empleado

	Es decir que es lo que va a ocurrir cuando se ingrese una direccion en el navegador
	por ejemplo http://api/employees/seeAllEmployees
*/
// utilizaremos el module express como un enrutador
const { Router } = require('express');
const router = Router();

const employeesCtrl = require('../controllers/employees.controller');

router.get('/', employeesCtrl.getEmployees);

router.post('/', employeesCtrl.createEmployee);

router.get('/:id', employeesCtrl.getEmployee);

router.put('/:id', employeesCtrl.editEmployee);

router.delete('/:id', employeesCtrl.deleteEmployee);


module.exports = router;
