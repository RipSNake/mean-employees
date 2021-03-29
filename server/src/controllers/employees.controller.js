const employeesCtrl = {};

const Employee = require('../models/Employee');
// async: para indicar que es un pedido asincrono
employeesCtrl.getEmployees = async (req, res) => {
	// console.log('get all employees');
	const employees = await Employee.find();
	// console.log(employees);
	res.json(employees);
};

employeesCtrl.createEmployee = async (req, res) => {
	const newEmployee = new Employee(req.body);
	console.log(newEmployee); // Muestra el objeto Empleado que creamos
	await newEmployee.save(); // Guardamos el dato en la db -- al ser ".save()" un método asincrono utilizamos async en "(req, res) =>" y await antes de "newEmployee.save()"
	res.json({status: 'Employee created'});
};

employeesCtrl.getEmployee = async (req, res) => {
	// Muestra los datos que ingresamos en el formulario
	console.log(req.params);
	// Dos posibilidades para buscar un elemento
	// Employee.findOne({_id: req.params.id});
	const employee = await Employee.findById(req.params.id);
	res.send(employee);
};

employeesCtrl.editEmployee = async (req, res) => {
	// console.log('edit employee');
	await Employee.findByIdAndUpdate(req.params.id, req.body);
	res.json({status: 'Employee Updated'});
};

employeesCtrl.deleteEmployee = async (req, res) => {
	// console.log('delete one employee');
	await Employee.findByIdAndDelete(req.params.id);
	res.json({status: 'Employee Deleted'});
};

module.exports = employeesCtrl;