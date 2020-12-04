const employeesCtrl = {};

const Employee = require('../models/Employee');
// async: para indicar que es un pedido asincrono
employeesCtrl.getEmployees = async (req, res) => {
	console.log('get all employees');
	const employees = await Employee.find();
	// console.log(employees);
	res.json(employees);
};

employeesCtrl.createEmployee = async (req, res) => {
	// console.log('create employees');
	// console.log(req.body);
	const newEmployee = new Employee(req.body);
	console.log(newEmployee);
	await newEmployee.save(); // Guardamos el dato en la db -- al ser ".save()" un método asincrono utilizamos async en "(req, res) =>" y await antes de "newEmployee.save()"
	res.send('Employee created');
};

employeesCtrl.getEmployee = async (req, res) => {
	// console.log('get one employee');
	console.log(req.params);
	// Dos posibilidades para buscar un elemento
	Employee.findOne({_id: req.params.id});
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
	// res.send('delete employee');
	res.json({status: 'Employee Deleted'});
};

module.exports = employeesCtrl;