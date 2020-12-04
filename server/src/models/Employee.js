// Definimos el modelo con el cual se guardaran los objetos de tipo empleado en nuestra db

const { Schema, model } = require('mongoose');

const employeeSchema = new Schema ({
	name: {type: String, required: true},
	position: {type: String, required: true},
	office: {type: String, required: true},
	salary: {type: Number, required: true}
},{
	timestamps: true,
	versionKey: false // para que no agregue campo --v
})

module.exports = model('Employee', employeeSchema);